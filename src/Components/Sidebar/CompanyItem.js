import './CompanyItem.css'
import folderIcon from '../../images/folder.svg'

export default function CompanyItem({ sectionName, worker, setOpenCompany }) {
  return (
    <>
      <li className="companyFolder" onClick={() => setOpenCompany(worker)}>
        <img className="itemLogo" src={folderIcon} alt="foldericon" />
        {sectionName}
      </li>
    </>
  )
}
