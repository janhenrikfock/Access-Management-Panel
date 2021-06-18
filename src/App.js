import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import { useOpenCompany } from './hooks/useOpenCompany'

function App() {
  const openCompany = useOpenCompany()
  return (
    <>
      <main className="gridContainer">
        <Sidebar {...openCompany} />
      </main>
    </>
  )
}

export default App
