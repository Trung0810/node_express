const blogData = [
  {
    id: 1,
    title: "Học JavaScript từ con số 0",
    description: "Hướng dẫn cơ bản cho người mới bắt đầu với JavaScript.",
    content: `JavaScript là ngôn ngữ lập trình phổ biến nhất hiện nay.
Nó được sử dụng rộng rãi trong phát triển web.
Người mới bắt đầu nên học từ các khái niệm cơ bản.
Bao gồm biến, hàm và cấu trúc điều khiển.
Bài viết này sẽ giúp bạn làm quen từ đầu.`,
    author: {
      id: 1,
      fullName: "Nguyễn Văn Nam",
      username: "nguyenvannam",
    },
    publishedAt: "2026-01-10",
    viewCount: 1200,
    likeCount: 150,
  },
  {
    id: 2,
    title: "Hiểu rõ về Closure trong JS",
    description: "Giải thích chi tiết về closure và cách sử dụng.",
    content: `Closure là một khái niệm quan trọng trong JavaScript.
Nó cho phép hàm truy cập biến bên ngoài phạm vi của nó.
Điều này rất hữu ích trong việc bảo vệ dữ liệu.
Closure thường được dùng trong callback và module.
Hiểu rõ closure giúp bạn viết code tốt hơn.`,
    author: {
      id: 2,
      fullName: "Trần Thị Lan",
      username: "tranthilan",
    },
    publishedAt: "2026-01-15",
    viewCount: 980,
    likeCount: 120,
  },
  {
    id: 3,
    title: "Async/Await vs Promise",
    description: "So sánh hai cách xử lý bất đồng bộ trong JavaScript.",
    content: `Async/Await giúp code bất đồng bộ dễ đọc hơn.
Promise là nền tảng của async/await.
Cả hai đều dùng để xử lý tác vụ không đồng bộ.
Async/Await giống như viết code đồng bộ.
Tuy nhiên, bạn cần hiểu rõ Promise trước.`,
    author: {
      id: 3,
      fullName: "Lê Minh Tuấn",
      username: "leminhtuan",
    },
    publishedAt: "2026-01-20",
    viewCount: 1500,
    likeCount: 200,
  },
  {
    id: 4,
    title: "Node.js là gì?",
    description: "Tìm hiểu về Node.js và cách hoạt động.",
    content: `Node.js cho phép chạy JavaScript phía server.
Nó sử dụng mô hình event-driven.
Phù hợp với các ứng dụng realtime.
Hiệu suất cao và dễ mở rộng.
Đây là công nghệ rất phổ biến hiện nay.`,
    author: {
      id: 4,
      fullName: "Phạm Quang Huy",
      username: "phamquanghuy",
    },
    publishedAt: "2026-01-25",
    viewCount: 2000,
    likeCount: 300,
  },
  {
    id: 5,
    title: "ExpressJS cơ bản",
    description: "Tạo server đơn giản với Express.",
    content: `Express là framework phổ biến của Node.js.
Nó giúp xây dựng API nhanh chóng.
Cấu trúc đơn giản, dễ học.
Hỗ trợ middleware mạnh mẽ.
Rất phù hợp cho backend web.`,
    author: {
      id: 5,
      fullName: "Hoàng Thị Mai",
      username: "hoangthimai",
    },
    publishedAt: "2026-02-01",
    viewCount: 1750,
    likeCount: 220,
  },
  {
    id: 6,
    title: "REST API là gì?",
    description: "Nguyên tắc thiết kế RESTful API.",
    content: `REST API là kiến trúc phổ biến.
Sử dụng HTTP method như GET, POST.
Giúp client và server giao tiếp hiệu quả.
Dễ mở rộng và bảo trì.
Là nền tảng của nhiều hệ thống hiện đại.`,
    author: {
      id: 6,
      fullName: "Đỗ Anh Dũng",
      username: "doanhdung",
    },
    publishedAt: "2026-02-05",
    viewCount: 1600,
    likeCount: 180,
  },
  {
    id: 7,
    title: "MongoDB cho người mới",
    description: "Giới thiệu về NoSQL và MongoDB.",
    content: `MongoDB là cơ sở dữ liệu NoSQL.
Lưu trữ dữ liệu dạng document.
Không cần schema cố định.
Phù hợp với ứng dụng linh hoạt.
Dễ tích hợp với Node.js.`,
    author: {
      id: 7,
      fullName: "Nguyễn Thị Hương",
      username: "nguyenthihuong",
    },
    publishedAt: "2026-02-10",
    viewCount: 1400,
    likeCount: 160,
  },
  {
    id: 8,
    title: "Authentication với JWT",
    description: "Cách xác thực người dùng bằng JSON Web Token.",
    content: `JWT là phương thức xác thực phổ biến.
Token được gửi qua mỗi request.
Không cần lưu session trên server.
Phù hợp với RESTful API.
Cần bảo mật key cẩn thận.`,
    author: {
      id: 8,
      fullName: "Trần Quốc Bảo",
      username: "tranquocbao",
    },
    publishedAt: "2026-02-15",
    viewCount: 2100,
    likeCount: 320,
  },
  {
    id: 9,
    title: "Deploy app Node.js",
    description: "Hướng dẫn deploy ứng dụng Node.js lên server.",
    content: `Deploy giúp ứng dụng hoạt động online.
Có thể dùng VPS hoặc cloud.
Cần cấu hình môi trường đúng cách.
Sử dụng PM2 để quản lý process.
Đảm bảo app chạy ổn định.`,
    author: {
      id: 9,
      fullName: "Lý Thanh Tùng",
      username: "lythanhtung",
    },
    publishedAt: "2026-02-20",
    viewCount: 1300,
    likeCount: 140,
  },
  {
    id: 10,
    title: "Tối ưu hiệu năng web",
    description: "Các kỹ thuật cải thiện tốc độ tải trang.",
    content: `Hiệu năng ảnh hưởng trải nghiệm người dùng.
Giảm kích thước file là rất quan trọng.
Sử dụng lazy loading cho hình ảnh.
Tối ưu code và caching.
Giúp website chạy nhanh hơn.`,
    author: {
      id: 10,
      fullName: "Vũ Đức Anh",
      username: "vuducanh",
    },
    publishedAt: "2026-02-25",
    viewCount: 1900,
    likeCount: 260,
  },
];
