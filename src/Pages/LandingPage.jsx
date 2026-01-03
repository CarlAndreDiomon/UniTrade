import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };
  return (
    <main className="flex flex-col justify-center gap-40 items-center w-screen h-screen">
      <nav className="justify-center items-center flex flex-col">
        <img
          src={logo}
          alt="logo"
          width={1000}
          height={1000}
          className="w-40 h-40"
        />
        <h1 className="text-lg font-light">
          University Used Uniform Selling Platform
        </h1>
      </nav>
      <section className=" flex gap-2">
        <button
          onClick={goToRegisterPage}
          className="w-40 border rounded-lg p-1 bg-sky-300 hover:bg-sky-600 transition-all duration-200"
        >
          New User
        </button>
        <button
          onClick={goToLoginPage}
          className="w-40 border rounded-lg p-1 hover:bg-black hover:text-white transition-all duration-200 "
        >
          Existing User
        </button>
      </section>
    </main>
  );
}
