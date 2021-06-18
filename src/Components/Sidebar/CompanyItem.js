import './CompanyItem.css'
import folderIcon from '../../images/folder.svg'

export default function CompanyItem({ sectionName }) {
  return (
    <>
      <li className="companyFolder">
        <img className="itemLogo" src={folderIcon} alt="foldericon" />
        {sectionName}
      </li>
    </>
  )
}
