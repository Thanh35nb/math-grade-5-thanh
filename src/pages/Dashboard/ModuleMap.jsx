import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Calculator, Shapes, Zap, Brain, ChevronRight } from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import './ModuleMap.css';

const modules = [
  {
    id: 'arithmetic',
    name: 'Số học',
    description: 'Phân số, số thập phân, cấu tạo số',
    icon: Calculator,
    color: 'var(--gradient-arithmetic)',
    totalQuestions: 30,
    locked: false
  },
  {
    id: 'geometry',
    name: 'Hình học',
    description: 'Diện tích, thể tích các hình',
    icon: Shapes,
    color: 'var(--gradient-geometry)',
    totalQuestions: 30,
    locked: false
  },
  {
    id: 'motion',
    name: 'Chuyển động',
    description: 'Vận tốc, quãng đường, thời gian',
    icon: Zap,
    color: 'var(--gradient-motion)',
    totalQuestions: 25,
    locked: true
  },
  {
    id: 'logic',
    name: 'Tư duy Logic',
    description: 'Dãy số, logic, tổ hợp',
    icon: Brain,
    color: 'var(--gradient-logic)',
    totalQuestions: 25,
    locked: true
  }
];

const ModuleMap = ({ onSelectModule }) => {
  const { level, completedQuestions } = useProgress();
  const [selectedModule, setSelectedModule] = useState(null);

  const getModuleProgress = (moduleId) => {
    const moduleQuestions = completedQuestions.filter(id => id.startsWith(moduleId));
    return {
      completed: moduleQuestions.length,
      percentage: Math.round((moduleQuestions.length / modules.find(m => m.id === moduleId).totalQuestions) * 100)
    };
  };

  const isModuleUnlocked = (module, index) => {
    if (index === 0) return true;
    const prevModule = modules[index - 1];
    const prevProgress = getModuleProgress(prevModule.id);
    return prevProgress.percentage >= 30 || level >= (index + 1) * 2;
  };

  const handleModuleClick = (module, index) => {
    if (isModuleUnlocked(module, index)) {
      setSelectedModule(module.id);
      onSelectModule?.(module.id);
    }
  };

  return (
    <div className="module-map">
      <h2 className="module-map-title">Lộ trình học tập</h2>
      <p className="module-map-subtitle">Hoàn thành 30% mỗi module để mở khóa module tiếp theo</p>

      <div className="modules-list">
        {modules.map((module, index) => {
          const progress = getModuleProgress(module.id);
          const unlocked = isModuleUnlocked(module, index);
          const Icon = module.icon;

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`module-item ${selectedModule === module.id ? 'module-selected' : ''} ${!unlocked ? 'module-locked' : ''}`}
              onClick={() => handleModuleClick(module, index)}
            >
              <div className="module-icon" style={{ background: module.color }}>
                <Icon size={24} />
              </div>

              <div className="module-info">
                <div className="module-header">
                  <h3 className="module-name">{module.name}</h3>
                  {unlocked ? (
                    <Unlock size={16} className="module-lock-icon unlocked" />
                  ) : (
                    <Lock size={16} className="module-lock-icon locked" />
                  )}
                </div>

                <p className="module-description">{module.description}</p>

                <div className="module-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress.percentage}%`, background: module.color }}
                    />
                  </div>
                  <span className="progress-text">
                    {progress.completed}/{module.totalQuestions} ({progress.percentage}%)
                  </span>
                </div>
              </div>

              {unlocked && (
                <ChevronRight size={20} className="module-arrow" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleMap;
