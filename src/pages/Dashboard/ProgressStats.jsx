import { useProgress } from '../../context/ProgressContext';
import XPBar from '../../components/progress/XPBar';
import BadgeDisplay from '../../components/progress/BadgeDisplay';
import LevelUpModal from '../../components/progress/LevelUpModal';
import './ProgressStats.css';

const ProgressStats = () => {
  const { level, xp, badges, statistics, showLevelUp, newLevel, closeLevelUp } = useProgress();

  const getModuleName = (key) => {
    const names = {
      arithmetic: 'Số học',
      geometry: 'Hình học',
      motion: 'Chuyển động',
      logic: 'Tư duy Logic'
    };
    return names[key] || key;
  };

  const calculateAccuracy = (module) => {
    if (module.attempted === 0) return 0;
    return Math.round((module.correct / module.attempted) * 100);
  };

  return (
    <div className="progress-stats">
      <XPBar 
        currentXP={xp} 
        level={level}
        showLevelUp={showLevelUp}
      />

      <div className="stats-section">
        <h3 className="stats-title">Thống kê theo chủ đề</h3>
        <div className="stats-grid">
          {Object.entries(statistics).map(([key, value]) => (
            <div key={key} className="stat-card">
              <span className="stat-name">{getModuleName(key)}</span>
              <div className="stat-details">
                <span className="stat-value">{value.attempted} câu</span>
                <span className={`stat-accuracy accuracy-${calculateAccuracy(value) >= 70 ? 'good' : calculateAccuracy(value) >= 50 ? 'medium' : 'low'}`}>
                  {calculateAccuracy(value)}% đúng
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BadgeDisplay badges={badges} unlockedBadges={badges} />

      <LevelUpModal 
        isOpen={showLevelUp} 
        onClose={closeLevelUp} 
        newLevel={newLevel}
      />
    </div>
  );
};

export default ProgressStats;
