import { useState, ReactElement } from 'react'
import './App.css'
import Headings from './components/Heading'
import { Section } from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

function App(): ReactElement {
  const [count, setCount] = useState(0)

  const lists = [
    {
      name: 'A',
      age: 10
    },
    {
      name: 'B',
      age: 20
    },
    {
      name: 'C',
      age: 30

    }
  ]

  const render = (item: {
    name: string,
    age: number
  }) => {

    return <span className='gold'>{item.name},{item.age}</span>
  }


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
      {/* <List items={lists} render={(item: string) => <span className='gold'>{item}</span>} /> */}
      <List items={lists} render={(val) => render(val)} />
    </>
  )
}

export default App
