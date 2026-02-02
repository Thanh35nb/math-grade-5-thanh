import { CheckCircle, XCircle, Sparkles, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import './FeedbackPanel.css';

const FeedbackPanel = ({ isCorrect, earnedXP, hintUsed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`feedback-panel ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}
    >
      <div className="feedback-icon">
        {isCorrect ? <CheckCircle size={32} /> : <XCircle size={32} />}
      </div>
      
      <div className="feedback-content">
        <h4 className="feedback-title">
          {isCorrect ? 'Chính xác! 🎉' : 'Chưa đúng rồi!'}
        </h4>
        
        <p className="feedback-message">
          {isCorrect 
            ? 'Tuyệt vời! Bạn đã trả lời đúng.' 
            : 'Đừng nản lòng! Hãy xem lời giải để hiểu rõ hơn.'}
        </p>

        {isCorrect && (
          <div className="xp-earned">
            <Sparkles size={16} />
            <span>+{earnedXP} XP</span>
            {hintUsed && (
              <span className="hint-penalty">
                <Lightbulb size={14} />
                (Đã dùng gợi ý -50%)
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeedbackPanel;
