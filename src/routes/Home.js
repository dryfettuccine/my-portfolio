import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Container from "@mui/material";
import Particles from "../components/Particles";
import Divider from "@mui/material/Divider";
import "../styles.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Card from "@mui/material/Card";

const Home = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        id="title"
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <Typography color="primary" variant="h2">
            Hello I'm Riyad.
          </Typography>
        </Grid>
        <Grid>
          <Typography color="primary" variant="h2" display="block">
            I am a CS Student.
          </Typography>
        </Grid>
        <Grid paddingTop={30}>
          <ArrowCircleDownIcon
            fontSize="large"
            color="primary"
          ></ArrowCircleDownIcon>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item marginBottom={10}>
          <Particles id="tsparticles" />
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography color="primary" variant="h4" fontWeight={500}>
              About me
            </Typography>
            <Divider sx={{ borderBottomWidth: 5, paddingTop: 1 }} />
          </Grid>
          <Grid item paddingTop={2}>
            <Typography variant="h5" align="center" maxWidth={800}>
              I am a Computer Science Student at CSU Long Beach. Focusing on
              improving my coding skills along with my knowledge about
              networking and servers.
            </Typography>
          </Grid>
          <Grid
            item
            paddingTop={6}
            justifyItems="center"
            alignItems="center"
            align="center"
          >
            <Typography
              color="primary"
              variant="h4"
              fontWeight={500}
              align="center"
            >
              Projects
            </Typography>
            <Divider
              sx={{
                borderBottomWidth: 5,
                paddingTop: 1,
                maxWidth: 300,
                textAlign: "center",
              }}
            />
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={4}
                paddingTop={4}
              >
                <Grid item>
                  <Card sx={{ minWidth: 350, minHeight: 500 }}>Test</Card>
                </Grid>

                <Grid item>
                  <Card sx={{ minWidth: 350, minHeight: 500 }}>Test</Card>
                </Grid>
                <Grid item>
                  <Card sx={{ minWidth: 350, minHeight: 500 }}>Test</Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
