import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const CardCountry = () => {
  return (
    <Card className="col-span-1 border-violet-400 border-4">
      <CardHeader>
        <CardTitle className="text-4xl">🇦🇺 Australia</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-lg">
        <p><span className="font-semibold">Capital :</span> Canberra</p>
        <p><span className="font-semibold">Currency :</span> AUD</p>
      </CardContent>
      <CardFooter className="">
        <Button size={'lg'} className="w-full border-none block   bg-violet-500 hover:bg-violet-600 text-white font-semibold text-lg ">Detail</Button>
      </CardFooter>
    </Card>
  )
}
