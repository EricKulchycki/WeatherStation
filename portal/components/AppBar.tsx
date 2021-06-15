import { Box, Header, Heading } from "grommet";
import { Cloud } from "grommet-icons";

const AppBar: React.FunctionComponent = () => {
  return (
    <Header responsive pad="0.5rem" background="brand" elevation="large">
      <Box direction="row" align="center" gap="1rem">
        <Cloud size="large" />
        <Heading level="3">WeatherBoi</Heading>
      </Box>
    </Header>
  );
};

export default AppBar;
