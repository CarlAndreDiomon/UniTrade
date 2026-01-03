import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import LandingPage from "./Pages/LandingPage";
import ChatPage from "./Pages/ChatPage";
import Navbar from "./Components/UI/Navbar";

export default function App() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </main>
  );
}
