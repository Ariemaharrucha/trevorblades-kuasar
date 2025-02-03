import { Navbar } from "@/components/shared/Navbar";
import { GET_COUNTRY_DETAIL } from "@/querry/querry";
import { IDetailCountry } from "@/types/detail.country";
import { useQuery } from "@apollo/client";
import { Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export const DetailPage = () => {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAIL, {
    variables: { code: code },
    skip: !code,
  });

  const country = data?.country as IDetailCountry;

  return (
    <div>
      <Navbar />
      <section className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <Link
          to={"/"}
          className="bg-violet-600 text-white font-semibold px-3 py-2 rounded-md"
        >
          Back
        </Link>
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
          <div>
            <h1 className="text-4xl font-bold text-center mb-6">
              {country.emoji} {country.name}
            </h1>

            <div className="grid grid-cols-2 gap-4">
              <p className="text-lg font-medium">
                🌍 Continent:{" "}
                <span className="font-normal text-gray-700">
                  {country?.continent?.name}
                </span>
              </p>
              <p className="text-lg font-medium">
                💰 Currency:{" "}
                <span className="font-normal text-gray-700">
                  {country.currency}
                </span>
              </p>
              <p className="text-lg font-medium">
                📞 Phone Code:{" "}
                <span className="font-normal text-gray-700">
                  +{country.phone}
                </span>
              </p>
              <p className="text-lg font-medium">
                🗣️ Languages:{" "}
                <span className="font-normal text-gray-700">
                  {country.languages.map((lang) => lang.name).join(", ")}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold ">
                🌎 Other Countries in {country?.continent?.name}
              </h2>
              <p className="text-gray-700 mt-2 text-center">
                {country.continent?.countries
                  .map((cont) => `${cont.emoji} ${cont.name}`)
                  .join(", ")}
              </p>
            </div>

            {country.states.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold">🏛️ States</h2>
                <p className="text-gray-700 mt-2 text-center">
                  {country.states.map((s) => s.name).join(", ")}
                </p>
              </div>
            )}

            {country.subdivisions.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold">🏙️ Subdivisions</h2>
                <p className="text-gray-700 mt-2 text-center">
                  {country.subdivisions.map((s) => s.name).join(", ")}
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};
