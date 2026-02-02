import { motion } from 'framer-motion';
import { BookOpen, Star, CheckCircle2, XCircle } from 'lucide-react';
import './SolutionPanel.css';

const SolutionPanel = ({ steps, tips, isCorrect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="solution-panel"
    >
      <div className="solution-header">
        <BookOpen size={20} />
        <h4>Lời giải chi tiết</h4>
        {isCorrect ? (
          <span className="solution-status status-correct">
            <CheckCircle2 size={16} />
            Đúng
          </span>
        ) : (
          <span className="solution-status status-wrong">
            <XCircle size={16} />
            Sai
          </span>
        )}
      </div>

      <div className="solution-steps">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="solution-step"
          >
            <span className="step-number">{index + 1}</span>
            <p className="step-text">{step}</p>
          </motion.div>
        ))}
      </div>

      {tips && (
        <div className="solution-tips">
          <div className="tips-header">
            <Star size={16} />
            <span>Mẹo hay</span>
          </div>
          <p className="tips-text">{tips}</p>
        </div>
      )}
    </motion.div>
  );
};

export default SolutionPanel;
