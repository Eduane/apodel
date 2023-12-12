import { useQuery,UseQueryResult } from 'react-query';
import { getRequest } from '../../services/axios';

const useGetRequest = <T>(endpoint:string):UseQueryResult<T> => {
  const useResponse= useQuery<T, Error>(
    endpoint,
    async ():Promise<T> => {
      const response = await getRequest(endpoint);
      return response as T;
    }
  );
  return useResponse;
};

export default useGetRequest;