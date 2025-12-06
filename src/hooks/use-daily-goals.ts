import { useState, useEffect, useCallback } from "react";

interface DailyGoals {
  promptsTarget: number;
  promptsCompleted: number;
  studyMinutesTarget: number;
  studyMinutesCompleted: number;
  date: string;
}

const STORAGE_KEY = "promptlab-daily-goals";

const getToday = () => new Date().toISOString().split("T")[0];

const defaultGoals: DailyGoals = {
  promptsTarget: 5,
  promptsCompleted: 0,
  studyMinutesTarget: 60,
  studyMinutesCompleted: 0,
  date: getToday(),
};

export function useDailyGoals() {
  const [goals, setGoals] = useState<DailyGoals>(() => {
    if (typeof window === "undefined") return defaultGoals;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as DailyGoals;
      if (parsed.date !== getToday()) {
        return { ...defaultGoals, date: getToday() };
      }
      return parsed;
    }
    return defaultGoals;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    const checkDate = () => {
      if (goals.date !== getToday()) {
        setGoals({ ...defaultGoals, date: getToday() });
      }
    };
    const interval = setInterval(checkDate, 60000);
    return () => clearInterval(interval);
  }, [goals.date]);

  const incrementPrompts = useCallback(() => {
    setGoals((prev) => ({
      ...prev,
      promptsCompleted: prev.promptsCompleted + 1,
    }));
  }, []);

  const addStudyMinutes = useCallback((minutes: number) => {
    setGoals((prev) => ({
      ...prev,
      studyMinutesCompleted: prev.studyMinutesCompleted + minutes,
    }));
  }, []);

  const setPromptsTarget = useCallback((target: number) => {
    setGoals((prev) => ({ ...prev, promptsTarget: target }));
  }, []);

  const setStudyMinutesTarget = useCallback((target: number) => {
    setGoals((prev) => ({ ...prev, studyMinutesTarget: target }));
  }, []);

  const promptsProgress = Math.min(
    (goals.promptsCompleted / goals.promptsTarget) * 100,
    100
  );
  const studyProgress = Math.min(
    (goals.studyMinutesCompleted / goals.studyMinutesTarget) * 100,
    100
  );

  return {
    goals,
    incrementPrompts,
    addStudyMinutes,
    setPromptsTarget,
    setStudyMinutesTarget,
    promptsProgress,
    studyProgress,
  };
}
