import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, AlertCircle, ChevronLeft, ChevronRight, Flag, CheckCircle, Send } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import arithmeticQuestions from '../../modules/arithmetic/questions';
import geometryQuestions from '../../modules/geometry/questions';
import motionQuestions from '../../modules/motion/questions';
import logicQuestions from '../../modules/logic/questions';
import ExamResults from './ExamResults';
import './ExamMode.css';

const allQuestions = {
  arithmetic: arithmeticQuestions,
  geometry: geometryQuestions,
  motion: motionQuestions,
  logic: logicQuestions
};

const ExamMode = ({ config, onExit }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: userAnswer }
  const [timeRemaining, setTimeRemaining] = useState(config.timeLimit * 60); // seconds
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examResults, setExamResults] = useState(null);
  const { addXP, completeQuestion } = useProgress();

  // Generate exam questions
  useEffect(() => {
    const examQuestions = [];
    
    Object.entries(config.modules).forEach(([moduleId, count]) => {
      if (count > 0) {
        const moduleQuestions = allQuestions[moduleId] || [];
        const shuffled = [...moduleQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, count).map(q => ({
          ...q,
          moduleId
        }));
        examQuestions.push(...selected);
      }
    });

    // Shuffle all questions
    const finalQuestions = examQuestions.sort(() => Math.random() - 0.5);
    setQuestions(finalQuestions);
  }, [config]);

  // Timer
  useEffect(() => {
    if (timeRemaining <= 0 || examFinished) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          setIsTimeUp(true);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, examFinished]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    const percentage = timeRemaining / (config.timeLimit * 60);
    if (percentage > 0.5) return 'time-good';
    if (percentage > 0.25) return 'time-warning';
    return 'time-critical';
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNavigate = (direction) => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else if (direction === 'next' && currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const jumpToQuestion = (index) => {
    setCurrentIndex(index);
  };

  const handleSubmitExam = useCallback(() => {
    if (examFinished) return;

    let correct = 0;
    let totalXP = 0;
    const detailedResults = [];

    questions.forEach(question => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      
      if (isCorrect) {
        correct++;
        totalXP += question.xp;
      }

      detailedResults.push({
        questionId: question.id,
        question: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        xp: isCorrect ? question.xp : 0,
        module: question.module
      });

      // Save progress
      completeQuestion(question.id, question.module, isCorrect);
    });

    // Add XP
    addXP(totalXP);

    setExamResults({
      total: questions.length,
      correct,
      wrong: questions.length - correct,
      percentage: Math.round((correct / questions.length) * 100),
      xp: totalXP,
      timeUsed: (config.timeLimit * 60) - timeRemaining,
      answers: detailedResults
    });

    setExamFinished(true);
  }, [questions, answers, examFinished, config.timeLimit, timeRemaining, addXP, completeQuestion]);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  if (examFinished && examResults) {
    return (
      <ExamResults 
        results={examResults} 
        onExit={onExit}
        timeLimit={config.timeLimit * 60}
      />
    );
  }

  if (!currentQuestion) {
    return <div className="exam-loading">Đang tạo đề thi...</div>;
  }

  return (
    <div className="exam-mode">
      {/* Header */}
      <div className="exam-header">
        <div className="exam-header-left">
          <button className="exam-exit-btn" onClick={() => setShowSubmitConfirm(true)}>
            <Send size={18} />
            Nộp bài
          </button>
          <span className="exam-progress">
            Câu {currentIndex + 1}/{questions.length}
          </span>
        </div>

        <div className={`exam-timer ${getTimeColor()}`}>
          <Clock size={20} />
          <span className={timeRemaining < 300 ? 'timer-pulse' : ''}>
            {formatTime(timeRemaining)}
          </span>
        </div>

        <div className="exam-stats">
          <span className="answered-count">
            Đã trả lời: {answeredCount}/{questions.length}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="exam-progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Question Navigation Grid */}
      <div className="question-navigator">
        {questions.map((q, index) => (
          <button
            key={q.id}
            className={`nav-dot ${index === currentIndex ? 'current' : ''} ${answers[q.id] ? 'answered' : ''}`}
            onClick={() => jumpToQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Question Content */}
      <div className="exam-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="exam-question"
          >
            <div className="question-header">
              <span className="question-number">Câu {currentIndex + 1}</span>
              <span className={`question-module module-${currentQuestion.module}`}>
                {currentQuestion.module === 'arithmetic' && 'Số học'}
                {currentQuestion.module === 'geometry' && 'Hình học'}
                {currentQuestion.module === 'motion' && 'Chuyển động'}
                {currentQuestion.module === 'logic' && 'Tư duy'}
              </span>
              <span className="question-xp">+{currentQuestion.xp} XP</span>
            </div>

            <h3 className="question-text">{currentQuestion.question}</h3>

            {currentQuestion.type === 'multiple-choice' ? (
              <div className="options-list">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${answers[currentQuestion.id] === option ? 'selected' : ''}`}
                    onClick={() => handleAnswer(currentQuestion.id, option)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="option-text">{option}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="input-answer">
                <input
                  type="text"
                  placeholder="Nhập câu trả lời..."
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                  className="answer-input"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="exam-navigation">
        <button
          className="nav-btn"
          onClick={() => handleNavigate('prev')}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={20} />
          Câu trước
        </button>

        <button
          className="nav-btn primary"
          onClick={() => handleNavigate('next')}
          disabled={currentIndex === questions.length - 1}
        >
          Câu sau
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="confirm-overlay">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="confirm-modal"
          >
            <div className="confirm-icon">
              <AlertCircle size={48} />
            </div>
            <h3>Xác nhận nộp bài?</h3>
            <p>
              Bạn đã trả lời {answeredCount}/{questions.length} câu.
              {answeredCount < questions.length && (
                <span className="warning-text">
                  <br />Còn {questions.length - answeredCount} câu chưa trả lời!
                </span>
              )}
            </p>
            <div className="confirm-actions">
              <button className="btn-cancel" onClick={() => setShowSubmitConfirm(false)}>
                Tiếp tục làm
              </button>
              <button className="btn-submit gradient-button" onClick={handleSubmitExam}>
                Nộp bài
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ExamMode;
