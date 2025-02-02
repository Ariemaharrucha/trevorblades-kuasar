import { Navbar } from "@/components/shared/Navbar"
import { CardCountry } from "./components/CardCountry"

export const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto border-2 min-h-screen">
        <div className="mt-2 mx-2  grid grid-cols-4 gap-4">
          <CardCountry></CardCountry>
        </div>
      </div>
    </div>
  )
}
