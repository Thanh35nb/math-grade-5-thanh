import { motion } from 'framer-motion';
import { Trophy, Clock, Target, CheckCircle, XCircle, ArrowLeft, RotateCcw, FileText } from 'lucide-react';
import './ExamResults.css';

const ExamResults = ({ results, onExit, timeLimit }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins} phút ${secs} giây`;
  };

  const getGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A', label: 'Xuất sắc!', color: '#38c976' };
    if (percentage >= 80) return { grade: 'B', label: 'Rất tốt!', color: '#4facfe' };
    if (percentage >= 70) return { grade: 'C', label: 'Khá!', color: '#ffa726' };
    if (percentage >= 60) return { grade: 'D', label: 'Trung bình', color: '#f5576c' };
    return { grade: 'F', label: 'Cần cố gắng', color: '#ff5757' };
  };

  const gradeInfo = getGrade(results.percentage);

  return (
    <div className="exam-results">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="results-container"
      >
        {/* Header */}
        <div className="results-header">
          <div className="results-icon">
            <Trophy size={40} />
          </div>
          <h2 className="results-title">Kết quả bài kiểm tra</h2>
          <p className="results-subtitle">{gradeInfo.label}</p>
        </div>

        {/* Grade Circle */}
        <div 
          className="grade-circle"
          style={{ borderColor: gradeInfo.color, color: gradeInfo.color }}
        >
          <span className="grade-letter">{gradeInfo.grade}</span>
          <span className="grade-percentage">{results.percentage}%</span>
        </div>

        {/* Stats Grid */}
        <div className="results-stats-grid">
          <div className="stat-box correct">
            <CheckCircle size={24} />
            <span className="stat-value">{results.correct}</span>
            <span className="stat-label">Câu đúng</span>
          </div>

          <div className="stat-box wrong">
            <XCircle size={24} />
            <span className="stat-value">{results.wrong}</span>
            <span className="stat-label">Câu sai</span>
          </div>

          <div className="stat-box total">
            <Target size={24} />
            <span className="stat-value">{results.total}</span>
            <span className="stat-label">Tổng câu</span>
          </div>

          <div className="stat-box xp">
            <Trophy size={24} />
            <span className="stat-value">+{results.xp}</span>
            <span className="stat-label">XP nhận</span>
          </div>

          <div className="stat-box time">
            <Clock size={24} />
            <span className="stat-value">{formatTime(results.timeUsed)}</span>
            <span className="stat-label">Thời gian</span>
          </div>

          <div className="stat-box accuracy">
            <Target size={24} />
            <span className="stat-value">{results.percentage}%</span>
            <span className="stat-label">Chính xác</span>
          </div>
        </div>

        {/* Answer Review */}
        <div className="answer-review">
          <h3 className="review-title">
            <FileText size={20} />
            Chi tiết bài làm
          </h3>

          <div className="review-list">
            {results.answers.map((answer, index) => (
              <div 
                key={answer.questionId} 
                className={`review-item ${answer.isCorrect ? 'correct' : 'wrong'}`}
              >
                <div className="review-number">{index + 1}</div>
                <div className="review-content">
                  <p className="review-question">{answer.question}</p>
                  <div className="review-answers">
                    <span className="user-answer">
                      Bạn chọn: {answer.userAnswer || 'Chưa trả lời'}
                    </span>
                    {!answer.isCorrect && (
                      <span className="correct-answer">
                        Đáp án đúng: {answer.correctAnswer}
                      </span>
                    )}
                  </div>
                </div>
                <div className="review-status">
                  {answer.isCorrect ? (
                    <CheckCircle size={20} className="status-icon correct" />
                  ) : (
                    <XCircle size={20} className="status-icon wrong" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="results-actions">
          <button className="action-btn secondary" onClick={onExit}>
            <ArrowLeft size={18} />
            Về trang chủ
          </button>
          <button className="action-btn primary gradient-button" onClick={onExit}>
            <RotateCcw size={18} />
            Làm đề khác
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExamResults;
