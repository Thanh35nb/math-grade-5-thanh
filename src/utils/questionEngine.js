import arithmeticQuestions from '../modules/arithmetic/questions';
import geometryQuestions from '../modules/geometry/questions';
import motionQuestions from '../modules/motion/questions';
import logicQuestions from '../modules/logic/questions';

const allQuestions = {
  arithmetic: arithmeticQuestions,
  geometry: geometryQuestions,
  motion: motionQuestions,
  logic: logicQuestions
};

export const getQuestionsByModule = (moduleId) => {
  return allQuestions[moduleId] || [];
};

export const getQuestionsByDifficulty = (moduleId, difficulty) => {
  const questions = allQuestions[moduleId] || [];
  return questions.filter(q => q.difficulty === difficulty);
};

export const getRandomQuestions = (moduleId, count = 5) => {
  const questions = allQuestions[moduleId] || [];
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getQuestionById = (questionId) => {
  for (const module of Object.values(allQuestions)) {
    const question = module.find(q => q.id === questionId);
    if (question) return question;
  }
  return null;
};

export const getTotalQuestions = () => {
  return Object.values(allQuestions).reduce((total, module) => total + module.length, 0);
};

export const getModuleStats = (moduleId) => {
  const questions = allQuestions[moduleId] || [];
  return {
    total: questions.length,
    basic: questions.filter(q => q.difficulty === 'basic').length,
    advanced: questions.filter(q => q.difficulty === 'advanced').length
  };
};
