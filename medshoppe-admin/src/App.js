import './App.css';
import AllRoutes from './routes/AllRoute';
import { Box, Flex } from '@chakra-ui/react';
import {Sidebar} from './components/Sidebar';

function App() {
  return (
    <Flex className="App">
      <AllRoutes />
    </Flex>
  );
}

export default App;
