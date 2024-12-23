import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';


const StyledLabel = styled('label')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  color: '#2B3743',
  padding: '8px 16px',
  borderRadius: '4px',
  backgroundColor: '#f5f5f5', 
  cursor: 'pointer',
});

const Home = () => {
  return (
    <>
      <Box
        sx={{
          background: "#202D36",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            borderBottom: "1px solid gray",
         
          }}
        >
          <Typography variant="h3" sx={{ fontSize: '1rem', color: "white" }}>
            Where in the world?
          </Typography>

          <Typography variant="h3" sx={{ fontSize: '1rem', color: "white" }}>
            Dark Mode
          </Typography>
        </Box>

        <Box
          sx={{
            padding: '20px', 
            background:"#2B3743"
          }}
        >
          <StyledLabel>
            <SearchIcon sx={{ marginRight: '8px', color: 'white' }} />
            <Typography variant="body1" sx={{ color: '#000' }}>
              Buscar
            </Typography>
          </StyledLabel>
        </Box>
      </Box>


{/* 
      <header></header>
      <search></search>
      <section>
          <select name="" id=""></select>
      </section>
      <section>
        for
        <div>
          <img src="" alt="" />
          <h3></h3>

          Typography  
          Typography  
          Typography  
        </div>
      </section> */}
    </>
  );
};

export default Home;
