import { Box } from "grommet";
import { DateTime } from "luxon";

import { Reading } from '../types';

interface Props {
  reading: Reading;
  isLast: boolean;
}

const Reading: React.FC<Props> = (props) => {
  const { isLast, reading } = props;
  return (
    <Box background="white" pad="1rem" border={{ side: 'bottom', color: `rgb(0,0,0,${isLast ? 0 : 0.1})` }}>
      <Box margin="0 0 0.25rem 0" style={{ fontSize: '0.8rem', color: 'rgb(0,0,0,0.8)', fontWeight: '500' }}>
        {DateTime.fromISO(reading.created_at).toLocaleString(DateTime.DATETIME_FULL)}
      </Box>
      <Box direction="row" gap="large">
        <Box>
          <Box style={{ fontSize: "0.9rem", color: "rgb(0,0,0,0.8)" }}>Temperature</Box>
          <Box style={{ fontSize: "1.1rem", fontWeight: 'bold' }}>{reading.temp}&#8451;</Box>
        </Box>
        <Box>
          <Box style={{ fontSize: "0.9rem", color: "rgb(0,0,0,0.8)" }}>Humidity</Box>
          <Box style={{ fontSize: "1.1rem", fontWeight: 'bold' }}>{reading.humidity}%</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Reading;