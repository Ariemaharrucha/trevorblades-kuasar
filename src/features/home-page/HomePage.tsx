import { Navbar } from "@/components/shared/Navbar"
import { CardCountry } from "./components/CardCountry"
import { GET_COUNTRIES } from "@/querry/querry"
import { useQuery } from "@apollo/client";
import useCountry from "@/store/useStore";
import { useEffect } from "react";
import { ICountry } from "@/types/country";
import { Loader } from "lucide-react";

export const HomePage = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const {  setCountries } = useCountry();

  useEffect(() => {
    if (data && data.countries) {
      const formattedCountries = data.countries.map((country: ICountry) => ({
        label: `${country.emoji} ${country.name}`,
        value: country.name,
      }));
      setCountries(formattedCountries);
    }
  }, [data, setCountries]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto min-h-screen">
      {loading || error ? (
          <div className="flex items-center justify-center h-[50vh]">
            <div className="text-lg  text-violet-700  p-4 rounded-lg shadow-md">
              {error ? `❌ ${error.message}` : (
                <div className="flex gap-2">
                  <span className="animate-spin"><Loader></Loader></span>
                  Loading...
                </div>
            )}
            </div>
          </div>
        ) : (
          <div className="mt-2 mx-2 grid grid-cols-4 gap-4">
            {data?.countries.map((country: ICountry) => (
              <CardCountry
                key={country.code}
                name={country.name}
                emoji={country.emoji}
                capital={country.capital}
                currency={country.currency}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
