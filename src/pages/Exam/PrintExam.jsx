import { useEffect, useState } from 'react';
import { Printer, X, FileText, CheckCircle } from 'lucide-react';
import arithmeticQuestions from '../../modules/arithmetic/questions';
import geometryQuestions from '../../modules/geometry/questions';
import motionQuestions from '../../modules/motion/questions';
import logicQuestions from '../../modules/logic/questions';
import './PrintExam.css';

const allQuestions = {
  arithmetic: arithmeticQuestions,
  geometry: geometryQuestions,
  motion: motionQuestions,
  logic: logicQuestions
};

const PrintExam = ({ config, onClose }) => {
  const [examQuestions, setExamQuestions] = useState([]);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    const questions = [];
    
    Object.entries(config.modules).forEach(([moduleId, count]) => {
      if (count > 0) {
        const moduleQuestions = allQuestions[moduleId] || [];
        const shuffled = [...moduleQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, count).map(q => ({
          ...q,
          moduleName: getModuleName(moduleId)
        }));
        questions.push(...selected);
      }
    });

    setExamQuestions(questions.sort(() => Math.random() - 0.5));
  }, [config]);

  const getModuleName = (id) => {
    const names = {
      arithmetic: 'Số học',
      geometry: 'Hình học',
      motion: 'Chuyển động',
      logic: 'Tư duy Logic'
    };
    return names[id] || id;
  };

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  if (examQuestions.length === 0) {
    return <div className="print-loading">Đang tạo đề thi...</div>;
  }

  return (
    <div className="print-exam-overlay">
      <div className="print-exam-container">
        {/* Toolbar */}
        <div className="print-toolbar no-print">
          <div className="toolbar-left">
            <FileText size={20} />
            <span>Đề thi tổng hợp - {examQuestions.length} câu</span>
          </div>
          
          <div className="toolbar-center">
            <button 
              className={`toggle-btn ${!showAnswerKey ? 'active' : ''}`}
              onClick={() => setShowAnswerKey(false)}
            >
              Đề thi
            </button>
            <button 
              className={`toggle-btn ${showAnswerKey ? 'active' : ''}`}
              onClick={() => setShowAnswerKey(true)}
            >
              Đáp án
            </button>
          </div>

          <div className="toolbar-right">
            <button className="print-btn" onClick={handlePrint}>
              <Printer size={18} />
              In đề
            </button>
            <button className="close-btn" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Exam Paper */}
        <div className="exam-paper">
          {!showAnswerKey ? (
            // Question Paper
            <>
              <div className="paper-header">
                <h1 className="paper-title">ĐỀ KIỂM TRA TOÁN LỚP 5</h1>
                <div className="paper-meta">
                  <p><strong>Môn:</strong> Toán tổng hợp</p>
                  <p><strong>Ngày:</strong> {currentDate}</p>
                  <p><strong>Thời gian:</strong> {Math.ceil(examQuestions.length * 1.5)} phút</p>
                  <p><strong>Số câu:</strong> {examQuestions.length} câu</p>
                </div>
                <div className="student-info">
                  <div className="info-row">
                    <span>Họ và tên:</span>
                    <div className="info-line"></div>
                  </div>
                  <div className="info-row">
                    <span>Lớp:</span>
                    <div className="info-line short"></div>
                  </div>
                </div>
              </div>

              <div className="questions-list">
                {examQuestions.map((q, index) => (
                  <div key={q.id} className="question-item">
                    <div className="question-header-row">
                      <span className="question-num">Câu {index + 1}.</span>
                      <span className="question-module">({q.moduleName})</span>
                      <span className="question-points">({q.xp} điểm)</span>
                    </div>
                    <p className="question-text-print">{q.question}</p>
                    
                    {q.type === 'multiple-choice' && (
                      <div className="options-print">
                        {q.options.map((opt, idx) => (
                          <div key={idx} className="option-print">
                            <span className="option-letter">{String.fromCharCode(65 + idx)}.</span>
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {q.type === 'input' && (
                      <div className="answer-blank">
                        <span>Đáp án: </span>
                        <div className="blank-line"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="paper-footer">
                <p>--- Hết ---</p>
                <p className="good-luck">Chúc các em làm bài tốt!</p>
              </div>
            </>
          ) : (
            // Answer Key
            <>
              <div className="paper-header">
                <h1 className="paper-title">ĐÁP ÁN - ĐỀ KIỂM TRA TOÁN LỚP 5</h1>
                <div className="paper-meta">
                  <p><strong>Ngày:</strong> {currentDate}</p>
                  <p><strong>Tổng số câu:</strong> {examQuestions.length} câu</p>
                </div>
              </div>

              <div className="answer-key">
                <h3>Bảng đáp án:</h3>
                <div className="answer-grid">
                  {examQuestions.map((q, index) => (
                    <div key={q.id} className="answer-item">
                      <span className="answer-num">{index + 1}</span>
                      <span className="answer-value">{q.correctAnswer}</span>
                    </div>
                  ))}
                </div>

                <div className="detailed-solutions">
                  <h3>Lời giải chi tiết:</h3>
                  {examQuestions.map((q, index) => (
                    <div key={q.id} className="solution-item">
                      <div className="solution-header">
                        <CheckCircle size={16} />
                        <strong>Câu {index + 1}:</strong> Đáp án: {q.correctAnswer}
                      </div>
                      <div className="solution-steps">
                        {q.explanation?.steps?.map((step, idx) => (
                          <p key={idx} className="solution-step">{step}</p>
                        ))}
                        {q.explanation?.tips && (
                          <p className="solution-tips">
                            <strong>Mẹo:</strong> {q.explanation.tips}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrintExam;
