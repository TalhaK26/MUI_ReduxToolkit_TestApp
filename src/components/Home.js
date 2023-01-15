import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NavBar from "./shared-components/Navbar";
import Footer from "./shared-components/Footer";
import Form from "./shared-components/Form";
import { makeStyles } from "@mui/styles";
import { HomeStyles } from "../styles/HomeStyles";
import clsx from "clsx";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(HomeStyles);

const Home = () => {
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
              <Item className="">
                <Form />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
