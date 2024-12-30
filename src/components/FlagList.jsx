import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const FlagColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "40px",
});

const FlagItem = styled(Box)({
  textAlign: "flex-start",
  marginBottom: "40px",
  width: "100%",
  maxWidth: "300px",
  backgroundColor: "#3A474F",
  paddingBottom: "20px",
  borderRadius: "8px",
});

const FlagImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

const FlagInfo = styled(Box)({
  marginTop: "10px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "10px",
});

const Flag = ({ name, population, region, capital, flagUrl }) => (
  <FlagItem>
    <FlagImage src={flagUrl} alt={`Flag of ${name}`} />
    <Typography
      variant="h6"
      sx={{
        marginTop: "20px",
        color: "black",
        paddingLeft: "10px",
      }}
    >
      {name}
    </Typography>
    <FlagInfo>
      <Typography variant="body1">Population: {population}</Typography>
      <Typography variant="body1">Region: {region}</Typography>
      <Typography variant="body1">Capital: {capital}</Typography>
    </FlagInfo>
  </FlagItem>
);

const FlagList = ({ countries }) => (
  <FlagColumn>
    {countries.map((country) => (
      <Flag
        key={country.name.common}
        name={country.name.common}
        population={country.population.toLocaleString()}
        region={country.region}
        capital={country.capital ? country.capital[0] : "N/A"}
        flagUrl={country.flags.svg}
      />
    ))}
  </FlagColumn>
);

export default FlagList;
