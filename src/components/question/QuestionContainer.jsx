import { useState } from 'react';
import MultipleChoice from './MultipleChoice';
import InputAnswer from './InputAnswer';
import FeedbackPanel from './FeedbackPanel';
import HintButton from './HintButton';
import SolutionPanel from './SolutionPanel';
import './QuestionContainer.css';

const QuestionContainer = ({ question, onAnswer, onNext }) => {
  const [userAnswer, setUserAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const handleSubmit = (answer) => {
    setUserAnswer(answer);
    
    const correct = answer === question.correctAnswer || 
                   answer?.toString().toLowerCase() === question.correctAnswer?.toString().toLowerCase();
    
    setIsCorrect(correct);
    setShowFeedback(true);
    setShowSolution(true);
    
    const xp = correct ? (hintUsed ? Math.floor(question.xp / 2) : question.xp) : 0;
    setEarnedXP(xp);
    
    onAnswer({
      questionId: question.id,
      correct,
      xp,
      hintUsed
    });
  };

  const handleHintUsed = () => {
    setHintUsed(true);
  };

  const handleNext = () => {
    setUserAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
    setShowSolution(false);
    setHintUsed(false);
    setEarnedXP(0);
    onNext();
  };

  const renderQuestionType = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoice
            options={question.options}
            selectedAnswer={userAnswer}
            onSelect={handleSubmit}
            disabled={showFeedback}
            correctAnswer={showFeedback ? question.correctAnswer : null}
          />
        );
      case 'input':
        return (
          <InputAnswer
            expectedAnswer={question.correctAnswer}
            onSubmit={handleSubmit}
            disabled={showFeedback}
            showCorrect={showFeedback}
          />
        );
      default:
        return (
          <MultipleChoice
            options={question.options}
            selectedAnswer={userAnswer}
            onSelect={handleSubmit}
            disabled={showFeedback}
            correctAnswer={showFeedback ? question.correctAnswer : null}
          />
        );
    }
  };

  return (
    <div className="question-container animate-fade-slide-in">
      <div className="question-header">
        <div className="question-meta">
          <span className={`question-module module-${question.module}`}>
            {question.module}
          </span>
          <span className="question-topic">{question.topic}</span>
          <span className={`question-difficulty difficulty-${question.difficulty}`}>
            {question.difficulty === 'basic' ? 'Cơ bản' : 'Nâng cao'}
          </span>
        </div>
        <div className="question-xp">+{hintUsed ? Math.floor(question.xp / 2) : question.xp} XP</div>
      </div>

      <div className="question-content">
        <h3 className="question-text">{question.question}</h3>
        
        {renderQuestionType()}

        {showFeedback && (
          <FeedbackPanel
            isCorrect={isCorrect}
            earnedXP={earnedXP}
            hintUsed={hintUsed}
          />
        )}

        {!showFeedback && question.hints && question.hints.length > 0 && (
          <HintButton
            hints={question.hints}
            onHintUsed={handleHintUsed}
          />
        )}

        {showSolution && (
          <SolutionPanel
            steps={question.explanation?.steps || []}
            tips={question.explanation?.tips || ''}
            isCorrect={isCorrect}
          />
        )}

        {showFeedback && (
          <button className="next-button gradient-button" onClick={handleNext}>
            Câu tiếp theo →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionContainer;
