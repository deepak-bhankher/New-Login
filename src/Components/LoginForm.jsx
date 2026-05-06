import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { HiMiniEyeSlash } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

export default function LoginForm({ setView }) {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      setError("Please enter all fields.");
      setTimeout(() => setError(""), 1000);
      return;
    }
    setSuccess("Login successful! Welcome back.");
    setTimeout(() => setSuccess(""), 3000);
  }

  return (
    <div className="w-full px-6">

      <h2 className="  sm:text-sm md:text-xs lg:text-xl  font-bold  ">Welcome Back!</h2>
      <p className="text-gray-400 mb-2 text-xs  sm:text-sm ">Enter your credentials to access your account.</p>
      <div >
        <button className="w-full flex items-center cursor-pointer transition-all duration-500 hover:scale-105 justify-center gap-2 bg-white text-black py-2 rounded-lg mb-2 text-xs font-medium">
          <FcGoogle size={16} /> Login With Google
        </button>

        <button className="w-full flex items-center cursor-pointer transition-all duration-500 hover:scale-105 justify-center gap-2 bg-[#1c1f26] hover:bg-[#373b42] py-2 rounded-lg mb-3 text-xs font-medium">
          <FaApple size={14} /> Login With Apple
        </button>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-500 text-[10px]">OR</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <label className="block text-xs text-gray-300 mb-1">Email Address / Phone Number</label>
        <div className="relative mb-2">
          <input
            type="text"
            placeholder="franchiseeats@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 pr-8 rounded-lg bg-[#1c1f26] border border-gray-700 focus:outline-none focus:border-green-500 transition-colors duration-200 text-xs text-white"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs"><MdEmail /></span>
        </div>

        <div className="flex justify-between items-center mb-1">
          <label className="text-xs text-gray-300">Password</label>
          <span onClick={() => setView("forgot")} className="text-gray-400 text-[10px] hover:text-white cursor-pointer">
            Forgot Password?
          </span>
        </div>
        <div className="relative mb-2">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Min 8 Characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pr-8 rounded-lg bg-[#1c1f26] border border-gray-700 focus:outline-none focus:border-green-500 transition-colors duration-200 text-xs text-white"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs cursor-pointer" onClick={() => setShowPass(!showPass)}>
            {showPass ? <IoEyeSharp /> : <HiMiniEyeSlash />}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-3 text-[10px] text-gray-400">
          <input type="checkbox" className="accent-green-500 w-3 cursor-pointer h-3" />
          Remember Login
        </div>

        {error   && <p className="text-red-400 text-xs mb-2">{error}</p>}
        {success && <p className="text-green-400 text-xs mb-2">{success}</p>}

        <button onClick={handleLogin} className="w-full bg-green-500 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-green-600 py-2 rounded-lg font-bold text-xs">
          LOGIN
        </button>

        <p className="text-xs text-center mt-3 text-gray-400">
          Don't have an account?{" "}
          <span onClick={() => setView("signup")} className="text-green-400 cursor-pointer">SIGN UP</span>
        </p>
      </div>

    </div>
  );
}
