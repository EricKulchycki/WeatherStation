import { DataChart } from 'grommet';
import { Reading } from '../types';

interface Props {
  readings: Reading[]
}

const ReadingsGraph: React.FC<Props> = (props) => {
  const { readings } = props;
  return (
    <DataChart
      data={readings}
      series={['created_at', 'temp', 'humidity']}
      chart={[
        { property: 'temp', type: 'line', opacity: 'medium', thickness: 'xsmall' },
        { property: 'humidity', type: 'line', opacity: 'medium', thickness: 'xsmall' }
      ]}
      guide={{ x: { granularity: 'fine' } }}
      detail
    />
  )
}

export default ReadingsGraph;