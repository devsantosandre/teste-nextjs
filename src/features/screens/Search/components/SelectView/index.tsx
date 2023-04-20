import { Box } from "@mui/material";

interface SelectViewProps {
  options: {
    icon: any;
    label: string;
    active: boolean;
    action: () => void;
  }[];
}

export const SelectView = ({ options }: SelectViewProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
      <Box>Exibição em:</Box>
      {options.map(({ icon, label, active, action }, key) => (
        <Box
          key={key}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            onClick={action}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: 1,
              backgroundColor: active ? "#e0e0e0" : "#fff",
              p: 1,
              borderRadius: 3,
              minWidth: "70px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <Box sx={{ mr: 1, mt: '5px' }}>{icon}</Box>
            <Box>{label}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
