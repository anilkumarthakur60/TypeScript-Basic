import { useState, ReactElement } from 'react'
import './App.css'
import Headings from './components/Heading'
import { Section } from './components/Section';
import Counter from './components/Counter';

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headings title={`ajkshas`} />
      <Section title='aksdhfd' >
        <div className="">
          <h4>Childrens</h4>
        </div>
      </Section>
      <Counter setCount={setCount} >
        Count is {count}
      </Counter>
    </>
  )
}

export default App
