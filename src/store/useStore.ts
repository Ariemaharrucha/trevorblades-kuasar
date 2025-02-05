import { ProfileState } from "@/types/profile";
import { CountryState } from "@/types/reactSelect";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCountry = create<CountryState>()(
    persist(
      (set) => ({
        countries: [],
        setCountries: (countries) => set({ countries }),
        resetCountries: () => set({countries: []})
      }),
      { name: "country-store" }
    )
  );

  const useProfile = create<ProfileState>()(
    persist(
      (set) => ({
        userProfile: null, 
        setUserProfile: (profile) => set({ userProfile: profile }),
        resetUserProfile: () => set({ userProfile: null }),
      }),
      { name: "profile" }
    )
  );

export {useCountry, useProfile};