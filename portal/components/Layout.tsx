import { makeStyles } from "@material-ui/core/styles";
import { Box, Toolbar, CssBaseline } from "@material-ui/core";

import AppBar from "./AppBar";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: "#e8e8e8",
    padding: theme.spacing(3),
  },
}));

const Layout: React.FunctionComponent = ({ children }) => {
  const styles = useStyles();
  return (
    <Box display="flex">
      <CssBaseline />
      <AppBar />
      <Menu />
      <main className={styles.content}>
        <Toolbar />
        {children}
      </main>
    </Box>
  );
};

export default Layout;
