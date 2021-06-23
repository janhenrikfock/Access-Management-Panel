import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Workerlist from './Components/Workerlist/Workerlist'
import Modal from './Components/Modal/Modal'
import { useOpenCompany } from './hooks/useOpenCompany'
import { useOpenPerson } from './hooks/useOpenPerson'
import { useWorkers } from './hooks/useWorkers'

function App() {
  const workers = useWorkers()
  const openCompany = useOpenCompany()
  const openPerson = useOpenPerson()

  return (
    <>
      <main className="gridContainer">
        <Sidebar {...workers} {...openCompany} />
        <Workerlist {...openCompany} {...openPerson} />

        <Modal {...openPerson} {...workers} />
      </main>
    </>
  )
}

export default App
