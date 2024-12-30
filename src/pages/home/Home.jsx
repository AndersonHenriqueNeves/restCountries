import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBar from "../../components/SearchBar";
import RegionFilter from "../../components/RegionFilter";
import FlagList from "../../components/FlagList";
import axios from 'axios';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching countries");
        setLoading(false);
      });
  }, []);

  

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleRegionChange = async (e) => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${e.target.value}`)
      setFilteredCountries (response.data)
    }catch(error) {
      throw error
    } 

  };

  const [filteredCountries, setFilteredCountries] = useState(
   
  )
  const countriesFilter = () => {
    const newCountries =  countries.filter(
      (country) =>
        (!region || country.region === region) &&
        (!search || country.name.common.toLowerCase().includes(search.toLowerCase()))
    )
    setFilteredCountries (newCountries)

  }
  useEffect (
    () => {
      countriesFilter()
         },[countries, search]
  )

  return (
    <Box
      sx={{
        background: "#202D36",
        minHeight: "100vh",
        padding: "0",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid gray",
          padding: "20px 16px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: "1rem", color: "white" }}>
          Where in the world?
        </Typography>
        <Typography variant="h3" sx={{ fontSize: "1rem", color: "white" }}>
          Dark Mode
        </Typography>
      </Box>

      {/* SearchBar */}
      <SearchBar value={search} onChange={handleSearchChange} />

      {/* RegionFilter */}
      <RegionFilter region={region} onChange={handleRegionChange} />

      {/* FlagList */}
      {!loading && !error && <FlagList countries={filteredCountries} />}
      {loading && <Typography sx={{ color: "white" }}>Loading...</Typography>}
      {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
    </Box>
  );
};

export default Home;
