const motionQuestions = [
  // === BASIC: Tính vận tốc v = s/t (5 câu) ===
  {
    id: 'motion_001',
    module: 'motion',
    topic: 'velocity',
    difficulty: 'basic',
    type: 'input',
    question: 'Một ô tô đi quãng đường 150km trong 3 giờ. Tính vận tốc của ô tô (km/h).',
    correctAnswer: '50',
    hints: [
      'Công thức: v = s ÷ t',
      'v = 150 ÷ 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Xác định quãng đường s = 150 km',
        'Bước 2: Xác định thời gian t = 3 giờ',
        'Bước 3: Áp dụng công thức v = s ÷ t',
        'Bước 4: v = 150 ÷ 3 = 50 km/h'
      ],
      tips: 'Vận tốc = Quãng đường ÷ Thời gian!'
    },
    xp: 10
  },
  {
    id: 'motion_002',
    module: 'motion',
    topic: 'velocity',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một người đi bộ hết 2 giờ với quãng đường 8km. Vận tốc là:',
    options: ['2 km/h', '4 km/h', '6 km/h', '16 km/h'],
    correctAnswer: '4 km/h',
    hints: [
      'v = s ÷ t',
      'v = 8 ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 8 km, t = 2 giờ',
        'Bước 2: v = s ÷ t',
        'Bước 3: v = 8 ÷ 2 = 4 km/h'
      ],
      tips: 'Nhớ đơn vị của vận tốc là km/h!'
    },
    xp: 10
  },
  {
    id: 'motion_003',
    module: 'motion',
    topic: 'velocity',
    difficulty: 'basic',
    type: 'input',
    question: 'Tàu hỏa chạy 300km trong 5 giờ. Vận tốc trung bình là bao nhiêu km/h?',
    correctAnswer: '60',
    hints: [
      'v = s ÷ t = 300 ÷ 5'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 300 km',
        'Bước 2: t = 5 giờ',
        'Bước 3: v = 300 ÷ 5 = 60 km/h'
      ],
      tips: 'Vận tốc trung bình = Tổng quãng đường ÷ Tổng thời gian!'
    },
    xp: 10
  },
  {
    id: 'motion_004',
    module: 'motion',
    topic: 'velocity',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Xe máy đi 90km trong 1.5 giờ. Vận tốc là:',
    options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
    correctAnswer: '60 km/h',
    hints: [
      'v = 90 ÷ 1.5',
      '90 ÷ 1.5 = 900 ÷ 15'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 90 km',
        'Bước 2: t = 1.5 giờ',
        'Bước 3: v = 90 ÷ 1.5 = 60 km/h'
      ],
      tips: 'Có thể nhân cả tử và mẫu với 10 để dễ tính!'
    },
    xp: 10
  },
  {
    id: 'motion_005',
    module: 'motion',
    topic: 'velocity',
    difficulty: 'basic',
    type: 'input',
    question: 'Một vận động viên chạy 42km trong 3 giờ 30 phút. Vận tốc là bao nhiêu km/h?',
    correctAnswer: '12',
    hints: [
      '3 giờ 30 phút = 3.5 giờ',
      'v = 42 ÷ 3.5'
    ],
    explanation: {
      steps: [
        'Bước 1: Đổi 3 giờ 30 phút = 3.5 giờ',
        'Bước 2: s = 42 km',
        'Bước 3: v = 42 ÷ 3.5 = 12 km/h'
      ],
      tips: 'Nhớ đổi đơn vị thời gian về cùng đơn vị (giờ)!'
    },
    xp: 10
  },

  // === BASIC: Tính quãng đường s = v×t (5 câu) ===
  {
    id: 'motion_006',
    module: 'motion',
    topic: 'distance',
    difficulty: 'basic',
    type: 'input',
    question: 'Ô tô chạy với vận tốc 60km/h trong 4 giờ. Quãng đường đi được là bao nhiêu km?',
    correctAnswer: '240',
    hints: [
      'Công thức: s = v × t',
      's = 60 × 4'
    ],
    explanation: {
      steps: [
        'Bước 1: v = 60 km/h',
        'Bước 2: t = 4 giờ',
        'Bước 3: s = v × t = 60 × 4',
        'Bước 4: s = 240 km'
      ],
      tips: 'Quãng đường = Vận tốc × Thời gian!'
    },
    xp: 10
  },
  {
    id: 'motion_007',
    module: 'motion',
    topic: 'distance',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Xe đạp đi với vận tốc 12km/h trong 3 giờ. Quãng đường là:',
    options: ['30 km', '36 km', '40 km', '48 km'],
    correctAnswer: '36 km',
    hints: [
      's = v × t = 12 × 3'
    ],
    explanation: {
      steps: [
        'Bước 1: v = 12 km/h',
        'Bước 2: t = 3 giờ',
        'Bước 3: s = 12 × 3 = 36 km'
      ],
      tips: 'Đơn vị quãng đường là km!'
    },
    xp: 10
  },
  {
    id: 'motion_008',
    module: 'motion',
    topic: 'distance',
    difficulty: 'basic',
    type: 'input',
    question: 'Máy bay bay với vận tốc 800km/h trong 2.5 giờ. Quãng đường bay được là:',
    correctAnswer: '2000',
    hints: [
      's = 800 × 2.5',
      '800 × 2.5 = 800 × 2 + 800 × 0.5'
    ],
    explanation: {
      steps: [
        'Bước 1: v = 800 km/h',
        'Bước 2: t = 2.5 giờ',
        'Bước 3: s = 800 × 2.5 = 2000 km'
      ],
      tips: 'Nhân số thập phân: 800 × 2.5 = 2000!'
    },
    xp: 10
  },
  {
    id: 'motion_009',
    module: 'motion',
    topic: 'distance',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Người đi bộ với vận tốc 5km/h trong 45 phút. Quãng đường là:',
    options: ['2.5 km', '3.75 km', '4.5 km', '5 km'],
    correctAnswer: '3.75 km',
    hints: [
      '45 phút = 0.75 giờ',
      's = 5 × 0.75'
    ],
    explanation: {
      steps: [
        'Bước 1: Đổi 45 phút = 0.75 giờ',
        'Bước 2: v = 5 km/h',
        'Bước 3: s = 5 × 0.75 = 3.75 km'
      ],
      tips: '45 phút = 3/4 giờ = 0.75 giờ!'
    },
    xp: 10
  },
  {
    id: 'motion_010',
    module: 'motion',
    topic: 'distance',
    difficulty: 'basic',
    type: 'input',
    question: 'Tàu hỏa chạy 80km/h trong 2 giờ 15 phút. Quãng đường là bao nhiêu km?',
    correctAnswer: '180',
    hints: [
      '2 giờ 15 phút = 2.25 giờ = 9/4 giờ',
      's = 80 × 2.25'
    ],
    explanation: {
      steps: [
        'Bước 1: Đổi 2 giờ 15 phút = 2.25 giờ',
        'Bước 2: v = 80 km/h',
        'Bước 3: s = 80 × 2.25 = 180 km'
      ],
      tips: '15 phút = 0.25 giờ = 1/4 giờ!'
    },
    xp: 10
  },

  // === BASIC: Tính thời gian t = s/v (5 câu) ===
  {
    id: 'motion_011',
    module: 'motion',
    topic: 'time',
    difficulty: 'basic',
    type: 'input',
    question: 'Ô tô chạy quãng đường 180km với vận tốc 60km/h. Thời gian đi là bao nhiêu giờ?',
    correctAnswer: '3',
    hints: [
      'Công thức: t = s ÷ v',
      't = 180 ÷ 60'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 180 km',
        'Bước 2: v = 60 km/h',
        'Bước 3: t = 180 ÷ 60 = 3 giờ'
      ],
      tips: 'Thời gian = Quãng đường ÷ Vận tốc!'
    },
    xp: 10
  },
  {
    id: 'motion_012',
    module: 'motion',
    topic: 'time',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Xe máy đi 90km với vận tốc 45km/h. Thời gian là:',
    options: ['1 giờ', '2 giờ', '2.5 giờ', '3 giờ'],
    correctAnswer: '2 giờ',
    hints: [
      't = 90 ÷ 45'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 90 km',
        'Bước 2: v = 45 km/h',
        'Bước 3: t = 90 ÷ 45 = 2 giờ'
      ],
      tips: 'Thời gian tính bằng giờ!'
    },
    xp: 10
  },
  {
    id: 'motion_013',
    module: 'motion',
    topic: 'time',
    difficulty: 'basic',
    type: 'input',
    question: 'Người đi bộ đi 6km với vận tốc 4km/h. Thời gian đi là bao nhiêu phút?',
    correctAnswer: '90',
    hints: [
      't = s ÷ v = 6 ÷ 4 = 1.5 giờ',
      '1.5 giờ = ? phút'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 6 km, v = 4 km/h',
        'Bước 2: t = 6 ÷ 4 = 1.5 giờ',
        'Bước 3: Đổi sang phút: 1.5 × 60 = 90 phút'
      ],
      tips: 'Đọc kỹ đề bài yêu cầu đơn vị gì!'
    },
    xp: 10
  },
  {
    id: 'motion_014',
    module: 'motion',
    topic: 'time',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tàu hỏa chạy 240km với vận tốc 80km/h. Thời gian là:',
    options: ['2 giờ', '3 giờ', '4 giờ', '5 giờ'],
    correctAnswer: '3 giờ',
    hints: [
      't = 240 ÷ 80'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 240 km',
        'Bước 2: v = 80 km/h',
        'Bước 3: t = 240 ÷ 80 = 3 giờ'
      ],
      tips: 'Nhân 80 × 3 = 240 để kiểm tra!'
    },
    xp: 10
  },
  {
    id: 'motion_015',
    module: 'motion',
    topic: 'time',
    difficulty: 'basic',
    type: 'input',
    question: 'Máy bay bay 1500km với vận tốc 600km/h. Thời gian bay là bao nhiêu giờ?',
    correctAnswer: '2.5',
    hints: [
      't = 1500 ÷ 600',
      '1500 ÷ 600 = 15 ÷ 6'
    ],
    explanation: {
      steps: [
        'Bước 1: s = 1500 km',
        'Bước 2: v = 600 km/h',
        'Bước 3: t = 1500 ÷ 600 = 2.5 giờ'
      ],
      tips: '2.5 giờ = 2 giờ 30 phút!'
    },
    xp: 10
  },

  // === ADVANCED: Chuyển động ngược chiều (3 câu) ===
  {
    id: 'motion_016',
    module: 'motion',
    topic: 'opposite-direction',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hai xe khởi hành từ A và B cách nhau 300km, đi ngược chiều. Xe từ A đi 60km/h, xe từ B đi 40km/h. Sau bao lâu 2 xe gặp nhau (giờ)?',
    correctAnswer: '3',
    hints: [
      'Vận tốc 2 xe cộng lại: 60 + 40 = 100km/h',
      't = 300 ÷ 100'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc 2 xe cộng lại = 60 + 40 = 100 km/h',
        'Bước 2: Quãng đường = 300 km',
        'Bước 3: Thời gian gặp nhau = 300 ÷ 100 = 3 giờ'
      ],
      tips: 'Chuyển động ngược chiều: Vận tốc cộng lại!'
    },
    xp: 20
  },
  {
    id: 'motion_017',
    module: 'motion',
    topic: 'opposite-direction',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Hai người đi từ 2 đầu quãng đường 24km, đi ngược chiều. Người A đi 5km/h, người B đi 3km/h. Sau bao lâu họ gặp nhau?',
    options: ['2 giờ', '3 giờ', '4 giờ', '6 giờ'],
    correctAnswer: '3 giờ',
    hints: [
      'Vận tốc cộng: 5 + 3 = 8km/h',
      't = 24 ÷ 8'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc cộng = 5 + 3 = 8 km/h',
        'Bước 2: Quãng đường = 24 km',
        'Bước 3: t = 24 ÷ 8 = 3 giờ'
      ],
      tips: 'Ngược chiều: Cộng vận tốc, rồi chia cho quãng đường!'
    },
    xp: 20
  },
  {
    id: 'motion_018',
    module: 'motion',
    topic: 'opposite-direction',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hai xe cách nhau 450km, đi ngược chiều, gặp nhau sau 5 giờ. Xe A đi 50km/h. Tính vận tốc xe B (km/h).',
    correctAnswer: '40',
    hints: [
      'Vận tốc 2 xe cộng = 450 ÷ 5 = 90km/h',
      'Vận tốc xe B = 90 - 50'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc 2 xe cộng lại = 450 ÷ 5 = 90 km/h',
        'Bước 2: Vận tốc xe B = 90 - 50 = 40 km/h'
      ],
      tips: 'Từ tổng vận tốc, trừ đi vận tốc đã biết!'
    },
    xp: 20
  },

  // === ADVANCED: Chuyển động cùng chiều (3 câu) ===
  {
    id: 'motion_019',
    module: 'motion',
    topic: 'same-direction',
    difficulty: 'advanced',
    type: 'input',
    question: 'Xe A đi trước xe B 50km. Xe A đi 40km/h, xe B đi 60km/h đuổi theo. Sau bao lâu xe B đuổi kịp (giờ)?',
    correctAnswer: '2.5',
    hints: [
      'Vận tốc vượt = 60 - 40 = 20km/h',
      't = 50 ÷ 20'
    ],
    explanation: {
      steps: [
        'Bước 1: Xe B nhanh hơn xe A: 60 - 40 = 20 km/h',
        'Bước 2: Khoảng cách cần đuổi = 50 km',
        'Bước 3: Thời gian đuổi kịp = 50 ÷ 20 = 2.5 giờ'
      ],
      tips: 'Cùng chiều: Trừ vận tốc để tính vận tốc vượt!'
    },
    xp: 20
  },
  {
    id: 'motion_020',
    module: 'motion',
    topic: 'same-direction',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Xe máy đi trước ô tô 30km. Xe máy đi 45km/h, ô tô đi 75km/h. Sau bao lâu ô tô đuổi kịp?',
    options: ['0.5 giờ', '1 giờ', '1.5 giờ', '2 giờ'],
    correctAnswer: '1 giờ',
    hints: [
      'Vận tốc vượt = 75 - 45 = 30km/h',
      't = 30 ÷ 30'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc vượt = 75 - 45 = 30 km/h',
        'Bước 2: Khoảng cách = 30 km',
        'Bước 3: t = 30 ÷ 30 = 1 giờ'
      ],
      tips: 'Đuổi kịp khi đã đi hết khoảng cách ban đầu!'
    },
    xp: 20
  },
  {
    id: 'motion_021',
    module: 'motion',
    topic: 'same-direction',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hai xe cùng khởi hành từ A. Xe 1 đi 50km/h, xe 2 đi 70km/h. Sau 3 giờ, 2 xe cách nhau bao nhiêu km?',
    correctAnswer: '60',
    hints: [
      'Vận tốc cách xa nhau = 70 - 50 = 20km/h',
      'Khoảng cách = 20 × 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Mỗi giờ 2 xe cách xa nhau: 70 - 50 = 20 km',
        'Bước 2: Sau 3 giờ, khoảng cách = 20 × 3 = 60 km'
      ],
      tips: 'Cùng chiều cùng xuất phát: Hieu vận tốc × thời gian!'
    },
    xp: 20
  },

  // === ADVANCED: Chuyển động trên dòng nước (4 câu) ===
  {
    id: 'motion_022',
    module: 'motion',
    topic: 'river-current',
    difficulty: 'advanced',
    type: 'input',
    question: 'Thuyền xuôi dòng với vận tốc riêng 15km/h, dòng chảy 5km/h. Vận tốc xuôi dòng là bao nhiêu km/h?',
    correctAnswer: '20',
    hints: [
      'Xuôi dòng: Vận tốc thuyền + vận tốc dòng',
      'v = 15 + 5'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc thuyền riêng = 15 km/h',
        'Bước 2: Vận tốc dòng = 5 km/h',
        'Bước 3: Xuôi dòng: v = 15 + 5 = 20 km/h'
      ],
      tips: 'Xuôi dòng: Cộng vận tốc; Ngược dòng: Trừ vận tốc!'
    },
    xp: 20
  },
  {
    id: 'motion_023',
    module: 'motion',
    topic: 'river-current',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Thuyền ngược dòng với vận tốc riêng 18km/h, dòng chảy 3km/h. Vận tốc ngược dòng là:',
    options: ['12 km/h', '15 km/h', '18 km/h', '21 km/h'],
    correctAnswer: '15 km/h',
    hints: [
      'Ngược dòng: Vận tốc thuyền - vận tốc dòng',
      'v = 18 - 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc thuyền riêng = 18 km/h',
        'Bước 2: Vận tốc dòng = 3 km/h',
        'Bước 3: Ngược dòng: v = 18 - 3 = 15 km/h'
      ],
      tips: 'Ngược dòng: Vận tốc thực = vận tốc thuyền - vận tốc dòng!'
    },
    xp: 20
  },
  {
    id: 'motion_024',
    module: 'motion',
    topic: 'river-current',
    difficulty: 'advanced',
    type: 'input',
    question: 'Thuyền xuôi dòng đi 60km hết 3 giờ, vận tốc dòng 5km/h. Vận tốc riêng của thuyền là bao nhiêu km/h?',
    correctAnswer: '15',
    hints: [
      'Vận tốc xuôi = 60 ÷ 3 = 20km/h',
      'Vận tốc riêng = 20 - 5'
    ],
    explanation: {
      steps: [
        'Bước 1: Vận tốc xuôi dòng = 60 ÷ 3 = 20 km/h',
        'Bước 2: Vận tốc riêng = vận tốc xuôi - vận tốc dòng',
        'Bước 3: Vận tốc riêng = 20 - 5 = 15 km/h'
      ],
      tips: 'Vận tốc riêng = Vận tốc thực - vận tốc dòng (xuôi) hoặc + vận tốc dòng (ngược)!'
    },
    xp: 20
  },
  {
    id: 'motion_025',
    module: 'motion',
    topic: 'river-current',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Thuyền xuôi dòng từ A đến B hết 4 giờ, ngược dòng từ B về A hết 6 giờ. Vận tốc dòng là 3km/h. Quãng đường AB là:',
    options: ['60 km', '72 km', '80 km', '96 km'],
    correctAnswer: '72 km',
    hints: [
      'Gọi vận tốc thuyền riêng là x',
      'v_xuôi = x + 3, v_ngược = x - 3',
      '4(x+3) = 6(x-3)'
    ],
    explanation: {
      steps: [
        'Bước 1: Gọi vận tốc thuyền riêng là x km/h',
        'Bước 2: v_xuôi = x + 3, v_ngược = x - 3',
        'Bước 3: Quãng đường AB: 4(x+3) = 6(x-3)',
        'Bước 4: 4x + 12 = 6x - 18 → 2x = 30 → x = 15',
        'Bước 5: AB = 4 × (15 + 3) = 4 × 18 = 72 km'
      ],
      tips: 'Lập phương trình từ quãng đường xuôi = quãng đường ngược!'
    },
    xp: 20
  }
];

export default motionQuestions;
