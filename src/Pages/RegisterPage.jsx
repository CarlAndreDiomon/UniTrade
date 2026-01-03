import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [seePassword, setSeePassword] = useState(false);

  const navigate = useNavigate();

  const goToLandingPage = () => {
    navigate("/landing");
  };
  return (
    <main className=" w-screen h-screen bg-blue-200 ">
      <button className="pt-2 pl-2" onClick={goToLandingPage}>
        <ArrowLeft />
      </button>
      <section className=" h-4/5 flex justify-center items-center">
        <form action="" className=" gap-4 grid items-center w-screen px-8">
          <h1 className="text-center text-4xl font-semibold">Register</h1>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
            className="hover:border-black border border-gray-600 rounded-lg pl-3 py-1"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            required
            className="hover:border-black border border-gray-600 rounded-lg pl-3 py-1"
          />
          <input
            type={seePassword ? "text" : "password"}
            name=""
            id=""
            placeholder="Password"
            required
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
            className="border p-1 text-xl mx-14 rounded-full"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
}
