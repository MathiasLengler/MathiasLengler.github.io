import {AppProps} from 'next/app'
import React from "react";
import {createStyles, makeStyles, Theme, ThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container, CssBaseline} from '@material-ui/core';
import Head from 'next/head';
import theme from '../theme';


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

const Header: React.FunctionComponent<{ pageProps: any }> = ({pageProps}) => {
  const classes = useStyles();

  return (
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
  );
};


const MyApp: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{pageProps?.title ?? "Mathias Lengler"}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <Header pageProps={pageProps}/>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default MyApp
