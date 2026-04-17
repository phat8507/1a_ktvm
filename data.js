const sourceFiles = {
  outline: "KHỦNG HOẢNG KINH TẾ_1A_KTVM_L02(3).docx",
  chartBook: "Thông tin các bảng và slide.docx",
  slideFlow: "slide_extract_same_format_A4_with_12_v3(1).docx",
};

const charts = {
  exportsTrend: {
    type: "line",
    title: "Xuất khẩu Việt Nam giai đoạn 2020-2023",
    caption:
      "Năm 2023 là lần giảm đầu tiên sau chuỗi tăng liên tiếp, cho thấy cú sốc cầu bên ngoài đã đi thẳng vào dữ liệu thực.",
    note:
      "Dữ liệu giữ nguyên các mốc 281,5; 336,3; 371,9; 355,5 tỷ USD từ tài liệu số liệu của nhóm.",
    data: {
      labels: ["2020", "2021", "2022", "2023"],
      datasets: [{ label: "Tỷ USD", data: [281.5, 336.3, 371.9, 355.5] }],
    },
    options: { tension: 0.32, fill: true, yTitle: "Tỷ USD" },
  },
  laborImpact: {
    type: "doughnut",
    title: "Lao động bị ảnh hưởng trong 5 tháng đầu năm 2023",
    caption:
      "Khoảng 510.000 lao động bị ảnh hưởng việc làm, trong đó 280.000 người mất việc hoàn toàn.",
    note:
      "Biểu đồ chia thành hai nhóm để người thuyết trình kể chuyện gọn hơn: mất việc hoàn toàn và nhóm giảm giờ làm hoặc chịu tác động khác.",
    data: {
      labels: ["Mất việc hoàn toàn", "Giảm giờ làm và ảnh hưởng khác"],
      datasets: [{ label: "Người", data: [280000, 230000] }],
    },
  },
  sectorImpact: {
    type: "bar",
    title: "Mức giảm lao động theo ngành trong quý II/2023",
    caption:
      "Dệt may chịu cú sốc mạnh hơn điện tử khi đơn hàng quốc tế yếu đi và chuỗi cung ứng co lại.",
    note:
      "Nguồn gốc là mức giảm so với quý I/2023, nên trục tung thể hiện chênh lệch lao động âm theo từng ngành.",
    data: {
      labels: ["Dệt may", "Điện tử"],
      datasets: [{ label: "Giảm lao động so với quý I/2023", data: [-142500, -30200] }],
    },
    options: { yTitle: "Người" },
  },
  fdiShare: {
    type: "pie",
    title: "Cơ cấu khu vực FDI trong xuất khẩu năm 2024",
    caption:
      "Khu vực FDI chiếm 71,7% tổng xuất khẩu, cho thấy độ phụ thuộc rất lớn vào khu vực doanh nghiệp nước ngoài.",
    note:
      "Tỷ lệ 71,7% và 28,3% được giữ nguyên từ tài liệu nguồn, không thêm bước chuẩn hóa nào khác.",
    data: {
      labels: ["Khu vực FDI", "Khu vực trong nước"],
      datasets: [{ label: "Tỷ trọng", data: [71.7, 28.3] }],
    },
  },
  realEstateCredit: {
    type: "bar",
    title: "Tín dụng bất động sản giai đoạn 2019-2022",
    caption:
      "Ba năm đầu tăng mạnh quanh 26% mỗi năm; đến 2022, kỳ vọng đổi pha và áp lực siết vốn bắt đầu lộ rõ hơn.",
    note:
      "Tài liệu nêu rõ mức +26% cho 2019-2021. Năm 2022 không có tỷ lệ phần trăm cụ thể nên được giữ như một điểm chuyển pha thay vì gán số mới.",
    data: {
      labels: ["2019", "2020", "2021", "2022"],
      datasets: [{ label: "Tăng trưởng được nêu rõ trong tài liệu", data: [26, 26, 26, null] }],
    },
    options: { yTitle: "Phần trăm tăng trưởng" },
  },
  apartmentPrice: {
    type: "line",
    title: "Giá căn hộ sơ cấp Hà Nội giai đoạn 2022-2024",
    caption:
      "Giá sơ cấp vẫn đi lên dù thanh khoản yếu, phản ánh kỳ vọng giá và Herd Behavior trên thị trường nhà ở.",
    note:
      "Các mốc 2022 và 2023 được chuẩn hóa theo điểm giữa của khoảng giá trong tài liệu; mốc 2024 dùng mức 64 triệu đồng/m² như ghi chú trong phần số liệu.",
    data: {
      labels: ["2022", "2023", "2024"],
      datasets: [{ label: "Triệu đồng/m²", data: [37, 47, 64] }],
    },
    options: { tension: 0.28, fill: true, yTitle: "Triệu đồng/m²" },
  },
  bondMaturityShare: {
    type: "doughnut",
    title: "Cơ cấu áp lực đáo hạn trái phiếu năm 2025",
    caption:
      "Bất động sản chiếm hơn một nửa lượng trái phiếu đáo hạn, nên đây là vùng dễ tổn thương nhất của thị trường vốn trong nước.",
    note:
      "Nguồn nêu rằng bất động sản chiếm hơn 50%. Biểu đồ dùng tỷ lệ quy ước 51/49 để trực quan hóa logic này mà không biến nó thành số liệu kết luận.",
    data: {
      labels: ["Bất động sản", "Các ngành khác"],
      datasets: [{ label: "Tỷ trọng quy ước", data: [51, 49] }],
    },
  },
  bondStress: {
    type: "bar",
    title: "Áp lực trái phiếu và chậm nghĩa vụ giai đoạn 2024-2025",
    caption:
      "Không phải một con số riêng lẻ, mà là ba tầng áp lực cùng xuất hiện: số tổ chức chậm nghĩa vụ, dư nợ chậm trả và khối lượng đáo hạn phía trước.",
    note:
      "Ba giá trị có đơn vị khác nhau nên biểu đồ đóng vai trò kể chuyện trực quan. Đơn vị chi tiết được ghi rõ trong phần số liệu của phần trình bày này.",
    data: {
      labels: ["Tổ chức chậm nghĩa vụ", "Dư nợ chậm nghĩa vụ", "Khối lượng đáo hạn 2025"],
      datasets: [{ label: "Giá trị trực quan hóa", data: [90, 190, 210] }],
    },
    options: { yTitle: "Giá trị quy ước để so sánh" },
  },
  svbMetrics: {
    type: "bar",
    title: "Các chỉ số chính của SVB năm 2023",
    caption:
      "Tài sản lớn, lỗ HTM lớn, tỷ lệ tiền gửi không bảo hiểm cao và tốc độ rút tiền cực nhanh cùng chỉ về một bảng cân đối dễ vỡ.",
    note:
      "Các số liệu được giữ nguyên từ tài liệu: 212 tỷ USD tài sản, 15,1 tỷ USD lỗ HTM, khoảng 94% tiền gửi không bảo hiểm và 42 tỷ USD bị rút trong 8 giờ.",
    data: {
      labels: ["Tổng tài sản", "Lỗ HTM", "Tiền bị rút trong 8 giờ", "Tiền gửi không bảo hiểm"],
      datasets: [{ label: "Tỷ USD hoặc phần trăm", data: [212, 15.1, 42, 94] }],
    },
    options: { yTitle: "Tỷ USD hoặc %" },
  },
  usHousing: {
    type: "line",
    title: "Giá nhà tại Mỹ trong bong bóng tài chính 2000-2009",
    caption:
      "Đường giá nhà cho thấy rủi ro tích lũy nhiều năm trước khi hệ thống đổ vỡ thành khủng hoảng toàn cầu.",
    note:
      "Biểu đồ dùng các mốc chính mà tài liệu cung cấp, không chèn thêm năm trung gian để tránh làm sai logic nguồn.",
    data: {
      labels: ["2000", "2005", "2006", "2009"],
      datasets: [{ label: "Nghìn USD mỗi căn", data: [156, 240, 257.4, 180] }],
    },
    options: { tension: 0.26, fill: true, yTitle: "Nghìn USD mỗi căn" },
  },
  fedVsHousing: {
    type: "mixed",
    title: "FED rate là điều kiện khuếch đại, không phải nguyên nhân gốc",
    caption:
      "Lãi suất thấp là môi trường thuận lợi cho đòn bẩy, nhưng các mắt xích tạo rủi ro vẫn nằm trong khu vực tư nhân.",
    note:
      "Trục trái biểu diễn FED rate, trục phải biểu diễn giá nhà Mỹ. Các mốc trống được giữ nguyên thay vì nội suy thêm dữ liệu không có trong tài liệu.",
    data: {
      labels: ["2000", "2003-2004", "2005", "2006-2007", "2008", "2009"],
      datasets: [
        { label: "FED rate (%)", type: "line", yAxisID: "y", data: [6, 1, null, 5.25, 0, null] },
        { label: "Giá nhà (nghìn USD mỗi căn)", type: "bar", yAxisID: "y1", data: [156, null, 240, 257.4, null, 180] },
      ],
    },
    options: { dualAxis: true, yTitle: "FED rate (%)", y1Title: "Nghìn USD mỗi căn" },
  },
};

