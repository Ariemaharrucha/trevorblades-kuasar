import { Navbar } from "@/components/shared/Navbar";
import useCountry, { IOptionsCountry } from "@/store/useStore";
import { useState } from "react";
import Select from "react-select";

export const ChatPage = () => {
  const { countries } = useCountry();
  const [selectedCountry, setSelectedCountry] =
    useState<IOptionsCountry | null>(null);
  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto p-6 bg-white border h-screen">
        <Select
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
          placeholder="Select a country"
          className="mb-3"
        />
        {/* chat */}
        <div className="space-y-4">
          
        </div>
      </section>
    </div>
  );
};
