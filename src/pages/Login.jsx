import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Container,
  Typography,
  InputAdornment,
  Checkbox,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { theme } from "../global-styles/theme";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#616161",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFields: {},
  logo: {
    width: "100%",
    paddingBottom: "32px",
  },
  button: {
    marginTop: "32px",
  },
}));

export const Login = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [inputType, setInputType] = useState("password");
  useEffect(() => {
    if (checked) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [checked]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const history = useHistory();
  const Login = () => {
    history.push("/in");
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
        <Grid item xs={12}>
          <Typography variant="h5" align="center" color="secondary">
            Entrar
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField id="email" label="Email" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Senha"
            variant="filled"
            type={inputType}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    icon={<Visibility />}
                    checkedIcon={<VisibilityOff />}
                    color="default"
                    inputProps={{ "aria-label": "Toggle visibility" }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <small>
            Não possui conta ainda?{" "}
            <Link
              to="/register"
              style={{
                color: theme.palette.secondary.main,
                textDecoration: "none",
              }}
            >
              Registre-se aqui
            </Link>
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              className={classes.button}
              onClick={() => Login()}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
