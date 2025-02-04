import useCountry, { IOptionsCountry } from "@/store/useStore";
import { useRef, useState } from "react";
import { getInfoCountry } from "../api/api";
import { IMesssages } from "@/types/messages";

export const useChatPage = () => {
    const { countries } = useCountry();
    const [selectedCountry, setSelectedCountry] = useState<IOptionsCountry | null>(null);
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<IMesssages[]>([]);
    const [loading, setLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);
  
    const sendToAi = async (inputUser: string) => {
      if (!inputUser.trim() || !selectedCountry) return;
  
      const updatedMessages: IMesssages[] = [
        ...messages,
        { content: inputUser, role: "user" },
      ];
      setMessages(updatedMessages);
      try {
        setLoading(true);
        const aiResponse = await getInfoCountry(
          updatedMessages,
          selectedCountry?.value ?? ""
        );
        setMessages((prev) => [
          ...prev,
          { content: aiResponse as string, role: "assistant" },
        ]);
        setInput("");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    const scrollToTop = () => {
      chatContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    const scrollToBottom = () => {
      chatContainerRef.current?.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    };
  return {countries, selectedCountry, setSelectedCountry, messages, input, setInput, loading, sendToAi, scrollToTop, scrollToBottom, chatContainerRef}
}
