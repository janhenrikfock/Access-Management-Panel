import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { workers } from './MockData/data'

function App() {
  return (
    <>
      <Header></Header>
      <main className="gridContainer">
        <Sidebar workers={workers} />
      </main>
    </>
  )
}

export default App
