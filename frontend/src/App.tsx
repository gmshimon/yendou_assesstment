import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@chakra-ui/react/preset';

function App() {

  return (
   <ChakraProvider value={system}>
        <h1>Hello World</h1>
   </ChakraProvider>
  )
}

export default App
