import { useState, useEffect, useCallback } from "react";

interface GamificationState {
  streak: number;
  lastActiveDate: string;
  totalPrompts: number;
  totalSessions: number;
  categoriesUsed: string[];
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

const BADGES_CONFIG: Badge[] = [
  { id: "first_prompt", name: "Primeiro Passo", description: "Usou o primeiro prompt", icon: "🎯" },
  { id: "streak_3", name: "Consistente", description: "3 dias consecutivos", icon: "🔥" },
  { id: "streak_7", name: "Maratonista", description: "7 dias consecutivos", icon: "🏃" },
  { id: "streak_30", name: "Dedicado", description: "30 dias consecutivos", icon: "🏆" },
  { id: "explorer_5", name: "Explorador", description: "Usou 5 categorias diferentes", icon: "🧭" },
  { id: "favorites_10", name: "Colecionador", description: "10 prompts favoritados", icon: "⭐" },
  { id: "sessions_5", name: "Foco Total", description: "5 sessões Pomodoro completas", icon: "⏱️" },
  { id: "prompts_25", name: "Estudante Dedicado", description: "25 prompts utilizados", icon: "📚" },
  { id: "prompts_100", name: "Mestre", description: "100 prompts utilizados", icon: "🎓" },
];

const STORAGE_KEY = "promptlab-gamification";

const getToday = () => new Date().toISOString().split("T")[0];

const defaultState: GamificationState = {
  streak: 0,
  lastActiveDate: "",
  totalPrompts: 0,
  totalSessions: 0,
  categoriesUsed: [],
  badges: [],
};

export function useGamification() {
  const [state, setState] = useState<GamificationState>(() => {
    if (typeof window === "undefined") return defaultState;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultState;
  });

  const [newBadge, setNewBadge] = useState<Badge | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const checkAndAwardBadge = useCallback((badgeId: string, currentState: GamificationState): Badge | null => {
    if (currentState.badges.find((b) => b.id === badgeId)) return null;
    const badge = BADGES_CONFIG.find((b) => b.id === badgeId);
    if (!badge) return null;
    return { ...badge, unlockedAt: new Date().toISOString() };
  }, []);

  const updateStreak = useCallback(() => {
    const today = getToday();
    setState((prev) => {
      if (prev.lastActiveDate === today) return prev;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split("T")[0];

      let newStreak = 1;
      if (prev.lastActiveDate === yesterdayStr) {
        newStreak = prev.streak + 1;
      }

      const newBadges: Badge[] = [];
      
      if (newStreak >= 3) {
        const badge = checkAndAwardBadge("streak_3", prev);
        if (badge) newBadges.push(badge);
      }
      if (newStreak >= 7) {
        const badge = checkAndAwardBadge("streak_7", prev);
        if (badge) newBadges.push(badge);
      }
      if (newStreak >= 30) {
        const badge = checkAndAwardBadge("streak_30", prev);
        if (badge) newBadges.push(badge);
      }

      if (newBadges.length > 0) {
        setNewBadge(newBadges[0]);
      }

      return {
        ...prev,
        streak: newStreak,
        lastActiveDate: today,
        badges: [...prev.badges, ...newBadges],
      };
    });
  }, [checkAndAwardBadge]);

  const recordPromptUse = useCallback((category: string) => {
    updateStreak();
    setState((prev) => {
      const newTotal = prev.totalPrompts + 1;
      const newCategories = prev.categoriesUsed.includes(category)
        ? prev.categoriesUsed
        : [...prev.categoriesUsed, category];

      const newBadges: Badge[] = [];

      if (newTotal === 1) {
        const badge = checkAndAwardBadge("first_prompt", prev);
        if (badge) newBadges.push(badge);
      }
      if (newTotal >= 25) {
        const badge = checkAndAwardBadge("prompts_25", prev);
        if (badge) newBadges.push(badge);
      }
      if (newTotal >= 100) {
        const badge = checkAndAwardBadge("prompts_100", prev);
        if (badge) newBadges.push(badge);
      }
      if (newCategories.length >= 5) {
        const badge = checkAndAwardBadge("explorer_5", prev);
        if (badge) newBadges.push(badge);
      }

      if (newBadges.length > 0) {
        setNewBadge(newBadges[0]);
      }

      return {
        ...prev,
        totalPrompts: newTotal,
        categoriesUsed: newCategories,
        badges: [...prev.badges, ...newBadges],
      };
    });
  }, [updateStreak, checkAndAwardBadge]);

  const recordPomodoroSession = useCallback(() => {
    updateStreak();
    setState((prev) => {
      const newTotal = prev.totalSessions + 1;
      const newBadges: Badge[] = [];

      if (newTotal >= 5) {
        const badge = checkAndAwardBadge("sessions_5", prev);
        if (badge) newBadges.push(badge);
      }

      if (newBadges.length > 0) {
        setNewBadge(newBadges[0]);
      }

      return {
        ...prev,
        totalSessions: newTotal,
        badges: [...prev.badges, ...newBadges],
      };
    });
  }, [updateStreak, checkAndAwardBadge]);

  const checkFavoritesBadge = useCallback((favoritesCount: number) => {
    if (favoritesCount >= 10) {
      setState((prev) => {
        const badge = checkAndAwardBadge("favorites_10", prev);
        if (badge) {
          setNewBadge(badge);
          return { ...prev, badges: [...prev.badges, badge] };
        }
        return prev;
      });
    }
  }, [checkAndAwardBadge]);

  const dismissBadgeNotification = useCallback(() => {
    setNewBadge(null);
  }, []);

  return {
    streak: state.streak,
    totalPrompts: state.totalPrompts,
    totalSessions: state.totalSessions,
    badges: state.badges,
    allBadges: BADGES_CONFIG,
    newBadge,
    recordPromptUse,
    recordPomodoroSession,
    checkFavoritesBadge,
    dismissBadgeNotification,
  };
}
