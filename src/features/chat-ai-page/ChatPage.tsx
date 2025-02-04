import { Navbar } from "@/components/shared/Navbar";
import Select from "react-select";
import { ChatBubble } from "./components/ChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoveDownIcon, MoveUpIcon, Send } from "lucide-react";
import { ActionButton } from "./components/ActionButton";
import { useChatPage } from "./hooks/useChatPage";

export const ChatPage = () => {
  const {countries, selectedCountry, setSelectedCountry, input, setInput, loading, messages, sendToAi, scrollToTop, scrollToBottom, chatContainerRef} = useChatPage();

  return (
    <div className="h-screen">
      <div>
      <Navbar />
      </div>
      <section className="max-w-4xl mx-auto p-6 bg-white border flex flex-col h-full ">
        <Select
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Select a country"
          className="mb-3"
        />
        {/* chat */}
        <div
          className="flex-grow overflow-y-auto p-4 space-y-4 rounded-lg"
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => (
            <ChatBubble key={index} role={msg.role} content={msg.content} />
          ))}
          {loading && <ChatBubble role="assistant" content="AI is typing.." />}
          <div></div>
        </div>

        <div className="mt-auto space-y-2 bg-white pt-4">
          {/* Recommendation Buttons */}
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-grow flex gap-2">
              <ActionButton
                label={`Get Travel Recommendation for ${selectedCountry?.value ?? "a selected country"}`}
                onClick={() =>
                  sendToAi(
                    `Get Travel Recommendation for ${selectedCountry?.value}`
                  )
                }
                disabled={!selectedCountry}
              />
              <ActionButton
                label={`Translate country information for ${selectedCountry?.value ?? "a selected country"}`}
                onClick={() =>
                  sendToAi(
                    `Translate country information for ${selectedCountry?.value}`
                  )
                }
                disabled={!selectedCountry}
              />
            </div>
            <div className="flex flex-row md:flex-col gap-1">
              <Button
                size={"icon"}
                className="bg-violet-500 hover:bg-violet-600 w-full h-10 md:w-10"
                onClick={scrollToTop}
              >
                <MoveUpIcon size={25} />
              </Button>
              <Button
                size={"icon"}
                className="bg-violet-500 hover:bg-violet-600 w-full h-10 md:w-10"
                onClick={scrollToBottom}
              >
                <MoveDownIcon size={25} />
              </Button>
            </div>
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
            <Button
              className="px-8 bg-violet-500 mt-2 hover:bg-violet-600 "
              onClick={() => sendToAi(input)}
            >
              <Send />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
