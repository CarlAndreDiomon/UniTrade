import { MessageCircleIcon, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <main>
      <nav className="px-5 w-full h-16 items-center flex justify-between bg-sky-300 fixed ">
        <h1
          className=" text-xl font-semibold text-white "
          onClick={goToHomePage}
        >
          UniTrade
        </h1>
        <ul className=" flex gap-5">
          <li>
            <a href="/Chats">
              <MessageCircleIcon className=" text-white w-8 h-8" />
            </a>
          </li>
          <li>
            <a href="/profile">
              <UserCircle2 className=" text-white w-8 h-8" />
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
