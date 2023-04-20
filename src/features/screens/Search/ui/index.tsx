/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Rating,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Grow,
} from "@mui/material";
import { SearchField } from "@/components/SearchField";
import { CustomTable, TableColumn } from "@/components/Table";
import { useStateValue } from "@/providers/StateProvider";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { useSearch } from "../..";
import { BsGrid, BsList, BsFilter } from "react-icons/bs";
import { Select } from "@/components/Select";

export interface columnsGeneralColletionDetails {
  id: number;
  orgao_nome: string;
  publico_especifico: string;
  orgao_nome: string;
  total_avaliacao: string;
  updated_at: string;
}

export const columnsGeneralColletionDetails: TableColumn<columnsGeneralColletionDetails>[] =
  [
    {
      name: "Nome do serviço",
      selector: (row) => row.orgao_nome,
    },
    {
      name: "Públicos específicos",
      selector: (row) => (
        <Box
          sx={{
            backgroundColor: "#F2F2F2",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {row.publico_especifico}
        </Box>
      ),
    },
    {
      name: "Nome do órgão",
      selector: (row) => row.orgao_nome,
    },
    {
      name: "Total de avaliação",
      selector: (row) => (
        <Rating name="read-only" value={+row.total_avaliacao} readOnly />
      ),
    },
    {
      name: "Última atualização",
      selector: (row) => new Date(row.updated_at).toLocaleDateString(),
    },
  ];

export interface HomeContainerProps {
  onSearch: () => void;
  onGetSearch: () => void;
}

export const SearchContainer = () => {
  const [{ search, services }] = useStateValue();
  const router = useRouter();

  const [newServices, setNewServices] = useState<any[]>([]);

  const [view, setView] = useState<"list" | "grid">("grid");
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const { handleOnSearch, hangleOnGetSearch } = useSearch();

  //ref selects
  const alphabeticalFilterRef = useRef<HTMLDivElement>(null);
  const ratingFilterRef = useRef<HTMLDivElement>(null);
  const lastUpdateFilterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNewServices(services?.results || []);
  }, [services, search]);

  useEffect(() => {
    console.log("Mudando o Estado :>> ", newServices);
  }, [newServices]);

  // componente de select para escolha da visualização
  const SelectView = () => (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
          mt: 6,
        }}
      >
        Exibição em:
        <Box
          onClick={() => setView("grid")}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 2,
            mr: 1,
            backgroundColor: view === "grid" ? "#e0e0e0" : "#fff",
            p: 1,
            borderRadius: 3,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <BsGrid title="Visualização em grade" style={{ marginRight: 5 }} />
          Grade
        </Box>
        <Box
          onClick={() => setView("list")}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: view === "list" ? "#e0e0e0" : "#fff",
            p: 1,
            borderRadius: 3,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <BsList title="Visualização em lista" style={{ marginRight: 5 }} />
          Lista
        </Box>
      </Box>
    </Box>
  );

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
    <Container
      sx={{
        mt: 10,
      }}
    >
      {/* // barra de pesquisa */}
      <Box sx={{ display: "flex", justifyContent: "left" }} mb={5}>
        <Box
          sx={{ display: "flex", justifyContent: "center" }}
          mb={1}
          mr={3}
          mt={1}
        >
          <img src="/images/govone-logo.png" alt="GovOne" />
        </Box>
        <SearchField
          placeholder="Pesquisar"
          onChange={handleOnSearch}
          onClick={() => {
            setOpenFilter(false);
            hangleOnGetSearch();
          }}
          value={search}
        />
        <Box
          onClick={() => setOpenFilter(!openFilter)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 2,
            mr: 1,
            backgroundColor: openFilter ? "#e0e0e0" : "#fff",
            border: !openFilter ? "" : "1px solid #efefef",
            p: 1,
            borderRadius: 3,
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            minWidth: 100,
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          <BsFilter title="Filtros" style={{ marginRight: 5 }} />
          Filtros
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 3,
          position: "relative",
        }}
      >
        {openFilter ? (
          <Grow in={openFilter}>
            <Grid container spacing={3} position={"absolute"}>
              <Grid item xs>
                <Select
                  refer={alphabeticalFilterRef}
                  id="alphabetical-order"
                  label="Em ordem alfabética"
                  options={[
                    { value: "ASC", label: "A-Z" },
                    { value: "DESC", label: "Z-A" },
                  ]}
                  onChange={(e) => {
                    setNewServices([]);
                    handleOrder(e.target.value as "ASC" | "DESC");
                  }}
                />
              </Grid>
              <Grid item xs>
                <Select
                  refer={ratingFilterRef}
                  id="rating-order"
                  label="Em ordem por avaliação"
                  options={[
                    { value: "ASC", label: "Melhores avaliações" },
                    { value: "DESC", label: "Piores avalizações" },
                  ]}
                  onChange={(e) => {
                    setNewServices([]);
                    handleOrderRating(e.target.value as "ASC" | "DESC");
                  }}
                />
              </Grid>
              <Grid item xs>
                <Select
                  refer={lastUpdateFilterRef}
                  id="update-order"
                  label="Em ordem de atualização"
                  options={[
                    { value: "ASC", label: "Primeiras atualizações" },
                    { value: "DESC", label: "Últimas atualizações" },
                  ]}
                  onChange={(e) => {
                    setNewServices([]);
                    handleOrderUpdate(e.target.value as "ASC" | "DESC");
                  }}
                />
              </Grid>
              <Grid item xs />
            </Grid>
          </Grow>
        ) : null}
      </Box>
      <SelectView />
      {/* // grid para exibição dos serviços em forma de cards */}
      {view === "grid" && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 10,
          }}
        >
          {newServices?.map((service) => (
            <Box
              key={service.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                boxShadow: 1,
                borderRadius: 3,
                cursor: "pointer",
                backgroundColor: "#FFF",

                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              onClick={() => router.push(`/details/${service.slug}`)}
            >
              {/* exibição do nome do serviço, público específico, nome do órgão e ultima atualização */}
              <p>
                <strong>{service.orgao_nome}</strong>
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "#9e9e9e",
                  textTransform: "uppercase",
                }}
              >
                {service.publico_especifico}
              </p>
              <p>{service.orgao_nome}</p>
              <p
                style={{
                  fontSize: 12,
                  color: "#9e9e9e",
                  fontStyle: "italic",
                }}
              >
                {new Date(service.updated_at).toLocaleDateString()}
              </p>

              {/* exibição da avaliação do serviço */}
              <Box sx={{ mt: 1 }}>
                <Rating
                  name="read-only"
                  value={+service.total_avaliacao}
                  readOnly
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* // grid para exibição dos serviços em forma de tabela */}
      {view === "list" && (
        <CustomTable
          theme="primary"
          numberRowsPerPage={0}
          progressPending={false}
          columns={columnsGeneralColletionDetails}
          data={newServices}
          getRowId={(e) => {
            router.push(`/details/${e.slug}`);
          }}
        />
      )}

      {/* // paginação */}
      {services.legth > 0 && (
        <Pagination
          currentPage={services?.page || 1}
          totalCount={services?.total || 1}
          pageSize={services?.pageSize || 10000}
          onPageChange={(page) => onGetSearch(page || 1)}
          total={services?.total || 0}
        />
      )}
    </Container>
  );
};
