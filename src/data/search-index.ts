export interface SearchItem {
  id: string;
  title: string;
  type: "chapter" | "content";
  snippet?: string;
  keywords: string[];
  number?: string;
}

export const searchIndex: SearchItem[] = [
  {
    id: "dan-nhap",
    title: "Dẫn nhập và Bối cảnh Triết học",
    number: "1",
    type: "chapter",
    keywords: ["bối cảnh", "triết học", "nhân loại", "lịch sử", "phẩm giá", "nhân quyền", "Liên Hợp Quốc", "1948", "pháp lý"],
    snippet: "Phân tích giá trị của phẩm giá con người qua các giai đoạn lịch sử và nền tảng nhân quyền quốc tế."
  },
  {
    id: "imago-dei",
    title: "Nền tảng Hữu thể học: Imago Dei",
    number: "2",
    type: "chapter",
    keywords: ["Imago Dei", "hình ảnh Thiên Chúa", "căn tính", "con người", "hữu thể học", "ontological", "thần học"],
    snippet: "Khái niệm con người được tạo dựng theo hình ảnh Thiên Chúa là hòn đá tảng của nhân học Kitô giáo."
  },
  {
    id: "nguon-goc",
    title: "Nguồn gốc Thần linh và Hệ bậc Xã hội",
    number: "2.1",
    type: "chapter",
    keywords: ["nguồn gốc", "thần linh", "Sáng Thế", "vô biên", "bất khả xâm phạm", "Genesis", "phủ nhận hệ bậc", "Aristotle", "Kant"],
    snippet: "Phẩm giá con người là vô biên, bất khả xâm phạm và không lệ thuộc vào năng lực trí tuệ hay thể chất."
  },
  {
    id: "da-giac",
    title: "Ba lăng kính diễn giải Imago Dei",
    number: "2.2",
    type: "chapter",
    keywords: ["Bản thể", "Chức năng", "Tương quan", "Augustine", "Aquinas", "Philo", "Substantive", "Functional", "Relational"],
    snippet: "Ba góc nhìn then chốt: Lý trí (Bản thể), Quản trị (Chức năng), và Hiệp thông (Tương quan)."
  },
  {
    id: "nhap-the",
    title: "Mầu nhiệm Nhập thể và Cứu độ",
    number: "3",
    type: "chapter",
    keywords: ["Nhập thể", "cứu độ", "Giêsu Kitô", "phục sinh", "mục đích luận", "teleological", "tin mừng"],
    snippet: "Sự thăng tiến tối hậu của nhân phẩm qua công trình cứu chuộc của Ngôi Lời nhập thể."
  },
  {
    id: "su-nhap-the",
    title: "Sự Nhập Thể: Khẳng định bản tính người",
    number: "3.1",
    type: "chapter",
    keywords: ["Ngôi Lời", "xác phàm", "thánh hóa", "Gioan Phaolô II", "Redemptor Hominis", "mạc khải", "hiện thân"],
    snippet: "Thiên Chúa làm người là lời khẳng định mạnh mẽ nhất về giá trị thánh thiêng của xác phàm con người."
  },
  {
    id: "phuc-hoi",
    title: "Sự Phục Hồi Hình Ảnh Biến Dạng",
    number: "3.2",
    type: "chapter",
    keywords: ["phục hồi", "biến dạng", "sa ngã", "tội lỗi", "Irenaeus", "homoiosis", "eikon", "tái cấu trúc"],
    snippet: "Công cuộc phục hồi hình ảnh Thiên Chúa bị lu mờ qua ân sủng của Đức Kitô."
  },
  {
    id: "da-dang",
    title: "Sự đa dạng của Ba Truyền Thống",
    number: "4",
    type: "chapter",
    keywords: ["Công giáo", "Chính thống", "Tin Lành", "so sánh", "đa dạng", "giáo hội", "nhánh"],
    snippet: "Phân tích sự khác biệt tinh tế giữa Công giáo, Chính thống và Tin Lành trong cách hiểu về nhân phẩm."
  },
  {
    id: "cong-giao",
    title: "Quan điểm Công giáo: CST và Subsidiarity",
    number: "4.1",
    type: "chapter",
    keywords: ["CST", "Tính bổ trợ", "Subsidiarity", "Giáo huấn Xã hội", "Rerum Novarum", "Liên đới", "tự do", "Nhân vị"],
    snippet: "Nguyên tắc Tính bổ trợ và quản trị xã hội trong Giáo huấn Xã hội Công giáo."
  },
  {
    id: "chinh-thong",
    title: "Quan điểm Chính thống giáo: Theosis",
    number: "4.2",
    type: "chapter",
    keywords: ["Theosis", "Thần hóa", "hiệp thông", "FLOW", "Bartholomew", "Byzantine", "phụng vụ", "ánh sáng"],
    snippet: "Hành trình Thần hóa (Theosis) và sự tham gia của con người vào sự sống vĩnh cửu."
  },
  {
    id: "tin-lanh",
    title: "Quan điểm Tin Lành: Ân sủng và Chủ quyền",
    number: "4.3",
    type: "chapter",
    keywords: ["Sola Gratia", "Ân sủng", "Chủ quyền từng vùng", "Sphere Sovereignty", "Kuyper", "Luther", "Calvin", "trách nhiệm"],
    snippet: "Sự phục hồi nhân phẩm qua ân sủng tuyệt đối và trách nhiệm trong các lĩnh vực đời sống."
  },
  {
    id: "lien-doi",
    title: "Nguyên tắc Liên đới và Lợi ích Chung",
    number: "5",
    type: "chapter",
    keywords: ["Liên đới", "Solidarity", "Lợi ích chung", "Common Good", "nghĩa vụ", "ưu tiên người nghèo"],
    snippet: "Phẩm giá con người dẫn đến trách nhiệm liên đới và xây dựng cộng đồng."
  },
  {
    id: "thach-thuc-ai",
    title: "Thách thức từ AI và Công nghệ",
    number: "6.1",
    type: "chapter",
    keywords: ["AI", "Trí tuệ nhân tạo", "thuật toán", "Algor-ethics", "Siêu nhân học", "Transhumanism", "tự trị", "máy móc"],
    snippet: "Đạo đức thuật toán và sự bảo vệ nhân vị trước sự bùng nổ của trí tuệ nhân tạo."
  },
  {
    id: "dao-duc-sinh-hoc",
    title: "Đạo đức Sinh học và Dignitas Infinita",
    number: "6.2",
    type: "chapter",
    keywords: ["Bioethics", "Dignitas Infinita", "mang thai hộ", "IVF", "phôi thai", "giới tính", "chuyển giới", "sự sống"],
    snippet: "Các vấn đề đạo đức sinh học hiện đại qua lăng kính thông điệp Phẩm giá Vô biên."
  },
  {
    id: "chien-tranh",
    title: "Chiến tranh, Bạo lực và Đói nghèo",
    number: "6.3",
    type: "chapter",
    keywords: ["Chiến tranh", "bạo lực", "hòa bình", "công lý", "đói nghèo", "vũ khí", "bạo lực cơ cấu"],
    snippet: "Sứ mạng kiến tạo hòa bình và chống lại sự tàn phá phẩm giá do xung đột."
  },
  {
    id: "viet-nam",
    title: "Bối cảnh Việt Nam và Đối thoại",
    number: "7.1",
    type: "chapter",
    keywords: ["Việt Nam", "đối thoại", "văn hóa", "tôn giáo", "Phật giáo", "Việt", "bản sắc", "hiện thực hóa"],
    snippet: "Thực thi phẩm giá con người trong môi trường đa nguyên văn hóa và xã hội Việt Nam."
  },
  {
    id: "da-dang-phuc-vu",
    title: "Sự đa dạng trong Phục vụ tại Việt Nam",
    number: "7.2",
    type: "chapter",
    keywords: ["phục vụ", "Việt Nam", "tình nguyện", "Caritas", "mái ấm", "giáo dục", "từ thiện", "xã hội"],
    snippet: "So sánh phương thức tham gia xã hội của Công giáo và Tin Lành tại Việt Nam."
  }
];
