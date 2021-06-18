export const personnel = [
  {
    name: 'Max',
    surname: 'Mustermann',
    id: 6760808750,
    card: 470826,
    role: 'admin',
    enddate: '20210286',
    company: 'Innovative ltd.',
  },
  {
    name: 'Marta',
    surname: 'Musterfrau',
    id: 6760808763,
    card: 789826,
    role: 'admin',
    enddate: '20210286',
    company: 'Innovative ltd.',
  },
  {
    name: 'Hermann',
    surname: 'Gibtsnicht',
    id: 6760808925,
    card: 470826,
    role: 'special',
    enddate: '20210286',
    company: 'GmbH',
  },
  {
    name: 'Gisela',
    surname: 'Example',
    id: 6760808703,
    card: 473580,
    role: 'special',
    enddate: '20210286',
    company: 'GmbH',
  },
  {
    name: 'Ursula',
    surname: 'Ausgedacht',
    id: 6760893610,
    card: 437056,
    role: 'constricted',
    enddate: '20210286',
    company: 'Innovative ltd.',
  },
  {
    name: 'Peter',
    surname: 'Pan',
    id: 6760807640,
    card: 479854,
    role: 'constricted',
    enddate: '20210286',
    company: 'GmbH',
  },
  {
    name: 'Cruella',
    surname: 'De Ville',
    id: 6760807634,
    card: 453409,
    role: 'none',
    enddate: '20210286',
    company: 'GmbH & co.KG.',
  },
  {
    name: 'Darkwing',
    surname: 'Duck',
    id: 6760762309,
    card: 673409,
    role: 'none',
    enddate: '20210286',
    company: 'Extralanger Name und Söhne GmbH & co.KG.',
  },
  {
    name: 'Mickey',
    surname: 'Mouse',
    id: 6760872309,
    card: 694409,
    role: 'none',
    enddate: '20210286',
    company: 'Zutech Innovation GmbH & co.KG',
  },
]
export const workers = personnel.reduce((res, person) => {
  if (!res[person.company]) {
    res[person.company] = []
  }
  res[person.company].push(person)
  return res
}, {})
