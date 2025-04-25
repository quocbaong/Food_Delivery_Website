import { useParams, Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { ArrowLeft, ShoppingCart, User, DollarSign, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

function DishDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [dish, setDish] = useState(null);
  const [notification, setNotification] = useState(""); // State để quản lý thông báo

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await fetch('/dishes.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const dishes = await response.json();
        const foundDish = dishes.find((d) => d.id === Number(id));
        setDish(foundDish);
      } catch (error) {
        console.error("Error fetching the dish:", error);
      }
    };

    fetchDish();
  }, [id]);

  const handleAddToCart = (dish) => {
    addToCart(dish);
    setNotification(`Đã thêm "${dish.name}" vào giỏ hàng!`); // Hiển thị thông báo
    setTimeout(() => setNotification(""), 3000); // Ẩn thông báo sau 3 giây
  };

  if (!dish) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Món ăn không tồn tại!!!</h2>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 flex items-center justify-center transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" /> Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative group">
            <div className="h-[600px] overflow-hidden">
              <img
                src={`/assets/${dish.image}`}
                alt={dish.name}
                className="w-full h-full object-contain bg-gray-50 transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          <div className="p-8 md:p-12 md:w-1/2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{dish.name}</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <User className="w-5 h-5 mr-2" />
                  <span className="font-medium">Quán:</span>
                  <span className="ml-2">{dish.restaurant}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Địa chỉ:</span>
                  <span className="ml-2">{dish.address}</span>
                </div>
                <div className="flex items-center text-yellow-500">
                  <span className="font-medium">Đánh giá:</span>
                  <span className="ml-2">{dish.stars} ⭐</span>
                </div>
                <div className="flex items-center text-red-600">
                  <DollarSign className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">{dish.price.toLocaleString()} VNĐ</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start mb-4">
                <BookOpen className="w-5 h-5 mr-2 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mô tả</h3>
                  <p className="text-gray-600 leading-relaxed">{dish.description}</p>
                </div>
              </div>
            </div>

            {/* Hiển thị thông báo nếu có */}
            {notification && (
              <div className="mb-4 p-4 text-green-700 bg-green-100 rounded">
                {notification}
              </div>
            )}

            <div className="space-y-4">
              <button
                onClick={() => handleAddToCart(dish)}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 
                         transform transition-all duration-300 hover:shadow-lg 
                         flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Thêm vào giỏ hàng</span>
              </button>
              
              <Link
                to="/"
                className="block w-full text-center py-4 text-blue-600 hover:text-blue-800 
                         border-2 border-blue-600 rounded-xl font-medium
                         transition-all duration-300 hover:bg-blue-50
                         flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Quay lại trang chủ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;