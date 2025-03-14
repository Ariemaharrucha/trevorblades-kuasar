import React from "react";
import ReactMarkdown from "react-markdown";

type ChatBubbleProps = {
  content: string;
  role: "user" | "assistant";
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({ content, role }) => {
  return (
    <div className={`flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[95%] md:max-w-[75%] p-3 border-none  ${
          role === "user" ? "bg-violet-500 text-white rounded-l-xl rounded-br-xl" : "rounded-r-xl rounded-bl-xl bg-gray-100 text-black"
        }`}
      >
        <p className={`font-semibold ${role === "user" ? "text-end" : "text-st"}`}>{role}</p>
        <ReactMarkdown className="overflow-auto p-1 text-balance">{content}</ReactMarkdown>
      </div>
    </div>
  );
};
