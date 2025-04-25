import { useState } from "react";
import { useCart } from "../components/CartContext";
import { CheckCircle, AlertTriangle } from "lucide-react";

function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    if (cart.length === 0) {
      setMessage("empty");
      console.log("Giỏ hàng đang trống!");
    } else {
      clearCart(); // Xóa giỏ hàng
      setMessage("success"); // Thay đổi trạng thái thông báo
      console.log("Đơn hàng đã được thanh toán và giỏ hàng đã được xóa!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">🛒 Giỏ hàng của bạn</h2>

      {message === "empty" && (
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-4 flex items-center gap-2 shadow">
          <AlertTriangle className="w-5 h-5" />
          <span>⚠ Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán!</span>
        </div>
      )}

      {message === "success" && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4 flex items-center gap-2 shadow">
          <CheckCircle className="w-5 h-5" />
          <span>🎉 Cảm ơn bạn đã mua hàng! Đơn hàng của bạn đang được xử lý.</span>
        </div>
      )}

      {cart.length === 0 ? (
        <p className="text-gray-500 italic">Chưa có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image.startsWith("http") ? item.image : `/assets/${item.image}`}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg border"
                onError={(e) => (e.target.src = "/assets/default.jpg")}
              />
              <div className="flex-1 ml-4">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">Quán: {item.restaurant}</p>
                <p className="text-sm text-gray-500">Địa chỉ: {item.address}</p>
                <p className="text-sm text-gray-700 mt-1">Giá: {item.price.toLocaleString()} VNĐ</p>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  <span className="text-gray-600 font-semibold">{item.stars.toFixed(1)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    decreaseQuantity(item.id);
                    if (item.quantity === 1) {
                      alert("Sản phẩm đã được xóa khỏi giỏ hàng");
                    }
                  }}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                >
                  −
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                  alert(`Đã xóa ${item.name} khỏi giỏ hàng`);
                }}
                className="ml-6 text-red-600 hover:text-red-800 font-semibold"
              >
                Xóa
              </button>
            </div>
          ))}

          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md text-right">
            <h3 className="text-xl font-bold mb-2">💰 Tổng tiền: <span className="text-green-600">{totalPrice.toLocaleString()} VNĐ</span></h3>
            <button
              onClick={handleCheckout}
              className="mt-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              ✅ Thanh toán ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;