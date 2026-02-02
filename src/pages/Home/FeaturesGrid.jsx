import { motion } from 'framer-motion';
import { Calculator, Shapes, Zap, Brain, CheckCircle } from 'lucide-react';
import './FeaturesGrid.css';

const features = [
  {
    id: 'arithmetic',
    title: 'Số học',
    description: 'Phân số, số thập phân, các phép tính và chuyển đổi. Từ cơ bản đến nâng cao.',
    icon: Calculator,
    gradient: 'gradient-arithmetic',
    stats: '30 bài tập',
    topics: ['Phân số', 'Số thập phân', 'Chuyển đổi']
  },
  {
    id: 'geometry',
    title: 'Hình học',
    description: 'Diện tích tam giác, hình thang, hình tròn. Thể tích hình hộp chữ nhật.',
    icon: Shapes,
    gradient: 'gradient-geometry',
    stats: '30 bài tập',
    topics: ['Tam giác', 'Hình thang', 'Hình tròn']
  },
  {
    id: 'motion',
    title: 'Chuyển động',
    description: 'Các bài toán về vận tốc, quãng đường, thời gian. Ngược chiều, cùng chiều.',
    icon: Zap,
    gradient: 'gradient-motion',
    stats: '25 bài tập',
    topics: ['Vận tốc', 'Quãng đường', 'Thời gian']
  },
  {
    id: 'logic',
    title: 'Tư duy Logic',
    description: 'Dãy số, logic đơn giản, sắp xếp tổ hợp. Nguyên lý Dirichlet nâng cao.',
    icon: Brain,
    gradient: 'gradient-logic',
    stats: '25 bài tập',
    topics: ['Dãy số', 'Logic', 'Tổ hợp']
  }
];

const FeaturesGrid = ({ onSelectModule }) => {
  const handleModuleClick = (moduleId) => {
    if (onSelectModule) {
      onSelectModule(moduleId);
    }
  };
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="features-header"
        >
          <h2 className="features-title">
            4 Chủ đề <span className="text-gradient">toán học</span>
          </h2>
          <p className="features-description">
            Hệ thống bài tập đa dạng từ cơ bản đến nâng cao, 
            giúp bạn nắm vững kiến thức và phát triển tư duy
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`feature-card ${feature.gradient}`}
            >
              <div className="feature-icon-wrapper">
                <feature.icon size={32} />
              </div>

              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-topics">
                {feature.topics.map((topic, i) => (
                  <span key={i} className="feature-topic">
                    <CheckCircle size={12} />
                    {topic}
                  </span>
                ))}
              </div>

              <div className="feature-footer">
                <span className="feature-stats">{feature.stats}</span>
                <button className="feature-button" onClick={() => handleModuleClick(feature.id)}>
                  Học ngay →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
