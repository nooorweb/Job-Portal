"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Award, Clock, CheckCircle2, XCircle, ArrowRight, RotateCcw, ExternalLink } from "lucide-react";
import type { Job, Question } from "@/constants";
import { useLocalStorage } from "@/lib/storage";

type Phase = "intro" | "quiz" | "result";
type Stored = { score: number; total: number; correct: number; perSubject: Record<string, { correct: number; total: number }>; takenAt: number; answers: Record<string, number> };
const DURATION = 30 * 60;

export default function QuizTab({ job, onApply }: { job: Job; onApply: () => void }) {
  const [results, setResults] = useLocalStorage<Record<string, Stored>>("pk-quiz", {});
  const previous = results[job.slug];
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState(0);
  const [seconds, setSeconds] = useState(DURATION);
  const submittedRef = useRef(false);

  useEffect(() => {
    if (phase !== "quiz") return;
    const id = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) { clearInterval(id); submit(); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const start = () => {
    setAnswers({});
    setCurrent(0);
    setSeconds(DURATION);
    submittedRef.current = false;
    setPhase("quiz");
  };

  const submit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    let correct = 0;
    const perSubject: Record<string, { correct: number; total: number }> = {};
    job.quiz.forEach((q) => {
      perSubject[q.subject] ??= { correct: 0, total: 0 };
      perSubject[q.subject].total += 1;
      if (answers[q.id] === q.correct) { correct += 1; perSubject[q.subject].correct += 1; }
    });
    const total = job.quiz.length;
    const score = Math.round((correct / total) * 100);
    const stored: Stored = { score, total, correct, perSubject, takenAt: Date.now(), answers };
    setResults({ ...results, [job.slug]: stored });
    setPhase("result");
  };

  if (phase === "intro") return <Intro job={job} previous={previous} onStart={start} />;
  if (phase === "result") return <Result job={job} stored={results[job.slug] ?? previous!} onRetake={start} onApply={onApply} />;

  const q = job.quiz[current];
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const lowTime = seconds <= 120;

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-6">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="pk-pill pk-pill-blue">{q.subject}</span>
            <span className="text-sm text-[var(--color-text-muted)]">Question {current + 1} of {job.quiz.length}</span>
          </div>
          <span className={`inline-flex items-center gap-2 font-mono font-semibold px-3 py-1.5 rounded-lg ${lowTime ? "bg-red-50 text-[var(--color-status-closed)] animate-pulse" : "bg-[var(--color-bg-section)] text-[var(--color-text-heading)]"}`}>
            <Clock className="w-4 h-4" /> {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
        </div>
        <div className="h-1.5 bg-[var(--color-bg-section)] rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-[var(--color-accent-primary)] transition-all" style={{ width: `${((current + 1) / job.quiz.length) * 100}%` }} />
        </div>

        <div className="pk-card p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-text-heading)] mb-5">
            Q{current + 1}. {q.question}
          </h3>
          <div className="space-y-2.5">
            {q.options.map((opt, i) => {
              const selected = answers[q.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => setAnswers({ ...answers, [q.id]: i })}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition flex items-center gap-3 ${
                    selected
                      ? "border-[var(--color-accent-primary)] bg-[var(--color-accent-light)]"
                      : "border-[var(--color-border-light)] hover:border-[var(--color-border-medium)] bg-white"
                  }`}
                >
                  <span className={`grid place-items-center w-7 h-7 rounded-full text-xs font-semibold shrink-0 ${selected ? "bg-[var(--color-accent-primary)] text-white" : "bg-[var(--color-bg-section)] text-[var(--color-text-muted)]"}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm md:text-base text-[var(--color-text-heading)]">{opt}</span>
                  {selected && <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-primary)] ml-auto" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}
            className="pk-btn pk-btn-ghost"
          >
            ← Previous
          </button>
          {current < job.quiz.length - 1 ? (
            <button onClick={() => setCurrent((c) => c + 1)} className="pk-btn pk-btn-green">
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={submit} className="pk-btn pk-btn-primary">
              Submit Quiz <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-44 pk-card p-4">
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-3">Question Palette</h4>
          <div className="grid grid-cols-5 gap-2">
            {job.quiz.map((qq, i) => {
              const answered = answers[qq.id] !== undefined;
              const active = i === current;
              return (
                <button
                  key={qq.id}
                  onClick={() => setCurrent(i)}
                  className={`aspect-square rounded-md text-xs font-semibold border transition ${
                    active ? "ring-2 ring-[var(--color-accent-primary)] ring-offset-1 border-transparent bg-[var(--color-accent-primary)] text-white" :
                    answered ? "bg-[var(--color-accent-light)] text-[var(--color-accent-primary)] border-[rgba(27,107,53,0.2)]" :
                    "bg-white text-[var(--color-text-muted)] border-[var(--color-border-light)]"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-4 space-y-1.5 text-xs text-[var(--color-text-muted)]">
            <p><span className="inline-block w-3 h-3 rounded-sm bg-[var(--color-accent-light)] border border-[rgba(27,107,53,0.2)] mr-1.5 align-middle" /> Answered</p>
            <p><span className="inline-block w-3 h-3 rounded-sm bg-white border border-[var(--color-border-light)] mr-1.5 align-middle" /> Unanswered</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Intro({ job, previous, onStart }: { job: Job; previous?: Stored; onStart: () => void }) {
  return (
    <div className="max-w-3xl mx-auto pk-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-3">
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[var(--color-accent-primary)] text-white">
          <Award className="w-6 h-6" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">Practice Quiz</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)]">{job.postTitle} — Mock Test</h2>
        </div>
      </div>
      <p className="text-[var(--color-text-muted)] mb-6">{job.quiz.length} Questions · 30 Minutes · All Subjects</p>

      <div className="grid sm:grid-cols-3 gap-3 mb-6">
        {[
          { v: job.quiz.length, l: "Questions" },
          { v: 30, l: "Minutes" },
          { v: "+1", l: "Per correct" },
        ].map((s) => (
          <div key={s.l} className="pk-card p-4 text-center">
            <div className="text-2xl font-bold text-[var(--color-text-heading)]">{s.v}</div>
            <div className="text-xs text-[var(--color-text-muted)] mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-bg-section)] rounded-lg p-5 text-sm text-[var(--color-text-body)] space-y-1.5 mb-6">
        <p className="font-semibold text-[var(--color-text-heading)] mb-1">📌 Rules</p>
        <p>• Each correct answer = +1 mark</p>
        <p>• No negative marking</p>
        <p>• You can navigate between questions using Next / Previous</p>
        <p>• Timer auto-submits when it reaches zero</p>
      </div>

      {previous ? (
        <div className="flex flex-wrap items-center gap-3">
          <span className="pk-pill">Last score: <strong className="text-[var(--color-text-heading)] ml-1">{previous.score}%</strong></span>
          <button onClick={onStart} className="pk-btn pk-btn-primary">
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>
        </div>
      ) : (
        <button onClick={onStart} className="pk-btn pk-btn-primary !py-3 !px-6">
          Start Quiz Now <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

function Result({ job, stored, onRetake, onApply }: { job: Job; stored: Stored; onRetake: () => void; onApply: () => void }) {
  const [showReview, setShowReview] = useState(false);
  const pct = stored.score;
  const grade = pct >= 80 ? { t: "Excellent! You're well prepared.", e: "🥇" } :
                 pct >= 60 ? { t: "Good job — keep practicing.", e: "🥈" } :
                 pct >= 40 ? { t: "Keep going — review the syllabus.", e: "🥉" } :
                              { t: "Don't give up — revise and try again.", e: "📚" };

  const circ = 2 * Math.PI * 60;
  const ringRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    if (!ringRef.current) return;
    ringRef.current.style.strokeDashoffset = String(circ);
    requestAnimationFrame(() => {
      if (ringRef.current) {
        ringRef.current.style.transition = "stroke-dashoffset 1.4s ease-out";
        ringRef.current.style.strokeDashoffset = String(circ - (circ * pct) / 100);
      }
    });
  }, [pct, circ]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="pk-card p-8 md:p-10 text-center">
        <div className="inline-grid place-items-center mb-4">
          <svg width="160" height="160" viewBox="0 0 160 160" className="transform -rotate-90">
            <circle cx="80" cy="80" r="60" fill="none" stroke="var(--color-bg-section)" strokeWidth="14" />
            <circle ref={ringRef} cx="80" cy="80" r="60" fill="none" stroke="var(--color-accent-primary)" strokeWidth="14" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ} />
          </svg>
          <div className="absolute text-center">
            <div className="text-3xl font-bold text-[var(--color-text-heading)]">{stored.correct}/{stored.total}</div>
            <div className="text-sm text-[var(--color-accent-primary)] font-semibold">{pct}%</div>
          </div>
        </div>
        <p className="text-xl font-semibold text-[var(--color-text-heading)]">{grade.e} {grade.t}</p>

        <div className="mt-6 max-w-md mx-auto space-y-2.5 text-left">
          {Object.entries(stored.perSubject).map(([sub, v]) => {
            const p = Math.round((v.correct / v.total) * 100);
            return (
              <div key={sub}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[var(--color-text-body)]">{sub}</span>
                  <span className="font-semibold text-[var(--color-text-heading)]">{v.correct}/{v.total} · {p}%</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--color-bg-section)] overflow-hidden">
                  <div className="h-full bg-[var(--color-accent-primary)]" style={{ width: `${p}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button onClick={() => setShowReview((v) => !v)} className="pk-btn pk-btn-ghost">
            {showReview ? "Hide" : "Review"} Answers
          </button>
          <button onClick={onRetake} className="pk-btn pk-btn-outline">
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>
          <button onClick={onApply} className="pk-btn pk-btn-primary">
            Apply for This Job <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showReview && (
        <div className="space-y-3">
          {job.quiz.map((q, i) => {
            const userAns = stored.answers[q.id];
            const correct = userAns === q.correct;
            return (
              <div key={q.id} className="pk-card p-5">
                <div className="flex items-start gap-3">
                  {correct ? <CheckCircle2 className="w-5 h-5 text-[var(--color-status-open)] shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-[var(--color-status-closed)] shrink-0 mt-0.5" />}
                  <div className="flex-1">
                    <p className="font-semibold text-[var(--color-text-heading)]">Q{i + 1}. {q.question}</p>
                    <p className="text-sm mt-2"><span className="text-[var(--color-text-muted)]">Your answer:</span>{" "}
                      <span className={correct ? "text-[var(--color-status-open)] font-medium" : "text-[var(--color-status-closed)] font-medium"}>
                        {userAns !== undefined ? q.options[userAns] : "Skipped"}
                      </span>
                    </p>
                    {!correct && (
                      <p className="text-sm"><span className="text-[var(--color-text-muted)]">Correct:</span>{" "}
                        <span className="text-[var(--color-status-open)] font-medium">{q.options[q.correct]}</span>
                      </p>
                    )}
                    <p className="text-xs text-[var(--color-text-muted)] mt-2 italic">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

