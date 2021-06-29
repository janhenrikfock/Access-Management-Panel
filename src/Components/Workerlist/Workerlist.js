import './Workerlist.css'
import WorkerlistItem from './WorkerlistItem'
import EmptyList from './EmptyList'

export default function Workerlist({ openCompany, setOpenPerson }) {
  // function changeSvgColor (defColor, activeColor){

  // }

  return openCompany ? (
    <div className="workerlist__container">
      <h2 className="workerlist__headline">{openCompany[0].company}</h2>
      <ul className="workerlist">
        {openCompany.map((companyMember) => (
          <WorkerlistItem
            key={companyMember.id}
            companyMember={companyMember}
            setOpenPerson={setOpenPerson}
          />
        ))}
      </ul>
    </div>
  ) : (
    <>
      <EmptyList />
    </>
  )
}
