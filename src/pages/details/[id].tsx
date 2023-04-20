import { useRouter } from "next/router";
import { Box, Container, Rating } from "@mui/material";
import { useStateValue } from "@/providers/StateProvider";
import { SearchField } from "@/components/SearchField";
import { useSearch } from "@/features/screens";
import { DetailsScreen } from "@/features/screens/Details";

function Details() {
  const router = useRouter();
  const { id } = router.query;


  return (
    <DetailsScreen id={id}/>
  );
}

export default Details;
