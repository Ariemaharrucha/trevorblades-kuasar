import React from "react";
import ReactMarkdown from "react-markdown";

type ChatBubbleProps = {
  content: string;
  role: string;
  isUser: boolean;
};

export const ChatBubble: React.FC<ChatBubbleProps> = ({ content, role, isUser }) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] p-3 border rounded-xl ${
          isUser ? "bg-violet-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p className="font-semibold">{role}</p>
        <ReactMarkdown className="overflow-auto p-1 text-balance">{content}</ReactMarkdown>
      </div>
    </div>
  );
};
