export default function Workerlist({ openCompany }) {
  console.log(openCompany)

  return openCompany ? (
    <ul>
      {openCompany.map((companyMember) => (
        <li key={companyMember.id}>
          {companyMember.name}+' '+{companyMember.surname}
        </li>
      ))}
    </ul>
  ) : (
    <p>no data available</p>
  )
}
