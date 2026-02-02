import { Check } from 'lucide-react';
import './MultipleChoice.css';

const MultipleChoice = ({ options, selectedAnswer, onSelect, disabled, correctAnswer }) => {
  const getOptionClass = (option) => {
    let classes = 'option';
    
    if (selectedAnswer === option) {
      classes += ' option-selected';
    }
    
    if (disabled) {
      if (option === correctAnswer) {
        classes += ' option-correct';
      } else if (selectedAnswer === option && option !== correctAnswer) {
        classes += ' option-wrong';
      }
      classes += ' option-disabled';
    }
    
    return classes;
  };

  return (
    <div className="multiple-choice">
      {options.map((option, index) => (
        <button
          key={index}
          className={getOptionClass(option)}
          onClick={() => !disabled && onSelect(option)}
          disabled={disabled}
        >
          <span className="option-letter">{String.fromCharCode(65 + index)}</span>
          <span className="option-text">{option}</span>
          {disabled && option === correctAnswer && (
            <Check size={20} className="option-check" />
          )}
        </button>
      ))}
    </div>
  );
};

export default MultipleChoice;
