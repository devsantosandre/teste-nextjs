/* eslint-disable react-hooks/exhaustive-deps */
import { useStateValue } from "@/providers/StateProvider";
import { apisiseci } from "@/services/api";
import React from "react";
import { DetailsContainer } from "./ui";
import { useDetails } from "./hook";

export const DetailsScreen = ({ id }) => {
  // Parte lógica do componente
  const { handleOnGetDetails } = useDetails();

  React.useEffect(() => {
    handleOnGetDetails(id);
  }, [id]);

  return (
    <DetailsContainer />
  );
};
