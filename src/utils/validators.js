export const validateFraction = (input) => {
  const fractionRegex = /^\d+\/\d+$/;
  if (!fractionRegex.test(input)) return false;
  
  const [numerator, denominator] = input.split('/').map(Number);
  return denominator !== 0;
};

export const parseFraction = (input) => {
  if (!input.includes('/')) return Number(input);
  
  const [numerator, denominator] = input.split('/').map(Number);
  return numerator / denominator;
};

export const normalizeAnswer = (answer) => {
  if (typeof answer === 'number') return answer.toString();
  
  return answer
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
};

export const compareAnswers = (userAnswer, correctAnswer) => {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  if (normalizedUser === normalizedCorrect) return true;
  
  if (validateFraction(normalizedUser) && validateFraction(normalizedCorrect)) {
    const userValue = parseFraction(normalizedUser);
    const correctValue = parseFraction(normalizedCorrect);
    return Math.abs(userValue - correctValue) < 0.0001;
  }
  
  const userNum = Number(normalizedUser);
  const correctNum = Number(normalizedCorrect);
  
  if (!isNaN(userNum) && !isNaN(correctNum)) {
    return Math.abs(userNum - correctNum) < 0.0001;
  }
  
  return false;
};

export const validateNumberInput = (input) => {
  const num = Number(input);
  return !isNaN(num) && isFinite(num);
};
