import { useState, ReactNode, useReducer, ChangeEvent } from "react";





type ChildrenType = {
    children: (num: number) => ReactNode
}

function Counter({ children }: ChildrenType) {

    const { state }



    return (
        <div>
            <p>You clicked {children(state.count)} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={handleInputChange} />
        </div>
    );
}

export default Counter;

