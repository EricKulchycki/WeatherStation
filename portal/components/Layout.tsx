import { Box, Main } from "grommet";

import AppBar from "./AppBar";
import Menu from "./Menu";

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <Box direction="column" height={{ min: "100vh" }}>
      <AppBar />
      <Box direction="row" flex="grow" background="#f8f8f8">
        <Menu />
        <Main pad="large" >{children}</Main>
      </Box>
    </Box>
  );
};

export default Layout;
