import {
  LogOutIcon,
  MessageCircleIcon,
  UserCircle2,
  HelpCircle,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

export default function Navbar() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  const { logout } = useAuthStore();
  return (
    <main>
      <nav className="px-5 w-full h-16 items-center flex justify-between bg-sky-300 fixed top-0 z-40">
        <h1
          className=" text-xl font-semibold text-white "
          onClick={goToHomePage}
        >
          UniTrade
        </h1>
        <ul className=" flex gap-5">
          <li>
            <Link to="/about">
              <HelpCircle className=" text-white w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <UserCircle2 className=" text-white w-8 h-8" />
            </Link>
          </li>
          <li>
            <button onClick={logout}>
              <LogOutIcon className=" text-white w-8 h-8" />
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
}
