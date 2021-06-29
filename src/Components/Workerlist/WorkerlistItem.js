import './WorkerlistItem.css'
export default function WorkerlistItem({ companyMember, setOpenPerson }) {
  return (
    <li
      className="workerlist__workeritem"
      onClick={() => setOpenPerson(companyMember)}
    >
      <div className="workerlist__workeritem--icondata">
        <svg
          className="workerlist__listitem--iconcontainer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            className="workerlist__listitem--iconfill"
            data-name="Icon material-person"
            d="M18,18a6,6,0,1,0-6-6A6,6,0,0,0,18,18Zm0,3c-4.005,0-12,2.01-12,6v3H30V27C30,23.01,22.005,21,18,21Z"
            transform="translate(-6 -6)"
            fill="#878991"
          />
        </svg>
        <p className="workerlist__listitem--data">
          {companyMember.name + ' ' + companyMember.surname}
        </p>
      </div>
      <div className="workerlist__workeritem--icondata">
        <svg
          className="workerlist__listitem--iconcontainer"
          xmlns="http://www.w3.org/2000/svg"
          width="36.166"
          height="28.5"
          viewBox="0 0 36.166 28.5"
        >
          <path
            data-name="Icon awesome-id-card"
            d="M31.319,2.25H2.847A2.844,2.844,0,0,0,0,5.089v.946H34.166V5.089A2.844,2.844,0,0,0,31.319,2.25ZM0,25.911A2.844,2.844,0,0,0,2.847,28.75H31.319a2.844,2.844,0,0,0,2.847-2.839V7.929H0ZM20.879,12.188a.475.475,0,0,1,.475-.473H29.9a.475.475,0,0,1,.475.473v.946a.475.475,0,0,1-.475.473H21.354a.475.475,0,0,1-.475-.473Zm0,3.786a.475.475,0,0,1,.475-.473H29.9a.475.475,0,0,1,.475.473v.946a.475.475,0,0,1-.475.473H21.354a.475.475,0,0,1-.475-.473Zm0,3.786a.475.475,0,0,1,.475-.473H29.9a.475.475,0,0,1,.475.473v.946a.475.475,0,0,1-.475.473H21.354a.475.475,0,0,1-.475-.473ZM10.44,11.714a3.786,3.786,0,1,1-3.8,3.786A3.794,3.794,0,0,1,10.44,11.714ZM3.98,23.793a3.8,3.8,0,0,1,3.612-2.615h.486a6.125,6.125,0,0,0,4.722,0h.486A3.8,3.8,0,0,1,16.9,23.793a.932.932,0,0,1-.925,1.171H4.905A.934.934,0,0,1,3.98,23.793Z"
            transform="translate(1 -1.25)"
            fill="none"
            stroke="#878991"
            strokeWidth="1.6"
          />
        </svg>
        <p className="workerlist__listitem--data">
          Karte:{' ' + companyMember.card}
        </p>
      </div>
      <p className="workerlist__listitem--data">Role: {companyMember.role}</p>
    </li>
  )
}
