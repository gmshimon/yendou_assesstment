import {createContext, useState } from 'react';

interface CounterContextType {
    count: number;
    increment: () => void;
}
// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext<CounterContextType>(undefined)

export function ContextProvider({children}: {children: React.ReactNode}) {

    const [count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);
    
    return (
        <CounterContext.Provider value={{count, increment}}>
            {children}
        </CounterContext.Provider>
    )
}