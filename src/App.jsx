import { useState } from 'react'
import './App.css'
import Header from './Header'
import Container2 from './Container2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Header />
		<Container2 />
    </>
  )
}

export default App
