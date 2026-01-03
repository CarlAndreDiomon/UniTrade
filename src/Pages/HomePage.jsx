import { MessageCircleIcon, UserCircle2 } from "lucide-react";
import uniform from "../assets/image.png";
import Chat from "../Components/UI/Chat";

export default function HomePage() {
  return (
    <main className="w-screen h-full bg-gray-100">
      <section className="p-4 grid gap-5 pt-20">
        <article className=" rounded-xl h-full bg-gray-200 p-2 gap-3 flex flex-col">
          <div className="flex gap-2">
            <UserCircle2 className="w-10 h-10" />
            <div className="">
              <h1 className="font-medium">Carl Andre R. Diomon</h1>
              <p className="text-xs font-light">10:00pm </p>
            </div>
          </div>
          <p>For sale 150</p>
          <img
            src={uniform}
            alt="img"
            width={500}
            height={300}
            className="border rounded-2xl"
          />
          <button className="border rounded-lg text-xl p-1 hover:bg-black hover:text-white transition-all duration-150">
            Inquire
          </button>
        </article>
        <article className=" rounded-xl h-full bg-gray-200 p-2 gap-3 flex flex-col">
          <div className="flex gap-2">
            <UserCircle2 className="w-10 h-10" />
            <div className="">
              <h1 className="font-medium">Carl Andre R. Diomon</h1>
              <p className="text-xs font-light">10:00pm </p>
            </div>
          </div>
          <p>For sale 150</p>
          <img
            src={uniform}
            alt="img"
            width={500}
            height={300}
            className="border rounded-2xl"
          />
          <button className="border rounded-lg text-xl p-1  hover:bg-black hover:text-white transition-all duration-150">
            Inquire
          </button>
        </article>
      </section>
    </main>
  );
}
