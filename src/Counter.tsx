import { useState, ReactNode, useReducer, ChangeEvent } from "react";
import { useCounter, useCounterText } from "./context/CounterContext";





type ChildrenType = {
    children: (num: number) => ReactNode
}

function Counter({ children }: ChildrenType) {


    const { count, increment, decrement } = useCounter()
    const { text, handleTextInput } = useCounterText()


    return (
        <div>
            <p>You clicked {children(count)} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={handleTextInput} />
        </div>
    );
}

export default Counter;