const glossary = {
  "Asymmetric Information":
    "Thông tin bất cân xứng: bên phát hành hoặc bên bán biết rõ hơn bên mua, khiến rủi ro bị che khuất cho tới khi bùng ra.",
  "Principal-Agent Problem":
    "Vấn đề ủy thác - đại lý: người chốt giao dịch không phải lúc nào cũng là người chịu đủ hậu quả khi rủi ro phát nổ.",
  "Moral Hazard":
    "Rủi ro đạo đức: khi chủ thể tin rằng mình sẽ được cứu hoặc được nới nghĩa vụ, họ dễ chấp nhận mức rủi ro cao hơn.",
  "Herd Behavior":
    "Tâm lý bầy đàn: hành vi chạy theo đám đông thay vì bám vào giá trị nội tại hoặc khả năng chịu đựng rủi ro.",
  "Leverage Cycle":
    "Vòng xoáy đòn bẩy: giá tài sản tăng làm tài sản thế chấp trông an toàn hơn, từ đó kéo thêm vốn vay và đẩy giá lên tiếp.",
  "Liquidity/Maturity Mismatch":
    "Lệch kỳ hạn: dùng nguồn vốn ngắn để tài trợ cho tài sản dài, khiến hệ thống sống nhờ vào khả năng đảo vốn liên tục.",
  "Negative Externality":
    "Ngoại tác tiêu cực: một chủ thể tối ưu lợi ích riêng nhưng chi phí cuối cùng lại được chuyển sang người khác hoặc sang toàn hệ thống.",
  Contagion:
    "Lây lan: khi một mắt xích suy yếu làm niềm tin rơi dây chuyền, khiến cả những bên không trực tiếp gây lỗi cũng bị cuốn theo.",
};

const teamMembers = [
  { name: "Thành viên 1", role: "Mở đầu và điều phối mạch trình bày", focus: "Dẫn nhập trường hợp chị Hoa, đặt câu hỏi trung tâm và nối các phần." },
  { name: "Thành viên 2", role: "Cơ chế 1: Leverage Cycle", focus: "Giải thích vòng xoáy đòn bẩy và ví dụ tín dụng bất động sản." },
  { name: "Thành viên 3", role: "Cơ chế 2: Liquidity/Maturity Mismatch", focus: "Trình bày lệch kỳ hạn, trái phiếu ngắn và dự án dài." },
  { name: "Thành viên 4", role: "Cơ chế 3: Herd Behavior", focus: "Liên hệ giá căn hộ Hà Nội và tâm lý đám đông trong tài chính." },
  { name: "Thành viên 5", role: "Bất động sản Việt Nam 2021-2025", focus: "Gộp ba cơ chế vào cùng một bức tranh áp lực thị trường." },
  { name: "Thành viên 6", role: "Cú sốc xuất khẩu và Biển Đỏ", focus: "Phân tích cú sốc cầu bên ngoài và chi phí logistics tăng." },
  { name: "Thành viên 7", role: "SVB 2023", focus: "Giải thích bảng cân đối dễ vỡ, làn sóng rút tiền và Contagion." },
  { name: "Thành viên 8", role: "Khủng hoảng 2008 và kết luận", focus: "Kết nối bài học 2008 với luận điểm chung của cả nhóm." },
];

