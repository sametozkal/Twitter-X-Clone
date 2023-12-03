import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './layout/Container'
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import Widget from './layout/Widget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Container> 
         
         <Sidebar/>
         <Content/> 
         <Widget/>

         

        </Container>

    </>
    )
}

export default App
