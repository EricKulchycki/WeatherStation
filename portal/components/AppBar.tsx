import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as AB,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const AppBar: React.FunctionComponent = () => {
  const styles = useStyles();

  return (
    <>
      <CssBaseline />
      <AB position="fixed" className={styles.appBar}>
        <Toolbar>
          <Typography variant="h4">WeatherBoi</Typography>
        </Toolbar>
      </AB>
    </>
  );
};

export default AppBar;
