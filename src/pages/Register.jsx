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
import { useHistory } from "react-router-dom";

// STYLES
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

export const Register = () => {
  // FORM
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [registered, setRegistered] = useState(false);

  // CHECKBOX STATE
  const [checked, setChecked] = useState(false);

  // TOGGLE VISIBILITY
  const [inputType, setInputType] = useState("password");
  useEffect(() => {
    if (checked) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  }, [checked]);

  // CHECKBOX HANDLER
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // ROUTER
  const history = useHistory();
  const Register = async () => {
    if (password === confirmedPassword) {
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const message = await response.json();
      if (message.code === 200) {
        setRegistered(true);
      } else {
        setRegistered(false);
      }
    }
  };

  // STYLES
  const classes = useStyles();

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
            Novo Registro
          </Typography>
        </Grid>
        {registered && (
          <Grid item xs={12}>
            <Typography variant="h6" align="center" color="secondary">
              Usuário registrado com sucesso
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className={classes.button}
              onClick={() => history.push("/")}
            >
              Voltar para login
            </Button>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="Senha"
            variant="filled"
            type={inputType}
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
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
          <TextField
            id="confirmPassword"
            label="Confirmar senha"
            variant="filled"
            type="password"
            fullWidth
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />
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
              onClick={() => Register()}
            >
              Registrar-se
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
