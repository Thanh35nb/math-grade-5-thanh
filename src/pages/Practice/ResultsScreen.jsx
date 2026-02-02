import { motion } from 'framer-motion';
import { Trophy, Star, Target, RotateCcw, Home } from 'lucide-react';
import './ResultsScreen.css';

const ResultsScreen = ({ stats, onRestart, onHome }) => {
  const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

  const getMessage = () => {
    if (accuracy >= 90) return 'Xuất sắc! 🌟';
    if (accuracy >= 70) return 'Rất tốt! 👏';
    if (accuracy >= 50) return 'Cố lên! 💪';
    return 'Đừng bỏ cuộc! 🎯';
  };

  const getGrade = () => {
    if (accuracy >= 90) return 'A';
    if (accuracy >= 80) return 'B';
    if (accuracy >= 70) return 'C';
    if (accuracy >= 60) return 'D';
    return 'F';
  };

  return (
    <div className="results-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="results-card"
      >
        <div className="results-icon">
          <Trophy size={48} />
        </div>

        <h2 className="results-title">{getMessage()}</h2>

        <div className="results-grade">{getGrade()}</div>

        <div className="results-stats">
          <div className="result-stat">
            <Target size={20} />
            <span className="stat-label">Đúng</span>
            <span className="stat-value">{stats.correct}/{stats.total}</span>
          </div>

          <div className="result-stat">
            <Star size={20} />
            <span className="stat-label">Chính xác</span>
            <span className="stat-value">{accuracy}%</span>
          </div>

          <div className="result-stat">
            <Trophy size={20} />
            <span className="stat-label">XP nhận được</span>
            <span className="stat-value">+{stats.xp}</span>
          </div>
        </div>

        <div className="results-actions">
          <button className="results-button primary gradient-button" onClick={onRestart}>
            <RotateCcw size={18} />
            Làm lại
          </button>
          <button className="results-button secondary glass-button" onClick={onHome}>
            <Home size={18} />
            Về trang chủ
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;
