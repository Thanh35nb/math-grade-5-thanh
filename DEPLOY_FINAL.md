# 🚀 HƯỚNG DẪN ĐƯA LÊN WEB - TỔNG HỢP

## 📦 NHỮNG GÌ ĐÃ CÓ SẴN TRÊN MÁY BẠN

**Tất cả file đã nằm tại:**
```
E:\angy ty\kimi 25\math-grade-5\
```

**Các file quan trọng:**
- ✅ Code React đầy đủ (src/)
- ✅ File cấu hình Git (đã khởi tạo)
- ✅ File cấu hình Vercel (vercel.json)
- ✅ File README, LICENSE

---

## 🎯 CÁCH 1: DEPLOY LÊN VERCEL (KHUYÊN DÙNG - DỄ NHẤT)

### Bước 1: Push code lên GitHub

**Mở Git Bash trong folder `math-grade-5`:**

```bash
# 1. Vào đúng folder
cd "E:\angy ty\kimi 25\math-grade-5"

# 2. Thêm file cần thiết
echo "node_modules" > .gitignore
echo "release" >> .gitignore

# 3. Add file vào git
git add .

# 4. Commit
git commit -m "Math Grade 5 - Ready for deploy"

# 5. Link với GitHub
git remote add origin https://github.com/Thanh35nb/math-grade-5.git

# 6. Push lên
git branch -M main
git push -u origin main
```

**Nếu báo lỗi "failed to push":**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Bước 2: Deploy Vercel

**1. Vào:** https://vercel.com
**2. Đăng nhập** bằng GitHub (Thanh35nb)
**3. Bấm:** "Add New Project"
**4. Chọn:** Repository `math-grade-5`
**5. Bấm:** "Import"
**6. Để mặc định** (Framework: Vite)
**7. Bấm:** "Deploy"

**✅ Sau 2 phút, bạn có link:** `https://math-grade-5-xxx.vercel.app`

---

## 🎯 CÁCH 2: DEPLOY LÊN GITHUB PAGES

### Bước 1: Giống Cách 1 (Push lên GitHub)

### Bước 2: Bật GitHub Pages

**1. Vào GitHub:** https://github.com/Thanh35nb/math-grade-5
**2. Bấm:** Settings (tab cuối)
**3. Bên trái:** Pages
**4. Chọn:**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/dist`
**5. Bấm:** Save

**✅ Sau 5 phút, link:** `https://thanh35nb.github.io/math-grade-5/`

---

## 📤 SAU KHI CÓ LINK, GỬI CHO NGƯỜI KHÁC

### Cách gửi:

**1. Zalo/Messenger:**
```
🎯 App học toán lớp 5 MIỄN PHÍ!

✅ 110+ bài tập từ cơ bản đến nâng cao
✅ Làm trực tuyến trên điện thoại/máy tính
✅ In đề ra giấy
✅ Tính điểm XP, thăng cấp

👉 Link: https://math-grade-5-xxx.vercel.app

Không cần cài đặt, vào là dùng được ngay!
```

**2. Email:**
- Subject: Link học toán lớp 5 miễn phí
- Body: Dán link + hướng dẫn ngắn

**3. Facebook/Group lớp:**
- Đăng bài + link
- Gắn hashtag #toanlop5 #onbai

---

## 🆘 NẾU GẶP LỖI

### ❌ "Repository not found"
→ Chưa tạo repo trên GitHub
→ Vào https://github.com/new tạo repository tên `math-grade-5`

### ❌ "Failed to push some refs"
→ Chạy thêm:
```bash
git pull origin main --allow-unrelated-histories
```

### ❌ "Access denied"
→ Chưa đăng nhập GitHub
→ Hoặc cần tạo Personal Access Token

### ❌ "404 Not Found" (GitHub Pages)
→ Chưa chọn đúng folder `/dist`
→ Vào Settings → Pages sửa lại

---

## 🎉 KẾT QUẢ THÀNH CÔNG

**Bạn sẽ có:**
- ✅ Link web: `https://math-grade-5-xxx.vercel.app`
- ✅ Dùng được trên mọi thiết bị
- ✅ Không cần cài đặt
- ✅ Gửi cho bao nhiêu người cũng được
- ✅ Miễn phí 100%

---

## 📝 LỆNH TÓM TẮT (Copy & Paste)

```bash
# Tất cả trong Git Bash
cd "E:\angy ty\kimi 25\math-grade-5"
echo "node_modules" > .gitignore
git add .
git commit -m "Ready for deploy"
git remote add origin https://github.com/Thanh35nb/math-grade-5.git
git branch -M main
git push -u origin main
```

**Xong! Giờ vào vercel.com deploy thôi!** 🚀
