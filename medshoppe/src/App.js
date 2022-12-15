import { Box, Flex, Image} from '@chakra-ui/react'
import './App.css';
import HealthcarePage from './Pages/Healthcare/HealthcarePage';
import OrderMedicinesPage from './Pages/OrderMedicines/OrderMedicinesPage';

function App() {
  return (
    <Box>
     {/* <HealthcarePage/> */}
     <OrderMedicinesPage/>
    </Box>
  );
}

export default App;


