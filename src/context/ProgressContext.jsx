import { createContext, useContext, useState, useEffect } from 'react';
import { loadProgress, saveProgress } from '../utils/storage';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    level: 1,
    xp: 0,
    completedQuestions: [],
    badges: [],
    statistics: {
      arithmetic: { attempted: 0, correct: 0 },
      geometry: { attempted: 0, correct: 0 },
      motion: { attempted: 0, correct: 0 },
      logic: { attempted: 0, correct: 0 },
    },
  });
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newLevel, setNewLevel] = useState(1);

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setProgress(savedProgress);
    }
  }, []);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const calculateLevel = (xp) => {
    let level = 1;
    let xpNeeded = 100;
    let remainingXP = xp;

    while (remainingXP >= xpNeeded) {
      remainingXP -= xpNeeded;
      level++;
      xpNeeded = level * 100;
    }

    return { level, remainingXP, xpNeeded };
  };

  const addXP = (amount) => {
    setProgress((prev) => {
      const newXP = prev.xp + amount;
      const { level: newLevel } = calculateLevel(newXP);
      
      if (newLevel > prev.level) {
        setNewLevel(newLevel);
        setShowLevelUp(true);
      }

      return {
        ...prev,
        xp: newXP,
        level: newLevel,
      };
    });
  };

  const completeQuestion = (questionId, module, correct) => {
    setProgress((prev) => {
      const isAlreadyCompleted = prev.completedQuestions.includes(questionId);
      
      return {
        ...prev,
        completedQuestions: isAlreadyCompleted 
          ? prev.completedQuestions 
          : [...prev.completedQuestions, questionId],
        statistics: {
          ...prev.statistics,
          [module]: {
            attempted: prev.statistics[module].attempted + 1,
            correct: prev.statistics[module].correct + (correct ? 1 : 0),
          },
        },
      };
    });
  };

  const unlockBadge = (badgeId) => {
    setProgress((prev) => {
      if (prev.badges.includes(badgeId)) return prev;
      
      return {
        ...prev,
        badges: [...prev.badges, badgeId],
      };
    });
  };

  const closeLevelUp = () => {
    setShowLevelUp(false);
  };

  const value = {
    ...progress,
    addXP,
    completeQuestion,
    unlockBadge,
    showLevelUp,
    newLevel,
    closeLevelUp,
    xpToNextLevel: progress.level * 100,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
