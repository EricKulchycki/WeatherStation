import { useEffect } from "react";
import { Box } from "grommet";
import Layout from "../components/Layout";
import { useSocket } from "../components/hooks";

export default function SocketPage() {
  const socket = useSocket("http://weatherboi.local:8080");

  useEffect(() => {
    function handleEvent(payload) {
      console.log(payload);
    }
    if (socket) {
      socket.on("recieve_data", handleEvent);
    }
  }, [socket]);

  return (
    <Layout>
      <Box minHeight="100vh">
        <Box maxWidth="500px">Socket Page!</Box>
      </Box>
    </Layout>
  );
}
