import { GET_COUNTRIES } from '@/querry/querry';
import { ICountry } from '@/types/country';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useCountry } from '@/store/useStore';
import { IOptionsCountry } from '@/types/reactSelect';

export const  useHomePage = () => {
    const { data, loading, error } = useQuery(GET_COUNTRIES);
    const { countries, setCountries } = useCountry();
    const [search, setSearch] = useState<IOptionsCountry | null >(null);
    const [filter, setFilter] = useState([]);
  
    useEffect(() => {
      if (data && data.countries) {
        const formattedCountries = data.countries.map((country: ICountry) => ({
          label: `${country.emoji} ${country.name}`,
          value: country.name,
        }));
        setCountries(formattedCountries);
      }
    }, [data, setCountries]);
  
    useEffect(() => {
      const filterCountry = search
        ? data?.countries.filter((country: ICountry) => country.name === search.value)
        : data?.countries || [];
    
      setFilter(filterCountry);
    }, [data?.countries, search]);

  return {countries, search, setSearch, loading, error, filter}
}
