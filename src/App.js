import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import { workers } from './MockData/data'

function App() {
  return (
    <>
      <main className="gridContainer">
        <Sidebar workers={workers} />
      </main>
    </>
  )
}

export default App
