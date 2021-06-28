import './Sidebar.css'
import CompanyItem from './CompanyItem'
import logo from '../../images/logo.svg'

export default function Sidebar({
  sortedWorkers,
  setOpenCompany,
  setRenderNewWorker,
}) {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="companyList">
        {Object.entries(sortedWorkers).map(([sectionName, worker]) => (
          <CompanyItem
            key={sectionName}
            sectionName={sectionName}
            worker={worker}
            setOpenCompany={setOpenCompany}
          />
        ))}
      </ul>
      <div className="container__button--newworker">
        <button
          className="button--newWorker"
          onClick={() => setRenderNewWorker(true)}
        >
          Neuer Mitarbeiter
        </button>
      </div>
    </div>
  )
}
