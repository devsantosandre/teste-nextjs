import { apisiseci } from "@/services/api";

interface DetailsProps {
  total_avaliacao: any;
  orgao_nome: string;
  orgao_sigla: string;
  categoria_nome: string;
  publico_especifico: string;
  descricao: string | TrustedHTML;
  agendavel: any;
  requisitos: string | TrustedHTML;
  publico: string | TrustedHTML;
  tempo_total: string;
  tipo_tempo: string;
  custo: string;
  jornada: any;
  servicosUnidade: any;
  count: number;
  current: number;
  next: string;
  page_size: number;
  page_size_query: string;
  previous: string;
  query_param: string;
  results: any[];
  total_pages: number;
  slug: string;
}


export const useFetchsDetails = () => {

  const getDetails = async (slug = ''): Promise<DetailsProps> => {
    const response = await apisiseci.get(
      `https://sgservicos-master.govone.digital/api/cms/servicos/?slug=${slug}`
    );
    return response.data as DetailsProps;
  };

  return {
    getDetails,
  };
};