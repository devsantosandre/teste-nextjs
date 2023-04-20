import { TableColumn } from "react-data-table-component";
import { Box, Container, Rating, Grid, Grow, Skeleton } from "@mui/material";

export interface ColumnsServiceProps {
  id: number;
  categoria_nome: string;
  publico_especifico: string;
  orgao_nome: string;
  total_avaliacao: string;
  updated_at: string;
}

export const columnsService: TableColumn<ColumnsServiceProps>[] = [
  {
    name: "Nome do serviço",
    selector: (row) => row.categoria_nome,
    center: true,
  },
  {
    name: "Nome do órgão",
    selector: (row) => row.orgao_nome,
    center: true,
  },
  {
    name: "Públicos específicos",
    selector: (row) =>
      (
        <Box
          sx={{
            backgroundColor: "#F2F2F2",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {row.publico_especifico}
        </Box>
      ) as any,
    width: "180px",
    center: true,
  },

  {
    name: "Última atualização",
    selector: (row) => new Date(row.updated_at).toLocaleDateString(),
    width: "170px",
    center: true,
  },
  {
    name: "Total de avaliação",
    selector: (row) => (
      <Rating name="read-only" value={+row.total_avaliacao} readOnly />
    ) as any,
    center: true,
  },
];
