import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Grid } from "@mui/material";
import Container from "@mui/material";
import { Typography } from "@mui/material";
import "../styles.css";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            radius: 50,
          },
        },
      },
      particles: {
        color: {
          value: "#7bd1ca",
        },
        links: {
          enable: true,
          distance: 100,
          color: "#7bd1ca",
        },
        move: {
          enable: true,
          speed: { min: 1, max: 5 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);
  return (
    <div>
      <Grid container>
        <Grid item id={props.id}>
          <Particles init={particlesInit} options={options} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ParticlesComponent;
