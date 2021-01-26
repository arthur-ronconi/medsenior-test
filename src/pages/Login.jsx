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
import { loginSchema } from "../validations/LoginValidation";

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

export const Login = () => {
  // CHECKBOX STATE
  const [checked, setChecked] = useState(false);

  // INPUT TYPE STATE
  const [inputType, setInputType] = useState("password");

  // TOGGLE PASSWORD VISIBILITY
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

  // STYLES
  const classes = useStyles();

  // FORM INPUT VALUES
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formIsValid, setFormIsValid] = useState();

  const submitHandler = async () => {
    let formData = {
      email: email,
      password: password,
    };
    const isValid = await loginSchema.isValid(formData);
    setFormIsValid(isValid);
  };

  useEffect(() => {
    if (formIsValid) {
      history.push("/in");
    } else {
      return;
    }
  }, [formIsValid]);

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
        {formIsValid === false && (
          <Grid item xs={12}>
            <small style={{ color: "red" }}>Email ou senha inválidos</small>
          </Grid>
        )}
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
              onClick={() => submitHandler()}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
