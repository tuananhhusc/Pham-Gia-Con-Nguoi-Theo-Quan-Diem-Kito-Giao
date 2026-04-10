export interface TocItem {
  id: string;
  number: string;
  title: string;
  level: 1 | 2;
}

export const tocItems: TocItem[] = [
  { id: "dan-nhap", number: "1", title: "Dẫn nhập và Bối cảnh Triết học", level: 1 },
  { id: "imago-dei", number: "2", title: "Nền tảng Hữu thể học: Imago Dei", level: 1 },
  { id: "nguon-goc", number: "2.1", title: "Nguồn gốc Thần linh và Sự Phủ nhận Hệ bậc Xã hội", level: 2 },
  { id: "da-giac", number: "2.2", title: "Các Đa giác Diễn giải Lịch sử", level: 2 },
  { id: "nhap-the", number: "3", title: "Mầu Nhiệm Nhập Thể và Cứu Độ", level: 1 },
  { id: "su-nhap-the", number: "3.1", title: "Sự Nhập Thể: Lời Khẳng Định Về Bản Tính Người", level: 2 },
  { id: "phuc-hoi", number: "3.2", title: "Sự Phục Hồi Hình Ảnh Bị Biến Dạng", level: 2 },
  { id: "da-dang", number: "4", title: "Sự Đa Dạng Thần Học: Ba Truyền Thống Lớn", level: 1 },
  { id: "cong-giao", number: "4.1", title: "Công Giáo: Ân Sủng và Giáo Huấn Xã Hội", level: 2 },
  { id: "chinh-thong", number: "4.2", title: "Chính Thống Giáo: Theosis và Hiệp Thông", level: 2 },
  { id: "tin-lanh", number: "4.3", title: "Tin Lành: Ân Sủng và Chủ Quyền Từng Vùng", level: 2 },
  { id: "lien-doi", number: "5", title: "Nguyên Tắc Liên Đới và Lợi Ích Chung", level: 1 },
  { id: "thach-thuc", number: "6", title: "Thách Thức Đương Đại", level: 1 },
  { id: "ai-transhumanism", number: "6.1", title: "Trí Tuệ Nhân Tạo và Chủ Nghĩa Siêu Nhân Học", level: 2 },
  { id: "dao-duc-sinh-hoc", number: "6.2", title: "Đạo Đức Sinh Học", level: 2 },
  { id: "chien-tranh", number: "6.3", title: "Chiến Tranh, Bạo Lực và Đói Nghèo", level: 2 },
  { id: "viet-nam", number: "7", title: "Bối Cảnh tại Việt Nam", level: 1 },
  { id: "di-san", number: "7.1", title: "Di sản Lịch Sử và Thích Ứng", level: 2 },
  { id: "da-dang-vn", number: "7.2", title: "Đa Dạng Tiếp Cận Phục Vụ", level: 2 },
  { id: "ket-luan", number: "8", title: "Kết Luận", level: 1 },
  { id: "nguon-trich-dan", number: "", title: "Nguồn trích dẫn", level: 1 },
];
