import { useQuery } from "react-query";
import { useStateValue } from "@/providers/StateProvider";
import { apisiseci } from "@/services/api";
import { useRouter } from "next/router";

interface Service {
  count: number;
  current: number;
  next: string;
  page_size: number;
  page_size_query: string;
  previous: string;
  query_param: string;
  results: any[];
  total_pages: number;
}

export const useFetchsSearch = () => {

  const getServices = async ({ page = 1, search }: { page: number, search: string }) => {
    const response = await apisiseci.get(
      `https://sgservicos-master.govone.digital/api/cms/servicos/?ativo=true${
        !!search ? "&search=" + search : ""
      }${!!page ? "&page=" + page : ""}`
    );
    return response.data as Service;
  };
  return {
    getServices,
  };
};
