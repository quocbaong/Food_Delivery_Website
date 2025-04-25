import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa"; 
import { BiStar } from "react-icons/bi"; 
import { useCart } from "../components/CartContext"; 
import { useEffect, useState } from "react";

function Home() {
  const { addToCart } = useCart();
  const [dishes, setDishes] = useState([]); 
  const [loading, setLoading] = useState(true); 

  const handleAddToCart = (dish) => {
    addToCart(dish);
    alert(`Đã thêm "${dish.name}" vào giỏ hàng!`);
  };

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('/dishes.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.error("Error fetching the dishes:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDishes();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl">Loading...</div>; 
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <img 
            src={`/assets/${dish.image}`} 
            alt={dish.name} 
            className="w-full h-60 object-cover" 
            style={{ objectFit: 'cover' }} 
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{dish.name}</h2>
            <p className="text-gray-600 text-sm mb-1">Quán: {dish.restaurant}</p>
            <p className="text-gray-600 text-sm mb-1">Địa chỉ: {dish.address}</p>
            <div className="flex items-center mb-3">
              <span className="text-red-500 font-semibold">Giá: {dish.price.toLocaleString()} VNĐ</span>
            </div>
            <div className="flex items-center mb-2">
              <BiStar className="text-yellow-500 mr-1" />
              <span className="text-gray-600 font-semibold">{dish.stars.toFixed(1)}</span>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleAddToCart(dish)}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow"
              >
                <FaCartPlus className="text-white" />
                Thêm vào giỏ hàng
              </button>
              <div className="flex items-center gap-2"> {/* Sử dụng gap-2 để tạo khoảng cách giữa hai nút */}
                <Link to={`/dishes/${dish.id}`} className="text-blue-500 hover:text-blue-700">
                  Xem chi tiết
                </Link>
                <button className="flex items-center gap-1">
                  <FaHeart className={`mr-1 ${dish.favorite ? "text-red-600" : "text-gray-600"}`} />
                  <span className={dish.favorite ? "text-red-600" : "text-gray-600"}>
                    {dish.favorite ? "Yêu thích" : "Thêm yêu thích"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;