import {
  ArrowLeftIcon,
  UserCircle2Icon,
  SendHorizontalIcon,
} from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! How can I help you today?", sender: "bot" },
    { id: 2, text: "I'm looking for some project advice.", sender: "user" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <main>
      {/* Trigger Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition-colors"
        >
          <UserCircle2Icon className="text-white w-8 h-8" />
        </button>
      )}

      {isChatOpen && (
        <section className="fixed inset-0 bg-gray-50 z-50 flex flex-col">
          <nav className="bg-sky-500 text-white h-16 px-4 flex items-center gap-4 shadow-md">
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-sky-600 p-1 rounded-full"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <UserCircle2Icon className="text-sky-500 w-8 h-8" />
              </div>
              <h1 className="text-lg font-semibold">Carl Andre R. Diomon</h1>
            </div>
          </nav>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-sky-500 text-white rounded-tr-none"
                      : "bg-white text-gray-800 shadow-sm rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            className="p-4 bg-white border-t flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-transform active:scale-95"
            >
              <SendHorizontalIcon className="w-5 h-5" />
            </button>
          </form>
        </section>
      )}
    </main>
  );
}
