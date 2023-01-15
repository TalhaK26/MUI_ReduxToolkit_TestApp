import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { HomeStyles } from "../styles/HomeStyles";
import NavBar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";
import CardView from "./shared-components/CardView";
import clsx from "clsx";

const useStyles = makeStyles(HomeStyles);

const Details = () => {
  const classes = useStyles();

  return (
    <div className="h-full">
      {/* Header */}
      <NavBar />

      {/* Main */}
      <div className={clsx(classes.root, "h-full")}>
        <Box sx={{ flexGrow: 1 }} className="h-full">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            className="h-full"
          >
            <Grid item>
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
