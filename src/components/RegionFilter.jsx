import React from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/system";

const StyledSelect = styled(Select)({
  backgroundColor: "#2B3743",
  color: "white",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  marginRight: "20px",
  "& .MuiSelect-icon": {
    display: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: "20px",
  },
});

const RegionFilter = ({ region, onChange }) => (
  <Box
    sx={{
      marginTop: "40px",
      paddingLeft: "20px",
      paddingRight: "20px",
    }}
  >
    <FormControl sx={{ width: "70%" }}>
      <StyledSelect
        value={region}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": "Filter by Region" }}
        IconComponent={() => <KeyboardArrowDownIcon sx={{ color: "white", paddingRight:"20px" }} />}
      >
        <MenuItem disabled value="">
          <Typography variant="body1" sx={{ color: "white" }}>
            Filter by Region
          </Typography>
        </MenuItem>
        <MenuItem value="Africa">Africa</MenuItem>
        <MenuItem value="America">America</MenuItem>
        <MenuItem value="Asia">Asia</MenuItem>
        <MenuItem value="Europe">Europe</MenuItem>
        <MenuItem value="Oceania">Oceania</MenuItem>
      </StyledSelect>
    </FormControl>
  </Box>
);

export default RegionFilter;
