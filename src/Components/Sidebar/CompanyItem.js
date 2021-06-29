import './CompanyItem.css'

export default function CompanyItem({ sectionName, worker, setOpenCompany }) {
  return (
    <>
      <li
        className="companylist__listelement"
        onClick={() => setOpenCompany(worker)}
      >
        <svg
          className="companylist__listelement--logocontainer"
          xmlns="http://www.w3.org/2000/svg"
          width="32.567"
          height="29.147"
          viewBox="0 0 32.567 29.147"
        >
          <path
            className="companylist__listelement--logo"
            id="Icon_feather-folder"
            data-name="Icon feather-folder"
            d="M32.567,27.742a2.931,2.931,0,0,1-2.957,2.905H5.957A2.931,2.931,0,0,1,3,27.742V7.405A2.931,2.931,0,0,1,5.957,4.5h7.392l2.957,4.358H29.61a2.931,2.931,0,0,1,2.957,2.905Z"
            transform="translate(-1.5 -3)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>

        <p className="companylist__listelement--companyname">{sectionName}</p>
      </li>
    </>
  )
}
