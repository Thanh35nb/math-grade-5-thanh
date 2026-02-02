import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';
import './XPBar.css';

const XPBar = ({ currentXP, level, showLevelUp }) => {
  const xpToNextLevel = level * 100;
  const progress = Math.min((currentXP / xpToNextLevel) * 100, 100);
  const remainingXP = xpToNextLevel - currentXP;

  return (
    <div className="xp-bar-container">
      <div className="xp-bar-header">
        <div className="level-badge">
          <Star size={16} fill="currentColor" />
          <span>Level {level}</span>
        </div>
        <div className="xp-info">
          <TrendingUp size={14} />
          <span>{currentXP} / {xpToNextLevel} XP</span>
        </div>
      </div>

      <div className="xp-progress-wrapper">
        <motion.div
          className="xp-progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="xp-progress-shine" />
        </motion.div>
        
        {showLevelUp && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="level-up-indicator"
          >
            LEVEL UP!
          </motion.div>
        )}
      </div>

      <div className="xp-remaining">
        Còn {remainingXP} XP để lên level {level + 1}
      </div>
    </div>
  );
};

export default XPBar;
