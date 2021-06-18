import './Sidebar.css'
import CompanyItem from './CompanyItem'
import logo from '../../images/logo.svg'
import { workers } from '../../MockData/data'

export default function Sidebar({ setOpenCompany }) {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="logo" />
      <ul className="companyList">
        {Object.entries(workers).map(([sectionName, worker]) => (
          <CompanyItem
            sectionName={sectionName}
            worker={worker}
            setOpenCompany={setOpenCompany}
          />
        ))}
      </ul>
    </div>
  )
}
