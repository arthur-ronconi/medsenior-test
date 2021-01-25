import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/Login.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#616161",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFields: {
    borderRadius: "0",
    "::before": {
      border: "none",
    },
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            fullWidth
            className={classes.inputFields}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="password" label="Senha" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <small>
            Não possui conta ainda? <Link to="/register">Registre-se aqui</Link>
          </small>
        </Grid>

        <Grid
          item
          container
          direction="row"
          justify="center"
          align="center"
          xs={12}
        >
          <Grid item xs={6}>
            <Button variant="contained" color="primary" size="large" fullWidth>
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
