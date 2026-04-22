"use client";

import { use, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Timer, Pause, Play, Award, RotateCcw, CheckCircle2, XCircle, ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import JobShell from "@/components/JobShell";
import { getJob, type Question } from "@/constants/data";
import { useLocalStorage } from "@/lib/storage";

const TIME_LIMIT = 20 * 60; // 20 minutes
const QUESTION_COUNT = 10;

type Stored = {
  jobId: string;
  score: number;
  correct: number;
  total: number;
  timeTaken: number;
  answers: number[]; // selected index per question
  completedAt: string;
};

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const job = getJob(id);
  if (!job) notFound();

  const questions = useMemo(() => job.quiz.slice(0, QUESTION_COUNT), [job]);
  const [results, setResults] = useLocalStorage<Record<string, Stored>>("jf-quiz", {});
  const previous = results[id];

  const [phase, setPhase] = useState<"intro" | "active" | "result">(previous ? "result" : "intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (phase !== "active" || paused) return;
    if (timeLeft <= 0) {
      submit();
      return;
    }
    const t = setInterval(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, paused, timeLeft]);

  const start = () => {
    setAnswers(Array(questions.length).fill(-1));
    setCurrent(0);
    setTimeLeft(TIME_LIMIT);
    setPaused(false);
    setPhase("active");
  };

  const submit = () => {
    const correct = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
    const score = Math.round((correct / questions.length) * 100);
    const record: Stored = {
      jobId: id,
      score,
      correct,
      total: questions.length,
      timeTaken: TIME_LIMIT - timeLeft,
      answers,
      completedAt: new Date().toISOString(),
    };
    setResults({ ...results, [id]: record });
    setPhase("result");
  };

  const choose = (idx: number) => {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  };

  const goNext = () => {
    if (current === questions.length - 1) submit();
    else { setDirection(1); setCurrent((c) => c + 1); }
  };
  const goPrev = () => { setDirection(-1); setCurrent((c) => Math.max(0, c - 1)); };

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const lowTime = timeLeft < 120;

  return (
    <JobShell job={job}>
      <div className="pb-16 max-w-4xl mx-auto">
        {phase === "intro" && (
          <IntroScreen
            onStart={start}
            previous={previous}
            onRetake={start}
          />
        )}

        {phase === "active" && (
          <div>
            <div className="sticky top-[140px] z-20 bg-[var(--color-bg-primary)]/85 backdrop-blur-md border border-[var(--color-border-subtle)] rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Question <span className="text-[var(--color-text-primary)] font-semibold">{current + 1}</span> of {questions.length}
                </p>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full font-mono text-sm ${lowTime ? "bg-[var(--color-error)]/20 text-[var(--color-error)] animate-pulse" : "bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]"}`}>
                  <Timer className="w-4 h-4" /> {minutes}:{seconds}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setPaused((p) => !p)} className="jf-btn jf-btn-ghost !py-2 !px-3">
                    {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                  </button>
                  <button onClick={submit} className="jf-btn jf-btn-ghost !py-2 !px-3 text-[var(--color-error)]">Exit</button>
                </div>
              </div>
              <div className="h-1.5 bg-[var(--color-bg-elevated)] rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] transition-all"
                  style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6">
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 60 }}
                    transition={{ duration: 0.3 }}
                    className="jf-card !p-8"
                  >
                    <p className="jf-pill jf-pill-mono mb-4 inline-flex">Q{current + 1}</p>
                    <h2 className="jf-display text-2xl md:text-3xl mb-8">{questions[current].prompt}</h2>
                    <div role="radiogroup" aria-label="Answer options" className="space-y-3">
                      {questions[current].options.map((opt, i) => {
                        const selected = answers[current] === i;
                        return (
                          <button
                            key={i}
                            role="radio"
                            aria-checked={selected}
                            onClick={() => choose(i)}
                            className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                              selected
                                ? "border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/15"
                                : "border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-accent-primary)]/60"
                            }`}
                          >
                            <span className={`w-6 h-6 rounded-full grid place-items-center text-xs font-bold border ${selected ? "bg-[var(--color-accent-primary)] border-[var(--color-accent-primary)] text-white" : "border-[var(--color-text-muted)] text-[var(--color-text-secondary)]"}`}>
                              {selected ? <CheckCircle2 className="w-4 h-4" /> : String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-sm">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <button onClick={goPrev} disabled={current === 0} className="jf-btn jf-btn-ghost">
                        <ArrowLeft className="w-4 h-4" /> Previous
                      </button>
                      <button onClick={goNext} disabled={answers[current] === -1} className="jf-btn jf-btn-violet">
                        {current === questions.length - 1 ? "Submit" : "Next Question"} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <aside className="hidden lg:block">
                <div className="jf-card !p-4 sticky top-[260px]">
                  <p className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] mb-3 text-center">Palette</p>
                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((_, i) => {
                      const answered = answers[i] !== -1;
                      const isCurrent = i === current;
                      return (
                        <button
                          key={i}
                          onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                          aria-label={`Go to question ${i + 1}`}
                          className={`w-9 h-9 rounded-lg text-xs font-mono ${
                            isCurrent
                              ? "bg-[var(--color-accent-primary)] text-white"
                              : answered
                              ? "bg-[var(--color-accent-secondary)]/20 text-[var(--color-accent-secondary)]"
                              : "bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]"
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        )}

        {phase === "result" && (
          <ResultScreen
            job={job}
            questions={questions}
            record={results[id]}
            onRetake={start}
          />
        )}
      </div>
    </JobShell>
  );
}

function IntroScreen({ onStart, previous, onRetake }: { onStart: () => void; previous?: Stored; onRetake: () => void }) {
  return (
    <div className="jf-card !p-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">
          <Award className="w-6 h-6 text-[#0A0A0F]" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Skill Quiz</p>
          <h2 className="jf-display text-3xl">Prove Your Knowledge</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 my-8">
        {[
          { label: "Questions", value: QUESTION_COUNT },
          { label: "Minutes", value: 20 },
          { label: "Attempts", value: previous ? "Used" : "1" },
        ].map((s) => (
          <div key={s.label} className="jf-card !p-4 text-center">
            <p className="jf-display text-2xl">{s.value}</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <ul className="space-y-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <li>• You have 20 minutes to answer all questions.</li>
        <li>• You can navigate between questions using Next / Previous.</li>
        <li>• Your result is saved and visible to recruiters.</li>
        <li>• Refreshing the page during the quiz will not save progress.</li>
      </ul>
      {previous ? (
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={onRetake} className="jf-btn jf-btn-violet">
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </button>
          <span className="jf-pill self-center">Last score: <strong className="text-[var(--color-text-primary)] ml-1">{previous.score}%</strong></span>
        </div>
      ) : (
        <button onClick={onStart} className="jf-btn jf-btn-primary text-base !py-3 !px-6">
          Start Quiz <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

function ResultScreen({
  job,
  questions,
  record,
  onRetake,
}: {
  job: ReturnType<typeof getJob> & {};
  questions: Question[];
  record?: Stored;
  onRetake: () => void;
}) {
  if (!record) return null;
  const grade =
    record.score >= 90 ? { label: "Excellent", icon: "🥇" } :
    record.score >= 70 ? { label: "Good", icon: "🥈" } :
    { label: "Needs Work", icon: "🥉" };

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - record.score / 100);

  const minutes = Math.floor(record.timeTaken / 60);
  const seconds = record.timeTaken % 60;

  return (
    <div className="space-y-8">
      <div className="jf-card !p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-8">
        <div className="relative w-44 h-44 mx-auto">
          <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
            <circle cx="80" cy="80" r={radius} stroke="var(--color-bg-elevated)" strokeWidth="12" fill="none" />
            <motion.circle
              cx="80" cy="80" r={radius}
              stroke="url(#grad)" strokeWidth="12" fill="none" strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-accent-primary)" />
                <stop offset="100%" stopColor="var(--color-accent-secondary)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="jf-display text-4xl">{record.score}%</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{record.correct} / {record.total} correct</p>
            </div>
          </div>
        </div>
        <div>
          <span className="jf-pill mb-3 inline-flex"><Trophy className="w-3 h-3 text-[var(--color-warning)]" /> {grade.icon} {grade.label}</span>
          <h2 className="jf-display text-3xl mb-2">Quiz Complete</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            You finished in {minutes}m {seconds}s. Review your answers below to learn from any mistakes.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onRetake} className="jf-btn jf-btn-violet"><RotateCcw className="w-4 h-4" /> Retake Quiz</button>
            {record.score >= 70 && (
              <button className="jf-btn jf-btn-primary">Apply Now <ArrowRight className="w-4 h-4" /></button>
            )}
            <Link href={`/jobs/${job.id}`} className="jf-btn jf-btn-ghost">Back to Job</Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="jf-display text-2xl">Review Answers</h3>
        {questions.map((q, i) => {
          const userIdx = record.answers[i];
          const correctIdx = q.correctIndex;
          const isCorrect = userIdx === correctIdx;
          return (
            <div key={q.id} className="jf-card !p-6">
              <div className="flex items-start gap-3 mb-4">
                {isCorrect ? <CheckCircle2 className="w-5 h-5 text-[var(--color-success)] mt-1" /> : <XCircle className="w-5 h-5 text-[var(--color-error)] mt-1" />}
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-1">Question {i + 1}</p>
                  <p className="font-semibold">{q.prompt}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {q.options.map((opt, j) => {
                  const isUser = j === userIdx;
                  const isRight = j === correctIdx;
                  return (
                    <li
                      key={j}
                      className={`p-3 rounded-xl text-sm border ${
                        isRight
                          ? "bg-[var(--color-success)]/10 border-[var(--color-success)]/40 text-[var(--color-success)]"
                          : isUser
                          ? "bg-[var(--color-error)]/10 border-[var(--color-error)]/40 text-[var(--color-error)]"
                          : "border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]"
                      }`}
                    >
                      {String.fromCharCode(65 + j)}. {opt}
                      {isUser && !isRight && <span className="ml-2 text-xs">(your answer)</span>}
                      {isRight && <span className="ml-2 text-xs">(correct)</span>}
                    </li>
                  );
                })}
              </ul>
              <p className="text-sm text-[var(--color-text-secondary)] border-t border-[var(--color-border-subtle)] pt-3">
                <strong className="text-[var(--color-text-primary)]">Explanation: </strong>{q.explanation}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
