import { useState, ReactElement } from 'react'
import './App.css'
import Headings from './components/Heading'
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

function App(): ReactElement {
  const [count, setCount] = useState(0)

  const lists = [
    'hello',
    'world',
    'this',
    'is',
    'a',
    'list'

  ]

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
      <List items={lists} render={(item: string) => <span className='gold'>{item}</span>} />
    </>
  )
}

export default App
