/**
 * Math Grade 5 - Interactive Math Learning Application
 * Copyright (c) 2025 - All rights reserved
 * Licensed under MIT License
 * 
 * Bản quyền (c) 2025 - Ứng dụng học toán lớp 5
 * Giấy phép MIT - Cho phép sử dụng và chia sẻ miễn phí
 * 
 * Author: Math Grade 5 Team
 * Repository: https://github.com/[username]/math-grade-5
 * Website: https://mathgrade5.com
 */

import { useState } from 'react';
import { ProgressProvider } from './context/ProgressContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './pages/Home/Hero';
import FeaturesGrid from './pages/Home/FeaturesGrid';
import Dashboard from './pages/Dashboard/Dashboard';
import PracticeMode from './pages/Practice/PracticeMode';
import ResultsScreen from './pages/Practice/ResultsScreen';
import ExamSetup from './pages/Exam/ExamSetup';
import ExamMode from './pages/Exam/ExamMode';
import PrintExam from './pages/Exam/PrintExam';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [practiceModule, setPracticeModule] = useState(null);
  const [practiceStats, setPracticeStats] = useState(null);
  const [examConfig, setExamConfig] = useState(null);
  const [showExamSetup, setShowExamSetup] = useState(false);
  const [showPrintExam, setShowPrintExam] = useState(false);

  const handleStartPractice = (moduleId, mode) => {
    setPracticeModule(moduleId);
    setCurrentView('practice');
  };

  const handlePracticeComplete = (stats) => {
    setPracticeStats(stats);
    setCurrentView('results');
  };

  const handleExitPractice = () => {
    setPracticeModule(null);
    setCurrentView('dashboard');
  };

  const handleRestartPractice = () => {
    setPracticeStats(null);
    setCurrentView('practice');
  };

  const handleGoHome = () => {
    setPracticeModule(null);
    setPracticeStats(null);
    setCurrentView('home');
  };

  const handleGoToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleStartExam = () => {
    setShowExamSetup(true);
  };

  const handleExamSetupComplete = (config) => {
    setExamConfig(config);
    setShowExamSetup(false);
    
    if (config.mode === 'online') {
      setCurrentView('exam');
    } else {
      setShowPrintExam(true);
    }
  };

  const handleExamSetupCancel = () => {
    setShowExamSetup(false);
  };

  const handleExamComplete = () => {
    setExamConfig(null);
    setCurrentView('dashboard');
  };

  const handlePrintExamClose = () => {
    setShowPrintExam(false);
    setExamConfig(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Header onNavigate={setCurrentView} currentView={currentView} />
            <main>
              <Hero onStart={handleGoToDashboard} />
              <FeaturesGrid onSelectModule={handleStartPractice} />
            </main>
            <Footer />
          </>
        );
      
      case 'dashboard':
        return (
          <Dashboard 
            onStartPractice={handleStartPractice}
            onStartExam={handleStartExam}
          />
        );
      
      case 'practice':
        return (
          <PracticeMode
            moduleId={practiceModule}
            onExit={handleExitPractice}
            onComplete={handlePracticeComplete}
          />
        );
      
      case 'exam':
        return examConfig ? (
          <ExamMode
            config={examConfig}
            onExit={handleExamComplete}
          />
        ) : null;
      
      case 'results':
        return (
          <ResultsScreen
            stats={practiceStats}
            onRestart={handleRestartPractice}
            onHome={handleGoHome}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <ProgressProvider>
      <div className="app">
        {renderContent()}
        
        {showExamSetup && (
          <ExamSetup
            onStartExam={handleExamSetupComplete}
            onCancel={handleExamSetupCancel}
          />
        )}
        
        {showPrintExam && examConfig && (
          <PrintExam
            config={examConfig}
            onClose={handlePrintExamClose}
          />
        )}
      </div>
    </ProgressProvider>
  );
}

export default App;
