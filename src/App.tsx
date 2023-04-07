import {useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef} from "react";

interface User {
    id: number;
    username: string;
}

function App() {
    // const  [count, setCount] = useState<User[]|null>(null);
    // const  [count, setCount] = useState<User>(null);
    // const  [count, setCount] = useState<User>({} as User);
    const [count, setCount] = useState<number>(0);
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {

        console.log('-----', users)
        return () => {
            console.log("unmount");
        }

    }, [users])


    const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {

        setCount((val) => val + 2)

    }, [])


    type fibFunc = (n: number) => number

    const fib: fibFunc = (n) => {
        if (n < 2) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }


    const myNum: number = 37
    const result: number = useMemo<number>(() => {
        return fib(myNum)
    }, [myNum])


    // const inputRef = useRef<HTMLInputElement>(null!) //non  null assettion

    const inputRef = useRef<HTMLInputElement>(null)

    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)

    return (
        <div>
            <h1>React Typescript</h1>
            <pre>
        {JSON.stringify(count, null, 2)}
      </pre>
            <button onClick={addTwo}>Increment</button>

            <h2>{result}</h2>
            <button onClick={() => setCount((val) => val + 1)}>Increment</button>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default App;