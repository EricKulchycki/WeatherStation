import { Box, Container } from "@material-ui/core";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Box minHeight="100vh">
        <Container maxWidth="md">Hello!</Container>
      </Box>
    </Layout>
  );
}
