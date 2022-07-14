import React from "react";
import Grid from "@mui/material/Grid";
import { CardActionArea, Typography } from "@mui/material";
import Container from "@mui/material";
import Particles from "../components/Particles";
import Divider from "@mui/material/Divider";
import "../styles.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import Vitrical from "../vitrical.png";
import Meteor from "../meteormusic.png";
import Dodo from "../digitaldodo.png";
import { CardActions } from "@mui/material";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaUnity,
  FaGithub,
  FaPython,
  FaJs,
  FaLinkedin,
} from "react-icons/fa";
import { SiCsharp, SiCplusplus, SiTypescript, SiTsnode } from "react-icons/si";
import { minWidth, width } from "@mui/system";

const vurl = "https://vitrical.com/";
const murl = "https://dryfettuccine.github.io/dryfettucine.github.io/";
const gurl = "https://github.com/dryfettuccine?tab=repositories";
const furl = "https://www.linkedin.com/feed/";

const Home = () => {
  return (
    <>
      <Grid container direction="column">
        <Card sx={{ maxHeight: 55, maxWidth: 25 }} id="icons">
          <FaGithub size={25} onClick={() => window.open(gurl)} />

          <FaLinkedin size={25} onClick={() => window.open(furl)} />
        </Card>
      </Grid>
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
          <Divider sx={{ borderBottomWidth: 5 }} />
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
                  <Card
                    sx={{
                      minWidth: 350,
                      minHeight: 450,
                      border: 4,
                      borderColor: "primary.main",
                    }}
                  >
                    <CardActionArea onClick={() => window.open(vurl)}>
                      <CardContent>
                        <Typography
                          color="primary"
                          variant="h4"
                          fontWeight={500}
                          align="center"
                        >
                          Vitrical Intern
                        </Typography>
                      </CardContent>
                      <CardContent>
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ maxWidth: 330 }}
                        >
                          I am currently working as an intern at Vitrical.
                          Specifically, I focus on frontend developement on the
                          main website, as well as API integration.
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        image={Vitrical}
                        sx={{ maxWidth: 350, maxHeight: 200 }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{
                      minWidth: 350,
                      minHeight: 450,
                      border: 4,
                      borderColor: "primary.main",
                    }}
                  >
                    <CardActionArea onClick={() => window.open(murl)}>
                      <CardContent>
                        <Typography
                          color="primary"
                          variant="h4"
                          fontWeight={500}
                          align="center"
                        >
                          Meteor Music
                        </Typography>
                      </CardContent>
                      <CardContent>
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ maxWidth: 330 }}
                        >
                          A radio style webapp which gathers many music
                          livestreams from Youtube for easy browsing on a single
                          page. Built with React.
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        image={Meteor}
                        sx={{ maxWidth: 350, maxHeight: 200 }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{
                      minWidth: 350,
                      minHeight: 450,
                      border: 4,
                      borderColor: "primary.main",
                    }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          color="primary"
                          variant="h4"
                          fontWeight={500}
                          align="center"
                        >
                          Digital Dodo
                        </Typography>
                      </CardContent>
                      <CardContent>
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ maxWidth: 330 }}
                        >
                          A work in progress 2D Top-Down Pixel RPG built in
                          Unity 2D using C# about a Cave Man and his dinosaur
                          enemies.
                        </Typography>
                      </CardContent>
                      <CardMedia
                        component="img"
                        image={Dodo}
                        sx={{ maxWidth: 350 }}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item paddingTop={6}>
              <Typography color="primary" variant="h4" fontWeight={500}>
                Skills and Langauges
              </Typography>
              <Divider
                sx={{
                  borderBottomWidth: 5,
                  paddingTop: 1,
                  maxWidth: 400,
                  textAlign: "center",
                }}
              />
            </Grid>
            <br></br>
            <Grid container direction="column">
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <FaReact size={70} />
                <FaHtml5 size={70} />
                <FaCss3 size={70} />
                <FaJs size={70} />
                <FaGithub size={70} onClick={() => window.open(gurl)} />
              </Grid>

              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop={2}
              >
                <FaUnity size={70} />
                <FaPython size={70} />
                <SiCplusplus size={70} />
                <SiCsharp size={70} />
                <SiTsnode size={70} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginTop={7}>
          <Divider
            sx={{
              borderBottomWidth: 5,
              paddingTop: 1,
              variant: "fullWidth",
              textAlign: "center",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
