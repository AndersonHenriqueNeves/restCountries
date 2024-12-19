import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          borderBottom: "1px solid gray",
          padding: "20px 16px",
        }}
      >
        <Typography variant="h3" sx={{fontSize: '1rem'}}>
          Where in the world?
        </Typography>

        <Typography variant="h3" sx={{fontSize: '1rem'}}>
          Dark Mode
        </Typography>
      </Box>

        {/* Box do inputs */}
      <Box>

      </Box>
    </>
  );
};

export default Home;
