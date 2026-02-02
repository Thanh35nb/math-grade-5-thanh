import { useState } from 'react';
import { FileText, Clock, Printer } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Container from '../../components/layout/Container';
import ModuleMap from './ModuleMap';
import ProgressStats from './ProgressStats';
import './Dashboard.css';

const Dashboard = ({ onStartPractice, onStartExam }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleSelectModule = (moduleId) => {
    setSelectedModule(moduleId);
    if (moduleId) {
      onStartPractice?.(moduleId, 'practice');
    }
  };

  return (
    <div className="dashboard-page">
      <Header />
      
      <main className="dashboard-main">
        <Container>
          <div className="dashboard-header">
            <h1 className="dashboard-title">Bảng điều khiển</h1>
            <p className="dashboard-subtitle">
              Chọn một module để bắt đầu học hoặc xem tiến độ của bạn
            </p>
          </div>

          {/* Exam Mode Section */}
          <div className="exam-section">
            <h2 className="exam-section-title">
              <FileText size={24} />
              Đề kiểm tra tổng hợp
            </h2>
            <p className="exam-section-desc">
              Tạo đề thi với câu hỏi từ nhiều chủ đề, có thời gian làm bài và in ra giấy
            </p>
            <div className="exam-actions">
              <button className="exam-btn primary" onClick={() => onStartExam?.()}>
                <Clock size={18} />
                Làm đề trực tuyến
              </button>
              <button className="exam-btn secondary" onClick={() => onStartExam?.()}>
                <Printer size={18} />
                Tạo đề in
              </button>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-modules">
              <ModuleMap onSelectModule={handleSelectModule} />
            </div>
            
            <div className="dashboard-stats">
              <ProgressStats />
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
