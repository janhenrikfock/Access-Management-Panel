import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Workerlist from './Components/Workerlist/Workerlist'
import { useOpenCompany } from './hooks/useOpenCompany'

function App() {
  const openCompany = useOpenCompany()

  return (
    <>
      <main className="gridContainer">
        <Sidebar {...openCompany} />
        <Workerlist {...openCompany} />
        <div className="menu"></div>
      </main>
    </>
  )
}

export default App
