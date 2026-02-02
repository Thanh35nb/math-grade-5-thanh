import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = ({ onStart }) => {
  const handleStart = () => {
    if (onStart) {
      onStart();
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="hero-blob blob-3"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Ứng dụng học toán lớp 5 tốt nhất</span>
          </div>

          <h1 className="hero-title">
            Học Toán Lớp 5
            <span className="text-gradient"> Thật Dễ Dàng</span>
          </h1>

          <p className="hero-description">
            Khám phá thế giới toán học thú vị với 110+ bài tập từ cơ bản đến nâng cao. 
            Rèn luyện tư duy logic, chuẩn bị cho các kỳ thi Olympic với hệ thống gamification hấp dẫn.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">110+</span>
              <span className="stat-label">Bài tập</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Chủ đề</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">Niềm vui</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="hero-button-primary gradient-button" onClick={handleStart}>
              <Calculator size={20} />
              Bắt đầu học ngay
              <ArrowRight size={18} />
            </button>
            <a href="#features" className="hero-button-secondary glass-button">
              Tìm hiểu thêm
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="hero-card glass-card animate-float">
            <div className="hero-card-icon">
              <Calculator size={40} />
            </div>
            <div className="hero-card-content">
              <span className="hero-card-label">Số học</span>
              <span className="hero-card-value">2/3 + 1/4 = ?</span>
            </div>
          </div>

          <div className="hero-card glass-card animate-float stagger-1">
            <div className="hero-card-icon geometry">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12,2 22,22 2,22" />
              </svg>
            </div>
            <div className="hero-card-content">
              <span className="hero-card-label">Hình học</span>
              <span className="hero-card-value">S = 1/2 × a × h</span>
            </div>
          </div>

          <div className="hero-card glass-card animate-float stagger-2">
            <div className="hero-card-icon motion">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="hero-card-content">
              <span className="hero-card-label">Chuyển động</span>
              <span className="hero-card-value">v = s ÷ t</span>
            </div>
          </div>

          <div className="hero-card glass-card animate-float stagger-3">
            <div className="hero-card-icon logic">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="hero-card-content">
              <span className="hero-card-label">Tư duy</span>
              <span className="hero-card-value">1, 1, 2, 3, 5...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
