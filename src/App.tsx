import { useState } from 'react'
import Counter from './components/counter'
import Heading from './components/heading'
import List from './components/list'
import { Section } from './components/section'

function App() {
  const [count, setCount] = useState<number>(1)
  return (
    <div>
      <Heading title={'Hello'} />
      <Section> This is my section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={['Coffee', 'Tacos', 'Code']}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  )
}

export default App
