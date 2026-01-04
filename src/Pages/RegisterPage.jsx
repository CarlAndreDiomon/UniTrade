import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function RegisterPage() {
  const [seePassword, setSeePassword] = useState(false);

  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate("/");
  };

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (formData.password.length < 6)
      return toast.error("password must be at least 6 characters");

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      await signup(formData);
    }
  };

  return (
    <main className=" w-screen h-screen bg-blue-200 ">
      <button className="pt-2 pl-2" onClick={goToLandingPage}>
        <ArrowLeft />
      </button>
      <section className=" h-4/5 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className=" gap-4 grid items-center w-screen px-8"
        >
          <h1 className="text-center text-4xl font-semibold">Register</h1>
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
            type="text"
            name=""
            id=""
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            disabled={isSigningUp}
            className="border p-1 text-xl mx-14 rounded-full"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
}
