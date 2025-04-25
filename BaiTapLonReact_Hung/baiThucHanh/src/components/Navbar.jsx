import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
<Link to="/" className="flex items-center text-2xl font-bold text-blue-600 tracking-wide hover:opacity-80 transition">
  <img src="../assets/logo.jpg" alt="Logo" className="mr-2 h-8 w-8" /> {/* Thay 'path/to/logo.png' bằng đường dẫn đến logo của bạn */}
  Food Rangers
</Link>

      {/* Menu phải: Đăng nhập, Đăng ký, Giỏ hàng */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        {/* Đăng nhập */}
        <Link to="/signin" className="hover:text-blue-600 transition">
          Đăng nhập
        </Link>

        {/* Đăng ký */}
        <Link to="/signup" className="hover:text-blue-600 transition">
          Đăng ký
        </Link>

        {/* Giỏ hàng */}
        <div className="relative">
          <Link to="/cart" className="flex items-center gap-2 hover:text-blue-600 transition">
            <ShoppingCart size={24} />
            <span>Giỏ hàng</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
