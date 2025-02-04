import { Login } from "@/features/auth/login-page/Login"
import { ChatPage } from "@/features/chat-ai-page/ChatPage"
import { DetailPage } from "@/features/detail-page/DetailPage"
import { HomePage } from "@/features/home-page/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trevo" element={<HomePage/>} />
        <Route path="/trevo/detail/:code" element={<DetailPage/>} />
        <Route path="/trevo/chat-ai" element={<ChatPage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}
