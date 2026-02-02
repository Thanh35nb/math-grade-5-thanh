import { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './HintButton.css';

const HintButton = ({ hints, onHintUsed }) => {
  const [showHints, setShowHints] = useState(false);
  const [revealedHints, setRevealedHints] = useState(0);

  const handleRevealHint = () => {
    if (revealedHints === 0) {
      onHintUsed();
    }
    setRevealedHints(prev => Math.min(prev + 1, hints.length));
    setShowHints(true);
  };

  return (
    <div className="hint-section">
      {!showHints ? (
        <button 
          className="hint-button glass-button"
          onClick={() => setShowHints(true)}
        >
          <Lightbulb size={18} />
          <span>Cần gợi ý?</span>
          <span className="hint-penalty-badge">-50% XP</span>
        </button>
      ) : (
        <div className="hints-panel animate-fade-slide-in">
          <div className="hints-header">
            <div className="hints-title">
              <Lightbulb size={18} />
              <span>Gợi ý ({revealedHints}/{hints.length})</span>
            </div>
            <button 
              className="hints-toggle"
              onClick={() => setShowHints(!showHints)}
            >
              {showHints ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {showHints && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="hints-list"
              >
                {hints.map((hint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: index < revealedHints ? 1 : 0.3, x: 0 }}
                    className={`hint-item ${index < revealedHints ? 'hint-revealed' : 'hint-locked'}`}
                  >
                    <span className="hint-number">{index + 1}</span>
                    <p className="hint-text">{hint}</p>
                  </motion.div>
                ))}

                {revealedHints < hints.length && (
                  <button 
                    className="reveal-hint-button"
                    onClick={handleRevealHint}
                  >
                    <Lightbulb size={16} />
                    Hiện gợi ý tiếp theo
                  </button>
                )}

                {revealedHints > 0 && (
                  <div className="hint-warning">
                    <AlertTriangle size={14} />
                    <span>Lưu ý: Dùng gợi ý sẽ giảm 50% XP nhận được!</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default HintButton;
