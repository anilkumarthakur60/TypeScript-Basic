import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Name1, Name2} from './NameExportFile.jsx'
import DefaultExportName from "./DefaultExport.jsx";
import DefaultExport1,{NameExport1} from "./CombinedExportExample.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

            </div>
            <Name1/>
            <Name2/>
            <DefaultExportName/>
            <DefaultExport1/>
            <NameExport1/>

        </div>
    )
}

export default App
