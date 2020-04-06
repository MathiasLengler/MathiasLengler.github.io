import {createMuiTheme} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import orange from "@material-ui/core/colors/orange";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: orange,
  },
});

export default theme;
