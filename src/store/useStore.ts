import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IOptionsCountry {
    label: string;
    value: string;
}

interface CountryState {
    countries: IOptionsCountry[];
    setCountries: (countries: IOptionsCountry[]) => void;
}

const useCountry = create<CountryState>()(
    persist(
      (set) => ({
        countries: [],
        setCountries: (countries) => set({ countries }),
      }),
      { name: "country-store" }
    )
  );

export default useCountry;