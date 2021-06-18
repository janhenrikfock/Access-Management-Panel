import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Workerlist from './Components/Workerlist/Workerlist'
import { useOpenCompany } from './hooks/useOpenCompany'

function App() {
  const openCompany = useOpenCompany()
  // openCompany.openCompany
  //   ? console.log(openCompany.openCompany)
  //   : console.log('nichts drin')
  return (
    <>
      <main className="gridContainer">
        <Sidebar {...openCompany} />
        <Workerlist {...openCompany} />
      </main>
    </>
  )
}

export default App
