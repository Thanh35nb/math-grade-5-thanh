import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, FileText, Printer, X, CheckCircle, AlertCircle } from 'lucide-react';
import './ExamSetup.css';

const MODULES = [
  { id: 'arithmetic', name: 'Số học', total: 30, color: '#667eea' },
  { id: 'geometry', name: 'Hình học', total: 30, color: '#f093fb' },
  { id: 'motion', name: 'Chuyển động', total: 25, color: '#4facfe' },
  { id: 'logic', name: 'Tư duy Logic', total: 25, color: '#43e97b' }
];

const TIME_OPTIONS = [
  { label: '30 phút', minutes: 30 },
  { label: '45 phút', minutes: 45 },
  { label: '60 phút', minutes: 60 },
  { label: '90 phút', minutes: 90 },
  { label: '120 phút', minutes: 120 }
];

const QUESTION_COUNTS = [10, 20, 30, 40, 50];

const ExamSetup = ({ onStartExam, onCancel }) => {
  const [selectedModules, setSelectedModules] = useState({
    arithmetic: 10,
    geometry: 5,
    motion: 5,
    logic: 5
  });
  const [timeLimit, setTimeLimit] = useState(45);
  const [examMode, setExamMode] = useState('online'); // 'online' | 'print'
  const [errors, setErrors] = useState([]);

  const totalQuestions = Object.values(selectedModules).reduce((a, b) => a + b, 0);

  const handleModuleChange = (moduleId, count) => {
    setSelectedModules(prev => ({
      ...prev,
      [moduleId]: Math.max(0, Math.min(count, MODULES.find(m => m.id === moduleId).total))
    }));
    setErrors([]);
  };

  const handleQuickSelect = (total) => {
    const perModule = Math.floor(total / 4);
    const remainder = total % 4;
    
    setSelectedModules({
      arithmetic: perModule + (remainder > 0 ? 1 : 0),
      geometry: perModule + (remainder > 1 ? 1 : 0),
      motion: perModule + (remainder > 2 ? 1 : 0),
      logic: perModule
    });
  };

  const validate = () => {
    const newErrors = [];
    
    if (totalQuestions === 0) {
      newErrors.push('Vui lòng chọn ít nhất 1 câu hỏi');
    }
    
    if (totalQuestions > 50) {
      newErrors.push('Tối đa 50 câu hỏi cho một đề');
    }

    const activeModules = Object.entries(selectedModules).filter(([_, count]) => count > 0);
    if (activeModules.length === 0) {
      newErrors.push('Vui lòng chọn ít nhất 1 chủ đề');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleStart = () => {
    if (!validate()) return;

    onStartExam({
      modules: selectedModules,
      totalQuestions,
      timeLimit,
      mode: examMode
    });
  };

  return (
    <div className="exam-setup-overlay">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="exam-setup-modal"
      >
        <div className="exam-setup-header">
          <h2 className="exam-setup-title">
            <FileText size={24} />
            Tạo đề tổng hợp
          </h2>
          <button className="exam-setup-close" onClick={onCancel}>
            <X size={20} />
          </button>
        </div>

        <div className="exam-setup-content">
          {/* Chế độ làm bài */}
          <div className="setup-section">
            <label className="setup-label">Chế độ làm bài</label>
            <div className="exam-mode-toggle">
              <button
                className={`mode-btn ${examMode === 'online' ? 'active' : ''}`}
                onClick={() => setExamMode('online')}
              >
                <Clock size={18} />
                Làm trực tuyến
              </button>
              <button
                className={`mode-btn ${examMode === 'print' ? 'active' : ''}`}
                onClick={() => setExamMode('print')}
              >
                <Printer size={18} />
                In đề ra giấy
              </button>
            </div>
          </div>

          {/* Chọn nhanh số câu */}
          <div className="setup-section">
            <label className="setup-label">Chọn nhanh tổng số câu</label>
            <div className="quick-select">
              {QUESTION_COUNTS.map(count => (
                <button
                  key={count}
                  className={`quick-btn ${totalQuestions === count ? 'active' : ''}`}
                  onClick={() => handleQuickSelect(count)}
                >
                  {count} câu
                </button>
              ))}
            </div>
          </div>

          {/* Chọn số câu mỗi chủ đề */}
          <div className="setup-section">
            <label className="setup-label">Số câu theo chủ đề</label>
            <div className="module-selection">
              {MODULES.map(module => (
                <div key={module.id} className="module-input-row">
                  <div className="module-info">
                    <div className="module-color" style={{ background: module.color }} />
                    <span className="module-name">{module.name}</span>
                    <span className="module-total">(tối đa {module.total})</span>
                  </div>
                  <div className="module-input-group">
                    <button
                      className="input-btn"
                      onClick={() => handleModuleChange(module.id, selectedModules[module.id] - 1)}
                      disabled={selectedModules[module.id] <= 0}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="0"
                      max={module.total}
                      value={selectedModules[module.id]}
                      onChange={(e) => handleModuleChange(module.id, parseInt(e.target.value) || 0)}
                      className="module-input"
                    />
                    <button
                      className="input-btn"
                      onClick={() => handleModuleChange(module.id, selectedModules[module.id] + 1)}
                      disabled={selectedModules[module.id] >= module.total}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tổng số câu */}
          <div className="setup-section">
            <div className="total-display">
              <span className="total-label">Tổng số câu:</span>
              <span className={`total-value ${totalQuestions > 50 ? 'error' : ''}`}>
                {totalQuestions}
              </span>
            </div>
          </div>

          {/* Thời gian */}
          {examMode === 'online' && (
            <div className="setup-section">
              <label className="setup-label">Thời gian làm bài</label>
              <div className="time-options">
                {TIME_OPTIONS.map(option => (
                  <button
                    key={option.minutes}
                    className={`time-btn ${timeLimit === option.minutes ? 'active' : ''}`}
                    onClick={() => setTimeLimit(option.minutes)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <p className="time-hint">
                Gợi ý: {Math.ceil(totalQuestions * 1.5)} phút cho {totalQuestions} câu (1.5 phút/câu)
              </p>
            </div>
          )}

          {/* Errors */}
          {errors.length > 0 && (
            <div className="setup-errors">
              {errors.map((error, index) => (
                <div key={index} className="error-item">
                  <AlertCircle size={16} />
                  {error}
                </div>
              ))}
            </div>
          )}

          {/* Thông tin đề thi */}
          <div className="exam-info">
            <div className="info-row">
              <CheckCircle size={16} className="info-icon" />
              <span>
                {examMode === 'online' 
                  ? `Làm trực tuyến với thời gian đếm ngược ${timeLimit} phút`
                  : 'In đề ra A4 để làm trên giấy (có đáp án riêng)'
                }
              </span>
            </div>
          </div>
        </div>

        <div className="exam-setup-footer">
          <button className="btn-cancel glass-button" onClick={onCancel}>
            Hủy
          </button>
          <button className="btn-start gradient-button" onClick={handleStart}>
            {examMode === 'online' ? 'Bắt đầu làm bài' : 'Tạo đề in'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExamSetup;
