import React from "react";
import { useHistory } from "react-router-dom";

import discordLogo from "../../assets/discord-logo.svg";
import "./index.css";
import wave from "../../assets/wave.svg";
import { auth } from "../../config/environment";

import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { grey, deepPurple, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["A100"],
    },
  },
});

const useStyles = makeStyles({
  base: {
    background: "#303030",
    height: "100vh",
    backgroundImage: `url(${wave})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "abosolute",
    backgroundPositionY: "bottom",
    backgroundSize: "100%",
  },
  mainContent: {
    width: "100%",
    textAlign: "center",
    margin: "0 auto",
    paddingTop: "5rem",
  },
  title: {
    fontSize: "64px",
    color: "#f6f6f6",
    marginTop: "0",
  },
  subtext: {
    color: "#f6f6f6",
    width: "50%",
    margin: "0 auto",
    marginBottom: "3rem",
    fontSize: "22px",
  },
  button: {
    width: "350px",
    height: "100px",
    backgroundColor: "#7289DA",
    borderRadius: "50px",
  },
  discordLogo: {
    width: "50px",
    height: "50px",
    // marginRight: "25px",
  },
  iconBackground: {
    height: "55px",
    width: "55px",
    borderRadius: "50px",
    padding: "5px",
    backgroundColor: "#ecf0f1",
    marginRight: "25px",
  },
  buttonContent: {
    display: "flex !important",
    justifyContent: "space-evenly !important",
    alignItems: "center",
    color: "#f6f6f6",
  },
});

export function LandingPage(props) {
  const classes = useStyles();
  const history = useHistory();

  const buttonContent = (
    <div className={classes.buttonContent}>
      <div className={classes.iconBackground}>
        <img className={classes.discordLogo} src={discordLogo} alt="discord" />
      </div>
      <p>Sign in with Discord</p>
    </div>
  );

  return (
    <div className={classes.base}>
      <section className={classes.mainContent}>
        <h1 className={classes.title}>AuthED</h1>
        <article>
          <p className={classes.subtext}>
            Authenticate yourself using your Discord account to gain access to
            the AuthED Discord server. Once authenticated, you will receive a
            Verified role on the server shortly.
          </p>
          <ThemeProvider theme={theme}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              children={buttonContent}
              onClick={() => (window.location = auth)}
            />
          </ThemeProvider>
        </article>
      </section>
    </div>
  );
}
