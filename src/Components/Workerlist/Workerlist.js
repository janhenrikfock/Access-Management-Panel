import './Workerlist.css'
import WorkerlistItem from './WorkerlistItem'
import EmptyList from './EmptyList'
import PropTypes from 'prop-types'

export default function Workerlist({ openCompany, setOpenPerson }) {
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
Workerlist.propTypes = {
  openCompany: PropTypes.array,
  setOpenPerson: PropTypes.func,
}
