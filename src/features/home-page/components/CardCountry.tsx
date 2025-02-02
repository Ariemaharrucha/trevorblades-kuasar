import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import React from "react"

type TCardProps = {
  name: string
  emoji: string,
  capital?: string,
  currency?: string,
  code?: string
}

export const CardCountry:React.FC<TCardProps> = (props) => {
  return (
    <Card className="col-span-1 border-violet-400 border-4 flex flex-col overflow-hidden bg-purple-100/10">
      <CardHeader>
        <CardTitle className="text-3xl text-center ">{props.name}</CardTitle>
        <CardTitle className="text-3xl text-center">{props.emoji}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-lg flex-grow">
        <p><span className="font-semibold">Capital :</span> {props.capital}</p>
        <p><span className="font-semibold">Currency :</span> {props.currency}</p>
      </CardContent>
      <CardFooter className="">
        <Button size={'lg'} className="w-full border-none block   bg-violet-500 hover:bg-violet-600 text-white font-semibold text-lg ">Detail</Button>
      </CardFooter>
    </Card>
  )
}
