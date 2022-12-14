
import './App.css';
import { Cart } from './Components/Cart/Cart';
import Form from "./Components/LogInPages/Form"
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
    
    <ChakraProvider>
      <Cart/>
      <div>
      <Form/>
      </div>
      
    </ChakraProvider>
    
    
    </>
  );
}

export default App;
