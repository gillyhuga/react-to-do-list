import './App.css';
import {
  Box,
} from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <Box bgGradient='linear(blue.100 0%, transparent 25%)'>
      <Home />
    </Box>
  );
}

export default App;
