import React, { useEffect, useState, useLayoutEffect } from "react";
import { useQuery } from "react-query";
import { SearchContainer } from "./ui";
import { useFetchsSearch } from "../index";
import { useStateValue } from "@/providers/StateProvider";
import { useSearch } from "../hook";
import { useRouter } from "next/router";

export const SearchScreen = () => {
  const router = useRouter();
  //Context API
  const [{ search, searchUrl }, dispatch] = useStateValue();

  //States
  const [newServices, setNewServices] = useState<any[]>([]);
  const [view, setView] = useState<"list" | "grid">("grid");
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  //Hooks
  const { handleChangeOnSearch } = useSearch();
  const { getServices } = useFetchsSearch();

  const { data, isLoading, refetch } = useQuery(["services", searchUrl], () =>
    getServices({ page: 1, search: searchUrl })
  );

  const services = data?.results;

  useLayoutEffect(() => {
    dispatch({
      type: "SET_SEARCH_URL",
      searchUrl: router.query.search,
    });
    dispatch({
      type: "SET_SEARCH",
      search: router.query.search,
    });
  }, [router.query.search, dispatch]);

  useEffect(() => {
    setNewServices([]);
    if (services) {
      setNewServices(services);
    }
  }, [services]);

  //funcção que ordena os serviços por ordem de A-Z ou Z-A
  const handleOrder = async (order: "ASC" | "DESC") => {
    const sortServices = await newServices.sort((a, b) => {
      if (order === "ASC") {
        return a.orgao_nome.localeCompare(b.orgao_nome);
      } else {
        return b.orgao_nome.localeCompare(a.orgao_nome);
      }
    });
    return setNewServices(sortServices);
  };

  //função que ordena por ordem de avaliação
  const handleOrderRating = async (order: "ASC" | "DESC") => {
    setNewServices([]);
    const sortServices = await newServices.sort((a, b) => {
      if (order === "DESC") {
        return +a.total_avaliacao - +b.total_avaliacao;
      } else {
        return +b.total_avaliacao - +a.total_avaliacao;
      }
    });
    return setNewServices(sortServices);
  };

  //função que ordena por ordem de atualização
  const handleOrderUpdate = async (order: "ASC" | "DESC") => {
    const sortServices = await newServices.sort((a, b) => {
      if (order === "ASC") {
        return (
          new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
        );
      } else {
        return (
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      }
    });
    return setNewServices(sortServices);
  };

  return (
    <SearchContainer
      isLoading={isLoading}
      newServices={newServices}
      setNewServices={setNewServices}
      openFilter={openFilter}
      setOpenFilter={setOpenFilter}
      handleOrder={handleOrder}
      handleOrderRating={handleOrderRating}
      handleOrderUpdate={handleOrderUpdate}
      handleChangeOnSearch={handleChangeOnSearch}
      refetch={refetch}
      search={search}
    />
  );
};
