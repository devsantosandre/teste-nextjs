import {
  Select as SelectMui,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";

interface SelectProps {
  label: string;
  id: string;
  refer: any;
  onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = ({
  label,
  id,
  refer,
  onChange,
  options,
}: SelectProps) => (
  <FormControl variant="standard" fullWidth size="small">
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <SelectMui
      inputRef={refer}
      labelId={`${id}-label`}
      id={id}
      name={id}
      onChange={onChange}
      value={refer.current?.value}
      defaultValue={""}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectMui>
  </FormControl>
);
