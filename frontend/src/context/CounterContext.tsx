import {CreateContext, useContext, useState } from 'react';

interface CounterContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
}
export const CounterContext = CreateContext<CounterContextType>(undefined)

export function ContextProvider({children}: {children: React.ReactNode}) {

    const [count, setCount] = useState(0);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    
    return (
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}