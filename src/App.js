import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Header></Header>
      <main className="gridContainer">
        <Sidebar></Sidebar>
      </main>
    </>
  )
}

export default App
