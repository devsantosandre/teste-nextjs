// create hook for use in components

import { useStateValue } from "@/providers/StateProvider";
import { apisiseci } from "@/services/api";

export const useSearch = () => {
    const [{ search }, dispatch] = useStateValue();
    const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: "SET_SEARCH",
          search: event.target.value,
        });
      };
    
    const hangleOnGetSearch = (page = '') => {
        apisiseci
          .get(
            `https://sgservicos-master.govone.digital/api/cms/servicos/?ativo=true${
              !!search ? "&search=" + search : ''
            }${!!page ? "&page=" + page : ''}`
          )
          .then((response) => {
            dispatch({
              type: "SET_SERVICES",
              services: response.data,
            });
    
          });
      };

    return { 
        handleOnSearch, 
        hangleOnGetSearch
     };
};