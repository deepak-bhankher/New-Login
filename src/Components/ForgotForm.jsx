import { useState } from "react";

export default function ForgotForm({ setView }) {
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSend() {
  if (!contact.trim()) {
    setError("Please enter your email or phone.");
    setTimeout(() => setError(""), 2000);
    return;
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Phone check (10 digit)
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(contact) && !phoneRegex.test(contact)) {
    setError("Enter a valid email or 10-digit phone number.");
    setTimeout(() => setError(""), 2000);
    return;
  }

  setSuccess("OTP sent successfully!");
  setTimeout(() => setSuccess(""), 3000);
}

  return (
    <div className="w-full px-6 text-sm">
      <h2 className="sm:text-sm md:text-xs lg:text-xl  font-bold  mb-2">
        Forgot Password?
      </h2>
      <p className="text-gray-400 mb-3 text-xs">
        No worries, we'll help you reset your password.
      </p>

      <label className="block text-xs text-gray-300 mb-1">
        Phone Number / Email
      </label>
      <input
        type="text"
        placeholder="Enter your email or phone"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="w-full p-2 rounded-lg bg-[#1c1f26] border border-gray-700 focus:outline-none focus:border-green-500 transition-colors duration-200 text-xs text-white"
      />

      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      {success && <p className="text-green-400 text-xs mt-2">{success}</p>}

      <button
        onClick={handleSend}
        className="w-full mt-4 transition-all duration-500 hover:scale-105 cursor-pointer bg-green-500 hover:bg-green-600 py-2 rounded-lg font-bold text-xs"
      >
        SEND OTP
      </button>

      <p
        onClick={() => setView("login")}
        className="text-xs text-center mt-4 text-gray-400 cursor-pointer hover:text-white transition"
      >
        ← Back to Login
      </p>
    </div>
  );
}
