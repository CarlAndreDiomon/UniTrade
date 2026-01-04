import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import LandingPage from "./Pages/LandingPage";
import ChatPage from "./Pages/ChatPage";
import Navbar from "./Components/UI/Navbar";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Loader } from "lucide-react";

export default function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  return (
    <main>
      <nav className={` ${authUser ? "block" : "hidden"} `}>
        <Navbar />
      </nav>
      <section>
        <Routes>
          <Route
            path="/"
            element={!authUser ? <LandingPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={authUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!authUser ? <LoginPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/register"
            element={!authUser ? <RegisterPage /> : <Navigate to="/home" />}
          />
          <Route
            path="/chats"
            element={authUser ? <ChatPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </section>
      <Toaster />
    </main>
  );
}
