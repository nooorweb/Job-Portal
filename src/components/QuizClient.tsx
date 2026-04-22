"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Award, CheckCircle2, Clock, ExternalLink, RotateCcw, XCircle } from "lucide-react";
import type { Job } from "@/constants/data";
import { useLocalStorage } from "@/lib/storage";

type Phase = "intro" | "quiz" | "result";
type Stored = {
  score: number;
  total: number;
  correct: number;
  perSubject: Record<string, { correct: number; total: number }>;
  takenAt: number;
  answers: Record<string, number>;
};

const DURATION = 30 * 60;

export default function QuizClient({ orgSlug, job }: { orgSlug: string; job: Job }) {
  const [results, setResults] = useLocalStorage<Record<string, Stored>>("pk-quiz", {});
  const storageKey = `${orgSlug}:${job.slug}`;
  const previous = results[storageKey];
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [current, setCurrent] = useState(0);
  const [seconds, setSeconds] = useState(DURATION);
  const [showReview, setShowReview] = useState(false);
  const submittedRef = useRef(false);

  const submit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;

    let correct = 0;
    const perSubject: Record<string, { correct: number; total: number }> = {};

    job.quiz.forEach((question) => {
      perSubject[question.subject] ??= { correct: 0, total: 0 };
      perSubject[question.subject].total += 1;
      if (answers[question.id] === question.correct) {
        correct += 1;
        perSubject[question.subject].correct += 1;
      }
    });

    const total = job.quiz.length;
    const score = Math.round((correct / total) * 100);
    const stored = { score, total, correct, perSubject, takenAt: Date.now(), answers };
    setResults((currentResults) => ({ ...currentResults, [storageKey]: stored }));
    setPhase("result");
  }, [answers, job.quiz, setResults, storageKey]);

  useEffect(() => {
    if (phase !== "quiz") return;

    const id = setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          clearInterval(id);
          submit();
          return 0;
        }
        return value - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [phase, submit]);

  const start = () => {
    setAnswers({});
    setCurrent(0);
    setSeconds(DURATION);
    setShowReview(false);
    submittedRef.current = false;
    setPhase("quiz");
  };

  if (phase === "intro") {
    return (
      <div className="max-w-3xl mx-auto pk-card p-8 md:p-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[var(--color-accent-primary)] text-white">
            <Award className="w-6 h-6" />
          </span>
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold">Practice Quiz</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-heading)]">{job.postTitle} Mock Test</h2>
          </div>
        </div>
        <p className="text-[var(--color-text-muted)] mb-6">{job.quiz.length} Questions · 30 Minutes · All Subjects</p>

        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {[
            { value: job.quiz.length, label: "Questions" },
            { value: 30, label: "Minutes" },
            { value: "+1", label: "Per correct" },
          ].map((item) => (
            <div key={item.label} className="pk-card p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-text-heading)]">{item.value}</div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-[var(--color-bg-section)] rounded-lg p-5 text-sm text-[var(--color-text-body)] space-y-1.5 mb-6">
          <p className="font-semibold text-[var(--color-text-heading)] mb-1">Rules</p>
          <p>Each correct answer = +1 mark</p>
          <p>No negative marking</p>
          <p>You can move between questions before final submission</p>
          <p>The timer auto-submits at zero</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {previous && <span className="pk-pill">Last score: <strong className="text-[var(--color-text-heading)] ml-1">{previous.score}%</strong></span>}
          <button onClick={start} className="pk-btn pk-btn-primary !py-3 !px-6">
            {previous ? "Retake Quiz" : "Start Quiz Now"}
          </button>
        </div>
      </div>
    );
  }

  if (phase === "result") {
    const stored = results[storageKey] ?? previous;
    if (!stored) return null;

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="pk-card p-8 md:p-10 text-center">
          <div className="text-4xl font-bold text-[var(--color-text-heading)]">{stored.correct}/{stored.total}</div>
          <p className="text-lg text-[var(--color-accent-primary)] font-semibold mt-1">{stored.score}% Score</p>

          <div className="mt-6 max-w-md mx-auto space-y-2.5 text-left">
            {Object.entries(stored.perSubject).map(([subject, value]) => {
              const percent = Math.round((value.correct / value.total) * 100);
              return (
                <div key={subject}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[var(--color-text-body)]">{subject}</span>
                    <span className="font-semibold text-[var(--color-text-heading)]">{value.correct}/{value.total} · {percent}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--color-bg-section)] overflow-hidden">
                    <div className="h-full bg-[var(--color-accent-primary)]" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button onClick={() => setShowReview((value) => !value)} className="pk-btn pk-btn-ghost">
              {showReview ? "Hide" : "Review"} Answers
            </button>
            <button onClick={start} className="pk-btn pk-btn-outline">
              <RotateCcw className="w-4 h-4" /> Retake Quiz
            </button>
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="pk-btn pk-btn-primary">
              Apply for This Job <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {showReview && (
          <div className="space-y-3">
            {job.quiz.map((question, index) => {
              const userAnswer = stored.answers[question.id];
              const correct = userAnswer === question.correct;

              return (
                <div key={question.id} className="pk-card p-5">
                  <div className="flex items-start gap-3">
                    {correct ? <CheckCircle2 className="w-5 h-5 text-[var(--color-status-open)] shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-[var(--color-status-closed)] shrink-0 mt-0.5" />}
                    <div className="flex-1">
                      <p className="font-semibold text-[var(--color-text-heading)]">Q{index + 1}. {question.question}</p>
                      <p className="text-sm mt-2">
                        <span className="text-[var(--color-text-muted)]">Your answer:</span>{" "}
                        <span className={correct ? "text-[var(--color-status-open)] font-medium" : "text-[var(--color-status-closed)] font-medium"}>
                          {userAnswer !== undefined ? question.options[userAnswer] : "Skipped"}
                        </span>
                      </p>
                      {!correct && (
                        <p className="text-sm">
                          <span className="text-[var(--color-text-muted)]">Correct:</span>{" "}
                          <span className="text-[var(--color-status-open)] font-medium">{question.options[question.correct]}</span>
                        </p>
                      )}
                      <p className="text-xs text-[var(--color-text-muted)] mt-2 italic">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center">
          <Link href={`/organizations/${orgSlug}/${job.slug}`} className="text-sm font-semibold text-[var(--color-accent-primary)] hover:underline">
            Back to overview
          </Link>
        </div>
      </div>
    );
  }

  const question = job.quiz[current];
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const lowTime = seconds <= 120;

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-6">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="pk-pill pk-pill-blue">{question.subject}</span>
            <span className="text-sm text-[var(--color-text-muted)]">Question {current + 1} of {job.quiz.length}</span>
          </div>
          <span className={`inline-flex items-center gap-2 font-mono font-semibold px-3 py-1.5 rounded-lg ${lowTime ? "bg-red-50 text-[var(--color-status-closed)]" : "bg-[var(--color-bg-section)] text-[var(--color-text-heading)]"}`}>
            <Clock className="w-4 h-4" /> {String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}
          </span>
        </div>

        <div className="h-1.5 bg-[var(--color-bg-section)] rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-[var(--color-accent-primary)] transition-all" style={{ width: `${((current + 1) / job.quiz.length) * 100}%` }} />
        </div>

        <div className="pk-card p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold text-[var(--color-text-heading)] mb-5">Q{current + 1}. {question.question}</h3>
          <div className="space-y-2.5">
            {question.options.map((option, index) => {
              const selected = answers[question.id] === index;

              return (
                <button
                  key={option}
                  onClick={() => setAnswers((currentAnswers) => ({ ...currentAnswers, [question.id]: index }))}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition flex items-center gap-3 ${
                    selected ? "border-[var(--color-accent-primary)] bg-[var(--color-accent-light)]" : "border-[var(--color-border-light)] hover:border-[var(--color-border-medium)] bg-white"
                  }`}
                >
                  <span className={`grid place-items-center w-7 h-7 rounded-full text-xs font-semibold shrink-0 ${selected ? "bg-[var(--color-accent-primary)] text-white" : "bg-[var(--color-bg-section)] text-[var(--color-text-muted)]"}`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm md:text-base text-[var(--color-text-heading)]">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button disabled={current === 0} onClick={() => setCurrent((value) => value - 1)} className="pk-btn pk-btn-ghost">
            Previous
          </button>
          {current < job.quiz.length - 1 ? (
            <button onClick={() => setCurrent((value) => value + 1)} className="pk-btn pk-btn-green">
              Next Question
            </button>
          ) : (
            <button onClick={submit} className="pk-btn pk-btn-primary">
              Submit Quiz
            </button>
          )}
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-44 pk-card p-4">
          <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-3">Question Palette</h4>
          <div className="grid grid-cols-5 gap-2">
            {job.quiz.map((item, index) => {
              const answered = answers[item.id] !== undefined;
              const active = index === current;

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrent(index)}
                  className={`aspect-square rounded-md text-xs font-semibold border transition ${
                    active
                      ? "ring-2 ring-[var(--color-accent-primary)] ring-offset-1 border-transparent bg-[var(--color-accent-primary)] text-white"
                      : answered
                        ? "bg-[var(--color-accent-light)] text-[var(--color-accent-primary)] border-[rgba(27,107,53,0.2)]"
                        : "bg-white text-[var(--color-text-muted)] border-[var(--color-border-light)]"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
