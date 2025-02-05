interface ILanguage {
    code: string;
    name: string;
    rtl: boolean;
  }
  
  interface IContinent {
    code: string;
    countries: {
      emoji: string;
      name: string;
    }[];
    name: string;
  }
  
  interface IStates {
    code: string;
    name: string;
  }
  
  interface ISubdivisions {
    code: string;
    name: string;
  }
  
  export interface IDetailCountry {
    name: string;
    code: string;
    emoji: string;
    currency: string;
    languages: ILanguage[];
    continent: IContinent;
    phone: string;
    states: IStates[];
    subdivisions: ISubdivisions[];
  }