import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Lightbulb, CheckCircle } from 'lucide-react';
import QuestionContainer from '../../components/question/QuestionContainer';
import { useProgress } from '../../context/ProgressContext';
import arithmeticQuestions from '../../modules/arithmetic/questions';
import geometryQuestions from '../../modules/geometry/questions';
import motionQuestions from '../../modules/motion/questions';
import logicQuestions from '../../modules/logic/questions';
import './PracticeMode.css';

const allQuestions = {
  arithmetic: arithmeticQuestions,
  geometry: geometryQuestions,
  motion: motionQuestions,
  logic: logicQuestions
};

const PracticeMode = ({ moduleId, onExit, onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0, xp: 0 });
  const [startTime] = useState(Date.now());
  const { addXP, completeQuestion, unlockBadge, level, badges } = useProgress();

  useEffect(() => {
    const moduleQuestions = allQuestions[moduleId] || [];
    const shuffled = [...moduleQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  }, [moduleId]);

  const handleAnswer = ({ questionId, correct, xp }) => {
    setSessionStats(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
      xp: prev.xp + xp
    }));

    addXP(xp);
    completeQuestion(questionId, moduleId, correct);

    if (correct && !badges.includes('first_steps')) {
      unlockBadge('first_steps');
    }

    if (sessionStats.correct + 1 >= 10 && !badges.includes('challenge_champion')) {
      unlockBadge('challenge_champion');
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete?.(sessionStats);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentIndex];
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

  if (!currentQuestion) {
    return <div className="practice-loading">Đang tải câu hỏi...</div>;
  }

  return (
    <div className="practice-mode">
      <div className="practice-header">
        <button className="practice-back" onClick={onExit}>
          <ArrowLeft size={20} />
          <span>Quay lại</span>
        </button>

        <div className="practice-info">
          <div className="info-item">
            <Clock size={16} />
            <span>{formatTime(elapsedSeconds)}</span>
          </div>
          <div className="info-item">
            <CheckCircle size={16} />
            <span>{currentIndex + 1}/{questions.length}</span>
          </div>
        </div>

        <div className="practice-xp">
          <span>Level {level}</span>
        </div>
      </div>

      <div className="practice-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionContainer
              question={currentQuestion}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="practice-footer">
        <div className="session-stats">
          <span>Đúng: {sessionStats.correct}/{sessionStats.total}</span>
          <span>XP: +{sessionStats.xp}</span>
        </div>

        <div className="progress-dots">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeMode;
