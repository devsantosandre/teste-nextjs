// create hook for use in components

import { useStateValue } from "@/providers/StateProvider";
import { apisiseci } from "@/services/api";

export const useDetails = () => {
    const [{}, dispatch] = useStateValue();

    const handleOnGetDetails = (slug = '') => {
        apisiseci
          .get(
            `https://sgservicos-master.govone.digital/api/cms/servicos/?slug=${slug}`
          )
          .then((response) => {
            dispatch({
              type: "SET_SERVICE_DETAILS",
              details: response.data.results[0],
            });

          });
      };

    return { 
        handleOnGetDetails
     };
};