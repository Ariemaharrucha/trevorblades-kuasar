import { Login } from "@/features/auth/login-page/Login"
import { ChatPage } from "@/features/chat-ai-page/ChatPage"
import { DetailPage } from "@/features/detail-page/DetailPage"
import { HomePage } from "@/features/home-page/HomePage"
import { ProfilePage } from "@/features/profile-page/ProfilePage"
import { AuthMiddleware } from "@/middleware/AuthMiddleware"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />

        <Route element={<AuthMiddleware/>}>
          <Route path="/" element={<Navigate to="/trevo" replace />} /> 
          <Route path="/trevo" element={<HomePage/>} />
          <Route path="/trevo/detail/:code" element={<DetailPage/>} />
          <Route path="/trevo/chat-ai" element={<ChatPage/>} />
          <Route path="/trevo/profile" element={<ProfilePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
