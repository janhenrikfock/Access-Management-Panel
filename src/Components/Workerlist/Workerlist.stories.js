import React from 'react'
import Workerlist from './Workerlist'

export default {
  title: 'Workerlist/Workerlist',
  component: Workerlist,
}
const Template = (args) => <Workerlist {...args} />

export const Primary = Template.bind({})
Primary.args = {
  setOpenPerson: () => {
    return {
      name: 'Vorname',
      surname: 'Nachname',
      id: 765432,
      company: 'Firmenname',
      role: 'role',
      enddate: '20202020',
    }
  },
  openCompany: [
    {
      name: 'Vorname',
      surname: 'Nachname',
      id: 765432,
      company: 'Firmenname',
      role: 'role',
      enddate: '20202020',
    },
    {
      name: 'Vorname',
      surname: 'Nachname',
      id: 765432,
      company: 'Firmenname',
      role: 'role',
      enddate: '20202020',
    },
    {
      name: 'Vorname',
      surname: 'Nachname',
      id: 765432,
      company: 'Firmenname',
      role: 'role',
      enddate: '20202020',
    },
  ],
}
