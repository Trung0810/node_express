const blogData = [
  {
    id: 1,
    title: "Học JavaScript từ con số 0",
    description: "Hướng dẫn cơ bản cho người mới bắt đầu với JavaScript.",
    content:
      "JavaScript là ngôn ngữ lập trình phổ biến nhất hiện nay và được sử dụng rộng rãi trong phát triển web. Người mới bắt đầu nên làm quen với các khái niệm cơ bản như biến, hàm và cấu trúc điều khiển để xây dựng nền tảng vững chắc. Khi hiểu được những kiến thức này, bạn sẽ dễ dàng tiếp cận các thư viện và framework hiện đại. Bài viết này sẽ giúp bạn bắt đầu hành trình học JavaScript một cách dễ dàng và hiệu quả.",
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
    content:
      "Closure là một trong những khái niệm quan trọng nhưng dễ gây nhầm lẫn trong JavaScript. Nó cho phép một hàm có thể truy cập các biến bên ngoài phạm vi của nó ngay cả khi hàm cha đã thực thi xong. Điều này rất hữu ích trong việc bảo vệ dữ liệu và tạo ra các module độc lập. Khi hiểu rõ closure, bạn sẽ viết được những đoạn code linh hoạt và mạnh mẽ hơn.",
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
    content:
      "Trong JavaScript, xử lý bất đồng bộ là một phần không thể thiếu khi làm việc với API hoặc dữ liệu từ server. Promise cung cấp cách tiếp cận mạnh mẽ nhưng đôi khi gây khó đọc khi lồng nhau quá nhiều. Async/Await ra đời giúp code trở nên rõ ràng và dễ hiểu hơn, giống như cách viết code đồng bộ. Tuy nhiên, để sử dụng tốt Async/Await, bạn vẫn cần nắm vững cách hoạt động của Promise.",
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
    content:
      "Node.js là môi trường chạy JavaScript phía server, cho phép bạn xây dựng các ứng dụng backend bằng cùng một ngôn ngữ với frontend. Nó sử dụng mô hình event-driven và non-blocking I/O, giúp xử lý nhiều request cùng lúc với hiệu suất cao. Điều này làm cho Node.js trở thành lựa chọn lý tưởng cho các ứng dụng realtime như chat hoặc streaming. Hiện nay, Node.js được sử dụng rộng rãi trong nhiều hệ thống lớn.",
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
    content:
      "Express là một framework nhẹ và phổ biến của Node.js, giúp bạn xây dựng server và API một cách nhanh chóng. Với cấu trúc đơn giản và dễ học, Express phù hợp cho cả người mới bắt đầu và developer có kinh nghiệm. Nó hỗ trợ middleware mạnh mẽ, giúp xử lý request linh hoạt hơn. Nhờ đó, việc phát triển backend trở nên dễ dàng và hiệu quả hơn rất nhiều.",
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
    content:
      "REST API là một kiến trúc phổ biến giúp client và server giao tiếp với nhau thông qua HTTP. Nó sử dụng các phương thức như GET, POST, PUT và DELETE để thao tác với dữ liệu. Nhờ thiết kế đơn giản và dễ hiểu, REST API rất dễ mở rộng và bảo trì trong các hệ thống lớn. Đây là nền tảng của hầu hết các ứng dụng web và mobile hiện đại.",
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
    content:
      "MongoDB là một cơ sở dữ liệu NoSQL, lưu trữ dữ liệu dưới dạng document thay vì bảng như SQL truyền thống. Điều này giúp dữ liệu linh hoạt hơn và không cần schema cố định. MongoDB rất phù hợp với các ứng dụng cần mở rộng nhanh và thay đổi cấu trúc thường xuyên. Ngoài ra, nó tích hợp rất tốt với Node.js trong các dự án web hiện đại.",
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
    content:
      "JWT là một phương thức xác thực phổ biến trong các ứng dụng hiện đại, đặc biệt là với RESTful API. Thay vì lưu session trên server, token sẽ được gửi kèm theo mỗi request để xác minh người dùng. Cách làm này giúp hệ thống dễ mở rộng và giảm tải cho server. Tuy nhiên, việc bảo mật key và token là rất quan trọng để tránh bị tấn công.",
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
    content:
      "Deploy là bước quan trọng để đưa ứng dụng từ môi trường phát triển lên internet. Bạn có thể sử dụng VPS hoặc các nền tảng cloud để triển khai ứng dụng Node.js. Việc cấu hình môi trường đúng cách sẽ giúp ứng dụng hoạt động ổn định hơn. Ngoài ra, các công cụ như PM2 giúp quản lý process và đảm bảo server luôn chạy liên tục.",
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
    content:
      "Hiệu năng website ảnh hưởng trực tiếp đến trải nghiệm người dùng và SEO. Việc giảm kích thước file, tối ưu hình ảnh và sử dụng lazy loading sẽ giúp trang tải nhanh hơn. Ngoài ra, caching và tối ưu code cũng đóng vai trò quan trọng trong việc cải thiện tốc độ. Khi website hoạt động mượt mà, người dùng sẽ có trải nghiệm tốt hơn và ở lại lâu hơn.",
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

module.exports = blogData;
