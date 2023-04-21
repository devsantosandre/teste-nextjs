/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Container,
  Rating,
  Card,
  CardContent,
  Typography,
  Divider,
  Skeleton,
} from "@mui/material";
import { useQuery } from "react-query";
import { BsGrid, BsList, BsFilter, BsArrowLeft } from "react-icons/bs";
import { SearchField } from "@/components/SearchField";
import { CustomTable, TableColumn } from "@/components/Table";
import { useStateValue } from "@/providers/StateProvider";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";
import { useSearch } from "../../../screens/hook";
import { useFetchsSearch } from "../..";
import { useFetchsDetails } from "../hook";

export const DetailsContainer = () => {
  const [{ search }] = useStateValue();
  const router = useRouter();
  const { id: slug } = router.query;

  //Hooks
  const { handleChangeOnSearch } = useSearch();
  const { getDetails } = useFetchsDetails();
  const { getServices } = useFetchsSearch();

  const { data, isLoading } = useQuery(["datails", slug], () =>
    getDetails(slug as string)
  );

  const details = data?.results[0];

  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      {/* // barra de pesquisa */}
      <Box sx={{ display: "flex", justifyContent: "left" }} mb={3}>
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
            getServices({ page: 1 } as any);
            router.push(`/search/?search=${search}`);
          }}
          value={search}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left" }} mb={2}>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center" }}
            mb={1}
            mr={2}
            mt={"18px"}
          >
            <BsArrowLeft size={25} onClick={() => router.back()} />
          </Box>
          <h3>Voltar</h3>
        </Box>
      </Box>
      <Box mb={10}>
        {isLoading ? (
          <>
            <Skeleton variant="rectangular" height={10000} />
          </>
        ) : details ? (
          <Card sx={{ minWidth: 275, position: "relative" }}>
            <CardContent>
              <Typography
                // colocar no canto superior direito do card
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
                position={"absolute"}
                right={20}
              >
                <b>Total de avaliação</b>
                <br />
                <Rating
                  name="read-only"
                  value={+details.total_avaliacao}
                  readOnly
                />
              </Typography>
              <Typography sx={{ fontSize: 18 }} variant="h5" gutterBottom>
                {details?.orgao_nome}
              </Typography>
              <Typography variant="h5" component="div">
                {details?.orgao_sigla}
              </Typography>
              <Typography color="text.secondary">
                Serviço: {details?.categoria_nome}
              </Typography>
              <Typography color="text.secondary">
                Público específico: {details?.publico_especifico}
              </Typography>
              <br />
              <Divider sx={{ mb: 3 }} />
              <Typography>
                <b>Descrição:</b>
                <br />
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: details.descricao,
                  }}
                />
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Typography>
                <b>O serviço é agendável?</b>
                <br /> {details?.agendavel ? "Sim" : "Não"}
              </Typography>
              <br />

              <Typography>
                <b>Categoria:</b>
                <br /> {details?.orgao_nome}
              </Typography>
              <br />
              <Typography>
                <b>Requisitos:</b>
                <br />{" "}
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: details.requisitos,
                  }}
                />
              </Typography>
              <br />
              <Typography>
                <b>Público:</b>
                <br />
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: details.publico,
                  }}
                />
              </Typography>
              <br />
              <Typography>
                <b>Tempo do serviço:</b>
                <br /> {details?.tempo_total + " " + details?.tipo_tempo}
              </Typography>
              <br />
              <Typography>
                <b>Custos:</b>
                <br /> {details?.custo ? 'R$ ' + details?.custo : "Não informado"}
              </Typography>
              <br />
              <Typography>
                <b>Jornada do serviço:</b>
                <br />{" "}
                {details?.jornada.length > 0 ? details?.jornada?.map((item: any) => {
                  // Não renderiza virgula no ultimo item
                  if (item === details?.servicosUnidade?.length - 1) {
                    return item.titulo;
                  } else {
                    return item.titulo + ", ";
                  }
                }) : "Não informado"}
              </Typography>
              <br />
              <Typography>
                <b>Unidades que atendem:</b>
                <br />{" "}
                {details?.servicosUnidade?.map((item: any) => {
                  // Não renderiza virgula no ultimo item
                  if (item === details?.servicosUnidade?.length - 1) {
                    return item.unidade.nome;
                  } else {
                    return item.unidade.nome + ", ";
                  }
                })}
              </Typography>
              <br />
            </CardContent>
          </Card>
        ) : (
          <h1>Não há dados para exibir</h1>
        )}
      </Box>
    </Container>
  );
};
