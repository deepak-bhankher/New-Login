import { useState } from "react";

export default function SignupForm({ setView }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSignup() {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please enter all fields.");
      setTimeout(() => setError(""), 1000);
      return;
    }
    setSuccess("Account created successfully.");
    setTimeout(() => setSuccess(""), 3000);
  }

  return (
    <div className="w-full px-6 text-sm">

      <h2 className="sm:text-sm md:text-xs lg:text-xl  font-bold  mb-1">Create Account</h2>
      <p className="text-gray-400 mb-3 text-xs">Join FranchiseEats and manage your business.</p>

      <label className="block text-xs text-gray-300 mb-1">Full Name</label>
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
        className="w-full mb-2 p-2 rounded-lg bg-[#1c1f26] border border-gray-700 focus:outline-none focus:border-green-500 transition-colors duration-200 text-xs text-white" />

      <label className="block text-xs text-gray-300 mb-1">Email Address</label>
      <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-2 p-2 rounded-lg bg-[#1c1f26] border border-gray-700 focus:outline-none focus:border-green-500 transition-colors duration-200 text-xs text-white" />

      <label className="block text-xs text-gray-300 mb-1">Password</label>
      <input type="password" placeholder="Min 8 Characters" value={password} onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 rounded-lg bg-[#1c1f26] border border-gray-700 focus:outline-none focus:border-green-500 transition-colors duration-200 text-xs text-white" />

      {error   && <p className="text-red-400 text-xs mb-2">{error}</p>}
      {success && <p className="text-green-400 text-xs mb-2">{success}</p>}

      <button onClick={handleSignup} className="w-full bg-green-500 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-green-600 py-2 rounded-lg font-bold text-xs">
        SIGN UP
      </button>

      <p className="text-xs text-center mt-3 text-gray-400">
        Already have an account?{" "}
        <span onClick={() => setView("login")} className="text-green-400 cursor-pointer">LOGIN</span>
      </p>

    </div>
  );
}
