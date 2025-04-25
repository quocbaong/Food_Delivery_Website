import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Logo + Links */}
        <div className="col-span-1">
  <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
    <img src="../assets/logo.jpg" alt="Logo" className="mr-2 h-8 w-8" /> {/* Thay 'path/to/logo.png' bằng đường dẫn đến logo của bạn */}
    Food Rangers
  </h2>
  <ul className="space-y-2">
    <li><a href="#" className="hover:underline">Về Food Rangers</a></li>
    <li><a href="#" className="hover:underline">Tin tức</a></li>
    <li><a href="#" className="hover:underline">Đăng ký làm nhà hàng</a></li>
    <li><a href="#" className="hover:underline">Trở thành tài xế Food Rangers</a></li>
  </ul>
</div>

        {/* Thông tin liên hệ */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Liên hệ</h3>
          <p>Hotline: <strong>1900 232 345</strong></p>
          <p>Email: <a href="mailto:hotro@be.com.vn" className="text-blue-600 hover:underline">hotro@be.com.vn</a></p>
          <p><a href="#" className="hover:underline">Câu hỏi thường gặp</a></p>
        </div>

        {/* Mạng xã hội */}
        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Kết nối với chúng tôi</h3>
          <div className="flex space-x-4 text-xl text-blue-600">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Mã QR */}
        <div className="col-span-1 text-center">
          <img src="../assets/QR.png" alt="QR code" className="mx-auto h-24 mb-2" />
          <p className="text-sm">Quét mã này để tải ứng dụng</p>
        </div>
      </div>

      {/* Thông tin công ty */}
      <div className="border-t border-gray-200 pt-4 pb-8 px-6 text-xs text-gray-500 max-w-7xl mx-auto">
        <p><strong>CÔNG TY CỔ PHẦN BE GROUP</strong></p>
        <p>Giấy chứng nhận ĐKDN: 0108269207. Cấp lần đầu: 11/5/2018. Cơ quan cấp: Sở KHĐT Hà Nội.</p>
        <p>Thay đổi lần 9: 08/09/2021. Cơ quan cấp: Sở KHĐT TP.HCM.</p>
        <p>Địa chỉ: Tầng 16, Saigon Tower, 29 Lê Duẩn, P. Bến Nghé, Q.1, TP.HCM, Việt Nam.</p>
        <p>Đại diện: Bà Vũ Hoàng Yến - Tổng Giám Đốc.</p>

        {/* Biểu tượng Bộ Công Thương */}
        <div className="flex space-x-4 mt-4">
          <img src="../assets/tb.png" alt="Thông báo bộ công thương" className="h-6" />
          <img src="../assets/dk.png" alt="Đã đăng ký bộ công thương" className="h-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
