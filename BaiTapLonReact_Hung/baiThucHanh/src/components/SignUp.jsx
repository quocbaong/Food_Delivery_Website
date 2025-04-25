import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp. Vui lòng kiểm tra lại.");
      return;
    }
    alert(`Tạo tài khoản cho: ${name}\nEmail: ${email}\nSĐT: ${phone}\nĐịa chỉ: ${address}`);
    navigate("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Đăng ký</h2>

        <input
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />

        <input
          type="tel"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-lg"
          required
        />

        <textarea
          placeholder="Địa chỉ nhận hàng"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 mb-4 border rounded text-lg"
          rows={3}
          required
        ></textarea>

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 text-lg">
          Đăng ký
        </button>

        <p className="text-lg mt-4 text-center">
          Đã có tài khoản?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;