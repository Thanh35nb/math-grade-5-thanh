const arithmeticQuestions = [
  // === BASIC: Phân số (8 câu) ===
  {
    id: 'arith_001',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 2/3 + 1/4 = ?',
    options: ['5/7', '11/12', '3/7', '5/12'],
    correctAnswer: '11/12',
    hints: [
      'Quy đồng mẫu số chung là 12',
      '2/3 = 8/12 và 1/4 = 3/12'
    ],
    explanation: {
      steps: [
        'Bước 1: Tìm mẫu số chung của 3 và 4 → MSC = 12',
        'Bước 2: Quy đồng: 2/3 = (2×4)/(3×4) = 8/12',
        'Bước 3: Quy đồng: 1/4 = (1×3)/(4×3) = 3/12',
        'Bước 4: Cộng tử số: 8/12 + 3/12 = 11/12'
      ],
      tips: 'Luôn tìm BCNN của các mẫu số để quy đồng nhanh nhất!'
    },
    xp: 10
  },
  {
    id: 'arith_002',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 5/6 - 1/3 = ?',
    options: ['4/3', '1/2', '3/6', '4/9'],
    correctAnswer: '1/2',
    hints: [
      'Quy đồng mẫu số chung là 6',
      '1/3 = 2/6'
    ],
    explanation: {
      steps: [
        'Bước 1: MSC của 6 và 3 là 6',
        'Bước 2: 5/6 giữ nguyên',
        'Bước 3: 1/3 = 2/6',
        'Bước 4: 5/6 - 2/6 = 3/6 = 1/2'
      ],
      tips: 'Rút gọn phân số kết quả về dạng tối giản!'
    },
    xp: 10
  },
  {
    id: 'arith_003',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 3/4 × 2/5 = ? (Viết dạng phân số tối giản)',
    correctAnswer: '3/10',
    hints: [
      'Nhân tử với tử, mẫu với mẫu',
      '(3×2)/(4×5) = 6/20'
    ],
    explanation: {
      steps: [
        'Bước 1: Nhân tử số: 3 × 2 = 6',
        'Bước 2: Nhân mẫu số: 4 × 5 = 20',
        'Bước 3: Kết quả: 6/20',
        'Bước 4: Rút gọn: 6/20 = 3/10'
      ],
      tips: 'Nhớ rút gọn phân số về dạng tối giản sau khi nhân!'
    },
    xp: 10
  },
  {
    id: 'arith_004',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 2/3 ÷ 4/5 = ?',
    options: ['8/15', '5/6', '3/10', '10/12'],
    correctAnswer: '5/6',
    hints: [
      'Chia phân số = Nhân với nghịch đảo',
      '2/3 ÷ 4/5 = 2/3 × 5/4'
    ],
    explanation: {
      steps: [
        'Bước 1: Nghịch đảo của 4/5 là 5/4',
        'Bước 2: 2/3 × 5/4 = (2×5)/(3×4)',
        'Bước 3: = 10/12',
        'Bước 4: Rút gọn: 10/12 = 5/6'
      ],
      tips: 'Chia phân số = Nhân với phân số nghịch đảo!'
    },
    xp: 10
  },
  {
    id: 'arith_005',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Rút gọn phân số 18/24 về dạng tối giản.',
    correctAnswer: '3/4',
    hints: [
      'Tìm UCLN của 18 và 24',
      'UCLN(18, 24) = 6'
    ],
    explanation: {
      steps: [
        'Bước 1: Tìm UCLN(18, 24)',
        'Bước 2: 18 = 2 × 3², 24 = 2³ × 3',
        'Bước 3: UCLN = 2 × 3 = 6',
        'Bước 4: 18/24 = (18÷6)/(24÷6) = 3/4'
      ],
      tips: 'Luôn tìm UCLN để rút gọn phân số về dạng tối giản!'
    },
    xp: 10
  },
  {
    id: 'arith_006',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'So sánh: 3/5 và 2/3',
    options: ['3/5 > 2/3', '3/5 < 2/3', '3/5 = 2/3', 'Không so sánh được'],
    correctAnswer: '3/5 < 2/3',
    hints: [
      'Quy đồng mẫu số chung là 15',
      '3/5 = 9/15, 2/3 = 10/15'
    ],
    explanation: {
      steps: [
        'Bước 1: MSC(5, 3) = 15',
        'Bước 2: 3/5 = (3×3)/(5×3) = 9/15',
        'Bước 3: 2/3 = (2×5)/(3×5) = 10/15',
        'Bước 4: Vì 9/15 < 10/15 nên 3/5 < 2/3'
      ],
      tips: 'Quy đồng mẫu số rồi so sánh tử số!'
    },
    xp: 10
  },
  {
    id: 'arith_007',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 1/2 + 1/3 + 1/6 = ?',
    correctAnswer: '1',
    hints: [
      'MSC của 2, 3, 6 là 6',
      'Quy đồng cả 3 phân số'
    ],
    explanation: {
      steps: [
        'Bước 1: MSC(2, 3, 6) = 6',
        'Bước 2: 1/2 = 3/6',
        'Bước 3: 1/3 = 2/6',
        'Bước 4: 1/6 = 1/6',
        'Bước 5: 3/6 + 2/6 + 1/6 = 6/6 = 1'
      ],
      tips: 'Với nhiều phân số, tìm BCNN của tất cả mẫu số!'
    },
    xp: 10
  },
  {
    id: 'arith_008',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một cái bánh được chia làm 8 phần bằng nhau. An ăn 3 phần, Bình ăn 2 phần. Hỏi còn lại bao nhiêu phần bánh?',
    options: ['3/8', '5/8', '2/8', '1/2'],
    correctAnswer: '3/8',
    hints: [
      'Tổng số phần bánh là 8/8',
      'An và Bình ăn: 3/8 + 2/8 = 5/8'
    ],
    explanation: {
      steps: [
        'Bước 1: An ăn 3/8 cái bánh',
        'Bước 2: Bình ăn 2/8 = 1/4 cái bánh',
        'Bước 3: Cả hai ăn: 3/8 + 2/8 = 5/8',
        'Bước 4: Còn lại: 8/8 - 5/8 = 3/8'
      ],
      tips: 'Bài toán thực tế: Đọc kỹ đề và xác định phép tính cần làm!'
    },
    xp: 10
  },

  // === BASIC: Số thập phân (6 câu) ===
  {
    id: 'arith_009',
    module: 'arithmetic',
    topic: 'decimals',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 2.5 + 1.75 = ?',
    correctAnswer: '4.25',
    hints: [
      'Viết thẳng hàng theo dấu phẩy',
      '2.50 + 1.75'
    ],
    explanation: {
      steps: [
        'Bước 1: Viết 2.5 = 2.50',
        'Bước 2: Cộng từ phải sang trái',
        'Bước 3: 0+5=5, 5+7=12 (nhớ 1), 2+1+1=4',
        'Bước 4: Kết quả: 4.25'
      ],
      tips: 'Viết các số thẳng hàng theo dấu phẩy rồi cộng như số tự nhiên!'
    },
    xp: 10
  },
  {
    id: 'arith_010',
    module: 'arithmetic',
    topic: 'decimals',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 5.6 - 2.35 = ?',
    options: ['3.25', '3.35', '2.25', '3.15'],
    correctAnswer: '3.25',
    hints: [
      'Viết 5.6 = 5.60',
      'Trừ từ phải sang trái'
    ],
    explanation: {
      steps: [
        'Bước 1: Viết 5.6 = 5.60',
        'Bước 2: 0-5 không đủ, mượn 1 → 10-5=5',
        'Bước 3: 5-1-3=1, 5-2=3',
        'Bước 4: Kết quả: 3.25'
      ],
      tips: 'Thêm số 0 vào sau để có cùng số chữ số thập phân!'
    },
    xp: 10
  },
  {
    id: 'arith_011',
    module: 'arithmetic',
    topic: 'decimals',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 1.2 × 0.5 = ?',
    correctAnswer: '0.6',
    hints: [
      'Nhân như số tự nhiên: 12 × 5 = 60',
      'Tổng số chữ số thập phân là 1+1=2'
    ],
    explanation: {
      steps: [
        'Bước 1: Nhân 12 × 5 = 60',
        'Bước 2: 1.2 có 1 chữ số thập phân',
        'Bước 3: 0.5 có 1 chữ số thập phân',
        'Bước 4: Tổng: 2 chữ số thập phân → 0.60 = 0.6'
      ],
      tips: 'Nhân như số tự nhiên, rồi đặt dấu phẩy cách từ phải sang số chữ số bằng tổng số chữ số thập phân!'
    },
    xp: 10
  },
  {
    id: 'arith_012',
    module: 'arithmetic',
    topic: 'decimals',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 4.8 ÷ 0.6 = ?',
    options: ['0.8', '8', '80', '0.08'],
    correctAnswer: '8',
    hints: [
      'Nhân cả tử và mẫu với 10',
      '4.8 ÷ 0.6 = 48 ÷ 6'
    ],
    explanation: {
      steps: [
        'Bước 1: Nhân cả hai với 10',
        'Bước 2: 4.8 × 10 = 48',
        'Bước 3: 0.6 × 10 = 6',
        'Bước 4: 48 ÷ 6 = 8'
      ],
      tips: 'Nhân cả số chia và số bị chia với cùng một số để chuyển số chia thành số tự nhiên!'
    },
    xp: 10
  },
  {
    id: 'arith_013',
    module: 'arithmetic',
    topic: 'decimals',
    difficulty: 'basic',
    type: 'input',
    question: 'Viết phân số 3/4 dưới dạng số thập phân.',
    correctAnswer: '0.75',
    hints: [
      'Chia tử cho mẫu: 3 ÷ 4',
      '3.00 ÷ 4'
    ],
    explanation: {
      steps: [
        'Bước 1: Thực hiện phép chia 3 ÷ 4',
        'Bước 2: 3 = 3.00',
        'Bước 3: 30 ÷ 4 = 7 dư 2',
        'Bước 4: 20 ÷ 4 = 5',
        'Bước 5: Kết quả: 0.75'
      ],
      tips: 'Chia tử số cho mẫu số để chuyển phân số thành số thập phân!'
    },
    xp: 10
  },
  {
    id: 'arith_014',
    module: 'arithmetic',
    topic: 'decimals',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một quyển sách giá 25.500 đồng. Nếu mua 4 quyển thì hết bao nhiêu tiền?',
    options: ['100.000 đ', '102.000 đ', '101.000 đ', '100.500 đ'],
    correctAnswer: '102.000 đ',
    hints: [
      'Nhân 25.500 × 4',
      '25500 × 4 = 102000'
    ],
    explanation: {
      steps: [
        'Bước 1: Giá 1 quyển = 25.500 đồng',
        'Bước 2: Giá 4 quyển = 25.500 × 4',
        'Bước 3: 25500 × 4 = 102000',
        'Bước 4: Kết quả: 102.000 đồng'
      ],
      tips: 'Bài toán thực tế: Xác định phép nhân phù hợp!'
    },
    xp: 10
  },

  // === BASIC: Chuyển đổi (6 câu) ===
  {
    id: 'arith_015',
    module: 'arithmetic',
    topic: 'conversion',
    difficulty: 'basic',
    type: 'input',
    question: 'Chuyển 3/5 thành phần trăm (%).',
    correctAnswer: '60%',
    hints: [
      'Nhân phân số với 100%',
      '3/5 × 100% = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Để chuyển sang %, nhân với 100',
        'Bước 2: 3/5 × 100 = 300/5',
        'Bước 3: 300 ÷ 5 = 60',
        'Bước 4: Kết quả: 60%'
      ],
      tips: 'Phân số → %: Nhân phân số với 100 và thêm dấu %!'
    },
    xp: 10
  },
  {
    id: 'arith_016',
    module: 'arithmetic',
    topic: 'conversion',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Số thập phân 0.125 viết dưới dạng phân số là:',
    options: ['1/8', '125/100', '1/4', '25/200'],
    correctAnswer: '1/8',
    hints: [
      '0.125 = 125/1000',
      'Rút gọn 125/1000'
    ],
    explanation: {
      steps: [
        'Bước 1: 0.125 = 125/1000',
        'Bước 2: Tìm UCLN(125, 1000) = 125',
        'Bước 3: 125/1000 = (125÷125)/(1000÷125)',
        'Bước 4: = 1/8'
      ],
      tips: 'Số thập phân → Phân số: Viết số thập phân làm tử, mẫu là 1 với số 0 tương ứng!'
    },
    xp: 10
  },
  {
    id: 'arith_017',
    module: 'arithmetic',
    topic: 'conversion',
    difficulty: 'basic',
    type: 'input',
    question: 'Chuyển 0.75 thành phân số tối giản.',
    correctAnswer: '3/4',
    hints: [
      '0.75 = 75/100',
      'UCLN(75, 100) = 25'
    ],
    explanation: {
      steps: [
        'Bước 1: 0.75 = 75/100',
        'Bước 2: UCLN(75, 100) = 25',
        'Bước 3: 75/100 = (75÷25)/(100÷25)',
        'Bước 4: = 3/4'
      ],
      tips: 'Luôn rút gọn về phân số tối giản!'
    },
    xp: 10
  },
  {
    id: 'arith_018',
    module: 'arithmetic',
    topic: 'conversion',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: '75% viết dưới dạng phân số tối giản là:',
    options: ['3/4', '75/100', '15/20', '7/10'],
    correctAnswer: '3/4',
    hints: [
      '75% = 75/100',
      'Rút gọn 75/100'
    ],
    explanation: {
      steps: [
        'Bước 1: 75% = 75/100',
        'Bước 2: UCLN(75, 100) = 25',
        'Bước 3: 75/100 = (75÷25)/(100÷25)',
        'Bước 4: = 3/4'
      ],
      tips: '% → Phân số: Viết số % làm tử, mẫu là 100, rồi rút gọn!'
    },
    xp: 10
  },
  {
    id: 'arith_019',
    module: 'arithmetic',
    topic: 'conversion',
    difficulty: 'basic',
    type: 'input',
    question: 'Chuyển 1/2 thành số thập phân.',
    correctAnswer: '0.5',
    hints: [
      'Chia 1 ÷ 2',
      'Thêm dấu phẩy và số 0'
    ],
    explanation: {
      steps: [
        'Bước 1: Thực hiện phép chia 1 ÷ 2',
        'Bước 2: 1 = 1.0',
        'Bước 3: 10 ÷ 2 = 5',
        'Bước 4: Kết quả: 0.5'
      ],
      tips: 'Phân số → Số thập phân: Chia tử cho mẫu!'
    },
    xp: 10
  },
  {
    id: 'arith_020',
    module: 'arithmetic',
    topic: 'conversion',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Số thập phân 0.25 tương đương với phần trăm nào?',
    options: ['2.5%', '25%', '0.25%', '250%'],
    correctAnswer: '25%',
    hints: [
      'Nhân 0.25 với 100',
      '0.25 × 100 = 25'
    ],
    explanation: {
      steps: [
        'Bước 1: Để chuyển số thập phân sang %, nhân với 100',
        'Bước 2: 0.25 × 100 = 25',
        'Bước 3: Thêm dấu %',
        'Bước 4: Kết quả: 25%'
      ],
      tips: 'Số thập phân → %: Nhân với 100 và thêm dấu %!'
    },
    xp: 10
  },

  // === ADVANCED: Cấu tạo số (4 câu) ===
  {
    id: 'arith_021',
    module: 'arithmetic',
    topic: 'number-construction',
    difficulty: 'advanced',
    type: 'input',
    question: 'Tìm số tự nhiên có 3 chữ số, biết tích các chữ số bằng 18 và tổng các chữ số bằng 9. Số đó là số lớn nhất thỏa mãn.',
    correctAnswer: '621',
    hints: [
      'Gọi số cần tìm là abc',
      'a×b×c=18 và a+b+c=9'
    ],
    explanation: {
      steps: [
        'Bước 1: Gọi số cần tìm là abc (a≠0)',
        'Bước 2: a×b×c=18 và a+b+c=9',
        'Bước 3: Phân tích 18 = 2×3×3 = 1×2×9 = 1×3×6 = 2×3×3',
        'Bước 4: Kiểm tra tổng: 2+3+3=8≠9, 1+2+9=12≠9, 1+3+6=10≠9, 6+2+1=9✓',
        'Bước 5: Số lớn nhất: sắp xếp 6,2,1 → 621'
      ],
      tips: 'Liệt kê các cách phân tích rồi kiểm tra điều kiện tổng!'
    },
    xp: 20
  },
  {
    id: 'arith_022',
    module: 'arithmetic',
    topic: 'number-construction',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Một số có 2 chữ số, chữ số hàng chục gấp 3 lần chữ số hàng đơn vị. Tổng 2 chữ số bằng 8. Số đó là:',
    options: ['26', '62', '35', '53'],
    correctAnswer: '62',
    hints: [
      'Gọi chữ số hàng đơn vị là x',
      'Chữ số hàng chục là 3x',
      'x + 3x = 8'
    ],
    explanation: {
      steps: [
        'Bước 1: Gọi chữ số hàng đơn vị là x',
        'Bước 2: Chữ số hàng chục là 3x',
        'Bước 3: x + 3x = 8 → 4x = 8 → x = 2',
        'Bước 4: Chữ số hàng chục = 3×2 = 6',
        'Bước 5: Số cần tìm là 62'
      ],
      tips: 'Đặt ẩn số cho chữ số nhỏ hơn, rồi biểu diễn chữ số còn lại theo ẩn!'
    },
    xp: 20
  },
  {
    id: 'arith_023',
    module: 'arithmetic',
    topic: 'number-construction',
    difficulty: 'advanced',
    type: 'input',
    question: 'Tìm số tự nhiên nhỏ nhất có 3 chữ số khác nhau và tổng các chữ số bằng 15.',
    correctAnswer: '159',
    hints: [
      'Số nhỏ nhất: chữ số hàng trăm nhỏ nhất',
      'Chữ số hàng trăm = 1, còn lại cộng = 14'
    ],
    explanation: {
      steps: [
        'Bước 1: Số nhỏ nhất → chữ số hàng trăm nhỏ nhất = 1',
        'Bước 2: Tổng 2 chữ số còn lại = 15 - 1 = 14',
        'Bước 3: Để số nhỏ nhất, chữ số hàng chục nhỏ nhất và khác 1',
        'Bước 4: Chữ số hàng chục = 5, chữ số hàng đơn vị = 9 (vì 5+9=14)',
        'Bước 5: Số cần tìm: 159'
      ],
      tips: 'Số nhỏ nhất: Chữ số cao nhất càng nhỏ càng tốt!'
    },
    xp: 20
  },
  {
    id: 'arith_024',
    module: 'arithmetic',
    topic: 'number-construction',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Một số có 3 chữ số, chữ số hàng trăm gấp đôi chữ số hàng đơn vị, chữ số hàng chục bằng tổng 2 chữ số kia. Chữ số hàng chục là:',
    options: ['3', '6', '9', '12'],
    correctAnswer: '9',
    hints: [
      'Gọi chữ số hàng đơn vị là x',
      'Chữ số hàng trăm = 2x',
      'Chữ số hàng chục = x + 2x = 3x'
    ],
    explanation: {
      steps: [
        'Bước 1: Gọi chữ số hàng đơn vị là x',
        'Bước 2: Chữ số hàng trăm = 2x',
        'Bước 3: Chữ số hàng chục = x + 2x = 3x',
        'Bước 4: Vì chữ số hàng chục là 1 chữ số nên 3x ≤ 9 → x ≤ 3',
        'Bước 5: Chữ số hàng trăm là 1 chữ số nên 2x ≤ 9 → x ≤ 4',
        'Bước 6: Với x = 3: chữ số hàng chục = 3×3 = 9'
      ],
      tips: 'Biểu diễn tất cả theo 1 ẩn số!'
    },
    xp: 20
  },

  // === ADVANCED: Dấu hiệu chia hết (4 câu) ===
  {
    id: 'arith_025',
    module: 'arithmetic',
    topic: 'divisibility',
    difficulty: 'advanced',
    type: 'input',
    question: 'Tìm chữ số x để số 4x5 chia hết cho 3.',
    correctAnswer: '0,3,6,9',
    hints: [
      'Dấu hiệu chia hết cho 3: Tổng chữ số chia hết cho 3',
      '4 + x + 5 chia hết cho 3 → 9 + x chia hết cho 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Tổng chữ số = 4 + x + 5 = 9 + x',
        'Bước 2: Để chia hết cho 3: 9 + x chia hết cho 3',
        'Bước 3: Vì 9 chia hết cho 3 nên x chia hết cho 3',
        'Bước 4: x ∈ {0, 3, 6, 9} (và x là chữ số)'
      ],
      tips: 'Dấu hiệu chia hết cho 3: Tổng các chữ số chia hết cho 3!'
    },
    xp: 20
  },
  {
    id: 'arith_026',
    module: 'arithmetic',
    topic: 'divisibility',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Số nào sau đây chia hết cho cả 2, 3 và 5?',
    options: ['120', '230', '450', '180'],
    correctAnswer: '120',
    hints: [
      'Chia hết cho 2 và 5 → tận cùng là 0',
      'Chia hết cho 3 → tổng chữ số chia hết cho 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Chia hết cho 2 và 5 → số tận cùng là 0 ✓ (tất cả đều thỏa)',
        'Bước 2: Kiểm tra chia hết cho 3',
        'Bước 3: 120: 1+2+0=3 ✓',
        'Bước 4: 230: 2+3+0=5 ✗',
        'Bước 5: 450: 4+5+0=9 ✓',
        'Bước 6: 180: 1+8+0=9 ✓',
        'Bước 7: Đáp án đầu tiên đúng là 120'
      ],
      tips: 'Chia hết cho 2, 3, 5: Tận cùng 0 và tổng chữ số chia hết cho 3!'
    },
    xp: 20
  },
  {
    id: 'arith_027',
    module: 'arithmetic',
    topic: 'divisibility',
    difficulty: 'advanced',
    type: 'input',
    question: 'Số 1234x chia hết cho 9 khi x = ?',
    correctAnswer: '2',
    hints: [
      'Dấu hiệu chia hết cho 9: Tổng chữ số chia hết cho 9',
      '1+2+3+4+x = 10+x chia hết cho 9'
    ],
    explanation: {
      steps: [
        'Bước 1: Tổng chữ số = 1 + 2 + 3 + 4 + x = 10 + x',
        'Bước 2: Để chia hết cho 9: 10 + x chia hết cho 9',
        'Bước 3: Số chia hết cho 9 gần 10 nhất là 18',
        'Bước 4: 10 + x = 18 → x = 8',
        'Bước 5: Hoặc 10 + x = 9 → x = -1 (loại)'
      ],
      tips: 'Dấu hiệu chia hết cho 9: Tổng các chữ số chia hết cho 9!'
    },
    xp: 20
  },
  {
    id: 'arith_028',
    module: 'arithmetic',
    topic: 'divisibility',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Tìm số dư khi chia 1234 cho 5.',
    options: ['0', '1', '2', '4'],
    correctAnswer: '4',
    hints: [
      'Chia hết cho 5: Tận cùng 0 hoặc 5',
      '1234 tận cùng là 4'
    ],
    explanation: {
      steps: [
        'Bước 1: Số 1234 có chữ số tận cùng là 4',
        'Bước 2: Số gần nhất chia hết cho 5 và nhỏ hơn 1234 là 1230',
        'Bước 3: 1234 - 1230 = 4',
        'Bước 4: Số dư là 4'
      ],
      tips: 'Số dư khi chia cho 5 = chữ số tận cùng (nếu < 5) hoặc chữ số tận cùng - 5 (nếu ≥ 5)!'
    },
    xp: 20
  },

  // === ADVANCED: UCLN, BCNN (2 câu) ===
  {
    id: 'arith_029',
    module: 'arithmetic',
    topic: 'gcd-lcm',
    difficulty: 'advanced',
    type: 'input',
    question: 'Tìm UCLN của 24 và 36.',
    correctAnswer: '12',
    hints: [
      'Phân tích ra thừa số nguyên tố',
      '24 = 2³×3, 36 = 2²×3²'
    ],
    explanation: {
      steps: [
        'Bước 1: Phân tích 24 = 2³ × 3',
        'Bước 2: Phân tích 36 = 2² × 3²',
        'Bước 3: UCLN = 2² × 3 = 4 × 3',
        'Bước 4: UCLN = 12'
      ],
      tips: 'UCLN: Lấy thừa số chung với số mũ nhỏ nhất!'
    },
    xp: 20
  },
  {
    id: 'arith_030',
    module: 'arithmetic',
    topic: 'gcd-lcm',
    difficulty: 'advanced',
    type: 'input',
    question: 'Tìm BCNN của 6 và 8.',
    correctAnswer: '24',
    hints: [
      'Phân tích ra thừa số nguyên tố',
      '6 = 2×3, 8 = 2³'
    ],
    explanation: {
      steps: [
        'Bước 1: Phân tích 6 = 2 × 3',
        'Bước 2: Phân tích 8 = 2³',
        'Bước 3: BCNN = 2³ × 3 = 8 × 3',
        'Bước 4: BCNN = 24'
      ],
      tips: 'BCNN: Lấy tất cả thừa số với số mũ lớn nhất!'
    },
    xp: 20
  },

  // === BASIC: Phân số bổ sung (10 câu mới) ===
  {
    id: 'arith_031',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 3/8 + 5/6 = ? (Viết dạng phân số tối giản)',
    correctAnswer: '29/24',
    hints: [
      'MSC của 8 và 6 là 24',
      '3/8 = 9/24, 5/6 = 20/24'
    ],
    explanation: {
      steps: [
        'Bước 1: MSC(8, 6) = 24',
        'Bước 2: 3/8 = (3×3)/(8×3) = 9/24',
        'Bước 3: 5/6 = (5×4)/(6×4) = 20/24',
        'Bước 4: 9/24 + 20/24 = 29/24'
      ],
      tips: 'Tìm BCNN để quy đồng nhanh nhất!'
    },
    xp: 10
  },
  {
    id: 'arith_032',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 7/10 - 2/5 = ?',
    options: ['1/2', '3/10', '5/5', '9/10'],
    correctAnswer: '3/10',
    hints: [
      'Quy đồng mẫu số chung là 10',
      '2/5 = 4/10'
    ],
    explanation: {
      steps: [
        'Bước 1: MSC(10, 5) = 10',
        'Bước 2: 7/10 giữ nguyên',
        'Bước 3: 2/5 = (2×2)/(5×2) = 4/10',
        'Bước 4: 7/10 - 4/10 = 3/10'
      ],
      tips: 'Quy đồng rồi trừ tử số!'
    },
    xp: 10
  },
  {
    id: 'arith_033',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 4 × 3/8 = ? (Viết dạng phân số tối giản)',
    correctAnswer: '3/2',
    hints: [
      '4 = 4/1',
      'Nhân tử với tử, mẫu với mẫu'
    ],
    explanation: {
      steps: [
        'Bước 1: 4 = 4/1',
        'Bước 2: 4/1 × 3/8 = (4×3)/(1×8)',
        'Bước 3: = 12/8',
        'Bước 4: Rút gọn: 12/8 = 3/2'
      ],
      tips: 'Số nguyên viết thành phân số với mẫu là 1!'
    },
    xp: 10
  },
  {
    id: 'arith_034',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tính: 5/6 ÷ 2 = ?',
    options: ['5/3', '5/12', '10/6', '1/2'],
    correctAnswer: '5/12',
    hints: [
      'Chia cho 2 = Nhân với 1/2',
      '5/6 × 1/2'
    ],
    explanation: {
      steps: [
        'Bước 1: 2 = 2/1, nghịch đảo là 1/2',
        'Bước 2: 5/6 ÷ 2 = 5/6 × 1/2',
        'Bước 3: = (5×1)/(6×2)',
        'Bước 4: = 5/12'
      ],
      tips: 'Chia cho số nguyên = Nhân với phân số 1/số nguyên!'
    },
    xp: 10
  },
  {
    id: 'arith_035',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính: 1 1/2 + 2/3 = ? (Viết đáp số dạng hỗn số)',
    correctAnswer: '2 1/6',
    hints: [
      '1 1/2 = 3/2',
      'Quy đồng mẫu số với 2/3'
    ],
    explanation: {
      steps: [
        'Bước 1: 1 1/2 = 3/2',
        'Bước 2: MSC(2, 3) = 6',
        'Bước 3: 3/2 = 9/6, 2/3 = 4/6',
        'Bước 4: 9/6 + 4/6 = 13/6 = 2 1/6'
      ],
      tips: 'Chuyển hỗn số thành phân số trước khi tính!'
    },
    xp: 10
  },
  {
    id: 'arith_036',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tìm số thích hợp: 2/5 + ? = 7/10',
    correctAnswer: '3/10',
    hints: [
      'Số cần tìm = 7/10 - 2/5',
      'Quy đồng mẫu số'
    ],
    explanation: {
      steps: [
        'Bước 1: Số cần tìm = 7/10 - 2/5',
        'Bước 2: MSC(10, 5) = 10',
        'Bước 3: 2/5 = 4/10',
        'Bước 4: 7/10 - 4/10 = 3/10'
      ],
      tips: 'Số hạng chưa biết = Tổng - Số hạng đã biết!'
    },
    xp: 10
  },
  {
    id: 'arith_037',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'So sánh: 5/8 và 3/5',
    options: ['5/8 > 3/5', '5/8 < 3/5', '5/8 = 3/5', 'Không so sánh được'],
    correctAnswer: '5/8 > 3/5',
    hints: [
      'MSC của 8 và 5 là 40',
      '5/8 = 25/40, 3/5 = 24/40'
    ],
    explanation: {
      steps: [
        'Bước 1: MSC(8, 5) = 40',
        'Bước 2: 5/8 = (5×5)/(8×5) = 25/40',
        'Bước 3: 3/5 = (3×8)/(5×8) = 24/40',
        'Bước 4: 25/40 > 24/40 nên 5/8 > 3/5'
      ],
      tips: 'Quy đồng mẫu số rồi so sánh tử số!'
    },
    xp: 10
  },
  {
    id: 'arith_038',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Rút gọn phân số 45/60 về dạng tối giản.',
    correctAnswer: '3/4',
    hints: [
      'Tìm UCLN của 45 và 60',
      'UCLN(45, 60) = 15'
    ],
    explanation: {
      steps: [
        'Bước 1: Phân tích 45 = 3² × 5',
        'Bước 2: Phân tích 60 = 2² × 3 × 5',
        'Bước 3: UCLN = 3 × 5 = 15',
        'Bước 4: 45/60 = (45÷15)/(60÷15) = 3/4'
      ],
      tips: 'Tìm UCLN rồi chia cả tử và mẫu!'
    },
    xp: 10
  },
  {
    id: 'arith_039',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một thùng dầu có 24 lít. Đã dùng 5/8 số dầu. Hỏi còn lại bao nhiêu lít dầu?',
    options: ['9 lít', '10 lít', '12 lít', '15 lít'],
    correctAnswer: '9 lít',
    hints: [
      'Dùng 5/8 thì còn 3/8',
      '24 × 3/8 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Dùng 5/8 thì còn lại: 1 - 5/8 = 3/8',
        'Bước 2: Số dầu còn lại = 24 × 3/8',
        'Bước 3: 24/1 × 3/8 = (24×3)/(1×8) = 72/8',
        'Bước 4: = 9 lít'
      ],
      tips: 'Tính phần còn lại trước, rồi nhân với tổng!'
    },
    xp: 10
  },
  {
    id: 'arith_040',
    module: 'arithmetic',
    topic: 'fractions',
    difficulty: 'basic',
    type: 'input',
    question: 'Tính 3/4 của 36.',
    correctAnswer: '27',
    hints: [
      '3/4 của 36 = 36 × 3/4',
      '36 ÷ 4 × 3'
    ],
    explanation: {
      steps: [
        'Bước 1: 3/4 của 36 = 36 × 3/4',
        'Bước 2: = (36×3)/4',
        'Bước 3: = 108/4',
        'Bước 4: = 27'
      ],
      tips: 'Phân số của một số = Số × Phân số!'
    },
    xp: 10
  }
];

export default arithmeticQuestions;
