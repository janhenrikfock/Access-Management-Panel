import './Sidebar.css'
import CompanyItem from './CompanyItem'
import logo from '../../images/logo.svg'

export default function Sidebar({ workers }) {
  console.log(workers)
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="companyList">
        {Object.entries(workers).map(([sectionName, workers]) => (
          <CompanyItem sectionName={sectionName} />
        ))}
      </ul>
    </div>
  )
}
