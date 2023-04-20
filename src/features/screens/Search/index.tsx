import { useStateValue } from "@/providers/StateProvider";
import { apisiseci } from "@/services/api";
import React, { useState } from "react";
import { SearchContainer } from "./ui";
import { PageSearchParams } from "./types";
import { useSearch } from "..";

export const SearchScreen = () => {
  const [{ search }, dispatch] = useStateValue();

  const [currentPage, setCurrentPage] = useState<PageSearchParams>({
    page: 1,
    pageSize: 5,
  });

  const { handleOnSearch, hangleOnGetSearch } = useSearch();

  React.useEffect(() => {
    hangleOnGetSearch();
  }, []);

  return (
    <SearchContainer />
  );
};
