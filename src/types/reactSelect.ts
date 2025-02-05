export interface IOptionsCountry {
    label: string;
    value: string;
}

export interface CountryState {
    countries: IOptionsCountry[];
    setCountries: (countries: IOptionsCountry[]) => void;
    resetCountries: () => void;
}