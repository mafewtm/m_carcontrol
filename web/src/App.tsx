import "@mantine/core/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Route, Routes } from 'react-router-dom';
import classes from './index.module.css';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Box className={classes.container}>
        <Box className={classes.main}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/roster" element={<Roster />} />
          </Routes>
        </Box>
      </Box>
    </MantineProvider>
  );
}
