import Chat from "../Components/UI/Chat";

export default function ChatPage() {
  return (
    <main className=" w-screen h-screen bg-gray-100">
      <section className="p-4 grid gap-5 pt-20">
        <article className="rounded-xl h-full bg-gray-200 p-2 flex flex-col">
          <div className="flex gap-2">
            <Chat />
            <h1 className="font-bold">Carl Andre R. Diomon</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-sm font-semibold pl-8">Hi po!!</h1>
            <p className="text-xs font-semibold">10:00pm</p>
          </div>
        </article>

        <article className="rounded-xl h-full bg-gray-200 p-2 flex flex-col">
          <div className="flex gap-2">
            <Chat />
            <h1 className="font-bold">Carl Andre R. Diomon</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-sm font-light pl-8">Hi po!!</h1>
            <p className="text-xs font-light">10:00pm</p>
          </div>
        </article>

        <article className="rounded-xl h-full bg-gray-200 p-2 flex flex-col">
          <div className="flex gap-2">
            <Chat />
            <h1 className="font-bold">Carl Andre R. Diomon</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-sm font-light pl-8">Hi po!!</h1>
            <p className="text-xs font-light">10:00pm</p>
          </div>
        </article>
      </section>
    </main>
  );
}
