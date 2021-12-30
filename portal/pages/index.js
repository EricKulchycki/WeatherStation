import { useEffect, useState } from 'react';
import { Box, Card, Heading } from "grommet";
import Layout from "../components/Layout";
import Reading from '../components/Reading';
import ReadingsGraph from '../components/ReadingsGraph';
import { useSocket } from '../hooks';

export default function Home() {
  const socket = useSocket("http://localhost:8080");
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    if (socket) {
      const readings = socket.service("readings");
      readings.find().then(data => {
        setReadings(data);
        console.log({ message: "Recieved existing data", data });
      });

      readings.on("created", (payload) => {
        setReadings(prev => {
          return [
            ...prev,
            payload
          ]
        });
        console.log({ message: "Reading Created", payload });
      });
    }
  }, [socket]);

  console.log(readings);

  return (
    <Layout>
      <Box direction='row' gap="large">
        <Box width="20%">
          <Heading level="3">Readings</Heading>
          <Card>
            {readings.map((reading, idx) => (
              <Reading key={`${reading.id}-${reading.created_at}`} reading={reading} isLast={idx === readings.length - 1} />
            ))}
          </Card>
        </Box>
        <Box width="80%">
          <Heading level="3">Graph</Heading>
          <Card background="white" pad="1rem">
            <ReadingsGraph readings={readings} />
          </Card>
        </Box>
      </Box>
    </Layout >
  );
}
