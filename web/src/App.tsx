import { Box } from '@mantine/core';
import classes from './index.module.css';
import Controls from './components/Controls';

export default function App() {
  return (
    <Box className={classes.container}>
      <Controls />
    </Box>
  );
}
