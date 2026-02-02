# Math Grade 5 - Ứng dụng học toán lớp 5

A premium, interactive web application for 5th-grade students to practice mathematics from basic to advanced (Olympiad preparation) level.

## Features

- **4 Learning Modules**: Arithmetic (Số học), Geometry (Hình học), Motion (Chuyển động), Logic (Tư duy)
- **110+ Questions**: Carefully crafted from basic to advanced difficulty
- **Gamification System**: XP points, badges, levels, and progress tracking
- **Question Types**: Multiple choice, input answers with validation
- **Interactive UI**: Glassmorphism design with smooth animations
- **Progress Persistence**: LocalStorage saves your learning progress
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: React 19 (with Vite 7+)
- **Language**: JavaScript (ES2022+)
- **Styling**: Vanilla CSS with CSS Variables
- **State Management**: React Context API + LocalStorage
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS Animations
- **Build Tool**: Vite

## Project Structure

```
math-grade-5/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── layout/       # Header, Footer, Container
│   │   ├── question/     # Question components
│   │   ├── progress/     # XP, Badges, LevelUp
│   │   └── ui/           # Button, Card, Modal
│   ├── context/          # ProgressContext
│   ├── modules/          # Question banks
│   │   ├── arithmetic/   # 30 questions
│   │   ├── geometry/     # 30 questions
│   │   ├── motion/       # 25 questions
│   │   └── logic/        # 25 questions
│   ├── pages/            # Page components
│   │   ├── Home/         # Hero, FeaturesGrid
│   │   ├── Dashboard/    # ModuleMap, ProgressStats
│   │   └── Practice/     # PracticeMode, ResultsScreen
│   ├── styles/           # CSS design system
│   ├── utils/            # Storage, validators, questionEngine
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
└── index.html            # HTML template
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd math-grade-5
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment & Hosting

### Option 1: Vercel (Recommended - Fastest & Free)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd math-grade-5
vercel --prod
```

3. Get your URL (e.g., `https://math-grade-5.vercel.app`)
4. **Share the link with anyone!**

### Option 2: Netlify (Free)

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com) and drag-drop the `dist` folder
3. Get your URL and share!

### Option 3: GitHub Pages (Free)

1. Push code to GitHub
2. Go to Settings → Pages → Select "Deploy from a branch"
3. Select `main` branch and `/dist` folder
4. Your app will be at `https://yourusername.github.io/math-grade-5`

### Option 4: Firebase Hosting (Free)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 5: Self-Hosting (Your own server)

Upload contents of `dist/` folder to any web server:
- Shared hosting (cPanel, DirectAdmin)
- VPS (Nginx, Apache)
- Cloud Storage (AWS S3, Google Cloud Storage)

**Share your link via:**
- 📧 Email
- 💬 Zalo, Messenger, WhatsApp
- 📱 Facebook, Instagram, TikTok
- 🔗 QR Code (generate at qr-code-generator.com)

## 📋 Share Instructions

### For Students:
1. Send the hosted URL (e.g., `https://math-grade-5.vercel.app`)
2. They can use immediately - no installation needed!
3. Works on phone, tablet, computer

### For Schools/Teachers:
1. Deploy to your preferred platform
2. Add the link to your school's website
3. Share in class group chats
4. Students bookmark the page for daily practice

### For Sharing via QR Code:
```bash
# Generate QR code for your URL
npx qrcode https://your-app-url.com -o math-grade-5-qr.png
```
Print and post in classrooms!

## Curriculum Content

### Module 1: Arithmetic (Số học) - 30 questions
- **Basic**: Fractions (8), Decimals (6), Conversions (6)
- **Advanced**: Number construction (4), Divisibility rules (4), GCD/LCM (2)

### Module 2: Geometry (Hình học) - 30 questions
- **Basic**: Triangle area (5), Trapezoid area (5), Circle area (5), Cuboid volume (5)
- **Advanced**: Shaded regions (4), Shape composition (3), Surface area (3)

### Module 3: Motion (Chuyển động) - 25 questions
- **Basic**: Velocity v=s/t (5), Distance s=v×t (5), Time t=s/v (5)
- **Advanced**: Opposite direction (3), Same direction (3), River current (4)

### Module 4: Logic (Tư duy) - 25 questions
- **Basic**: Number sequences (5), Simple logic (5), Combinations (5)
- **Advanced**: Pigeonhole principle (4), Optimization (3), Advanced counting (3)

## Gamification Features

### XP System
- Earn XP for correct answers
- Level up when reaching XP thresholds
- Hint usage reduces XP by 50%

### Badges
- **First Steps**: Complete your first question
- **Geometry Novice**: Complete 10 geometry questions
- **Arithmetic Master**: Complete 20 arithmetic questions
- **Speed Solver**: Answer correctly within 10 seconds
- **Challenge Champion**: Complete 10 consecutive correct answers
- **Logic Wizard**: Complete all logic questions
- **All-Rounder**: Complete at least 10 questions per topic

### Progress Tracking
- Completed questions tracking
- Per-module statistics (attempted/correct)
- Accuracy percentage by topic
- Level and XP display

## Design System

### Colors
- Primary: `#5b6ef7` (Purple gradient)
- Success: `#38c976` (Green)
- Error: `#ff5757` (Red)
- Warning: `#ffa726` (Orange)

### Gradients (per module)
- Arithmetic: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Geometry: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- Motion: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- Logic: `linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)`

### Glassmorphism
- Background: `rgba(255, 255, 255, 0.1)`
- Border: `rgba(255, 255, 255, 0.18)`
- Backdrop blur: `12px`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- App loads in under 2 seconds
- 110 questions with full solutions
- Smooth 60fps animations
- LocalStorage for instant state persistence

## License

MIT License

## Credits

Built with ❤️ for Vietnamese 5th-grade students preparing for mathematics competitions.
