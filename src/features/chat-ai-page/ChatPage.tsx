import { Navbar } from "@/components/shared/Navbar";
import useCountry, { IOptionsCountry } from "@/store/useStore";
import { useState } from "react";
import Select from "react-select";
import { ChatBubble } from "./components/ChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export const ChatPage = () => {
  const { countries } = useCountry();
  const [selectedCountry, setSelectedCountry] =
    useState<IOptionsCountry | null>(null);
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
        <div className="flex-grow overflow-y-auto p-4 space-y-4 rounded-lg">
          <ChatBubble role="user" content="Hello! How can I get a visa?" />
          <ChatBubble
            role="assistant"
            content="You can apply for a visa at the embassy."
          />
          <ChatBubble role="user" content="What are the requirements?" />
        </div>

        <div className="mt-auto space-y-2 bg-white pt-4">
          {/* Recommendation Buttons */}
          <div className="flex gap-2">
            <Button className="w-full bg-violet-500 hover:bg-violet-600 text-base font-semibold">
              Get Travel Recommendation for
            </Button>
            <Button className="w-full bg-violet-500 hover:bg-violet-600 text-base font-semibold">
              Translate country information for
            </Button>
          </div>

          {/* Input & Send Button */}
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Ask anything..."
              className="border border-gray-300 flex-grow p-2 rounded-lg"
            />
            <Button className="p-3 bg-violet-500 hover:bg-violet-600">
              <Send />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
