import React from 'react'
import WorkerlistItem from './WorkerlistItem'

export default {
  title: 'Workerlist/WorkerlistItem',
  component: WorkerlistItem,
}
const Template = (args) => <WorkerlistItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  companyMember: {
    name: 'Vorname',
    surname: 'Nachname',
    id: 765432,
    company: 'Firmenname',
    role: 'role',
    enddate: '20202020',
  },
  setOpenPerson: () => {
    return {
      name: 'name',
      surname: 'surname',
      id: 765432,
      company: 'companyname',
      role: 'role',
      enddate: '20202020',
    }
  },
}
