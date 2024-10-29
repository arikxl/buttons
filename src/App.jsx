import { useState } from 'react'

import './App.css'
import Count from './components/Count'
import Button from './components/Button'


const numbers = [1, 2, 3, 444, 5, 6, -7, 8,22,354,6547,6865,867,8769,879,80,90998,75,6532,242];

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
        <Count count={count} />
      <div>
        <Button setCount={setCount} count={count} color="red" num={1} />
        <Button setCount={setCount} count={count} color="blue" num={10 } />
        <Button setCount={setCount} count={count} color="green" num={ -4} />
      </div>

      <hr />
      {
        numbers.map((num) => (
          <Button setCount={setCount} count={count} num={num} key={num } />
        ))
      }
    </>
  )
}

export default App
