import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFieldProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export const SearchField = ({
  placeholder = "Search...",
  value,
  onChange,
  onClick,
}: SearchFieldProps) => {
  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          border: "1px solid #ccc",
          borderRadius: "12px",
          boxShadow: "none",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          inputProps={{ "aria-label": placeholder }}
          onChange={(e) => {
            e.preventDefault();
            onChange(e as React.ChangeEvent<HTMLInputElement>);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onClick();
            }
          }}
          value={value}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon onClick={onClick} />
        </IconButton>
      </Paper>
    </div>
  );
};
