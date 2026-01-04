import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function LoginPage() {
  const [seePassword, setSeePassword] = useState(false);

  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <main className=" w-screen h-screen bg-blue-200 ">
      <button className="pt-2 pl-2" onClick={goToLandingPage}>
        <ArrowLeft />
      </button>
      <section className=" h-4/5 flex justify-center items-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className=" gap-4 grid items-center w-screen px-8"
        >
          <h1 className="text-center text-4xl font-semibold">Login</h1>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="hover:border-black border border-gray-600 rounded-lg pl-3 py-1"
          />
          <input
            type={seePassword ? "text" : "password"}
            name=""
            id=""
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="hover:border-black border border-gray-600 rounded-lg pl-3 py-1"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setSeePassword(!seePassword);
            }}
            className="-mt-4 text-right text-xs font-medium"
          >
            See Password
          </button>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="border p-1 text-xl mx-14 rounded-full"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
