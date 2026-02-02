import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Trophy, X } from 'lucide-react';
import './LevelUpModal.css';

const LevelUpModal = ({ isOpen, onClose, newLevel }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="level-up-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="level-up-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="level-up-close" onClick={onClose}>
              <X size={20} />
            </button>

            <div className="level-up-icon">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <Trophy size={48} />
              </motion.div>
            </div>

            <h2 className="level-up-title">
              <Sparkles size={24} />
              Chúc mừng!
              <Sparkles size={24} />
            </h2>

            <div className="level-up-badge">
              <Star size={32} fill="currentColor" />
              <span>Level {newLevel}</span>
            </div>

            <p className="level-up-message">
              Bạn đã lên level! Tiếp tục phát huy nhé!
            </p>

            <div className="level-up-rewards">
              <div className="reward-item">
                <span className="reward-label">Phần thưởng:</span>
                <span className="reward-value">+50 XP Bonus</span>
              </div>
              <div className="reward-item">
                <span className="reward-label">Mở khóa:</span>
                <span className="reward-value">Câu hỏi nâng cao mới</span>
              </div>
            </div>

            <button className="level-up-button gradient-button" onClick={onClose}>
              Tiếp tục học tập!
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LevelUpModal;
