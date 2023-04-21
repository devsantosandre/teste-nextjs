/* eslint-disable @next/next/no-img-element */
import { Box, Container, Rating } from "@mui/material";
import { SearchField } from "@/components/SearchField";
import { CustomTable, TableColumn } from "@/components/Table";
import { useStateValue } from "@/providers/StateProvider";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { useSearch } from "../../hook";
import { useFetchsSearch } from "../..";

export const HomeContainer = () => {
  const [{ search }] = useStateValue();
  const router = useRouter();

  //Hooks
  const { handleChangeOnSearch } = useSearch();
  const { getServices } = useFetchsSearch();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 20,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }} mb={5}>
        <img src="/images/govone-logo.png" alt="GovOne" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }} mb={5}>
        <SearchField
          placeholder="Pesquisar"
          onChange={handleChangeOnSearch}
          onClick={() => {
            getServices({ page: 1 } as any);
            router.push(`/search/?search=${search}`);
          }}
          value={search}
        />
      </Box>
    </Container>
  );
};
