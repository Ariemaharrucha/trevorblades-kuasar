import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      code
      emoji
      capital
      currency
    }
  }
`;

export const GET_COUNTRY_DETAIL = gql`
  query GetCountryDetail($code: ID!) {
    country (code: $code) {
      code
      name
      emoji
      currency
      languages {
        code
        name
        rtl
      }
      continent {
        code
        countries {
          emoji
          name
        }
        name
      }
      phone
      states {
        code
        name
      }
      subdivisions {
        code
        name
      }
    }
  }
`;