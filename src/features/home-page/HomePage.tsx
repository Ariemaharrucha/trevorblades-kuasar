import { Navbar } from "@/components/shared/Navbar"
import { CardCountry } from "./components/CardCountry"
import { GET_COUNTRIES } from "@/querry/querry"
import { useQuery } from "@apollo/client";
import useCountry, { IOptionsCountry } from "@/store/useStore";
import { useEffect, useState } from "react";
import { ICountry } from "@/types/country";
import { Loader } from "lucide-react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export const HomePage = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const { countries, setCountries } = useCountry();
  const animatedComponents = makeAnimated();
  const [search, setSearch] = useState<IOptionsCountry[]>([])
  const [filter, setFilter] = useState([])

  useEffect(() => {
    if (data && data.countries) {
      const formattedCountries = data.countries.map((country: ICountry) => ({
        label: `${country.emoji} ${country.name}`,
        value: country.name,
      }));
      setCountries(formattedCountries);
    }
  }, [data, setCountries]);

  useEffect(()=>{
    const filterCountry = search.length > 0 
    ? data?.countries.filter((country: ICountry) =>
        search.some((selected) => selected.value === country.name)
      )
    : data?.countries;
    setFilter(filterCountry)
  }, [data?.countries, search] )

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
          <div className="mt-2">

            <div className="my-4 max-w-xl mx-auto">
            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={countries}
                onChange={(selected) => setSearch([...selected] as IOptionsCountry[])}
                placeholder="Search country..."
              />
            </div>
            <div className="mt-2 mx-2 grid grid-cols-4 gap-4">
              {filter?.map((country: ICountry) => (
                <CardCountry
                  key={country.code}
                  name={country.name}
                  emoji={country.emoji}
                  capital={country.capital}
                  currency={country.currency}
                  code={country.code}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
