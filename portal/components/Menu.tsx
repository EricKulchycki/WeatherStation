import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Toolbar,
} from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import DataUsageIcon from "@material-ui/icons/DataUsage";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Menu: React.FunctionComponent = (props) => {
  const styles = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={styles.drawer}
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <Toolbar />
      <List style={{ paddingTop: "2rem" }}>
        <ListItem button>
          <ListItemIcon>
            <EqualizerIcon />
          </ListItemIcon>
          <ListItemText>Graph View</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DataUsageIcon />
          </ListItemIcon>
          <ListItemText>Data View</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
