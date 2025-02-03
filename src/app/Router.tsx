import { DetailPage } from "@/features/detail-page/DetailPage"
import { HomePage } from "@/features/home-page/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail/:code" element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}
