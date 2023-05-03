import { useState } from 'react'
import Header from './components/elements/Header/Header'
//import "./assets/styles/global.css"
import Footer from './components/elements/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Footer />
      </div>
    </>
  )
}

export default App
