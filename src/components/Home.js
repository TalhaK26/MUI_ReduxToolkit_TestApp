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

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(HomeStyles);

const Home = () => {
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
