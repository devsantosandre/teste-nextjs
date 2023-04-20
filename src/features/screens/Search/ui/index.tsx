/* eslint-disable @next/next/no-img-element */
import { useRef, SetStateAction } from "react";
import { Box, Container, Rating, Grid, Grow } from "@mui/material";
import { SearchField } from "@/components/SearchField";
import { CustomTable } from "@/components/Table";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { BsGrid, BsList, BsFilter } from "react-icons/bs";
import { Select } from "@/components/Select";
import { SelectView } from "../components/SelectView";
import { SkeletonView } from "../components/SkeletonView";
import { columnsService } from "./table";
import { useStateValue } from "@/providers/StateProvider";

interface SearchContainerProps {
  isLoading: boolean;
  newServices: any;
  setNewServices: React.Dispatch<SetStateAction<any>>;
  openFilter: boolean;
  setOpenFilter: (value: boolean) => void;
  handleOrder: (order: "ASC" | "DESC") => Promise<void>;
  handleOrderRating: (order: "ASC" | "DESC") => Promise<void>;
  handleOrderUpdate: (order: "ASC" | "DESC") => Promise<void>;
  handleChangeOnSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refetch: () => void;
  search: string;
}

export const SearchContainer = ({
  isLoading,
  newServices,
  setNewServices,
  openFilter,
  setOpenFilter,
  handleOrder,
  handleOrderRating,
  handleOrderUpdate,
  handleChangeOnSearch,
  refetch,
  search,
}: SearchContainerProps) => {
  const router = useRouter();
  const [{ viewHome: view }, dispatch] = useStateValue();
  //Refs
  const alphabeticalFilterRef = useRef<HTMLDivElement>(null);
  const ratingFilterRef = useRef<HTMLDivElement>(null);
  const lastUpdateFilterRef = useRef<HTMLDivElement>(null);
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
          onChange={handleChangeOnSearch}
          onClick={() => {
            refetch();
            setOpenFilter(false);
            dispatch({
              type: "SET_SEARCH_URL",
              searchUrl: search,
            });
            router.push(`/search/?search=${search}`);
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

      {/* // filtros */}
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

      {/* Seleção de exibição */}
      <Box sx={{ mt: 5 }}>
        <SelectView
          options={[
            {
              label: "Lista",
              icon: <BsList />,
              action: () => {
                dispatch({
                  type: "SET_VIEW_HOME",
                  viewHome: "list",
                });
              },
              active: view === "list",
            },
            {
              label: "Grade",
              icon: <BsGrid />,
              action: () => {
                dispatch({
                  type: "SET_VIEW_HOME",
                  viewHome: "grid",
                });
              },
              active: view === "grid",
            },
          ]}
        />
      </Box>

      {/* // exibição do loading */}
      {isLoading ? <SkeletonView view={view} /> : null}
      {isLoading || newServices?.length > 0 ? (
        <>
          {/* // exibição dos serviços em forma de grid */}
          {view === "grid" && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 10,
              }}
            >
              {newServices?.map((service: any) => (
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

          {/* // exibição dos serviços em forma de tabela */}
          {view === "list" && (
            <CustomTable
              theme="primary"
              numberRowsPerPage={0}
              progressPending={false}
              columns={columnsService}
              data={newServices}
              getRowId={(e) => {
                router.push(`/details/${e.slug}`);
              }}
            />
          )}
        </>
      ) : (
        // informaando que não foi encontrado nenhum serviço
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 5,
          }}
        >
          <h3>Nenhum serviço encontrado</h3>
        </Box>
      )}

      {/* // paginação */}
      {!isLoading && newServices.length > 0 && (
        <Box mt={5}>
          <Pagination
            currentPage={10}
            totalCount={11}
            pageSize={10}
            onPageChange={(page) => refetch()}
            total={1}
          />
        </Box>
      )}
    </Container>
  );
};