export const siteData = {
  metadata: {
    title: "Khủng hoảng Kinh tế, Phe 1A",
    subtitle: "Market Failure & Lòng tham của thị trường",
    group: "Nhóm 4",
    className: "L02",
    quote:
      "Khủng hoảng không nổ từ thông cáo chính sách. Nó nổ từ bảng cân đối tư nhân đã chất đầy rủi ro.",
    heroIntro:
      "Một trang trình bày theo hướng kể chuyện bằng hình ảnh: sáng, thoáng, nhiều lớp dữ liệu và sẵn chỗ cắm hình ảnh để thuyết trình mạch lạc trên laptop.",
    ctaStart: "Bắt đầu xem",
    ctaTeam: "Thành viên nhóm",
    footerNote:
      "Phiên bản 1 tập trung vào luồng thuyết trình, dữ liệu, biểu đồ và nguồn. Không tách phần riêng cho phản biện hoặc cross-examination.",
    panelLabels: {
      insight: "Xem ý chính",
      data: "Xem số liệu",
      chart: "Xem biểu đồ",
      source: "Xem nguồn",
    },
    navTitle: "Điều hướng nhanh",
    backToTop: "Quay lại đầu trang",
    previous: "Phần trước",
    next: "Phần tiếp theo",
    sectionBadge: "Trang trình bày học thuật",
    teamBadge: "Đội hình trình bày",
  },
  glossary,
  charts,
  teamMembers,
  sections: [
    {
      id: "cover",
      navLabel: "Trang mở đầu",
      layout: "cover",
      accent: "coral",
      eyebrow: "Chủ đề trung tâm",
      title: "Khủng hoảng Kinh tế",
      subtitle: "Phe 1A: Market Failure và lòng tham của thị trường",
      keyMessage:
        "Bài trình bày đặt trọng tâm vào câu hỏi: rủi ro đã tích lũy ở đâu trước khi cú sốc chính sách hay cú sốc thị trường xuất hiện?",
      intro: [
        "Thay vì mở đầu bằng chính sách, trang trình bày này mở đầu từ bảng cân đối tư nhân, từ động lực lợi nhuận, từ đòn bẩy và từ các quyết định vốn ngắn hạn nhưng hệ quả dài hạn.",
        "Toàn bộ nhịp trình bày được chia theo từng lớp: câu chuyện con người, framework, cơ chế, dữ liệu, rồi mới đến ví dụ quốc tế và kết luận.",
      ],
      keyPoints: [
        "Giao diện sáng, nhịp kể chuyện rõ, tối ưu cho thuyết trình trên màn hình laptop.",
        "Mỗi phần đều có nút mở ý chính, số liệu, biểu đồ và nguồn để người nói kiểm soát lượng thông tin trên màn hình.",
        "Khung ảnh được chừa sẵn để nhóm thay ảnh thật vào sau mà không phải sửa lại bố cục lớn.",
      ],
      dataCards: [
        { label: "Nhóm và lớp", value: "Nhóm 4 · L02", note: "Có thể chỉnh nhanh trong data.js nếu lớp hoặc nhóm thay đổi." },
        { label: "Định hướng", value: "Dữ liệu · Lập luận · Hình ảnh", note: "Thiết kế để vừa trình bày, vừa kéo được câu chuyện." },
        { label: "Phiên bản", value: "Phiên bản 1", note: "Chưa có phần riêng cho phản biện và cross-examination." },
      ],
      visuals: [
        {
          type: "quote",
          label: "Câu mở đầu",
          quote:
            "Khủng hoảng không nổ từ thông cáo chính sách. Nó nổ từ bảng cân đối tư nhân đã chất đầy rủi ro.",
        },
      ],
      media: {
        label: "Ảnh mở đầu của bài trình bày",
        path: "assets/images/cover-hero.jpg",
        alt: "Ảnh minh họa mở đầu cho bài thuyết trình",
        hint: "Có thể thay bằng ảnh thành phố, bảng cân đối, dòng vốn hoặc một hình tổng hợp có sức gợi lớn.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Tiêu đề chủ đề, trích dẫn mở đầu và luận điểm trung tâm của Phe 1A." },
        { name: sourceFiles.slideFlow, uses: "Thứ tự kể chuyện và nhịp chia phần của toàn bộ trang trình bày." },
      ],
    },
    {
      id: "hook",
      navLabel: "Mở đầu",
      layout: "story-split",
      accent: "orange",
      eyebrow: "Câu chuyện kéo người nghe vào bài",
      title: "Trường hợp chị Hoa và cú sốc đơn hàng",
      subtitle: "Một email giảm đơn hàng ở bên ngoài có thể đi thẳng vào bảng lương của người lao động trong nước.",
      keyMessage:
        "Điểm neo của phần mở bài không chỉ là con số 280.000 người mất việc, mà là cách một cú sốc cầu quốc tế đi xuyên qua chuỗi cung ứng và chạm tới đời sống rất thật.",
      intro: [
        "Trường hợp chị Hoa giúp kéo bài nói từ phạm trù vĩ mô xuống một lát cắt rất cụ thể: công việc, thu nhập, nhịp sống gia đình và cảm giác bất an.",
        "Khi đơn hàng bên ngoài co lại, sức ép không dừng ở doanh nghiệp xuất khẩu. Nó lan vào giờ làm, thu nhập, tiêu dùng và niềm tin của lao động.",
      ],
      keyPoints: [
        "Khoảng 280.000 người mất việc trong 5 tháng đầu năm 2023.",
        "Khoảng 510.000 lao động bị ảnh hưởng việc làm theo số liệu nhóm dùng.",
        "Một cú sốc bên ngoài có thể truyền rất nhanh vào khu vực sản xuất trong nước nếu nền kinh tế phụ thuộc đơn hàng và FDI.",
      ],
      dataCards: [
        { label: "Mất việc hoàn toàn", value: "280.000 người", note: "Con số được dùng để mở bài và tạo điểm neo cảm xúc." },
        { label: "Tổng lao động bị ảnh hưởng", value: "Khoảng 510.000 người", note: "Bao gồm mất việc và giảm giờ làm." },
        { label: "Hình dung nhanh", value: "Tác động ở quy mô một thành phố", note: "Giúp người nghe cảm nhận độ lớn thay vì chỉ nhìn số khô." },
      ],
      visuals: [{ type: "chart", chartId: "laborImpact", label: "Bức tranh lao động bị ảnh hưởng" }],
      media: {
        label: "Ảnh công nhân nhà máy",
        path: "assets/images/hook-worker.jpg",
        alt: "Ảnh minh họa công nhân nhà máy",
        hint: "Nên thay bằng ảnh công nhân, dây chuyền may mặc hoặc không gian nhà máy để tăng sức kể chuyện.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Trường hợp chị Hoa và logic truyền cú sốc từ đơn hàng quốc tế sang việc làm trong nước." },
        { name: sourceFiles.chartBook, uses: "Các mốc 280.000 mất việc và khoảng 510.000 lao động bị ảnh hưởng." },
        { name: sourceFiles.slideFlow, uses: "Vị trí của phần mở đầu trong mạch kể chuyện đầu bài." },
      ],
    },
    {
      id: "framework",
      navLabel: "Framework 4 tầng",
      layout: "framework",
      accent: "navy",
      eyebrow: "Khung phân tích trung tâm",
      title: "Framework 4 tầng nhân quả",
      subtitle: "Root Cause, Trigger, Amplifier và Response phải được tách ra nếu muốn tìm đúng nơi khủng hoảng bắt đầu.",
      keyMessage:
        "Root Cause là tầng cần làm sáng nhất: đó là nơi khu vực tư nhân đã tích lũy độ mong manh từ trước, còn chính sách thường nằm ở tầng Trigger hoặc Response.",
      intro: [
        "Khung 4 tầng giúp tránh việc mọi yếu tố xảy ra quanh khủng hoảng đều bị gọi nhầm là nguyên nhân gốc.",
        "Khi tách được 4 lớp, người nghe sẽ nhìn rõ thứ gì là mồi lửa, thứ gì là chất cháy, thứ gì làm lửa lan và thứ gì là hành động dập lửa.",
      ],
      keyPoints: [
        "Root Cause: nơi rủi ro tích lũy từ trước.",
        "Trigger: cú hích làm vết nứt lộ ra.",
        "Amplifier: cơ chế khiến cú sốc lan rộng và mất kiểm soát.",
        "Response: phần xử lý của chính phủ hoặc ngân hàng trung ương.",
      ],
      dataCards: [
        { label: "Tầng nổi bật", value: "Root Cause", note: "Đây là vị trí Phe 1A muốn kéo trọng tâm tranh luận về." },
        { label: "Tầng kích hoạt", value: "Trigger", note: "Có thể là chính sách, cú sốc thanh khoản hoặc một biến cố niềm tin." },
        { label: "Tầng xử lý", value: "Response", note: "Là hậu quả của khủng hoảng, không nên nhầm với nguồn gốc." },
      ],
      visuals: [
        {
          type: "framework",
          label: "Sơ đồ 4 tầng",
          items: [
            { title: "Root Cause", subtitle: "Rủi ro được tích lũy trong khu vực tư nhân", emphasis: true },
            { title: "Trigger", subtitle: "Cú hích làm vết nứt bộc lộ" },
            { title: "Amplifier", subtitle: "Cơ chế lan rộng, bán tháo và lây lan" },
            { title: "Response", subtitle: "Ứng phó, cứu trợ và tái cấu trúc" },
          ],
        },
      ],
      media: {
        label: "Khung sơ đồ 4 tầng",
        path: "assets/images/framework-diagram.jpg",
        alt: "Khung sơ đồ 4 tầng nhân quả",
        hint: "Phần này hợp với infographic hoặc sơ đồ tĩnh, không nhất thiết cần ảnh thật.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Định nghĩa 4 tầng và logic lập luận của Phe 1A." },
        { name: sourceFiles.slideFlow, uses: "Cách đặt framework ngay sau phần mở đầu để chốt góc nhìn cho cả bài." },
      ],
    },
    {
      id: "mechanism-leverage",
      navLabel: "Cơ chế 1",
      layout: "mechanism",
      accent: "gold",
      eyebrow: "Cơ chế 1",
      title: "Leverage Cycle: vòng xoáy đòn bẩy",
      subtitle: "Giá tài sản tăng không chỉ phản ánh kỳ vọng, mà còn tạo thêm khả năng vay để đẩy giá tăng tiếp.",
      keyMessage:
        "Khi tài sản thế chấp được nhìn như an toàn hơn, dòng vốn mới chảy vào và làm giá tăng tiếp. Đó là cơ chế tự khuếch đại của Leverage Cycle.",
      intro: [
        "Trong giai đoạn giá tăng, đòn bẩy thường trông vô hại vì tài sản đảm bảo đang lên giá. Nhưng chính lúc đó, hệ thống đang tích lũy độ mong manh.",
        "Với bất động sản Việt Nam, tín dụng tăng mạnh nhiều năm liên tiếp giúp vòng xoáy này có thêm nhiên liệu.",
      ],
      keyPoints: [
        "Giá tăng làm tài sản thế chấp trông an toàn hơn.",
        "Tài sản thế chấp trông an toàn hơn kéo thêm vốn vay.",
        "Vốn vay mới lại đẩy giá tài sản lên tiếp.",
      ],
      dataCards: [
        { label: "Tín dụng bất động sản", value: "Khoảng +26%/năm", note: "Tài liệu nêu rõ cho giai đoạn 2019-2021." },
        { label: "Điểm chuyển pha", value: "Năm 2022", note: "Áp lực siết vốn và thay đổi kỳ vọng làm vòng xoáy đứt nhịp." },
        { label: "Ý nghĩa", value: "Lợi nhuận ngắn hạn che mờ rủi ro dài hạn", note: "Đây là cách đòn bẩy tự tích tụ rủi ro trong khu vực tư nhân." },
      ],
      visuals: [
        { type: "chart", chartId: "realEstateCredit", label: "Tín dụng bất động sản 2019-2022" },
        {
          type: "comparison",
          label: "Ý nghĩa của cơ chế",
          items: [
            { title: "Lúc tăng giá", detail: "Rủi ro bị che dưới cảm giác an toàn giả tạo." },
            { title: "Lúc đổi pha", detail: "Giá yếu đi làm sức chịu nợ yếu đi rất nhanh." },
          ],
        },
      ],
      media: {
        label: "Ảnh thị trường bất động sản",
        path: "assets/images/hanoi-apartment.jpg",
        alt: "Ảnh minh họa thị trường bất động sản",
        hint: "Có thể thay bằng ảnh dự án nhà ở, cần cẩu, skyline hoặc bảng bán hàng bất động sản.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Mô tả cơ chế Leverage Cycle và ví dụ Việt Nam." },
        { name: sourceFiles.chartBook, uses: "Mốc tăng tín dụng bất động sản 2019-2021 và lưu ý về năm 2022." },
      ],
    },
    {
      id: "mechanism-mismatch",
      navLabel: "Cơ chế 2",
      layout: "mechanism",
      accent: "red",
      eyebrow: "Cơ chế 2",
      title: "Liquidity/Maturity Mismatch: lệch kỳ hạn",
      subtitle: "Nguồn vốn ngắn chạy theo dự án dài tạo ra một cấu trúc sống nhờ vào việc phải đảo vốn liên tục.",
      keyMessage:
        "Vấn đề không chỉ là thiếu vốn, mà là thời hạn của nguồn vốn quá ngắn so với vòng đời tài sản. Một cú nghẽn thanh khoản nhỏ cũng đủ gây đổ vỡ dây chuyền.",
      intro: [
        "Trái phiếu 2-3 năm được dùng cho dự án kéo dài 5-10 năm là hình ảnh điển hình của lệch kỳ hạn.",
        "Khi thị trường không còn sẵn sàng đảo vốn, bảng cân đối lập tức lộ ra khoảng trống giữa dòng tiền vào và nghĩa vụ phải trả.",
      ],
      keyPoints: [
        "Nguồn vốn ngắn tài trợ tài sản dài.",
        "Khi niềm tin giảm, khả năng đảo vốn biến mất rất nhanh.",
        "Thanh khoản biến thành vấn đề sống còn trước cả khi dự án hoàn thành.",
      ],
      dataCards: [
        { label: "Tổ chức chậm nghĩa vụ", value: "Hơn 90 tổ chức", note: "Mốc dùng để cho thấy đây là vấn đề hệ thống, không còn là câu chuyện lẻ tẻ." },
        { label: "Dư nợ chậm nghĩa vụ", value: "Khoảng 190.000 tỷ đồng", note: "Cho thấy áp lực nghĩa vụ đã thành khối lượng đáng kể." },
        { label: "Khoảng lệch", value: "Trái phiếu 2-3 năm · Dự án 5-10 năm", note: "Chính khoảng lệch này là trái tim của rủi ro." },
      ],
      visuals: [
        {
          type: "timeline-lanes",
          label: "So sánh thời hạn nguồn vốn và tài sản",
          lanes: [
            { title: "Trái phiếu doanh nghiệp", span: "2-3 năm", detail: "Nghĩa vụ trả nợ đến nhanh, đòi hỏi phải đảo vốn hoặc bán tài sản." },
            { title: "Dự án bất động sản", span: "5-10 năm", detail: "Tiền quay về chậm hơn nhiều, nhất là khi thủ tục và thanh khoản bị kéo dài." },
          ],
          gapLabel: "Khoảng chênh này là điểm dễ gãy của bảng cân đối.",
        },
        {
          type: "comparison",
          label: "Rủi ro khi thị trường đóng băng",
          items: [
            { title: "Doanh nghiệp", detail: "Thiếu tiền để trả nghĩa vụ trước khi tài sản kịp hoàn thiện." },
            { title: "Toàn hệ thống", detail: "Mất niềm tin, Contagion và áp lực bán tài sản tăng lên." },
          ],
        },
      ],
      media: {
        label: "Ảnh dự án và khoảng lệch kỳ hạn",
        path: "assets/images/bond-project-gap.jpg",
        alt: "Ảnh minh họa trái phiếu ngắn và dự án dài",
        hint: "Có thể thay bằng ảnh dự án dở dang, hồ sơ trái phiếu hoặc đồ họa dòng tiền ngắn - dài.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Giải thích cơ chế lệch kỳ hạn trong bất động sản và tài chính." },
        { name: sourceFiles.chartBook, uses: "Các mốc hơn 90 tổ chức chậm nghĩa vụ và khoảng 190.000 tỷ đồng." },
      ],
    },
    {
      id: "mechanism-herd",
      navLabel: "Cơ chế 3",
      layout: "mechanism",
      accent: "coral",
      eyebrow: "Cơ chế 3",
      title: "Herd Behavior: tâm lý bầy đàn",
      subtitle: "Khi quyết định không còn bám vào giá trị nội tại mà bám vào kỳ vọng người khác sẽ mua sau mình.",
      keyMessage:
        "Herd Behavior làm giá và quyết định rời xa nền tảng thực. Một thị trường có thể trông bền ngoài mặt, nhưng thực ra đang đứng trên nền niềm tin rất mỏng.",
      intro: [
        "Giá căn hộ Hà Nội tăng mạnh trong năm 2024 là ví dụ gần gũi để nói về tâm lý đi theo xu hướng.",
        "SVB lại là ví dụ tài chính cực đoan hơn: khi niềm tin rút đi, tốc độ rút tiền có thể nhanh hơn năng lực xử lý của cả một ngân hàng lớn.",
      ],
      keyPoints: [
        "Trong bất động sản, giá tăng kéo người mua mới vào vì sợ lỡ cơ hội.",
        "Trong ngân hàng, niềm tin đổ vỡ kéo người gửi tiền rút cùng lúc.",
        "Điểm chung là kỳ vọng của mỗi cá nhân lại được neo vào hành vi của đám đông.",
      ],
      dataCards: [
        { label: "Giá sơ cấp Hà Nội 2024", value: "Khoảng 64 triệu đồng/m²", note: "Mức chuẩn hóa theo tài liệu để vẽ xu hướng 2022-2024." },
        { label: "Làn sóng rút tiền ở SVB", value: "42 tỷ USD trong 8 giờ", note: "Một ví dụ cực rõ về tốc độ lan của tâm lý bầy đàn." },
        { label: "Điểm chung", value: "Kỳ vọng tự khuếch đại", note: "Người tham gia bám vào hành vi của người khác hơn là nền tảng." },
      ],
      visuals: [
        { type: "chart", chartId: "apartmentPrice", label: "Giá căn hộ Hà Nội 2022-2024" },
        {
          type: "comparison",
          label: "So sánh Việt Nam và SVB",
          items: [
            { title: "Thị trường căn hộ", detail: "Người mua chạy theo nhịp tăng giá và sợ bỏ lỡ cơ hội." },
            { title: "SVB 2023", detail: "Người gửi tiền chạy theo nhau vì sợ mình là người rút cuối cùng." },
          ],
        },
      ],
      media: {
        label: "Ảnh thị trường bất động sản",
        path: "assets/images/hanoi-apartment.jpg",
        alt: "Ảnh minh họa căn hộ Hà Nội",
        hint: "Nên thay bằng ảnh dự án căn hộ, nhà mẫu hoặc không gian bán hàng.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Giải thích Herd Behavior, ví dụ giá căn hộ Hà Nội và làn sóng rút tiền ở SVB." },
        { name: sourceFiles.chartBook, uses: "Mốc giá sơ cấp Hà Nội 2022-2024 và số liệu rút tiền của SVB." },
      ],
    },
    {
      id: "real-estate-vn",
      navLabel: "BĐS Việt Nam",
      layout: "panorama",
      accent: "navy",
      eyebrow: "Ba cơ chế cùng hoạt động",
      title: "Bất động sản Việt Nam 2021-2025",
      subtitle: "Đòn bẩy, lệch kỳ hạn và tâm lý bầy đàn không xuất hiện riêng lẻ; chúng chồng lên nhau trong cùng một bảng cân đối.",
      keyMessage:
        "Đây là phần gộp ba cơ chế vào một bức tranh: giá tăng tạo đòn bẩy, vốn ngắn đỡ tài sản dài, và kỳ vọng thị trường khiến điều chỉnh bị trì hoãn.",
      intro: [
        "Khi nhìn riêng từng cơ chế, rủi ro có vẻ còn kiểm soát được. Nhưng khi cả ba cùng nằm trong bất động sản, độ mong manh tăng theo cấp số nhân.",
        "Áp lực trái phiếu 2025 khiến bức tranh này quan trọng hơn vì nó kéo tương lai gần vào hiện tại: nghĩa vụ đến nhanh hơn khả năng hấp thụ của thị trường.",
      ],
      keyPoints: [
        "Bất động sản chiếm hơn một nửa áp lực đáo hạn trái phiếu năm 2025.",
        "Chậm nghĩa vụ và đáo hạn tương lai không tách rời nhau mà phản ánh cùng một vấn đề bảng cân đối.",
        "Ba cơ chế chồng lên nhau khiến cú sốc nhỏ cũng có thể thành cú sốc hệ thống.",
      ],
      dataCards: [
        { label: "Cơ cấu đáo hạn 2025", value: "Bất động sản > 50%", note: "Dùng tỷ lệ quy ước 51/49 để trực quan hóa, không thay logic nguồn." },
        { label: "Chậm nghĩa vụ", value: "Hơn 90 tổ chức", note: "Cho thấy vấn đề không còn nằm ở một vài doanh nghiệp cá biệt." },
        { label: "Dư nợ chậm trả", value: "Khoảng 190.000 tỷ đồng", note: "Là lớp áp lực hiện tại song song với lớp đáo hạn tương lai." },
      ],
      visuals: [
        { type: "chart", chartId: "bondMaturityShare", label: "Cơ cấu đáo hạn trái phiếu năm 2025" },
        { type: "chart", chartId: "bondStress", label: "Ba tầng áp lực trái phiếu" },
      ],
      media: {
        label: "Ảnh thị trường trái phiếu và bất động sản",
        path: "assets/images/real-estate-bonds.jpg",
        alt: "Ảnh minh họa áp lực trái phiếu bất động sản",
        hint: "Có thể thay bằng ảnh tòa nhà, hồ sơ trái phiếu hoặc đồ họa kết hợp vốn và dự án.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Mạch lập luận gộp ba cơ chế trong thị trường bất động sản Việt Nam." },
        { name: sourceFiles.chartBook, uses: "Cơ cấu đáo hạn 2025, chậm nghĩa vụ và các mốc khoảng 190.000 tỷ đồng, hơn 200.000 tỷ đồng." },
        { name: sourceFiles.slideFlow, uses: "Vị trí của phần này như điểm nối giữa lớp cơ chế và lớp cú sốc thực tế." },
      ],
    },
    {
      id: "export-shock",
      navLabel: "Xuất khẩu 2023",
      layout: "analytical",
      accent: "orange",
      eyebrow: "Cú sốc bên ngoài đi vào kinh tế thực",
      title: "Cú sốc xuất khẩu và lao động năm 2023",
      subtitle: "Xuất khẩu chậm lại, đơn hàng co lại và việc làm chịu tác động rất nhanh ở những ngành gắn mạnh với chuỗi toàn cầu.",
      keyMessage:
        "Phần này cho thấy một nền kinh tế có độ mở cao có thể chịu tổn thương mạnh thế nào khi cầu bên ngoài suy yếu và khu vực FDI nắm tỷ trọng xuất khẩu quá lớn.",
      intro: [
        "Nếu phần mở đầu là câu chuyện một người, thì phần này mở rộng ra bức tranh toàn nền kinh tế bằng xuất khẩu, lao động và cơ cấu khu vực doanh nghiệp.",
        "Điểm quan trọng không chỉ là xuất khẩu giảm, mà là giảm trong bối cảnh khu vực FDI chiếm tỷ trọng rất lớn, khiến cú sốc từ bên ngoài truyền vào sâu hơn.",
      ],
      keyPoints: [
        "Năm 2023 xuất khẩu giảm so với 2022.",
        "Dệt may và điện tử cùng chịu tác động, nhưng cường độ khác nhau.",
        "Khu vực FDI chiếm khoảng 71,7% tổng xuất khẩu năm 2024.",
      ],
      dataCards: [
        { label: "Xuất khẩu 2022", value: "371,9 tỷ USD", note: "Mốc đỉnh trước khi bước sang năm giảm." },
        { label: "Xuất khẩu 2023", value: "355,5 tỷ USD", note: "Cho thấy cú sốc bên ngoài đã đi vào dữ liệu thực." },
        { label: "Khu vực FDI", value: "71,7% tổng xuất khẩu", note: "Độ phụ thuộc này làm cú sốc ngoại sinh khuếch đại mạnh hơn." },
      ],
      visuals: [
        { type: "chart", chartId: "exportsTrend", label: "Xuất khẩu Việt Nam 2020-2023" },
        { type: "chart", chartId: "sectorImpact", label: "Lao động theo ngành trong quý II/2023" },
        { type: "chart", chartId: "fdiShare", label: "Cơ cấu FDI trong xuất khẩu năm 2024" },
      ],
      media: {
        label: "Ảnh công nhân nhà máy",
        path: "assets/images/export-factory.jpg",
        alt: "Ảnh minh họa công nhân và nhà máy xuất khẩu",
        hint: "Hợp với ảnh xưởng sản xuất, container xuất khẩu hoặc dây chuyền hàng xuất đi nước ngoài.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Logic cú sốc xuất khẩu đi vào việc làm và nền kinh tế thực." },
        { name: sourceFiles.chartBook, uses: "Chuỗi số xuất khẩu 2020-2023, lao động bị ảnh hưởng, dệt may - điện tử và tỷ trọng FDI." },
      ],
    },
    {
      id: "red-sea",
      navLabel: "Biển Đỏ",
      layout: "route",
      accent: "red",
      eyebrow: "Cú sốc logistics",
      title: "Biển Đỏ quý I/2024",
      subtitle: "Chi phí container tăng và thời gian vận chuyển kéo dài là một ví dụ rõ về cú sốc logistics mang tính Negative Externality.",
      keyMessage:
        "Một đoạn tuyến vận tải bị gián đoạn có thể làm chi phí và thời gian đội lên cho rất nhiều doanh nghiệp không trực tiếp gây ra cú sốc đó.",
      intro: [
        "Biển Đỏ là ví dụ phù hợp để giải thích vì sao có những cú sốc không bắt đầu từ bảng cân đối doanh nghiệp Việt Nam nhưng vẫn bẻ cong lợi nhuận của họ.",
        "Chi phí logistics tăng làm đơn hàng, tồn kho, giá thành và kế hoạch dòng tiền của doanh nghiệp cùng lúc bị ảnh hưởng.",
      ],
      keyPoints: [
        "Chi phí container tăng mạnh khi tuyến vận tải bị gián đoạn.",
        "Thời gian giao hàng kéo dài làm kế hoạch sản xuất và dòng tiền bị lệch nhịp.",
        "Đây là một Negative Externality vì chi phí bị đẩy sang nhiều chủ thể khác trong chuỗi.",
      ],
      dataCards: [
        { label: "Tác động trực tiếp", value: "Chi phí container tăng", note: "Tăng chi phí đầu vào và làm mỏng biên lợi nhuận." },
        { label: "Tác động dây chuyền", value: "Thời gian vận chuyển dài hơn", note: "Ảnh hưởng tiến độ giao hàng, tồn kho và dòng tiền." },
        { label: "Ý nghĩa lý thuyết", value: "Negative Externality", note: "Chi phí do cú sốc tạo ra không chỉ nằm ở nơi phát sinh sự cố." },
      ],
      visuals: [
        {
          type: "route",
          label: "So sánh trước và sau khi tuyến Biển Đỏ bị gián đoạn",
          routes: [
            { title: "Trước gián đoạn", detail: "Tuyến ngắn hơn, thời gian giao hàng ổn định hơn và chi phí container thấp hơn." },
            { title: "Sau gián đoạn", detail: "Vòng tuyến dài hơn, thời gian giao hàng kéo dài và chi phí logistics tăng mạnh." },
          ],
        },
        {
          type: "comparison",
          label: "Vì sao đây là ngoại tác tiêu cực",
          items: [
            { title: "Doanh nghiệp xuất khẩu", detail: "Phải chịu thêm chi phí và độ trễ dù không trực tiếp tạo ra xung đột." },
            { title: "Người lao động và người mua", detail: "Rủi ro cuối cùng có thể quay lại thành giảm giờ làm, giao chậm hoặc giá bán cao hơn." },
          ],
        },
      ],
      media: {
        label: "Ảnh tuyến vận tải Biển Đỏ",
        path: "assets/images/red-sea-logistics.jpg",
        alt: "Ảnh minh họa tuyến vận tải Biển Đỏ",
        hint: "Có thể thay bằng ảnh container, tàu biển, bản đồ tuyến đường hoặc cảng trung chuyển.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Lập luận dùng Biển Đỏ như ví dụ về cú sốc ngoại sinh và ngoại tác tiêu cực." },
        { name: sourceFiles.chartBook, uses: "Các ghi chú về chi phí container tăng và thời gian vận chuyển kéo dài." },
      ],
    },
    {
      id: "svb",
      navLabel: "SVB 2023",
      layout: "case-study",
      accent: "navy",
      eyebrow: "Trường hợp quốc tế",
      title: "SVB năm 2023",
      subtitle: "Một bảng cân đối mất cân bằng có thể sụp rất nhanh khi niềm tin biến mất và tốc độ rút tiền vượt quá khả năng ứng phó.",
      keyMessage:
        "SVB không chỉ là một làn sóng rút tiền hàng loạt. Nó là bài học về bảng cân đối dễ vỡ, về lệch kỳ hạn, về Contagion và về tốc độ lan của niềm tin số hóa.",
      intro: [
        "SVB là ví dụ giàu tính thị giác: tổng tài sản lớn nhưng cấu trúc tài sản - nguồn vốn lại quá nhạy với biến động lãi suất và niềm tin người gửi tiền.",
        "Khi thông tin xấu lộ ra, hệ thống số hóa và mạng lưới nhà đầu tư khiến tốc độ rút tiền tăng đến mức khủng khiếp.",
      ],
      keyPoints: [
        "SVB có khoảng 212 tỷ USD tổng tài sản.",
        "Lỗ HTM khoảng 15,1 tỷ USD làm bảng cân đối suy yếu mạnh.",
        "Khoảng 94% tiền gửi không bảo hiểm khiến làn sóng rút tiền dễ bùng mạnh hơn.",
      ],
      dataCards: [
        { label: "Tổng tài sản", value: "212 tỷ USD", note: "Quy mô lớn không đồng nghĩa với an toàn." },
        { label: "Lỗ HTM", value: "15,1 tỷ USD", note: "Khoản lỗ chưa thực hiện nhưng làm niềm tin sụp rất nhanh." },
        { label: "Rút tiền trong 8 giờ", value: "42 tỷ USD", note: "Là nhịp rút tiền cực nhanh của thời đại tài chính số." },
      ],
      visuals: [
        { type: "chart", chartId: "svbMetrics", label: "Bốn chỉ số chính của SVB" },
        {
          type: "timeline",
          label: "Nhịp rút tiền của SVB",
          steps: [
            "Lãi suất tăng làm lỗ trái phiếu chưa thực hiện lớn hơn.",
            "Ngân hàng công bố nhu cầu tăng vốn, tín hiệu yếu lộ rõ ra thị trường.",
            "Niềm tin sụp nhanh trong nhóm khách hàng có kết nối thông tin dày đặc.",
            "42 tỷ USD bị rút trong 8 giờ, khủng hoảng thanh khoản bùng nổ.",
          ],
        },
      ],
      media: {
        label: "Ảnh SVB và làn sóng rút tiền",
        path: "assets/images/svb-bank.jpg",
        alt: "Ảnh minh họa SVB và làn sóng rút tiền",
        hint: "Có thể thay bằng ảnh chi nhánh SVB, dòng người, đồ họa rút tiền hàng loạt hoặc ảnh màn hình tin tức.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Lập luận về SVB như ví dụ của bảng cân đối dễ vỡ và tâm lý lây lan." },
        { name: sourceFiles.chartBook, uses: "Các mốc 212 tỷ USD, 15,1 tỷ USD, 94% và 42 tỷ USD trong 8 giờ." },
      ],
    },
    {
      id: "crisis-2008",
      navLabel: "Khủng hoảng 2008",
      layout: "dual-axis",
      accent: "gold",
      eyebrow: "Trường hợp lịch sử",
      title: "Khủng hoảng tài chính toàn cầu 2008",
      subtitle: "Bong bóng nhà ở, bảng cân đối khu vực tư nhân và Leverage Cycle phải được nhìn là lõi của cuộc khủng hoảng.",
      keyMessage:
        "FED rate là điều kiện khuếch đại, nhưng không phải nguyên nhân gốc. Nguyên nhân gốc nằm ở cách hệ thống tư nhân đóng gói, đẩy và khuếch đại rủi ro.",
      intro: [
        "Phần này giúp người nghe nhìn thấy một khuôn mẫu quen thuộc: tài sản tăng giá kéo theo đòn bẩy, rồi đòn bẩy làm tổn thương hệ thống khi chu kỳ đảo chiều.",
        "Lehman Brothers là biểu tượng của thời điểm thị trường nhận ra rủi ro không còn nằm trong từng tổ chức riêng lẻ nữa.",
      ],
      keyPoints: [
        "Giá nhà Mỹ tăng mạnh trước khi rơi mạnh.",
        "Lehman Brothers là điểm vỡ niềm tin mang tính biểu tượng.",
        "Lãi suất thấp không tự tạo khủng hoảng nếu khu vực tư nhân không dùng nó để nhân đòn bẩy và che rủi ro.",
      ],
      dataCards: [
        { label: "Giá nhà Mỹ 2000", value: "156 nghìn USD/căn", note: "Mốc nền của chu kỳ tăng giá." },
        { label: "Giá nhà Mỹ 2006", value: "257,4 nghìn USD/căn", note: "Đỉnh bong bóng trước khi đảo chiều." },
        { label: "Giá nhà Mỹ 2009", value: "180 nghìn USD/căn", note: "Cho thấy mức điều chỉnh sâu sau khi hệ thống vỡ." },
      ],
      visuals: [
        { type: "chart", chartId: "usHousing", label: "Giá nhà Mỹ 2000-2009" },
        { type: "chart", chartId: "fedVsHousing", label: "FED rate và giá nhà" },
      ],
      media: {
        label: "Ảnh Lehman Brothers 2008",
        path: "assets/images/lehman-2008.jpg",
        alt: "Ảnh minh họa Lehman Brothers 2008",
        hint: "Nên thay bằng ảnh Lehman Brothers, nhà ở Mỹ thời bong bóng hoặc khung tin tức năm 2008.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Lập luận về 2008, Lehman Brothers và vai trò của FED rate." },
        { name: sourceFiles.chartBook, uses: "Các mốc giá nhà Mỹ và FED rate dùng để dựng biểu đồ." },
      ],
    },
    {
      id: "team",
      navLabel: "Thành viên nhóm",
      layout: "team",
      accent: "coral",
      eyebrow: "Đội hình trình bày",
      title: "8 thành viên của nhóm",
      subtitle: "Một phần riêng để nhóm giới thiệu đội hình, vai trò thuyết trình và chỗ cắm ảnh từng thành viên.",
      keyMessage:
        "Phần này được thiết kế như một bộ thẻ nhẹ, có thể dùng ở đầu buổi hoặc cuối buổi để giới thiệu vai trò và phân công trình bày.",
      intro: [
        "Nếu nhóm đã có tên thật và ảnh thật, chỉ cần sửa trong data.js là toàn bộ giao diện sẽ cập nhật mà không phải chỉnh lại layout.",
        "Hiện tại trang trình bày dùng khung giữ chỗ đồng bộ để site vẫn hoàn chỉnh ngay cả khi chưa có ảnh đại diện cuối cùng.",
      ],
      keyPoints: [
        "Có đủ 8 thẻ thành viên.",
        "Mỗi thẻ có vai trò trình bày gợi ý theo mạch của bài.",
        "Mỗi thẻ có khung ảnh riêng, sẵn sàng thay bằng ảnh thật.",
      ],
      dataCards: [
        { label: "Số lượng thành viên", value: "8 người", note: "Có thể thay tên thật và vai trò bất cứ lúc nào trong data.js." },
        { label: "Kiểu hiển thị", value: "Bộ thẻ kính mờ", note: "Phù hợp để trình chiếu hoặc chụp màn hình giới thiệu nhóm." },
        { label: "Khả năng tùy biến", value: "Tên · vai trò · ảnh", note: "Không cần sửa layout lớn khi đổi nội dung." },
      ],
      visuals: [{ type: "team", label: "Đội hình nhóm", members: teamMembers }],
      media: {
        label: "Ảnh thành viên nhóm",
        path: "assets/images/team-member.jpg",
        alt: "Ảnh minh họa thành viên nhóm",
        hint: "Có thể tách thành 8 ảnh riêng về sau; hiện tại phần này dùng ảnh đại diện giữ chỗ để không làm vỡ bố cục.",
      },
      sources: [{ name: sourceFiles.slideFlow, uses: "Gợi ý cho nhịp giới thiệu nhóm như một điểm chuyển cảnh trước phần kết." }],
    },
    {
      id: "conclusion",
      navLabel: "Kết luận",
      layout: "conclusion",
      accent: "navy",
      eyebrow: "Chốt luận điểm",
      title: "Kết luận",
      subtitle: "Ba cơ chế tư nhân là thuốc nổ tích lũy. Chính sách thường chỉ là tia lửa hoặc là phản ứng sau khi lửa đã bùng lên.",
      keyMessage:
        "Nếu chỉ nhìn vào chính sách, ta sẽ nhìn thấy thời điểm phát nổ. Nếu nhìn vào bảng cân đối tư nhân, ta mới thấy nơi chất nổ đã được nhét vào từ trước.",
      intro: [
        "Bài trình bày quay trở lại với chị Hoa để nhắc rằng đằng sau mỗi biểu đồ là một chuỗi tác động rất thật lên doanh nghiệp và người lao động.",
        "Điều Phe 1A muốn giữ lại sau cùng là sự phân biệt rõ giữa nguyên nhân gốc, cú hích kích hoạt, cơ chế khuếch đại và phản ứng chữa cháy.",
      ],
      keyPoints: [
        "Leverage Cycle, Liquidity/Maturity Mismatch và Herd Behavior là ba lớp độ mong manh tích lũy.",
        "Chính sách không nên bị biến thành lời giải thích duy nhất cho mọi cuộc khủng hoảng.",
        "Đi tìm Root Cause là cách nhìn đúng hơn để tránh lặp lại chu kỳ cũ.",
      ],
      dataCards: [
        { label: "Thuốc nổ tích lũy", value: "Ba cơ chế tư nhân", note: "Đòn bẩy, lệch kỳ hạn và tâm lý bầy đàn." },
        { label: "Tia lửa", value: "Chính sách hoặc cú sốc", note: "Làm vết nứt lộ ra nhưng không nhất thiết là nguồn gốc." },
        { label: "Điểm rơi cuối", value: "Trở lại trường hợp chị Hoa", note: "Mọi độ mong manh tài chính rốt cuộc vẫn quay lại kinh tế thực." },
      ],
      visuals: [
        {
          type: "quote",
          label: "Quote kết",
          quote:
            "Khi bảng cân đối tư nhân đã chất đầy rủi ro, chính sách chỉ cần chạm nhẹ cũng đủ làm cả hệ thống rung lên.",
        },
      ],
      media: {
        label: "Ảnh tổng hợp cho phần kết",
        path: "assets/images/final-synthesis.jpg",
        alt: "Ảnh minh họa tổng hợp cho phần kết",
        hint: "Có thể dùng ảnh tổng hợp skyline, thị trường, dòng người lao động hoặc hình trừu tượng giàu nhịp cảm xúc.",
      },
      sources: [
        { name: sourceFiles.outline, uses: "Phần tổng kết, luận điểm thuốc nổ tích lũy và tia lửa chính sách." },
        { name: sourceFiles.slideFlow, uses: "Nhịp chốt bài và cách gọi lại trường hợp mở đầu ở phần cuối." },
      ],
    },
  ],
};
