import React from "react";

import discordLogo from "../../assets/discord-logo.svg";

import Button from "@material-ui/core/Button";
import {
  createMuiTheme,
  withStyles,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});

const useStyles = makeStyles({
  button: {
    width: "350px",
    height: "100px",
    backgroundColor: "#2c2f33",
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
    backgroundColor: "whitesmoke",
    marginRight: "25px",
  },
  buttonContent: {
    display: "flex !important",
    justifyContent: "space-evenly !important",
    alignItems: "center",
  },
});

export function LandingPage(props) {
  const classes = useStyles();

  const buttonContent = (
    <div className={classes.buttonContent}>
      <div className={classes.iconBackground}>
        <img className={classes.discordLogo} src={discordLogo} />
      </div>
      <p>Sign in with Discord</p>
    </div>
  );

  return (
    <div>
      <h1>AuthED</h1>
      <article>
        <p>
          Authenticate yourself using your Discord account to gain access to the
          AuthED Discord server. Once authenticated, you will receive a Verified
          role on the server shortly.
        </p>
        <ThemeProvider theme={theme}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            children={buttonContent}
          />
        </ThemeProvider>
      </article>
    </div>
  );
}
