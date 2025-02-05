import { Navbar } from "@/components/shared/Navbar";
import { CardCountry } from "./components/CardCountry";
import { ICountry } from "@/types/country";
import { Loader } from "lucide-react";
import Select from "react-select";
import hero from "../../assets/map.png";
import { useHomePage } from "./hooks/useHomePage";

export const HomePage = () => {
  const {countries, search, setSearch, loading, error, filter} = useHomePage();
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-2 items-center lg:min-h-screen">
          <div className="md:col-span-1 col-span-2 px-8 space-y-3 py-6 md:py-0">
            <h1 className="text-4xl font-bold text-violet-700">
              Discover the World, One Country at a Time!
            </h1>
            <p className="text-lg text-gray-600">
              Explore detailed information about every country.
            </p>
          </div>
          <div className="md:col-span-1 col-span-2 ">
            <div className="overflow-hidden mx-8 md:block">
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
              {error ? (
                `❌ ${error.message}`
              ) : (
                <div className="flex gap-2">
                  <span className="animate-spin">
                    <Loader></Loader>
                  </span>
                  Loading...
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-2">
            <div className="mt-4 mb-6 max-w-xl px-8 md:mx-auto space-y-4 ">
              <h2 className="text-2xl text-violet-700 font-semibold text-center">
                Find Your Country Instantly
              </h2>
              <p className="text-center text-gray-600 mb-4">
                Select multiple countries and explore their details in seconds.
              </p>
              <Select      
                options={countries}
                value={search}
                onChange={setSearch}
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
  );
};
