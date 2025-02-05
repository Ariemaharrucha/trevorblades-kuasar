import { GET_COUNTRY_DETAIL } from '@/querry/querry';
import { IDetailCountry } from '@/types/detail.country';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export const useDetailPage = () => {
    const { code } = useParams();
    const { loading, error, data } = useQuery(GET_COUNTRY_DETAIL, {
      variables: { code: code },
      skip: !code,
    });
  
    const country = data?.country as IDetailCountry;

  return {loading, error, country}
}
