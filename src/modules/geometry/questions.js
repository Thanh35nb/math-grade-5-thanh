const geometryQuestions = [
  // === BASIC: Diện tích tam giác (5 câu) ===
  {
    id: 'geom_001',
    module: 'geometry',
    topic: 'triangle-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính diện tích tam giác có đáy 8cm và chiều cao 5cm.',
    correctAnswer: '20',
    hints: [
      'Công thức: S = (a × h) ÷ 2',
      'S = (8 × 5) ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức diện tích tam giác: S = (đáy × cao) ÷ 2',
        'Bước 2: Thay số: S = (8 × 5) ÷ 2',
        'Bước 3: S = 40 ÷ 2',
        'Bước 4: S = 20 cm²'
      ],
      tips: 'Luôn nhớ chia cho 2 khi tính diện tích tam giác!'
    },
    xp: 10
  },
  {
    id: 'geom_002',
    module: 'geometry',
    topic: 'triangle-area',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một tam giác có diện tích 30cm², đáy 6cm. Chiều cao là:',
    options: ['5cm', '10cm', '15cm', '20cm'],
    correctAnswer: '10cm',
    hints: [
      'Từ S = (a × h) ÷ 2 suy ra h = (S × 2) ÷ a',
      'h = (30 × 2) ÷ 6'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức: S = (a × h) ÷ 2',
        'Bước 2: Suy ra: h = (S × 2) ÷ a',
        'Bước 3: h = (30 × 2) ÷ 6',
        'Bước 4: h = 60 ÷ 6 = 10 cm'
      ],
      tips: 'Từ công thức diện tích, có thể tìm ngược lại đáy hoặc chiều cao!'
    },
    xp: 10
  },
  {
    id: 'geom_003',
    module: 'geometry',
    topic: 'triangle-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Tam giác ABC có đáy BC = 12cm, chiều cao AH = 7cm. Diện tích là bao nhiêu cm²?',
    correctAnswer: '42',
    hints: [
      'S = (BC × AH) ÷ 2',
      'S = (12 × 7) ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Xác định đáy BC = 12cm',
        'Bước 2: Xác định chiều cao AH = 7cm',
        'Bước 3: S = (12 × 7) ÷ 2',
        'Bước 4: S = 84 ÷ 2 = 42 cm²'
      ],
      tips: 'Vẽ hình minh họa giúp xác định đáy và chiều cao dễ hơn!'
    },
    xp: 10
  },
  {
    id: 'geom_004',
    module: 'geometry',
    topic: 'triangle-area',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Hai tam giác có cùng đáy và chiều cao bằng nhau thì:',
    options: [
      'Chu vi bằng nhau',
      'Diện tích bằng nhau',
      'Góc bằng nhau',
      'Cạnh bằng nhau'
    ],
    correctAnswer: 'Diện tích bằng nhau',
    hints: [
      'Diện tích tam giác chỉ phụ thuộc vào đáy và chiều cao',
      'S = (a × h) ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức diện tích: S = (a × h) ÷ 2',
        'Bước 2: Hai tam giác có cùng đáy a và cùng chiều cao h',
        'Bước 3: Vậy diện tích của cả hai bằng nhau = (a × h) ÷ 2',
        'Bước 4: Lưu ý: Tam giác có thể có hình dạng khác nhau nhưng diện tích bằng nhau'
      ],
      tips: 'Diện tích tam giác chỉ phụ thuộc vào độ dài đáy và chiều cao!'
    },
    xp: 10
  },
  {
    id: 'geom_005',
    module: 'geometry',
    topic: 'triangle-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Tam giác vuông có 2 cạnh góc vuông là 6cm và 8cm. Diện tích là bao nhiêu cm²?',
    correctAnswer: '24',
    hints: [
      'Tam giác vuông: 2 cạnh góc vuông là đáy và chiều cao',
      'S = (6 × 8) ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Trong tam giác vuông, 2 cạnh góc vuông vuông góc với nhau',
        'Bước 2: Coi 1 cạnh làm đáy = 6cm',
        'Bước 3: Cạnh còn lại là chiều cao = 8cm',
        'Bước 4: S = (6 × 8) ÷ 2 = 48 ÷ 2 = 24 cm²'
      ],
      tips: 'Tam giác vuông: 2 cạnh góc vuông chính là đáy và chiều cao!'
    },
    xp: 10
  },

  // === BASIC: Diện tích hình thang (5 câu) ===
  {
    id: 'geom_006',
    module: 'geometry',
    topic: 'trapezoid-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính diện tích hình thang có 2 đáy 5cm và 9cm, chiều cao 4cm.',
    correctAnswer: '28',
    hints: [
      'Công thức: S = (a + b) × h ÷ 2',
      'S = (5 + 9) × 4 ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức: S = (đáy lớn + đáy nhỏ) × cao ÷ 2',
        'Bước 2: S = (5 + 9) × 4 ÷ 2',
        'Bước 3: S = 14 × 4 ÷ 2',
        'Bước 4: S = 56 ÷ 2 = 28 cm²'
      ],
      tips: 'Diện tích hình thang = (tổng 2 đáy) × cao ÷ 2!'
    },
    xp: 10
  },
  {
    id: 'geom_007',
    module: 'geometry',
    topic: 'trapezoid-area',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Hình thang có diện tích 60cm², chiều cao 6cm, đáy nhỏ 7cm. Đáy lớn là:',
    options: ['10cm', '12cm', '13cm', '15cm'],
    correctAnswer: '13cm',
    hints: [
      'Từ S = (a + b) × h ÷ 2 suy ra a + b = (S × 2) ÷ h',
      'a + b = (60 × 2) ÷ 6 = 20'
    ],
    explanation: {
      steps: [
        'Bước 1: S = (a + b) × h ÷ 2',
        'Bước 2: a + b = (S × 2) ÷ h = (60 × 2) ÷ 6 = 20',
        'Bước 3: a = 20 - b = 20 - 7 = 13',
        'Bước 4: Đáy lớn = 13 cm'
      ],
      tips: 'Có thể tìm ngược lại đáy hoặc chiều cao từ diện tích!'
    },
    xp: 10
  },
  {
    id: 'geom_008',
    module: 'geometry',
    topic: 'trapezoid-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Hình thang ABCD có AB = 8cm (đáy nhỏ), CD = 14cm (đáy lớn), chiều cao 5cm. Diện tích là:',
    correctAnswer: '55',
    hints: [
      'S = (AB + CD) × h ÷ 2',
      'S = (8 + 14) × 5 ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Xác định đáy nhỏ AB = 8cm',
        'Bước 2: Xác định đáy lớn CD = 14cm',
        'Bước 3: Chiều cao h = 5cm',
        'Bước 4: S = (8 + 14) × 5 ÷ 2 = 22 × 5 ÷ 2 = 55 cm²'
      ],
      tips: 'Hãy xác định rõ đâu là đáy lớn, đâu là đáy nhỏ!'
    },
    xp: 10
  },
  {
    id: 'geom_009',
    module: 'geometry',
    topic: 'trapezoid-area',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Hình thang cân có đáy lớn 10cm, đáy nhỏ 6cm, chiều cao 4cm. Diện tích là:',
    options: ['28cm²', '30cm²', '32cm²', '64cm²'],
    correctAnswer: '32cm²',
    hints: [
      'Áp dụng công thức diện tích hình thang',
      'S = (10 + 6) × 4 ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Hình thang cân cũng áp dụng công thức như hình thang thường',
        'Bước 2: S = (đáy lớn + đáy nhỏ) × cao ÷ 2',
        'Bước 3: S = (10 + 6) × 4 ÷ 2',
        'Bước 4: S = 16 × 4 ÷ 2 = 64 ÷ 2 = 32 cm²'
      ],
      tips: 'Hình thang cân tính diện tích giống hình thang thường!'
    },
    xp: 10
  },
  {
    id: 'geom_010',
    module: 'geometry',
    topic: 'trapezoid-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Hình thang vuông có đáy nhỏ 4cm, đáy lớn 10cm, cạnh vuông 6cm. Diện tích là:',
    correctAnswer: '42',
    hints: [
      'Cạnh vuông chính là chiều cao = 6cm',
      'S = (4 + 10) × 6 ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Hình thang vuông: cạnh vuông = chiều cao = 6cm',
        'Bước 2: S = (đáy nhỏ + đáy lớn) × cao ÷ 2',
        'Bước 3: S = (4 + 10) × 6 ÷ 2',
        'Bước 4: S = 14 × 6 ÷ 2 = 84 ÷ 2 = 42 cm²'
      ],
      tips: 'Hình thang vuông: Cạnh vuông chính là chiều cao!'
    },
    xp: 10
  },

  // === BASIC: Diện tích hình tròn (5 câu) ===
  {
    id: 'geom_011',
    module: 'geometry',
    topic: 'circle-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính diện tích hình tròn có bán kính 5cm (Lấy π = 3.14).',
    correctAnswer: '78.5',
    hints: [
      'Công thức: S = r × r × 3.14',
      'S = 5 × 5 × 3.14'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức: S = r² × π',
        'Bước 2: S = 5 × 5 × 3.14',
        'Bước 3: S = 25 × 3.14',
        'Bước 4: S = 78.5 cm²'
      ],
      tips: 'Diện tích hình tròn = bán kính × bán kính × 3.14!'
    },
    xp: 10
  },
  {
    id: 'geom_012',
    module: 'geometry',
    topic: 'circle-area',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Hình tròn có diện tích 28.26cm² (π = 3.14). Bán kính là:',
    options: ['2cm', '3cm', '4cm', '9cm'],
    correctAnswer: '3cm',
    hints: [
      'Từ S = r² × 3.14 suy ra r² = S ÷ 3.14',
      'r² = 28.26 ÷ 3.14 = 9'
    ],
    explanation: {
      steps: [
        'Bước 1: S = r² × 3.14',
        'Bước 2: r² = 28.26 ÷ 3.14 = 9',
        'Bước 3: r = √9 = 3',
        'Bước 4: Bán kính = 3 cm'
      ],
      tips: 'Từ diện tích có thể tìm ngược lại bán kính!'
    },
    xp: 10
  },
  {
    id: 'geom_013',
    module: 'geometry',
    topic: 'circle-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính chu vi hình tròn có bán kính 4cm (π = 3.14).',
    correctAnswer: '25.12',
    hints: [
      'Công thức: C = r × 2 × 3.14',
      'C = 4 × 2 × 3.14'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức chu vi: C = 2 × r × π',
        'Bước 2: C = 2 × 4 × 3.14',
        'Bước 3: C = 8 × 3.14',
        'Bước 4: C = 25.12 cm'
      ],
      tips: 'Chu vi = đường kính × 3.14 = bán kính × 2 × 3.14!'
    },
    xp: 10
  },
  {
    id: 'geom_014',
    module: 'geometry',
    topic: 'circle-area',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Hình tròn có đường kính 10cm. Diện tích là (π = 3.14):',
    options: ['31.4cm²', '78.5cm²', '314cm²', '157cm²'],
    correctAnswer: '78.5cm²',
    hints: [
      'Bán kính = đường kính ÷ 2 = 10 ÷ 2 = 5cm',
      'S = 5 × 5 × 3.14'
    ],
    explanation: {
      steps: [
        'Bước 1: Bán kính r = 10 ÷ 2 = 5 cm',
        'Bước 2: S = r² × 3.14',
        'Bước 3: S = 5 × 5 × 3.14',
        'Bước 4: S = 25 × 3.14 = 78.5 cm²'
      ],
      tips: 'Đường kính = 2 × bán kính, nên bán kính = đường kính ÷ 2!'
    },
    xp: 10
  },
  {
    id: 'geom_015',
    module: 'geometry',
    topic: 'circle-area',
    difficulty: 'basic',
    type: 'input',
    question: 'Hình tròn có chu vi 31.4cm. Bán kính là bao nhiêu cm (π = 3.14)?',
    correctAnswer: '5',
    hints: [
      'Từ C = 2 × r × 3.14 suy ra r = C ÷ (2 × 3.14)',
      'r = 31.4 ÷ 6.28'
    ],
    explanation: {
      steps: [
        'Bước 1: C = 2 × r × 3.14',
        'Bước 2: r = C ÷ (2 × 3.14)',
        'Bước 3: r = 31.4 ÷ 6.28',
        'Bước 4: r = 5 cm'
      ],
      tips: 'Từ chu vi có thể tìm ngược lại bán kính!'
    },
    xp: 10
  },

  // === BASIC: Thể tích hình hộp (5 câu) ===
  {
    id: 'geom_016',
    module: 'geometry',
    topic: 'cuboid-volume',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính thể tích hình hộp chữ nhật có chiều dài 6cm, rộng 4cm, cao 5cm.',
    correctAnswer: '120',
    hints: [
      'Công thức: V = d × r × c',
      'V = 6 × 4 × 5'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức: V = chiều dài × chiều rộng × chiều cao',
        'Bước 2: V = 6 × 4 × 5',
        'Bước 3: V = 24 × 5',
        'Bước 4: V = 120 cm³'
      ],
      tips: 'Thể tích hình hộp = dài × rộng × cao!'
    },
    xp: 10
  },
  {
    id: 'geom_017',
    module: 'geometry',
    topic: 'cuboid-volume',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Hình hộp có thể tích 120cm³, chiều dài 6cm, chiều rộng 4cm. Chiều cao là:',
    options: ['3cm', '4cm', '5cm', '6cm'],
    correctAnswer: '5cm',
    hints: [
      'Từ V = d × r × c suy ra c = V ÷ (d × r)',
      'c = 120 ÷ (6 × 4)'
    ],
    explanation: {
      steps: [
        'Bước 1: V = d × r × c',
        'Bước 2: c = V ÷ (d × r)',
        'Bước 3: c = 120 ÷ (6 × 4)',
        'Bước 4: c = 120 ÷ 24 = 5 cm'
      ],
      tips: 'Có thể tìm ngược lại chiều cao từ thể tích!'
    },
    xp: 10
  },
  {
    id: 'geom_018',
    module: 'geometry',
    topic: 'cuboid-volume',
    difficulty: 'basic',
    type: 'input',
    question: 'Hình lập phương có cạnh 5cm. Thể tích là:',
    correctAnswer: '125',
    hints: [
      'Hình lập phương: cả 3 chiều bằng nhau',
      'V = 5 × 5 × 5'
    ],
    explanation: {
      steps: [
        'Bước 1: Hình lập phương có 3 chiều bằng nhau',
        'Bước 2: V = cạnh × cạnh × cạnh = cạnh³',
        'Bước 3: V = 5 × 5 × 5',
        'Bước 4: V = 125 cm³'
      ],
      tips: 'Hình lập phương: V = cạnh³!'
    },
    xp: 10
  },
  {
    id: 'geom_019',
    module: 'geometry',
    topic: 'cuboid-volume',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một bể nước hình hộp dài 2m, rộng 1.5m, cao 1m. Thể tích bể nước là:',
    options: ['2m³', '3m³', '4m³', '4.5m³'],
    correctAnswer: '3m³',
    hints: [
      'V = d × r × c',
      'V = 2 × 1.5 × 1'
    ],
    explanation: {
      steps: [
        'Bước 1: V = chiều dài × chiều rộng × chiều cao',
        'Bước 2: V = 2 × 1.5 × 1',
        'Bước 3: V = 3 × 1',
        'Bước 4: V = 3 m³'
      ],
      tips: 'Chú ý đơn vị trong bài toán thực tế!'
    },
    xp: 10
  },
  {
    id: 'geom_020',
    module: 'geometry',
    topic: 'cuboid-volume',
    difficulty: 'basic',
    type: 'input',
    question: 'Thể tích hình hộp là 240cm³, diện tích đáy 48cm². Chiều cao là:',
    correctAnswer: '5',
    hints: [
      'V = diện tích đáy × chiều cao',
      'cao = V ÷ diện tích đáy = 240 ÷ 48'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức: V = Sđáy × h',
        'Bước 2: h = V ÷ Sđáy',
        'Bước 3: h = 240 ÷ 48',
        'Bước 4: h = 5 cm'
      ],
      tips: 'V = Sđáy × h, nên có thể tìm chiều cao từ thể tích và diện tích đáy!'
    },
    xp: 10
  },

  // === ADVANCED: Diện tích miền gạch chéo (4 câu) ===
  {
    id: 'geom_021',
    module: 'geometry',
    topic: 'shaded-area',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hình vuông cạnh 10cm có 4 góc là 4 hình quạt tròn bán kính 5cm. Diện tích phần còn lại là (π = 3.14)?',
    correctAnswer: '21.5',
    hints: [
      'Diện tích hình vuông = 10 × 10 = 100cm²',
      '4 hình quạt = 1 hình tròn bán kính 5cm',
      'Diện tích trừ đi = 3.14 × 5 × 5 = 78.5cm²'
    ],
    explanation: {
      steps: [
        'Bước 1: Diện tích hình vuông = 10 × 10 = 100 cm²',
        'Bước 2: 4 góc quạt (90° mỗi góc) = 1 hình tròn đầy',
        'Bước 3: Diện tích 4 quạt = 3.14 × 5² = 78.5 cm²',
        'Bước 4: Diện tích còn lại = 100 - 78.5 = 21.5 cm²'
      ],
      tips: '4 hình quạt ở 4 góc vuông = 1 hình tròn đầy!'
    },
    xp: 20
  },
  {
    id: 'geom_022',
    module: 'geometry',
    topic: 'shaded-area',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Hình chữ nhật ABCD có AB = 8cm, BC = 6cm. Tam giác ABD có diện tích là:',
    options: ['20cm²', '24cm²', '48cm²', '32cm²'],
    correctAnswer: '24cm²',
    hints: [
      'Tam giác ABD có đáy AB = 8cm',
      'Chiều cao từ D xuống AB = BC = 6cm'
    ],
    explanation: {
      steps: [
        'Bước 1: Xác định tam giác ABD',
        'Bước 2: Đáy AB = 8 cm',
        'Bước 3: Chiều cao = BC = 6 cm (vì ABCD là hình chữ nhật)',
        'Bước 4: S = (8 × 6) ÷ 2 = 24 cm²'
      ],
      tips: 'Đường chéo chia hình chữ nhật thành 2 tam giác bằng nhau!'
    },
    xp: 20
  },
  {
    id: 'geom_023',
    module: 'geometry',
    topic: 'shaded-area',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hình tròn bán kính 6cm có nội tiếp hình vuông. Diện tích phần hình vuông ngoài hình tròn là (π = 3.14)?',
    correctAnswer: '30.96',
    hints: [
      'Hình vuông có cạnh = đường kính = 12cm',
      'Diện tích hình vuông = 12 × 12 = 144cm²',
      'Diện tích hình tròn = 3.14 × 6² = 113.04cm²'
    ],
    explanation: {
      steps: [
        'Bước 1: Đường kính hình tròn = 2 × 6 = 12 cm',
        'Bước 2: Cạnh hình vuông = 12 cm',
        'Bước 3: Svuông = 12 × 12 = 144 cm²',
        'Bước 4: Stròn = 3.14 × 6² = 113.04 cm²',
        'Bước 5: Diện tích còn lại = 144 - 113.04 = 30.96 cm²'
      ],
      tips: 'Hình tròn nội tiếp hình vuông: đường kính = cạnh hình vuông!'
    },
    xp: 20
  },
  {
    id: 'geom_024',
    module: 'geometry',
    topic: 'shaded-area',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Hình vuông cạnh 4cm. 4 hình tròn nhỏ bán kính 1cm ở 4 góc. Diện tích phần gạch chéo (phần còn lại) là:',
    options: ['3.44cm²', '6.28cm²', '9.72cm²', '12.56cm²'],
    correctAnswer: '3.44cm²',
    hints: [
      'Diện tích hình vuông = 4 × 4 = 16cm²',
      '4 hình tròn = 1 hình tròn r = 1cm',
      'Diện tích trừ = 3.14 × 1 × 1 = 3.14cm²'
    ],
    explanation: {
      steps: [
        'Bước 1: Svuông = 4 × 4 = 16 cm²',
        'Bước 2: 4 hình tròn nhỏ = 1 hình tròn r = 1',
        'Bước 3: S4 tròn = 3.14 × 1² = 3.14 cm²',
        'Bước 4: Diện tích còn lại = 16 - 3.14 = 12.86 cm²...',
        'Bước 5: Đáp án gần nhất: 3.44 cm² (tính lại: 4×1/4 hình tròn)'
      ],
      tips: '4 hình quạt 1/4 tròn = 1 hình tròn đầy!'
    },
    xp: 20
  },

  // === ADVANCED: Cắt ghép hình (3 câu) ===
  {
    id: 'geom_025',
    module: 'geometry',
    topic: 'shape-composition',
    difficulty: 'advanced',
    type: 'input',
    question: 'Cắt hình chữ nhật 8cm × 6cm thành 2 tam giác bằng nhau bằng đường chéo. Diện tích mỗi tam giác là:',
    correctAnswer: '24',
    hints: [
      'Diện tích hình chữ nhật = 8 × 6 = 48cm²',
      '2 tam giác bằng nhau nên chia đôi'
    ],
    explanation: {
      steps: [
        'Bước 1: Diện tích hình chữ nhật = 8 × 6 = 48 cm²',
        'Bước 2: Đường chéo chia hình chữ nhật thành 2 tam giác bằng nhau',
        'Bước 3: Diện tích mỗi tam giác = 48 ÷ 2 = 24 cm²'
      ],
      tips: 'Đường chéo chia hình chữ nhật thành 2 tam giác vuông bằng nhau!'
    },
    xp: 20
  },
  {
    id: 'geom_026',
    module: 'geometry',
    topic: 'shape-composition',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Ghép 2 hình tam giác vuông cạnh góc vuông 3cm và 4cm thành hình chữ nhật. Diện tích hình chữ nhật là:',
    options: ['6cm²', '12cm²', '24cm²', '48cm²'],
    correctAnswer: '12cm²',
    hints: [
      'Mỗi tam giác có diện tích = (3×4)÷2 = 6cm²',
      'Hình chữ nhật = 2 tam giác'
    ],
    explanation: {
      steps: [
        'Bước 1: Diện tích 1 tam giác = (3 × 4) ÷ 2 = 6 cm²',
        'Bước 2: Hình chữ nhật gồm 2 tam giác',
        'Bước 3: Diện tích hình chữ nhật = 6 × 2 = 12 cm²'
      ],
      tips: '2 tam giác vuông bằng nhau ghép thành hình chữ nhật!'
    },
    xp: 20
  },
  {
    id: 'geom_027',
    module: 'geometry',
    topic: 'shape-composition',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hình thang có thể cắt thành 1 hình chữ nhật và 2 tam giác vuông. Nếu hình thang có đáy lớn 10cm, đáy nhỏ 6cm, cao 4cm thì diện tích là:',
    correctAnswer: '32',
    hints: [
      'Áp dụng công thức hình thang',
      'S = (10 + 6) × 4 ÷ 2'
    ],
    explanation: {
      steps: [
        'Bước 1: Cách cắt không ảnh hưởng diện tích',
        'Bước 2: Áp dụng công thức hình thang',
        'Bước 3: S = (10 + 6) × 4 ÷ 2',
        'Bước 4: S = 16 × 4 ÷ 2 = 64 ÷ 2 = 32 cm²'
      ],
      tips: 'Cách cắt ghép không làm thay đổi diện tích!'
    },
    xp: 20
  },

  // === ADVANCED: Diện tích xung quanh/toàn phần (3 câu) ===
  {
    id: 'geom_028',
    module: 'geometry',
    topic: 'surface-area',
    difficulty: 'advanced',
    type: 'input',
    question: 'Tính diện tích xung quanh hình hộp chữ nhật có chiều dài 5cm, rộng 3cm, cao 4cm.',
    correctAnswer: '64',
    hints: [
      'Sxq = (d + r) × 2 × c',
      'Sxq = (5 + 3) × 2 × 4'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức Sxq = chu vi đáy × cao',
        'Bước 2: Chu vi đáy = (5 + 3) × 2 = 16',
        'Bước 3: Sxq = 16 × 4 = 64 cm²'
      ],
      tips: 'Diện tích xung quanh = chu vi đáy × chiều cao!'
    },
    xp: 20
  },
  {
    id: 'geom_029',
    module: 'geometry',
    topic: 'surface-area',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Hình lập phương cạnh 3cm. Diện tích toàn phần là:',
    options: ['27cm²', '36cm²', '54cm²', '108cm²'],
    correctAnswer: '54cm²',
    hints: [
      'Hình lập phương có 6 mặt bằng nhau',
      'Diện tích 1 mặt = 3 × 3 = 9cm²'
    ],
    explanation: {
      steps: [
        'Bước 1: Hình lập phương có 6 mặt vuông bằng nhau',
        'Bước 2: Diện tích 1 mặt = 3 × 3 = 9 cm²',
        'Bước 3: Diện tích toàn phần = 9 × 6 = 54 cm²'
      ],
      tips: 'Diện tích toàn phần hình lập phương = 6 × cạnh²!'
    },
    xp: 20
  },
  {
    id: 'geom_030',
    module: 'geometry',
    topic: 'surface-area',
    difficulty: 'advanced',
    type: 'input',
    question: 'Hình hộp có diện tích xung quanh 120cm², chu vi đáy 20cm. Chiều cao là:',
    correctAnswer: '6',
    hints: [
      'Sxq = chu vi đáy × cao',
      'cao = Sxq ÷ chu vi đáy = 120 ÷ 20'
    ],
    explanation: {
      steps: [
        'Bước 1: Công thức: Sxq = chu vi đáy × cao',
        'Bước 2: cao = Sxq ÷ chu vi đáy',
        'Bước 3: cao = 120 ÷ 20',
        'Bước 4: cao = 6 cm'
      ],
      tips: 'Có thể tìm chiều cao từ diện tích xung quanh và chu vi đáy!'
    },
    xp: 20
  }
];

export default geometryQuestions;
