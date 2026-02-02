import { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import './InputAnswer.css';

const InputAnswer = ({ expectedAnswer, onSubmit, disabled, showCorrect }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!value.trim()) {
      setIsValid(false);
      return;
    }
    
    setIsValid(true);
    onSubmit(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="input-answer">
      <div className={`input-wrapper ${!isValid ? 'input-invalid' : ''} ${showCorrect ? 'input-disabled' : ''}`}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setIsValid(true);
          }}
          placeholder="Nhập câu trả lời của bạn..."
          disabled={disabled}
          className="answer-input"
        />
        
        {!disabled && (
          <button type="submit" className="submit-button" disabled={!value.trim()}>
            <Send size={18} />
            <span>Gửi</span>
          </button>
        )}

        {showCorrect && (
          <div className={`result-icon ${value === expectedAnswer ? 'result-correct' : 'result-wrong'}`}>
            {value === expectedAnswer ? <CheckCircle size={24} /> : <XCircle size={24} />}
          </div>
        )}
      </div>

      {!isValid && (
        <p className="error-message">Vui lòng nhập câu trả lời!</p>
      )}

      {showCorrect && value !== expectedAnswer && (
        <div className="correct-answer-display">
          <span>Đáp án đúng: </span>
          <strong>{expectedAnswer}</strong>
        </div>
      )}
    </form>
  );
};

export default InputAnswer;
