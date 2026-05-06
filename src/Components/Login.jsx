import { useEffect, useState } from "react";
import LeftPanel from "./LeftPanel";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ForgotForm from "./ForgotForm";

export default function Login() {
  const [view, setView] = useState("login");
  const [greeting, setGreeting] = useState("");
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 4 && hour < 12) setGreeting("Good Morning");
      else if (hour < 15) setGreeting("Good Afternoon");
      else setGreeting("Good Evening");
    };
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const words = [greeting, "How are you"];
    const currentWord = words[loopIndex % words.length];
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
      if (!isDeleting && text === currentWord) setTimeout(() => setIsDeleting(true), 2000);
      else if (isDeleting && text === "") { setIsDeleting(false); setLoopIndex((p) => p + 1); }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, greeting, loopIndex]);

  return (
    <div className="h-screen w-full bg-[#f4f4f4] flex flex-col p-3 sm:p-5">

      {/* TOP */}
      <div className="flex justify-between items-center mb-3 sm:mb-4 shrink-0 gap-2">
        <h1 className="text-sm sm:text-xl lg:text-2xl font-semibold truncate max-w-[55%] sm:max-w-none">
          Hey,{" "}
          <span className="text-gray-500 font-normal">
            {text}<span className="animate-pulse">!</span>
          </span>
        </h1>
        <div className="bg-gray-200 rounded-full p-0.5 sm:p-1 flex shrink-0 gap-0.5 sm:gap-1">
          <button
            onClick={() => setView("login")}
            className={`flex items-center gap-1 cursor-pointer px-2 sm:px-4 py-1 sm:py-1.5 hover:bg-white duration-300 rounded-full text-[10px] sm:text-sm transition-all ${
              view === "login" ? "bg-white text-black shadow-sm" : "text-gray-500"
            }`}
          >
            {view === "login" && <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full" />}
            Login
          </button>
          <button
            onClick={() => setView("signup")}
            className={`flex items-center gap-1 cursor-pointer px-2 sm:px-4 py-1 sm:py-1.5 hover:bg-white duration-300 rounded-full text-[10px] sm:text-sm transition-all ${
              view === "signup" ? "bg-white text-black shadow-sm" : "text-gray-500"
            }`}
          >
            {view === "signup" && <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full" />}
            Sign Up
          </button>
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-5 flex-1">

        {/* LEFT */}
        <LeftPanel />

        {/* RIGHT */}
        <div className="flex-1 bg-[#0f1117] text-white p-4 sm:p-6 rounded-3xl shadow-xl w-full lg:max-w-md xl:max-w-lg overflow-y-auto flex items-center justify-center">
          {view === "login"  && <LoginForm  setView={setView} />}
          {view === "signup" && <SignupForm setView={setView} />}
          {view === "forgot" && <ForgotForm setView={setView} />}
        </div>

      </div>
    </div>
  );
}
