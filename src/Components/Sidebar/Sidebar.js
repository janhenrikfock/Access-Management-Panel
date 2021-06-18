import './Sidebar.css'

export default function Sidebar({ workers }) {
  console.log(workers)
  return (
    <div className="sidebar">
      {Object.entries(workers).map(([sectionName, workers]) => (
        <div key={workers.id}>
          <h3>{sectionName}</h3>
        </div>
      ))}
    </div>
  )
}
