import { ChakraProvider } from '@chakra-ui/react';
import { ContextProvider as CounterProvider } from './context/CounterContext';
import { system } from './theme/theme';
import '@fontsource/syne/400.css';
import '@fontsource/syne/500.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import Counter from './components/Counter';

function App() {

  return (
   <ChakraProvider value={system}>
    <CounterProvider>
        <Counter/>
    </CounterProvider>
   </ChakraProvider>
  )
}

export default App
