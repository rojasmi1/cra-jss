import React from "react";
import { ReactComponent as Logo } from "logo.svg";
import injectSheet from "react-jss";

const styles = theme => ({
  logo: {
    animation: "App-logo-spin infinite 20s linear",
    height: "7.5vmin"
  },
  header: {
    backgroundColor: theme.palette.primary,
    minHeight: "25vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  headerText: {
    fontSize: theme.typography.fontSizes.title.xs,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.white,
    [theme.breakpoints.sm]: {
      fontSize: theme.typography.fontSizes.title.sm
    },
    [theme.breakpoints.md]: {
      fontSize: theme.typography.fontSizes.title.md
    }
  }
});

const Header = props => {
  const { classes } = props;
  return (
    <header className={classes.header}>
      <Logo className={classes.logo} />
      <p className={classes.headerText}>
        React + JSS + Theming Starter Project
      </p>
    </header>
  );
};

export default injectSheet(styles)(Header);
