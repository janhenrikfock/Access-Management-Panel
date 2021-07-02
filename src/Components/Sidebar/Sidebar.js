import './Sidebar.css'
import PropTypes from 'prop-types'
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
Sidebar.propTypes = {
  sortedWorkers: PropTypes.object,
  setOpenCompany: PropTypes.func,
  setRenderNewWorker: PropTypes.func,
}
