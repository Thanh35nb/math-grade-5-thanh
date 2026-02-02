# 🚀 HƯỚNG DẪN TRIỂN KHAI & CHIA SẺ

## ✅ Đã thêm bản quyền và tính năng chia sẻ!

### 📋 Bản quyền hiện tại:
- ✅ **LICENSE file** - Giấy phép MIT (cho phép sử dụng miễn phí)
- ✅ **Copyright headers** - Trong code nguồn
- ✅ **Footer cập nhật** - Hiển thị bản quyền + nút chia sẻ
- ✅ **Terms modal** - Điều khoản sử dụng chi tiết

---

## 🌐 5 CÁCH ĐỂ HOST & CHIA SẺ LINK

### Cách 1: Vercel (Khuyên dùng - Dễ nhất)

**Bước 1:** Cài Vercel CLI
```bash
npm i -g vercel
```

**Bước 2:** Deploy
```bash
cd E:\angy ty\kimi 25\math-grade-5
vercel --prod
```

**Bước 3:** Nhận link (ví dụ: `https://math-grade-5.vercel.app`)

**Bước 4:** Chia sẻ link cho mọi người! 🎉

**Ưu điểm:**
- ✅ Miễn phí
- ✅ Tên miền đẹp (.vercel.app)
- ✅ Tự động HTTPS
- ✅ Triển khai trong 30 giây
- ✅ Hỗ trợ Việt Nam tốt

---

### Cách 2: Netlify (Kéo-thả)

**Bước 1:** Build project
```bash
cd E:\angy ty\kimi 25\math-grade-5
npm run build
```

**Bước 2:** Vào [netlify.com](https://netlify.com)

**Bước 3:** Kéo thả folder `dist` vào trang web

**Bước 4:** Nhận link và chia sẻ!

---

### Cách 3: GitHub Pages (Miễn phí)

**Bước 1:** Push code lên GitHub
```bash
cd E:\angy ty\kimi 25\math-grade-5
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/math-grade-5.git
git push -u origin main
```

**Bước 2:** Vào Settings → Pages

**Bước 3:** Chọn branch `main` và folder `/dist`

**Bước 4:** Link sẽ là: `https://username.github.io/math-grade-5`

---

### Cách 4: Firebase Hosting (Google)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

### Cách 5: Host riêng (Server/VPS)

Upload folder `dist/` lên:
- Hostinger, Namecheap, GoDaddy
- VPS (DigitalOcean, Vultr, AWS)
- Cloud Storage (S3, GCS)

---

## 📱 CÁCH CHIA SẺ

### Trong ứng dụng (Đã thêm sẵn):

**Nút "Chia sẻ ứng dụng"** ở footer:
1. Copy link tự động
2. Chia sẻ Facebook
3. Chia sẻ Zalo
4. Tạo QR Code

**Nút "Điều khoản sử dụng"** ở footer:
- Hiển thị bản quyền MIT
- Quy tắc sử dụng
- Thông tin liên hệ

### Cách chia sẻ thủ công:

**Qua điện thoại:**
- 📱 Zalo: Dán link vào chat
- 📱 Messenger: Gửi link
- 📱 WhatsApp: Share link

**Qua mạng xã hội:**
- 📘 Facebook: Đăng link + mô tả
- 📸 Instagram: Story/Link in bio
- 🎵 TikTok: Video giới thiệu + link

**QR Code:**
```bash
npx qrcode https://your-url.com -o math-qr.png
```
In QR code dán ở lớp học!

---

## ⚖️ QUYỀN HẠN CỦA BẠN (MIT License)

### ✅ Được phép:
- Sử dụng miễn phí 100%
- Chia sẻ link cho bao nhiêu người cũng được
- Sửa đổi theo nhu cầu
- Dùng cho cá nhân, trường học, tổ chức giáo dục
- In đề, tài liệu cho học sinh

### ❌ Không được:
- Xóa bỏ thông báo bản quyền
- Bán lại code mà không ghi nguồn
- Đăng ký bản quyền nội dung làm của riêng
- Sử dụng thương mại mà không trích dẫn nguồn

---

## 📝 TEXT CHIA SẺ MẪU

**Tiếng Việt:**
```
🎯 App học toán lớp 5 MIỄN PHÍ!

✅ 110+ bài tập từ cơ bản đến nâng cao
✅ 4 chủ đề: Số học, Hình học, Chuyển động, Tư duy
✅ Làm bài trực tuyến + in đề ra giấy
✅ Tính điểm XP, thăng cấp, nhận huy hiệu

👉 Link: https://your-url.com

📚 Cho học sinh lớp 5 chuẩn bị thi Olympic
💯 Miễn phí 100% - Không quảng cáo!
```

**English:**
```
🎯 FREE Math Grade 5 Learning App!

✅ 110+ exercises from basic to advanced
✅ 4 modules: Arithmetic, Geometry, Motion, Logic
✅ Online practice + printable exams
✅ XP points, levels, badges

👉 Link: https://your-url.com

📚 For Grade 5 students preparing for Math Olympiad
💯 100% Free - No ads!
```

---

## 🎨 TẠO QR CODE

**Online:**
1. Vào [qr-code-generator.com](https://www.qr-code-generator.com)
2. Dán URL của bạn
3. Tải QR code về
4. In và dán ở lớp học, thư viện

**Command line:**
```bash
npx qrcode https://your-url.com --width 500 -o qr-code.png
```

---

## 🔒 BẢO MẬT & BẢN QUYỀN

**Trong footer hiển thị:**
```
© 2025 MathGrade5. Bản quyền thuộc về tác giả. MIT License
```

**Nút "Điều khoản sử dụng":**
- Modal hiển thị chi tiết giấy phép
- Hướng dẫn cách sử dụng đúng
- Thông tin liên hệ tác giả

**File LICENSE:**
- MIT License đầy đủ (Tiếng Anh + Tiếng Việt)
- Đặt ở thư mục gốc

---

## 📊 THỐNG KÝ BUILD

**Kích thước:**
- JS: 442KB (gzip: 134KB)
- CSS: 71KB (gzip: 10.6KB)
- Total: ~500KB (rất nhẹ!)

**Tốc độ load:**
- 3G: ~2-3 giây
- 4G/Wifi: ~1 giây

---

## 🎯 HÀNH ĐỘNG NGAY BÂY GIỜ

1. **Chọn 1 trong 5 cách deploy** ở trên
2. **Lấy URL** sau khi deploy
3. **Test link** trên điện thoại
4. **Chia sẻ** cho bạn bè, học sinh
5. **Đăng** lên mạng xã hội

**Hoặc đơn giản nhất:**
```bash
cd math-grade-5
npx vercel --prod
```

Sau 30 giây bạn sẽ có link chính thức! 🚀

---

**📞 Hỗ trợ:** support@mathgrade5.com
**📄 License:** MIT License (mở file LICENSE để xem chi tiết)
**© 2025 Math Grade 5 - All Rights Reserved**
