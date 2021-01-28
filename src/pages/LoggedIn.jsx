import { useState, useEffect } from "react";
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#616161",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  inputFields: {},
  logo: {
    width: "100%",
    padding: "32px 0",
  },
  lastRow: {
    marginTop: "32px",
  },
}));
export const LoggedIn = () => {
  const [ip, setIp] = useState();
  const getIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    setIp(data.ip);
  };
  useEffect(() => {
    getIp();
  }, []);

  const classes = useStyles();

  const history = useHistory();

  const Logout = () => {
    history.push("/");
  };
  return (
    <Container className={classes.root} maxWidth="xs">
      <Grid container direction="column" spacing={2}>
        <Grid
          container
          direction="row"
          justify="center"
          align="center"
          item
          xs={12}
        >
          <Grid item xs={6}>
            <img
              src="/img/medsenior-logo.png"
              alt="MedSênior"
              className={classes.logo}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          direction="column"
          justify="space-between"
          spacing={2}
        >
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="primary">
                Bem Vindo!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="textPrimary">
                Agora você é um filiado!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="textPrimary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                odit odio. Nam, quia voluptatibus! Recusandae, quas vitae fugit
                nesciunt dolorem veritatis, illum aperiam rerum tempora quo
                quidem suscipit molestiae exercitationem.
              </Typography>
              <br />
              <Typography variant="body1" color="textPrimary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                odit odio. Nam, quia voluptatibus! Recusandae, quas vitae fugit
                nesciunt dolorem veritatis, illum aperiam rerum tempora quo
                quidem suscipit molestiae exercitationem.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        align="center"
        spacing={2}
        className={classes.lastRow}
      >
        <Grid item>
          <Typography variant="subtitle1" color="textSecondary">
            IP: {ip}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            className={classes.button}
            size="large"
            onClick={() => Logout()}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
