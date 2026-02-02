import { useState } from 'react';
import { Heart, Github, Mail, Share2, Copy, Check, ExternalLink, Shield } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:5173';
  const shareText = 'Math Grade 5 - Ứng dụng học toán lớp 5 tuyệt vời với 110+ bài tập từ cơ bản đến nâng cao!';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Math Grade 5',
          text: shareText,
          url: shareUrl
        });
      } catch (err) {
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MathGrade5</h3>
            <p className="footer-description">
              Ứng dụng học toán lớp 5 tương tác với hệ thống bài tập từ cơ bản đến nâng cao, 
              giúp học sinh rèn luyện tư duy logic và chuẩn bị cho các kỳ thi Olympic.
            </p>
            <div className="footer-share">
              <button className="share-btn" onClick={handleShare}>
                <Share2 size={16} />
                Chia sẻ ứng dụng
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Liên kết</h4>
            <ul className="footer-links">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#dashboard">Bảng điều khiển</a></li>
              <li><a href="#practice">Luyện tập</a></li>
              <li><a href="#exam">Đề kiểm tra</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Chủ đề</h4>
            <ul className="footer-links">
              <li><a href="#arithmetic">Số học</a></li>
              <li><a href="#geometry">Hình học</a></li>
              <li><a href="#motion">Chuyển động</a></li>
              <li><a href="#logic">Tư duy Logic</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Pháp lý</h4>
            <ul className="footer-links">
              <li>
                <button className="footer-link-btn" onClick={() => setShowTerms(true)}>
                  <Shield size={16} />
                  <span>Điều khoản sử dụng</span>
                </button>
              </li>
              <li>
                <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="footer-link-with-icon">
                  <ExternalLink size={16} />
                  <span>Giấy phép MIT</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@mathgrade5.com" className="footer-link-with-icon">
                  <Mail size={16} />
                  <span>Liên hệ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} MathGrade5. Bản quyền thuộc về tác giả. 
            <span className="license-badge">MIT License</span>
          </p>
          <p className="footer-made-with">
            Made with <Heart size={14} className="heart-icon" /> for education
          </p>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="share-modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="share-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Chia sẻ ứng dụng</h3>
            <p>Copy link và gửi cho bạn bè</p>
            <div className="share-link-box">
              <input 
                type="text" 
                value={shareUrl} 
                readOnly 
                className="share-link-input"
              />
              <button className="copy-btn" onClick={handleCopyLink}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Đã copy!' : 'Copy'}
              </button>
            </div>
            <div className="share-social">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
              >
                Facebook
              </a>
              <a 
                href={`https://zalo.me/share?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn zalo"
              >
                Zalo
              </a>
            </div>
            <button className="close-modal-btn" onClick={() => setShowShareModal(false)}>
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div className="terms-modal-overlay" onClick={() => setShowTerms(false)}>
          <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Điều khoản sử dụng & Bản quyền</h2>
            <div className="terms-content">
              <h3>© 2025 Math Grade 5 - Bản quyền thuộc về tác giả</h3>
              
              <h4>1. Giấy phép sử dụng (MIT License)</h4>
              <p>Ứng dụng này được phát hành dưới giấy phép MIT, cho phép:</p>
              <ul>
                <li>✅ Sử dụng miễn phí cho mục đích giáo dục</li>
                <li>✅ Chia sẻ link cho bạn bè, học sinh</li>
                <li>✅ Sửa đổi và tùy biến theo nhu cầu</li>
                <li>✅ Sử dụng cho cá nhân hoặc trường học</li>
              </ul>

              <h4>2. Điều kiện bắt buộc</h4>
              <ul>
                <li>📌 Giữ nguyên thông báo bản quyền khi chia sẻ</li>
                <li>📌 Không sử dụng cho mục đích thương mại mà không có sự cho phép</li>
                <li>📌 Không đăng ký bản quyền nội dung làm của riêng</li>
              </ul>

              <h4>3. Miễn trừ trách nhiệm</h4>
              <p>Phần mềm được cung cấp "nguyên trạng" không có bảo hành. Tác giả không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng phần mềm.</p>

              <h4>4. Bản quyền nội dung</h4>
              <p>110+ câu hỏi và lời giải trong ứng dụng là tài sản trí tuệ được bảo vệ. 
                 Bạn có thể sử dụng cho mục đích học tập cá nhân nhưng không được phép 
                 sao chép toàn bộ để bán hoặc phân phối lại dưới dạng tài liệu riêng.</p>

              <div className="license-info">
                <strong>Giấy phép:</strong> MIT License<br/>
                <strong>Copyright:</strong> © 2025 Math Grade 5<br/>
                <strong>Liên hệ:</strong> support@mathgrade5.com
              </div>
            </div>
            <button className="close-modal-btn" onClick={() => setShowTerms(false)}>
              Tôi đã hiểu
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
