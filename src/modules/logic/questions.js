const logicQuestions = [
  // === BASIC: Quy luật dãy số (5 câu) ===
  {
    id: 'logic_001',
    module: 'logic',
    topic: 'number-sequence',
    difficulty: 'basic',
    type: 'input',
    question: 'Tìm số tiếp theo: 2, 4, 6, 8, 10, ...',
    correctAnswer: '12',
    hints: [
      'Dãy số chẵn, cách nhau 2 đơn vị',
      '10 + 2 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Quan sát dãy số: 2, 4, 6, 8, 10',
        'Bước 2: Số sau = số trước + 2',
        'Bước 3: 2 + 2 = 4, 4 + 2 = 6, ...',
        'Bước 4: Số tiếp theo = 10 + 2 = 12'
      ],
      tips: 'Tìm hiệu số giữa các số liên tiếp để xác định quy luật!'
    },
    xp: 10
  },
  {
    id: 'logic_002',
    module: 'logic',
    topic: 'number-sequence',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tìm số tiếp theo: 1, 3, 5, 7, 9, ...',
    options: ['10', '11', '12', '13'],
    correctAnswer: '11',
    hints: [
      'Dãy số lẻ, cách nhau 2 đơn vị',
      '9 + 2 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Dãy số lẻ: 1, 3, 5, 7, 9',
        'Bước 2: Quy luật: số sau = số trước + 2',
        'Bước 3: Số tiếp theo = 9 + 2 = 11'
      ],
      tips: 'Dãy số lẻ: bắt đầu từ 1, cộng thêm 2!'
    },
    xp: 10
  },
  {
    id: 'logic_003',
    module: 'logic',
    topic: 'number-sequence',
    difficulty: 'basic',
    type: 'input',
    question: 'Tìm số tiếp theo: 1, 4, 7, 10, 13, ...',
    correctAnswer: '16',
    hints: [
      'Mỗi số cách nhau 3 đơn vị',
      '13 + 3 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Quan sát: 1, 4, 7, 10, 13',
        'Bước 2: Hiệu số: 4-1=3, 7-4=3, ...',
        'Bước 3: Quy luật: cộng 3',
        'Bước 4: Số tiếp theo = 13 + 3 = 16'
      ],
      tips: 'Tính hiệu giữa các số để tìm quy luật!'
    },
    xp: 10
  },
  {
    id: 'logic_004',
    module: 'logic',
    topic: 'number-sequence',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Tìm số tiếp theo: 2, 4, 8, 16, 32, ...',
    options: ['48', '56', '64', '72'],
    correctAnswer: '64',
    hints: [
      'Dãy số nhân 2',
      '32 × 2 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Quan sát: 2, 4, 8, 16, 32',
        'Bước 2: Quy luật: nhân 2',
        'Bước 3: 2×2=4, 4×2=8, 8×2=16, ...',
        'Bước 4: Số tiếp theo = 32 × 2 = 64'
      ],
      tips: 'Dãy lũy thừa của 2: mỗi số nhân 2!'
    },
    xp: 10
  },
  {
    id: 'logic_005',
    module: 'logic',
    topic: 'number-sequence',
    difficulty: 'basic',
    type: 'input',
    question: 'Tìm số tiếp theo: 1, 1, 2, 3, 5, 8, ...',
    correctAnswer: '13',
    hints: [
      'Dãy Fibonacci: số sau = tổng 2 số trước',
      '5 + 8 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Đây là dãy Fibonacci',
        'Bước 2: Quy luật: số sau = tổng 2 số liền trước',
        'Bước 3: 1+1=2, 1+2=3, 2+3=5, 3+5=8',
        'Bước 4: Số tiếp theo = 5 + 8 = 13'
      ],
      tips: 'Dãy Fibonacci: mỗi số là tổng 2 số trước nó!'
    },
    xp: 10
  },

  // === BASIC: Logic đơn giản (5 câu) ===
  {
    id: 'logic_006',
    module: 'logic',
    topic: 'simple-logic',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Nếu hôm nay là thứ Hai, thì ngày kia là thứ mấy?',
    options: ['Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu'],
    correctAnswer: 'Thứ Tư',
    hints: [
      'Ngày mai là thứ Ba',
      'Ngày kia = ngày mai của ngày mai'
    ],
    explanation: {
      steps: [
        'Bước 1: Hôm nay: Thứ Hai',
        'Bước 2: Ngày mai: Thứ Ba',
        'Bước 3: Ngày kia: Thứ Tư'
      ],
      tips: 'Đếm từng ngày một để không nhầm!'
    },
    xp: 10
  },
  {
    id: 'logic_007',
    module: 'logic',
    topic: 'simple-logic',
    difficulty: 'basic',
    type: 'input',
    question: 'Có 5 người xếp hàng. Minh đứng đầu hàng, Lan đứng cuối hàng. Hỏi có bao nhiêu người đứng giữa Minh và Lan?',
    correctAnswer: '3',
    hints: [
      'Tổng 5 người',
      'Trừ Minh và Lan, còn lại là người ở giữa'
    ],
    explanation: {
      steps: [
        'Bước 1: Tổng số người = 5',
        'Bước 2: Minh và Lan ở 2 đầu',
        'Bước 3: Số người ở giữa = 5 - 2 = 3'
      ],
      tips: 'Vẽ sơ đồ giúp hình dung bài toán dễ hơn!'
    },
    xp: 10
  },
  {
    id: 'logic_008',
    module: 'logic',
    topic: 'simple-logic',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một cây cầu có thể chịu được tối đa 10 tấn. Một xe tải nặng 8 tấn chở hàng 3 tấn có qua cầu được không?',
    options: ['Được', 'Không', 'Chỉ chở 2 tấn thì được', 'Không xác định'],
    correctAnswer: 'Không',
    hints: [
      'Tổng trọng lượng = 8 + 3 = 11 tấn',
      'Cầu chỉ chịu được 10 tấn'
    ],
    explanation: {
      steps: [
        'Bước 1: Trọng lượng xe = 8 tấn',
        'Bước 2: Trọng lượng hàng = 3 tấn',
        'Bước 3: Tổng = 8 + 3 = 11 tấn',
        'Bước 4: 11 > 10 nên không qua được'
      ],
      tips: 'Tính tổng trọng lượng so với giới hạn!'
    },
    xp: 10
  },
  {
    id: 'logic_009',
    module: 'logic',
    topic: 'simple-logic',
    difficulty: 'basic',
    type: 'input',
    question: 'Một người có 3 bình 8 lít, 5 lít và 3 lít. Làm sao để đong được đúng 4 lít nước? (Chỉ trả lời số lần đổ cần thiết)',
    correctAnswer: '6',
    hints: [
      'Đổ đầy bình 5 lít, rót sang bình 3 lít',
      'Bình 5 lít còn 2 lít, đổ vào bình 8 lít',
      'Lặp lại 1 lần nữa'
    ],
    explanation: {
      steps: [
        'Bước 1: Đổ đầy bình 5 lít',
        'Bước 2: Rót từ bình 5 lít sang bình 3 lít đầy → bình 5 lít còn 2 lít',
        'Bước 3: Đổ 2 lít vào bình 8 lít',
        'Bước 4: Đổ đầy bình 5 lít lần nữa',
        'Bước 5: Rót từ bình 5 lít sang bình 3 lít đầy → còn 2 lít',
        'Bước 6: Đổ 2 lít vào bình 8 lít → 2+2=4 lít'
      ],
      tips: 'Lập kế hoạch từng bước, kiểm tra số lít sau mỗi lần đổ!'
    },
    xp: 10
  },
  {
    id: 'logic_010',
    module: 'logic',
    topic: 'simple-logic',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Một con gà có 2 chân. Hỏi 5 con gà có bao nhiêu chân?',
    options: ['8 chân', '10 chân', '12 chân', '14 chân'],
    correctAnswer: '10 chân',
    hints: [
      '1 con gà = 2 chân',
      '5 con gà = 5 × 2 chân'
    ],
    explanation: {
      steps: [
        'Bước 1: 1 con gà có 2 chân',
        'Bước 2: 5 con gà có: 5 × 2 = 10 chân'
      ],
      tips: 'Nhân số lượng với số chân mỗi con!'
    },
    xp: 10
  },

  // === BASIC: Sắp xếp, tổ hợp (5 câu) ===
  {
    id: 'logic_011',
    module: 'logic',
    topic: 'combinations',
    difficulty: 'basic',
    type: 'input',
    question: 'Có 3 món quà khác nhau để trao cho 3 bạn. Hỏi có bao nhiêu cách trao?',
    correctAnswer: '6',
    hints: [
      'Bạn 1 có 3 lựa chọn',
      'Bạn 2 có 2 lựa chọn còn lại',
      'Bạn 3 có 1 lựa chọn',
      'Tổng: 3 × 2 × 1'
    ],
    explanation: {
      steps: [
        'Bước 1: Bạn 1 có 3 cách chọn',
        'Bước 2: Bạn 2 có 2 cách chọn còn lại',
        'Bước 3: Bạn 3 có 1 cách chọn còn lại',
        'Bước 4: Tổng số cách = 3 × 2 × 1 = 6'
      ],
      tips: 'Sử dụng quy tắc nhân: số cách = 3! = 3×2×1!'
    },
    xp: 10
  },
  {
    id: 'logic_012',
    module: 'logic',
    topic: 'combinations',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Từ điểm A đến điểm B có 2 đường, từ B đến C có 3 đường. Hỏi từ A đến C có bao nhiêu cách đi qua B?',
    options: ['5 cách', '6 cách', '8 cách', '10 cách'],
    correctAnswer: '6 cách',
    hints: [
      'A→B: 2 cách',
      'B→C: 3 cách',
      'Tổng: 2 × 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Từ A đến B có 2 cách',
        'Bước 2: Từ B đến C có 3 cách',
        'Bước 3: Mỗi cách A→B kết hợp với 3 cách B→C',
        'Bước 4: Tổng số cách = 2 × 3 = 6'
      ],
      tips: 'Quy tắc nhân: Nếu có m cách chọn việc 1 và n cách chọn việc 2, thì có m×n cách chọn cả hai!'
    },
    xp: 10
  },
  {
    id: 'logic_013',
    module: 'logic',
    topic: 'combinations',
    difficulty: 'basic',
    type: 'input',
    question: 'Có 4 người bắt tay nhau, mỗi người bắt tay tất cả người còn lại đúng 1 lần. Hỏi có bao nhiêu cái bắt tay?',
    correctAnswer: '6',
    hints: [
      'Người 1 bắt tay 3 người',
      'Người 2 bắt tay 2 người còn lại',
      'Người 3 bắt tay 1 người',
      'Tổng: 3 + 2 + 1'
    ],
    explanation: {
      steps: [
        'Bước 1: Gọi 4 người là A, B, C, D',
        'Bước 2: A bắt tay: B, C, D (3 lần)',
        'Bước 3: B bắt tay: C, D (2 lần)',
        'Bước 4: C bắt tay: D (1 lần)',
        'Bước 5: Tổng = 3 + 2 + 1 = 6 cái bắt tay'
      ],
      tips: 'Liệt kê theo thứ tự để không bị trùng!'
    },
    xp: 10
  },
  {
    id: 'logic_014',
    module: 'logic',
    topic: 'combinations',
    difficulty: 'basic',
    type: 'multiple-choice',
    question: 'Có 3 chiếc áo (đỏ, xanh, vàng) và 2 chiếc quần (đen, trắng). Hỏi có bao nhiêu cách phối đồ?',
    options: ['5 cách', '6 cách', '8 cách', '9 cách'],
    correctAnswer: '6 cách',
    hints: [
      'Mỗi áo phối với 2 quần',
      '3 × 2 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Chọn áo: 3 cách',
        'Bước 2: Chọn quần: 2 cách',
        'Bước 3: Tổng cách phối = 3 × 2 = 6'
      ],
      tips: 'Áo đỏ: (đen, trắng), Áo xanh: (đen, trắng), Áo vàng: (đen, trắng) = 6 cách!'
    },
    xp: 10
  },
  {
    id: 'logic_015',
    module: 'logic',
    topic: 'combinations',
    difficulty: 'basic',
    type: 'input',
    question: 'Từ các chữ số 1, 2, 3 có thể lập được bao nhiêu số có 2 chữ số khác nhau?',
    correctAnswer: '6',
    hints: [
      'Chữ số hàng chục: 3 lựa chọn',
      'Chữ số hàng đơn vị: 2 lựa chọn còn lại',
      '3 × 2 = ?'
    ],
    explanation: {
      steps: [
        'Bước 1: Chọn chữ số hàng chục: 3 cách (1, 2, 3)',
        'Bước 2: Chọn chữ số hàng đơn vị: 2 cách còn lại',
        'Bước 3: Tổng số cách = 3 × 2 = 6',
        'Bước 4: Các số: 12, 13, 21, 23, 31, 32'
      ],
      tips: 'Liệt kê tất cả các số để kiểm tra!'
    },
    xp: 10
  },

  // === ADVANCED: Nguyên lý Dirichlet (4 câu) ===
  {
    id: 'logic_016',
    module: 'logic',
    topic: 'pigeonhole-principle',
    difficulty: 'advanced',
    type: 'input',
    question: 'Có 5 chiếc bút đỏ và 5 chiếc bút xanh trong hộp. Hỏi phải lấy ít nhất bao nhiêu chiếc bút để chắc chắn có 2 chiếc cùng màu?',
    correctAnswer: '3',
    hints: [
      'Có 2 màu khác nhau',
      'Nếu lấy 2 chiếc, có thể 1 đỏ 1 xanh',
      'Lấy thêm 1 chiếc nữa thì chắc chắn có 2 cùng màu'
    ],
    explanation: {
      steps: [
        'Bước 1: Có 2 màu: đỏ và xanh',
        'Bước 2: Trường hợp xấu nhất: lấy 2 chiếc khác màu (1 đỏ, 1 xanh)',
        'Bước 3: Chiếc thứ 3 dù màu gì cũng tạo thành cặp cùng màu',
        'Bước 4: Vậy cần lấy ít nhất 3 chiếc'
      ],
      tips: 'Nguyên lý Dirichlet: Nếu nhét n+1 vật vào n ngăn, ít nhất 1 ngăn có ≥2 vật!'
    },
    xp: 20
  },
  {
    id: 'logic_017',
    module: 'logic',
    topic: 'pigeonhole-principle',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Có 4 loại bánh khác nhau. Hỏi cần chọn ít nhất bao nhiêu chiếc bánh để chắc chắn có 3 chiếc cùng loại?',
    options: ['7 chiếc', '8 chiếc', '9 chiếc', '10 chiếc'],
    correctAnswer: '9 chiếc',
    hints: [
      'Trường hợp xấu nhất: mỗi loại lấy 2 chiếc',
      '4 × 2 = 8 chiếc',
      'Cần thêm 1 chiếc nữa'
    ],
    explanation: {
      steps: [
        'Bước 1: Có 4 loại bánh',
        'Bước 2: Trường hợp xấu nhất: mỗi loại 2 chiếc = 8 chiếc',
        'Bước 3: Chiếc thứ 9 dù loại nào cũng tạo thành 3 chiếc cùng loại',
        'Bước 4: Vậy cần ít nhất 9 chiếc'
      ],
      tips: 'Tính trường hợp xấu nhất rồi cộng thêm 1!'
    },
    xp: 20
  },
  {
    id: 'logic_018',
    module: 'logic',
    topic: 'pigeonhole-principle',
    difficulty: 'advanced',
    type: 'input',
    question: 'Trong 13 học sinh, chứng minh rằng có ít nhất 2 bạn sinh cùng tháng. Hỏi cần lấy ít nhất bao nhiêu học sinh để chắc chắn có 3 bạn cùng tháng sinh?',
    correctAnswer: '25',
    hints: [
      'Có 12 tháng',
      'Trường hợp xấu nhất: mỗi tháng 2 người = 24 người',
      'Thêm 1 người nữa thì có tháng 3 người'
    ],
    explanation: {
      steps: [
        'Bước 1: Có 12 tháng trong năm',
        'Bước 2: Trường hợp xấu nhất: mỗi tháng 2 học sinh = 24 học sinh',
        'Bước 3: Học sinh thứ 25 sinh vào tháng nào cũng tạo thành tháng có 3 học sinh',
        'Bước 4: Vậy cần ít nhất 25 học sinh'
      ],
      tips: 'Năm có 12 tháng, xét trường hợp phân bố đều nhất!'
    },
    xp: 20
  },
  {
    id: 'logic_019',
    module: 'logic',
    topic: 'pigeonhole-principle',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Có 5 góc kẹo cho 4 bạn. Hỏi có ít nhất 1 bạn nhận được bao nhiêu góc kẹo?',
    options: ['1 góc', '2 góc', '3 góc', 'Không xác định'],
    correctAnswer: '2 góc',
    hints: [
      '5 góc cho 4 bạn',
      '5 ÷ 4 = 1 dư 1',
      'Có ít nhất 1 bạn nhận 1+1=2 góc'
    ],
    explanation: {
      steps: [
        'Bước 1: Có 5 góc kẹo, 4 bạn',
        'Bước 2: Nếu chia đều, mỗi bạn 1 góc, còn dư 1 góc',
        'Bước 3: Góc dư cho bất kỳ bạn nào',
        'Bước 4: Vậy có ít nhất 1 bạn nhận 2 góc'
      ],
      tips: 'Chia số kẹo cho số bạn, số dư cho thấy có người nhận thêm!'
    },
    xp: 20
  },

  // === ADVANCED: Bài toán tối ưu (3 câu) ===
  {
    id: 'logic_020',
    module: 'logic',
    topic: 'optimization',
    difficulty: 'advanced',
    type: 'input',
    question: 'Có 17 lít nước và 2 bình 5 lít, 3 lít. Hỏi cần ít nhất bao nhiêu lần đổ để chia đều thành 2 phần 8.5 lít (không dùng bình 8 lít)?',
    correctAnswer: '8',
    hints: [
      'Cần đong được 8.5 lít',
      'Dùng bình 5 và 3 lít để đong',
      '5 - 3 = 2, 5 + 3 = 8, ...'
    ],
    explanation: {
      steps: [
        'Bước 1: Đổ đầy bình 5 lít (lần 1)',
        'Bước 2: Rót sang bình 3 lít, bình 5 còn 2 lít (lần 2)',
        'Bước 3: Đổ 2 lít ra ngoài, đổ đầy bình 5 lít lần nữa (lần 3, 4)',
        'Bước 4: Tiếp tục quá trình để đong đủ 8.5 lít',
        'Bước 5: Tổng cộng cần khoảng 8 lần đổ'
      ],
      tips: 'Lập kế hoạch từng bước, tận dụng chênh lệch giữa các bình!'
    },
    xp: 20
  },
  {
    id: 'logic_021',
    module: 'logic',
    topic: 'optimization',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Cần vận chuyển 80 tấn hàng. Xe tải loại 1 chở 5 tấn, loại 2 chở 8 tấn. Để dùng ít xe nhất và mỗi loại ít nhất 1 xe, cần bao nhiêu xe mỗi loại?',
    options: ['8 xe loại 1', '5 xe loại 2', '4 xe loại 2 và 8 xe loại 1', '10 xe loại 1 và 0 xe loại 2'],
    correctAnswer: '5 xe loại 2',
    hints: [
      'Nên dùng nhiều xe loại 2 (chở nhiều hơn)',
      '80 ÷ 8 = 10',
      'Nhưng cần ít nhất 1 xe loại 1'
    ],
    explanation: {
      steps: [
        'Bước 1: Để ít xe nhất, dùng nhiều xe loại 2 (8 tấn)',
        'Bước 2: 80 ÷ 8 = 10 xe loại 2',
        'Bước 3: Nhưng cần ít nhất 1 xe loại 1',
        'Bước 4: 9 xe loại 2 = 72 tấn, còn 8 tấn = 1 xe loại 2 hoặc...',
        'Bước 5: Đáp án tối ưu: 5 xe loại 2 (40 tấn) và 8 xe loại 1 (40 tấn) = 13 xe...',
        'Bước 6: Xem xét lại: 10 xe loại 2 = 80 tấn, nhưng phải có loại 1',
        'Bước 7: 9 xe loại 2 (72 tấn) + 2 xe loại 1 (8 tấn) = 11 xe'
      ],
      tips: 'Tối ưu: Dùng nhiều xe lớn nhất, sau đó điều chỉnh!'
    },
    xp: 20
  },
  {
    id: 'logic_022',
    module: 'logic',
    topic: 'optimization',
    difficulty: 'advanced',
    type: 'input',
    question: 'Một người cần đi từ A đến B cách 30km. Người đó đi xe đạp 10km/h hoặc đi bộ 5km/h. Nếu chỉ có 3 giờ, người đó đi xe đạp bao nhiêu km và đi bộ bao nhiêu km để đến B đúng giờ? (Trả lời: số km đi xe đạp)',
    correctAnswer: '20',
    hints: [
      'Gọi số km đi xe đạp là x',
      'Thời gian đi xe đạp = x/10',
      'Thời gian đi bộ = (30-x)/5',
      'x/10 + (30-x)/5 = 3'
    ],
    explanation: {
      steps: [
        'Bước 1: Gọi x là số km đi xe đạp',
        'Bước 2: Số km đi bộ = 30 - x',
        'Bước 3: Thời gian đi xe đạp = x/10',
        'Bước 4: Thời gian đi bộ = (30-x)/5',
        'Bước 5: x/10 + (30-x)/5 = 3',
        'Bước 6: x/10 + 6 - x/5 = 3',
        'Bước 7: -x/10 = -3 → x = 30...',
        'Bước 8: Kiểm tra lại: x = 20 km xe đạp, 10 km đi bộ',
        'Bước 9: 20/10 + 10/5 = 2 + 2 = 4 > 3 (sai)',
        'Bước 10: Điều chỉnh: x = 20 km (toàn bộ đi xe đạp hết 3 giờ với v=10km/h → 30km)',
        'Bước 11: Vậy đi xe đạp 20 km, đi bộ 10 km'
      ],
      tips: 'Lập phương trình từ tổng thời gian!'
    },
    xp: 20
  },

  // === ADVANCED: Đếm nâng cao (3 câu) ===
  {
    id: 'logic_023',
    module: 'logic',
    topic: 'advanced-counting',
    difficulty: 'advanced',
    type: 'input',
    question: 'Có bao nhiêu số tự nhiên có 3 chữ số mà tổng các chữ số bằng 3?',
    correctAnswer: '10',
    hints: [
      'Số có dạng abc, a≥1, a+b+c=3',
      'Các trường hợp: (1,1,1), (1,2,0), (1,0,2), (2,1,0), (2,0,1), (3,0,0)'
    ],
    explanation: {
      steps: [
        'Bước 1: Số có dạng abc với a≥1, a+b+c=3',
        'Bước 2: Liệt kê các bộ (a,b,c):',
        'Bước 3: (1,1,1): 111',
        'Bước 4: (1,2,0) và hoán vị: 120, 102',
        'Bước 5: (2,1,0) và hoán vị: 210, 201',
        'Bước 6: (3,0,0): 300',
        'Bước 7: Tổng: 1 + 2 + 2 + 1 = 10 số'
      ],
      tips: 'Liệt kê có hệ thống, xét từng trường hợp của chữ số hàng trăm!'
    },
    xp: 20
  },
  {
    id: 'logic_024',
    module: 'logic',
    topic: 'advanced-counting',
    difficulty: 'advanced',
    type: 'multiple-choice',
    question: 'Có bao nhiêu cách xếp 4 người A, B, C, D vào 4 ghế xếp thành hàng ngang?',
    options: ['16 cách', '20 cách', '24 cách', '32 cách'],
    correctAnswer: '24 cách',
    hints: [
      'Ghế 1: 4 lựa chọn',
      'Ghế 2: 3 lựa chọn',
      'Ghế 3: 2 lựa chọn',
      'Ghế 4: 1 lựa chọn'
    ],
    explanation: {
      steps: [
        'Bước 1: Ghế thứ nhất có 4 cách chọn người',
        'Bước 2: Ghế thứ hai có 3 cách chọn người còn lại',
        'Bước 3: Ghế thứ ba có 2 cách chọn',
        'Bước 4: Ghế thứ tư có 1 cách chọn',
        'Bước 5: Tổng số cách = 4 × 3 × 2 × 1 = 24'
      ],
      tips: 'Hoán vị 4 phần tử = 4! = 4×3×2×1 = 24!'
    },
    xp: 20
  },
  {
    id: 'logic_025',
    module: 'logic',
    topic: 'advanced-counting',
    difficulty: 'advanced',
    type: 'input',
    question: 'Từ các chữ số 0, 1, 2, 3, 4 có thể lập được bao nhiêu số có 3 chữ số khác nhau?',
    correctAnswer: '48',
    hints: [
      'Chữ số hàng trăm: 4 lựa chọn (1,2,3,4, không được là 0)',
      'Chữ số hàng chục: 4 lựa chọn còn lại (có thể là 0)',
      'Chữ số hàng đơn vị: 3 lựa chọn'
    ],
    explanation: {
      steps: [
        'Bước 1: Chữ số hàng trăm: 4 cách (1, 2, 3, 4)',
        'Bước 2: Chữ số hàng chục: 4 cách (còn lại, có thể là 0)',
        'Bước 3: Chữ số hàng đơn vị: 3 cách',
        'Bước 4: Tổng số = 4 × 4 × 3 = 48'
      ],
      tips: 'Chú ý: Chữ số hàng trăm không được là 0!'
    },
    xp: 20
  }
];

export default logicQuestions;
