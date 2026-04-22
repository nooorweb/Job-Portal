"use client";

import { useTheme } from "@/lib/theme-context";
import { 
  Briefcase, BookOpen, ClipboardCheck, Moon, Sun, Search, Bell, 
  Calendar, Download, CheckCircle2, XCircle, HelpCircle, ChevronRight,
  Star, Timer, Info, Trophy, Filter, Trash2, Printer, MapPin, Shield
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { JOBS, STUDY_MATERIALS, type Job, type StudyMaterial } from "@/constants/data";

// --- HOOKS ---

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) setStoredValue(JSON.parse(item));
    } catch (error) {
      console.error(error);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

// --- COMPONENTS ---

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-brand-primary text-white shadow-lg no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div className="hidden sm:block">
              <span className="block font-bold text-lg tracking-tight leading-none uppercase">Portal.gov</span>
              <span className="text-[10px] opacity-70 uppercase tracking-widest font-medium">Recruitment & Study Board</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-primary" />
            </button>
            <button onClick={() => window.print()} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Printer className="w-5 h-5" />
            </button>
            <button onClick={toggleTheme} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const JobCard = ({ job, isBookmarked, onToggleBookmark }: { job: Job, isBookmarked: boolean, onToggleBookmark: (id: string) => void }) => (
  <div className="portal-card p-6 flex flex-col justify-between h-full group">
    <div>
      <div className="flex justify-between items-start mb-4">
        <span className={cn(
          "text-[9px] font-bold uppercase py-1 px-2 rounded tracking-wider",
          job.status === 'new' ? "bg-green-100 text-green-700" : 
          job.status === 'expiring' ? "bg-red-100 text-red-700" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
        )}>
          {job.status === 'new' ? "New Added" : job.status === 'expiring' ? "Expiring Soon" : "Active"}
        </span>
        <button 
          onClick={() => onToggleBookmark(job.id)}
          className={cn(
            "p-2 rounded-full transition-colors",
            isBookmarked ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20" : "text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          )}
        >
          <Star className={cn("w-4 h-4", isBookmarked && "fill-current")} />
        </button>
      </div>
      <h3 className="text-lg font-bold mb-1 leading-tight group-hover:text-brand-primary transition-colors cursor-pointer">{job.title}</h3>
      <p className="text-[12px] font-medium text-text-secondary mb-4 flex items-center gap-1.5 opacity-80">
        <MapPin className="w-3.5 h-3.5" />
        {job.department}
      </p>
    </div>
    
    <div className="space-y-4">
      <div className="flex justify-between items-center text-[11px] font-bold text-text-secondary border-t border-border-subtle pt-4">
        <span className="opacity-60">{job.category}</span>
        <span className="flex items-center gap-1 text-red-500"><Calendar className="w-3 h-3" /> {job.deadline}</span>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 portal-btn-primary !py-2 !text-[11px] uppercase tracking-wider">Apply</button>
        <button className="p-2 border border-border-subtle rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
          <Download className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </div>
);

const AdvanceQuiz = () => {
  const [quizHistory, setQuizHistory] = useLocalStorage<any[]>('portal-quiz-history', []);
  const [step, setStep] = useState<'intro' | 'active' | 'results'>('intro');
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentScore, setCurrentScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  
  // Timer Logic
  useEffect(() => {
    let timer: any;
    if (step === 'active' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && step === 'active') {
      setStep('results');
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const startQuiz = () => {
    setStep('active');
    setTimeLeft(60);
    setAnswers([]);
    setCurrentScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    const penalty = 0.25;
    const gain = 1;
    const scoreDelta = isCorrect ? gain : -penalty;
    setCurrentScore(prev => Math.max(0, prev + scoreDelta));
    setAnswers(prev => [...prev, isCorrect]);

    if (answers.length + 1 >= 5) {
      setStep('results');
      setQuizHistory([...quizHistory, { date: new Date().toLocaleDateString(), score: currentScore + scoreDelta }]);
    }
  };

  return (
    <div className="portal-card overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div key="intro" className="p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Timer className="w-12 h-12 text-brand-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Daily Mock Exam</h3>
            <p className="text-sm text-text-secondary mb-8">
              5 Questions • 60 Seconds <br />
              <span className="text-red-500 font-bold">Negative marking applies: -0.25 per wrong answer</span>
            </p>
            <button onClick={startQuiz} className="portal-btn-primary w-full">Start Challenge</button>
            
            {quizHistory.length > 0 && (
              <div className="mt-8 text-left border-t border-border-subtle pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-4">Attempt History</h4>
                <div className="space-y-2">
                  {quizHistory.slice(-3).map((h, i) => (
                    <div key={i} className="flex justify-between text-sm py-1 border-b border-border-subtle last:border-0 opacity-80">
                      <span>{h.date}</span>
                      <span className="font-bold text-brand-primary">{h.score.toFixed(2)} pts</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {step === 'active' && (
          <motion.div key="active" className="p-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="bg-brand-primary text-white p-4 flex justify-between items-center">
              <span className="text-sm font-bold">Question {answers.length + 1} / 5</span>
              <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full font-mono text-sm", timeLeft < 10 ? "bg-red-500 animate-pulse" : "bg-white/20")}>
                <Timer className="w-4 h-4" />
                {timeLeft}s
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold mb-8">Which is the largest organ in the human body?</h4>
              <div className="grid grid-cols-1 gap-3">
                {["Heart", "Liver", "Skin", "Lungs"].map((opt, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleAnswer(opt === "Skin")}
                    className="portal-card p-4 text-left hover:bg-brand-primary hover:text-white transition-all font-medium text-sm group"
                  >
                    <span className="inline-block w-6 h-6 border border-current rounded-full text-center text-[10px] mr-3 font-bold group-hover:border-white">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 'results' && (
          <motion.div key="results" className="p-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-1">Session Complete</h3>
            <p className="text-text-secondary mb-6 italic">Performance Report Generated</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">Final Score</p>
                <p className="text-2xl font-bold text-brand-primary">{currentScore.toFixed(2)}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                <p className="text-[10px] uppercase font-bold text-text-secondary mb-1">Accuracy</p>
                <p className="text-2xl font-bold">{( (answers.filter(a => a).length / 5) * 100).toFixed(0)}%</p>
              </div>
            </div>

            <div className="space-y-4">
              <button onClick={startQuiz} className="portal-btn-primary w-full">Try Again</button>
              <button onClick={() => setStep('intro')} className="portal-btn-secondary w-full">Exit to Dashboard</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('portal-bookmarks', []);
  const [checklist, setChecklist] = useLocalStorage<string[]>('portal-checklist', []);
  
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleChecklist = (id: string) => {
    setChecklist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) || 
                          job.department.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "All" || job.category === filter;
      return matchSearch && matchFilter;
    });
  }, [search, filter]);

  const categories = ["All", "Police", "Education", "Administrative", "Finance"];

  return (
    <div className="min-h-screen bg-slate-50/30 dark:bg-slate-900/20">
      <Navbar />

      <header className="bg-white dark:bg-slate-900 border-b border-border-subtle py-12 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <Info className="w-3 h-3" />
              Official Portal Guidelines Updated Feb 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Recruitment Authority <br />
              <span className="text-brand-primary italic">Exam & Study Portal</span>
            </h1>
            <p className="text-text-secondary leading-relaxed mb-8 text-lg">
              Authorized center for job notifications, syllabus downloads, and real-time preparation. 
              Secure your future with certified government resources.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-text-secondary" />
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search job title or department..." 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-border-subtle rounded-xl text-sm focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>
              <button 
                onClick={() => setFilter("All")}
                className="portal-btn-primary shadow-lg shadow-brand-primary/20"
              >
                Clear Search
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Left Sidebar: Navigation & Filters */}
        <aside className="lg:col-span-1 space-y-8 no-print">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-6 flex items-center gap-2">
              <Filter className="w-3 h-3" /> Filter by Category
            </h4>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex justify-between items-center",
                    filter === cat 
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20 translate-x-1" 
                      : "text-text-secondary hover:bg-white dark:hover:bg-slate-800"
                  )}
                >
                  {cat}
                  {filter === cat && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </div>

          <div className="portal-card p-6 border-t-4 border-brand-primary">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 text-yellow-500 fill-current" /> Saved Jobs
            </h4>
            <div className="space-y-3">
              {bookmarks.length === 0 ? (
                <p className="text-[11px] text-text-secondary italic">No jobs bookmarked yet.</p>
              ) : (
                bookmarks.map(id => {
                  const job = JOBS.find(j => j.id === id);
                  return job && (
                    <div key={id} className="flex justify-between items-center text-xs border-b border-border-subtle pb-2 last:border-0 last:pb-0">
                      <span className="font-medium truncate mr-2">{job.title}</span>
                      <button onClick={() => toggleBookmark(id)} className="text-red-500 hover:scale-110 transition-transform">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </aside>

        {/* Main Content: Jobs & Material */}
        <div className="lg:col-span-3 space-y-16">
          
          <section>
            <div className="flex justify-between items-end mb-8 no-print">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <ClipboardCheck className="w-6 h-6 text-brand-primary" />
                  Latest Notifications
                </h2>
                <p className="text-xs text-text-secondary">Showing {filteredJobs.length} active recruitments</p>
              </div>
              <div className="text-[10px] font-bold text-text-secondary uppercase tracking-widest hidden sm:block">
                Region: North Central
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  isBookmarked={bookmarks.includes(job.id)}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
              {filteredJobs.length === 0 && (
                <div className="col-span-full py-12 text-center portal-card">
                   <Info className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                   <h3 className="font-bold text-xl">No Notifications Found</h3>
                   <p className="text-text-secondary">Try clearing your filters or search query.</p>
                </div>
              )}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="space-y-8">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-brand-primary" />
                Preparation Tracker
              </h2>
              <div className="space-y-4">
                {STUDY_MATERIALS.map(mat => (
                  <div key={mat.id} className="portal-card p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-lg">{mat.title}</h3>
                        <p className="text-xs text-brand-primary font-bold uppercase tracking-widest">{mat.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-bold text-text-secondary mb-1">Topics</p>
                        <p className="text-xl font-bold">{mat.topicCount}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                       {mat.topics.map(topic => (
                         <div 
                          key={topic} 
                          onClick={() => toggleChecklist(`${mat.id}-${topic}`)}
                          className={cn(
                            "flex items-center justify-between p-3 rounded-lg text-sm cursor-pointer transition-colors no-print",
                            checklist.includes(`${mat.id}-${topic}`) 
                              ? "bg-green-100/50 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                              : "bg-slate-50 dark:bg-slate-800 hover:bg-slate-100"
                          )}
                        >
                           <span className={cn(checklist.includes(`${mat.id}-${topic}`) && "line-through opacity-50")}>
                             {topic}
                           </span>
                           <div className={cn(
                             "w-5 h-5 rounded border flex items-center justify-center transition-all",
                             checklist.includes(`${mat.id}-${topic}`) ? "bg-green-500 border-green-500 text-white" : "border-slate-300"
                           )}>
                             {checklist.includes(`${mat.id}-${topic}`) && <CheckCircle2 className="w-3.5 h-3.5" />}
                           </div>
                         </div>
                       ))}
                    </div>
                    <button className="w-full mt-6 py-2.5 border-2 border-slate-100 dark:border-slate-800 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 no-print">
                      <Download className="w-4 h-4" /> Download Syllabus PDF
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8 no-print">
               <h2 className="text-2xl font-bold flex items-center gap-3">
                <ClipboardCheck className="w-6 h-6 text-brand-primary" />
                Live Mock Test
              </h2>
              <AdvanceQuiz />
              
              <div className="portal-card p-8 bg-brand-primary text-white relative overflow-hidden">
                <Shield className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10" />
                <h3 className="text-2xl font-bold mb-2">Need Guidance?</h3>
                <p className="text-sm opacity-80 mb-8 leading-relaxed">
                  Join our official telegram channel for daily current affairs and instant notification alerts.
                </p>
                <button className="px-8 py-3 bg-white text-brand-primary rounded-lg font-bold uppercase text-xs tracking-widest shadow-xl">
                  Join Telegram
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer className="bg-white dark:bg-slate-900 border-t border-border-subtle py-12 mt-20 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">
            © 2026 National Recruitment Portal Board. Managed by Tech-Education Cell.
          </p>
          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-text-secondary">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">GDPR</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Helpdesk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
