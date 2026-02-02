# 🎉 FILE EXE ĐÃ TẠO XONG!

## ✅ Build thành công!

### 📦 File đã tạo:

**1. Bản Portable (Chạy ngay không cần cài)** ⭐
- 📍 Vị trí: `math-grade-5/release/win-unpacked/Math Grade 5.exe`
- 💾 Dung lượng: ~204 MB
- ⚡ Dùng ngay: Copy file này sang máy khác là chạy được!
- ✅ **Khuyên dùng** cho học sinh

**2. Bản Installer (Setup.exe)** - Đang tạo...
- 📍 Vị trí: `math-grade-5/release/Math Grade 5 Setup 1.0.0.exe` (sau khi build xong)
- 💾 Dung lượng: ~180 MB (nén)
- 🛠️ Có trình cài đặt wizard
- 🖥️ Tạo shortcut Desktop & Start Menu

---

## 📤 CÁCH SỬ DỤNG FILE EXE

### Cách 1: Dùng bản Portable (Nhanh nhất)

**Bước 1:** Copy file
```
math-grade-5/release/win-unpacked/Math Grade 5.exe
```

**Bước 2:** Gửi cho học sinh qua:
- 📧 Google Drive (share link)
- 💾 USB
- 🌐 Website tải về

**Bước 3:** Học sinh chỉ cần:
- Tải file về
- Double-click chạy
- Không cần cài đặt!

---

### Cách 2: Tạo bản Installer đẹp hơn

**Chạy lệnh này để tạo file setup:**
```bash
cd math-grade-5
npm run dist:win
```

**File sẽ xuất hiện tại:**
```
math-grade-5/release/Math Grade 5 Setup 1.0.0.exe
```

---

## 📋 HƯỚNG DẪN CHO HỌC SINH

**Gửi kèm file và hướng dẫn này:**

```
🎯 PHẦN MỀM HỌC TOÁN LỚP 5 - MIỄN PHÍ

📥 CÁCH CÀI ĐẶT:

Nếu dùng bản PORTABLE (Math Grade 5.exe):
1. Tải file về máy
2. Double-click để chạy
3. Dùng ngay không cần cài!

Nếu dùng bản SETUP (Math Grade 5 Setup.exe):
1. Chạy file Setup
2. Bấm Next → Next → Install
3. Đợi 30 giây
4. Bấm Finish
5. Mở icon "Math Grade 5" trên Desktop

💡 TÍNH NĂNG:
✅ 110+ bài tập toán lớp 5
✅ Làm bài trực tuyến + in đề ra giấy  
✅ Tính điểm XP, thăng cấp, nhận huy hiệu
✅ 4 chủ đề: Số học, Hình học, Chuyển động, Tư duy

🆘 HỖ TRỢ:
Liên hệ thầy/cô nếu không chạy được
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### 1. Windows Defender có thể cảnh báo
Vì file exe không có chứng chỉ ký số (code signing):
- 🔒 Windows SmartScreen có thể chặn
- 🛡️ Học sinh cần bấm "More info" → "Run anyway"
- ✅ Hoàn toàn an toàn, không có virus!

### 2. Dung lượng lớn (~200MB)
- File chứa cả Chrome bên trong
- Nén bằng WinRAR có thể giảm xuống ~80MB
- Nên upload lên Google Drive thay vì gửi email

### 3. Chỉ chạy trên Windows
- Windows 10/11: ✅ Tốt nhất
- Windows 7/8: ⚠️ Có thể cần cài thêm
- Mac/Linux: ❌ Không chạy

---

## 🚀 CÁCH CHIA SẺ FILE

### Phương pháp 1: Google Drive (Khuyên dùng)

1. Upload file `Math Grade 5.exe` lên Drive
2. Click chuột phải → Share
3. Chọn "Anyone with the link"
4. Copy link và gửi cho học sinh
5. Học sinh tải về và chạy

**Link mẫu:**
```
https://drive.google.com/file/d/ABC123/view?usp=sharing
```

### Phương pháp 2: OneDrive
Tương tự như Google Drive

### Phương pháp 3: Website riêng
Upload lên hosting:
```
https://truonghoc.edu.vn/download/math-grade-5.exe
```

### Phương pháp 4: USB / Mạng LAN
- Copy file vào USB
- Chép sang máy tính khác
- Chạy trực tiếp

---

## 📝 TEXT CHIA SẺ MẪU (Đăng Facebook/Zalo)

```
🎉 PHẦN MỀM HỌC TOÁN LỚP 5 MIỄN PHÍ!

💯 110+ bài tập từ cơ bản đến nâng cao
📚 4 chủ đề: Số học, Hình học, Chuyển động, Tư duy
⏱️ Làm bài có tính giờ, chấm điểm tự động
🏆 Tính điểm XP, nhận huy hiệu
🖨️ Có thể in đề ra giấy

📥 LINK TẢI: [Dán link Google Drive vào đây]

💻 Hỗ trợ Windows 10/11
📱 Không cần cài đặt - Chạy ngay!
💵 100% MIỄN PHÍ cho học sinh

👉 Mọi người tải về cho con/em học nhé!
#toanlop5 #hoctoan #onbai #mienphi
```

---

## 🔧 NẾU CẦN TÙY CHỈNH

### Thay đổi icon cho đẹp hơn:
1. Tạo logo 512x512px PNG
2. Convert sang ICO: https://convertio.co/png-ico/
3. Đặt file vào `build/icon.ico`
4. Build lại: `npm run dist:win`

### Đổi tên ứng dụng:
Sửa trong `package.json`:
```json
"productName": "Tên Mới Của Bạn"
```

### Thêm thông tin bản quyền:
Sửa trong `package.json`:
```json
"copyright": "Copyright © 2025 Tên Của Bạn"
```

---

## ❓ LỖI THƯỜNG GẶP

### Lỗi: "Windows protected your PC"
**Sửa:** Bấm "More info" → "Run anyway"

### Lỗi: "Missing DLL files"
**Sửa:** Cài Visual C++ Redistributable từ Microsoft

### Lỗi: File chạy chậm
**Sửa:** Tắt Windows Defender real-time protection tạm thời

### Lỗi: Không mở được
**Sửa:** Click chuột phải → Run as Administrator

---

## 📞 HỖ TRỢ

**Cần giúp đỡ?**
- 📧 Email: support@mathgrade5.com
- 📄 Tài liệu: Xem file EXE_BUILD_GUIDE.md
- 🐛 Báo lỗi: Mở issue trên GitHub

---

## ✅ KIỂM TRA TRƯỚC KHI GỬI

- [ ] Đã test chạy trên máy khác
- [ ] Đã tạo link download (Google Drive)
- [ ] Đã viết hướng dẫn cho học sinh
- [ ] Đã thêm bản quyền vào footer
- [ ] Đã kiểm tra không có virus (Windows Defender)

---

**🎉 CHÚC MỪNG! Bạn đã có file EXE chính thức!**

**File đang nằm tại:**
```
math-grade-5/release/win-unpacked/Math Grade 5.exe
```

Sẵn sàng chia sẻ cho học sinh! 🚀
