import {AppProps} from 'next/app'
import React from "react";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container, CssBaseline} from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const MyApp: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  const classes = useStyles();

  return <>
    <CssBaseline/>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {pageProps?.title ?? "Mathias Lengler"}
        </Typography>
        <Typography variant="h6" className={classes.title}>
          TODO: Old links
        </Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md">
      <Component {...pageProps} />
    </Container>
  </>;
};

export default MyApp