# 🖥️ HƯỚNG DẪN TẠO FILE EXE CHO WINDOWS

## 📦 CẤU TRÚC FILE EXE

Sau khi build, bạn sẽ có 2 loại file:

### 1. **Bản Cài Đặt (Installer)** - Khuyên dùng ⭐
- Tên: `Math Grade 5 Setup 1.0.0.exe`
- Dung lượng: ~180-200MB
- Có trình cài đặt wizard
- Tạo shortcut Desktop & Start Menu
- Có thể gỡ cài đặt qua Control Panel
- **Phù hợp:** Phát hành chính thức cho học sinh

### 2. **Bản Portable** 
- Tên: `MathGrade5-Portable-1.0.0.exe`
- Dung lượng: ~180-200MB  
- Không cần cài đặt, chạy ngay
- Không tạo shortcut
- Copy file là chạy được
- **Phù hợp:** Chạy trên máy tính không có quyền admin

---

## 🔨 CÁCH BUILD FILE EXE

### Bước 1: Build ứng dụng React
```bash
cd math-grade-5
npm run build
```

### Bước 2: Tạo icon cho ứng dụng (Tùy chọn)

**Cách 1: Dùng icon có sẵn**
- Đặt file `icon.png` (512x512px) vào thư mục `build/`
- Hoặc bỏ qua bước này, sẽ dùng icon mặc định

**Cách 2: Tạo icon chuyên nghiệp**
1. Thiết kế logo 512x512px PNG trong Photoshop/Canva
2. Convert sang ICO online: https://convertio.co/png-ico/
3. Đặt file `icon.ico` vào `build/icon.ico`
4. Đặt file `icon.icns` vào `build/icon.icns` (cho Mac)

### Bước 3: Build file EXE

**Build bản cài đặt (Setup):**
```bash
npm run dist:win
```

**Build cả 2 bản:**
```bash
npm run dist
```

**Build cho Mac:**
```bash
npm run dist:mac
```

---

## 📂 FILE SẼ XUẤT HIỆN Ở ĐÂU?

Sau khi build thành công:
```
math-grade-5/
└── release/
    ├── Math Grade 5 Setup 1.0.0.exe    ← Bản cài đặt (KHUYÊN DÙNG)
    ├── MathGrade5-Portable-1.0.0.exe   ← Bản portable
    └── win-unpacked/                    ← Thư mục chạy thử (không cần)
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### 1. Dung lượng file lớn (~200MB)
- File exe chứa cả Chrome engine bên trong
- Gửi qua Google Drive/OneDrive thay vì email
- Hoặc upload lên hosting để tải về

### 2. Windows Defender có thể cảnh báo
- Vì không có chứng chỉ ký số (code signing certificate)
- Học sinh cần click "More info" → "Run anyway"
- Hoặc tắt Windows Defender tạm thời khi cài

### 3. Chỉ chạy trên Windows
- Windows 10/11: ✅ Hoạt động tốt
- Windows 7/8: ⚠️ Có thể cần cài .NET Framework
- Mac/Linux: ❌ Không chạy được (cần build riêng)

### 4. Không tự động cập nhật
- Muốn cập nhật phải gửi file exe mới
- Hoặc dùng web app thay thế

---

## 🚀 CÁCH GỬI FILE EXE CHO NGƯỜI KHÁC

### Phương pháp 1: Google Drive (Khuyên dùng)
1. Upload file `Math Grade 5 Setup 1.0.0.exe` lên Google Drive
2. Tạo link chia sẻ (Public - Anyone with the link)
3. Gửi link cho học sinh
4. Học sinh tải về → Chạy file → Cài đặt

### Phương pháp 2: OneDrive / Dropbox
Tương tự như Google Drive

### Phương pháp 3: USB / LAN
- Copy file exe vào USB
- Chép sang máy tính khác
- Chạy trực tiếp (bản portable) hoặc cài đặt

### Phương pháp 4: Website riêng
Upload lên hosting của trường:
```
https://truonghoc.edu.vn/download/math-grade-5-setup.exe
```

---

## 📝 HƯỚNG DẪN CHO HỌC SINH (Gửi kèm file)

```
📥 CÀI ĐẶT PHẦN MỀM HỌC TOÁN LỚP 5

Bước 1: Tải file "Math Grade 5 Setup 1.0.0.exe"
Link: [Dán link Google Drive vào đây]

Bước 2: Chạy file vừa tải
- Nếu Windows cảnh báo, bấm "More info" → "Run anyway"

Bước 3: Cài đặt
- Bấm Next → Next → Install
- Đợi 30-60 giây
- Bấm Finish

Bước 4: Mở phần mềm
- Có icon trên Desktop: "Math Grade 5"
- Hoặc tìm trong Start Menu

💡 MẸO:
- Có thể gỡ cài đặt qua Control Panel > Programs
- Nếu lỗi, cài lại từ đầu

🆘 HỖ TRỢ:
Liên hệ thầy/cô nếu không cài được
```

---

## 🔧 BUILD TRÊN MÁY KHÁC (CI/CD)

Nếu muốn build tự động mỗi khi push code:

### GitHub Actions (Miễn phí)
Tạo file `.github/workflows/build.yml`:

```yaml
name: Build EXE
on: [push]
jobs:
  build:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run dist:win
      - uses: actions/upload-artifact@v3
        with:
          name: math-grade-5-exe
          path: release/*.exe
```

Mỗi lần push code, GitHub tự động build file exe cho bạn!

---

## ❌ LỖI THƯỜNG GẶP

### Lỗi 1: "Cannot find module 'electron'"
```bash
npm install
```

### Lỗi 2: Build thất bại vì thiếu icon
Tạo file `build/icon.ico` hoặc xóa dòng `"icon": "build/icon.ico"` trong package.json

### Lỗi 3: File exe chạy nhưng trắng trơn
Build React trước khi build Electron:
```bash
npm run build
npm run dist:win
```

### Lỗi 4: Dung lượng quá lớn (>200MB)
Bình thường! Electron bundle cả Chrome vào trong file.
Nén bằng WinRAR/7-Zip để giảm xuống ~80MB

---

## 🎯 LỆNH TÓM TẮT

```bash
# Cài đặt dependencies
npm install

# Build React app
npm run build

# Build file exe cho Windows
npm run dist:win

# Hoặc build tất cả (Windows + Mac + Linux)
npm run dist

# Xem file trong thư mục release/
cd release
ls -la
```

---

## ✅ CHECKLIST TRƯỚC KHI GỬI

- [ ] Đã build thành công (không lỗi)
- [ ] File exe nằm trong thư mục `release/`
- [ ] Đã test chạy trên máy khác
- [ ] Đã tạo link download (Google Drive/OneDrive)
- [ ] Đã viết hướng dẫn cài đặt cho học sinh
- [ ] Đã thêm bản quyền vào footer ứng dụng

---

## 📞 HỖ TRỢ

**Lỗi build?** Mở issue trên GitHub
**Hỏi về Electron?** Xem docs: https://www.electronjs.org/docs
**Cần icon đẹp?** Dùng Canva hoặc thuê designer

---

**Sẵn sàng build file exe chưa?** Chạy lệnh này:
```bash
cd math-grade-5 && npm run build && npm run dist:win
```

**Thời gian build:** 3-5 phút tùy máy
