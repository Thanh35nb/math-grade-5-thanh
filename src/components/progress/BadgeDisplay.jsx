import { motion } from 'framer-motion';
import { Award, Lock, Star, Zap, Target, BookOpen, Trophy, Flame } from 'lucide-react';
import './BadgeDisplay.css';

const badgeIcons = {
  first_steps: Star,
  geometry_novice: BookOpen,
  arithmetic_master: Zap,
  speed_solver: Flame,
  challenge_champion: Trophy,
  logic_wizard: Target,
  all_rounder: Award,
};

const BadgeDisplay = ({ badges, unlockedBadges }) => {
  const allBadges = [
    { id: 'first_steps', name: 'Bước đầu tiên', description: 'Hoàn thành câu hỏi đầu tiên', color: 'var(--gradient-primary)' },
    { id: 'geometry_novice', name: 'Học sinh Hình học', description: 'Hoàn thành 10 câu Hình học', color: 'var(--gradient-geometry)' },
    { id: 'arithmetic_master', name: 'Bậc thầy Số học', description: 'Hoàn thành 20 câu Số học', color: 'var(--gradient-arithmetic)' },
    { id: 'speed_solver', name: 'Giải nhanh', description: 'Trả lời đúng trong 10 giây', color: 'var(--gradient-motion)' },
    { id: 'challenge_champion', name: 'Nhà vô địch', description: 'Hoàn thành 10 câu liên tiếp đúng', color: 'var(--gradient-logic)' },
    { id: 'logic_wizard', name: 'Phù thủy Logic', description: 'Hoàn thành tất cả câu Tư duy', color: 'var(--gradient-primary)' },
    { id: 'all_rounder', name: 'Toàn diện', description: 'Hoàn thành ít nhất 10 câu mỗi chủ đề', color: 'var(--gradient-warning)' },
  ];

  return (
    <div className="badge-display">
      <h3 className="badge-title">
        <Award size={20} />
        Huy hiệu đạt được
      </h3>

      <div className="badge-grid">
        {allBadges.map((badge) => {
          const isUnlocked = unlockedBadges?.includes(badge.id);
          const Icon = badgeIcons[badge.id] || Star;

          return (
            <motion.div
              key={badge.id}
              initial={isUnlocked ? { scale: 0, rotate: -180 } : { scale: 1 }}
              animate={isUnlocked ? { scale: 1, rotate: 0 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`badge-item ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}`}
            >
              <div 
                className="badge-icon-wrapper"
                style={{ background: isUnlocked ? badge.color : 'var(--color-gray-700)' }}
              >
                {isUnlocked ? (
                  <Icon size={24} />
                ) : (
                  <Lock size={20} />
                )}
              </div>
              
              <div className="badge-info">
                <span className="badge-name">{badge.name}</span>
                <span className="badge-description">{badge.description}</span>
              </div>

              {isUnlocked && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="badge-shine"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="badge-progress">
        <span>Đã đạt: {unlockedBadges?.length || 0} / {allBadges.length} huy hiệu</span>
        <div className="badge-progress-bar">
          <div 
            className="badge-progress-fill"
            style={{ width: `${((unlockedBadges?.length || 0) / allBadges.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BadgeDisplay;
