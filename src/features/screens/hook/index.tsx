import { useStateValue } from "@/providers/StateProvider";

export const useSearch = () => {
    const [{ }, dispatch] = useStateValue();

    const handleChangeOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: "SET_SEARCH",
          search: event.target.value,
        });
      };

    return { 
        handleChangeOnSearch
     };
};