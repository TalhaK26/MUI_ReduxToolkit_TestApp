import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { HomeStyles } from "../styles/HomeStyles";
import NavBar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";
import CardView from "./shared-components/CardView";

const useStyles = makeStyles(HomeStyles);

const Details = () => {
  const classes = useStyles();

  return (
    <div>
      {/* Header */}
      <NavBar />

      {/* Main */}
      <div className={classes.root}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item md={12} sm={12} xs={12}>
              <CardView isDetail={true} />
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Details;
