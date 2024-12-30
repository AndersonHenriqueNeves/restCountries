import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const StyledInputContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#2B3743",
  borderRadius: "4px",
  padding: "8px 16px",
  margin: "20px",
  width: "calc(100% - 40px)",
  color: "white",
  boxSizing: "border-box",
});

const StyledInput = styled(InputBase)({
  flex: 1,
  color: "white",
  marginRight: "8px",
  "& input": {
    padding: "8px 0",
    color: "white",
  },
});

const SearchBar = ({ value, onChange }) => (
  <StyledInputContainer>
    <SearchIcon sx={{ color: "white", paddingRight:"40px" }} />
    <StyledInput
      placeholder="Search for a country"
      inputProps={{ "aria-label": "search" }}
      value={value}
      onChange={onChange}
    />
  </StyledInputContainer>
);

export default SearchBar;
