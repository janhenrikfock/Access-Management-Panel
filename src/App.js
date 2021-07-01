import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Workerlist from './Components/Workerlist/Workerlist'
import Modal from './Components/Modal/Modal'
import NewWorkerForm from './Components/NewWorkerForm/NewWorkerForm'
import { useOpenCompany } from './hooks/useOpenCompany'
import { useOpenPerson } from './hooks/useOpenPerson'
import { useWorkers } from './hooks/useWorkers'
import { useRenderNewWorker } from './hooks/useRenderNewWorker'

function App() {
  const workers = useWorkers()
  const openCompany = useOpenCompany()
  const openPerson = useOpenPerson()
  const renderNewWorker = useRenderNewWorker()

  return (
    <>
      <main className="gridContainer">
        <Sidebar {...workers} {...openCompany} {...renderNewWorker} />
        <Workerlist {...openCompany} {...openPerson} />
        <Modal {...openPerson} {...workers} {...openCompany} />
        <NewWorkerForm {...renderNewWorker} {...workers} />
      </main>
    </>
  )
}

export default App
