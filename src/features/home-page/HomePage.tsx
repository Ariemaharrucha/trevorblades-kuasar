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
import hero from '../../assets/map.png'

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
      <div className="grid grid-cols-2 items-center min-h-screen">
        <div className="md:col-span-1 col-span-2 px-8 space-y-3">
        <h1 className="text-4xl font-bold text-violet-700">Discover the World, One Country at a Time!</h1>
            <p className="text-lg text-gray-600">
              Explore detailed information about every country.
            </p>
        </div>
        <div className="md:col-span-1 col-span-2 ">
        <div className="overflow-hidden mx-8 hidden md:block">
            <img
              src={hero}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
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
            <div className="mt-4 mb-6 max-w-xl mx-auto space-y-4 ">
            <h2 className="text-2xl text-violet-700 font-semibold text-center">Find Your Country Instantly</h2>
            <p className="text-center text-gray-600 mb-4">Select multiple countries and explore their details in seconds.</p>
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
