import { Navbar } from "@/components/shared/Navbar";
import useCountry, { IOptionsCountry } from "@/store/useStore";
import { useState } from "react";
import Select from "react-select";
import { ChatBubble } from "./components/ChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveUpIcon, Send } from "lucide-react";
import { getInfoCountry } from "./api/api";
import { IMesssages } from "@/types/messages";

export const ChatPage = () => {
  const { countries } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState<IOptionsCountry | null>(null);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<IMesssages[]>([]);
  const [loading, setLoading] = useState(false);

  const sendToAi = async (inputUser: string) => {
    if (!inputUser.trim() || !selectedCountry) return;

    const updatedMessages: IMesssages[] = [
      ...messages,
      { content: inputUser, role: "user" }
    ];
    setMessages(updatedMessages); 
    try {
      setLoading(true);
      const aiResponse = await getInfoCountry(updatedMessages, selectedCountry?.value ?? "");      
      setMessages((prev) => [
        ...prev,
        { content: aiResponse as string, role: "assistant" },
      ]);
      setInput('')
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen">
      <Navbar />
      <section className="max-w-4xl mx-auto p-6 bg-white border flex flex-col h-full ">
        <Select
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Select a country"
          className="mb-3"
        />
        {/* chat */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 rounded-lg relative bg-red-400">
          {messages.map((msg, index) => (
            <ChatBubble key={index} role={msg.role} content={msg.content} />
          ))}
          {loading && <ChatBubble role="assistant" content="AI is typing.."/>}
          <Button size={'icon'} className="bg-violet-500 absolute bottom-0 right-0"><MoveUpIcon size={25}/></Button>
        </div>

        <div className="mt-auto space-y-2 bg-white pt-4">
          {/* Recommendation Buttons */}
          <div className="flex gap-2">
            <button className="w-full bg-violet-500 hover:bg-violet-600 md:text-base font-semibold text-wrap py-3 rounded-lg text-white " onClick={() => sendToAi(`Get Travel Recommendation for ${selectedCountry?.value}`)} disabled={!selectedCountry}>
              Get Travel Recommendation for {selectedCountry?.value}
            </button>
            <button className="w-full bg-violet-500 hover:bg-violet-600 md:text-base font-semibold text-wrap py-3 rounded-lg text-white" onClick={() => sendToAi(`Translate country information for ${selectedCountry?.value}`)} disabled={!selectedCountry}>
              Translate country information for {selectedCountry?.value}
            </button>
          </div>

          {/* Input & Send Button */}
          <div className="flex gap-4 items-center">
            <Input
              placeholder={`Ask anything in ${selectedCountry?.value}`}
              className="border border-gray-300 flex-grow  rounded-md mt-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <Button className="px-8 bg-violet-500 mt-2 hover:bg-violet-600 " onClick={()=> sendToAi(input)}>
              <Send />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
