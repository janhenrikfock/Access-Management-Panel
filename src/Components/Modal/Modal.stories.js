import React from 'react'

import Modal from './Modal'

export default {
  title: 'Adjust Worker/Workerdata',
  component: Modal,
}
const Template = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  openPerson: {
    name: 'name',
    surname: 'surname',
    id: 765432,
    company: 'companyname',
    role: 'role',
    enddate: '20202020',
    card: 470826,
  },
  setOpenPerson: () => {
    return {
      name: 'name',
      surname: 'surname',
      id: 765432,
      company: 'companyname',
      role: 'role',
      enddate: '20202020',
      card: 470826,
    }
  },
  workers: [
    {
      name: 'name',
      surname: 'surname',
      id: 765432,
      company: 'companyname',
      role: 'role',
      enddate: '20202020',
      card: 470826,
    },
    {
      name: 'name',
      surname: 'surname',
      id: 765432,
      company: 'companyname',
      role: 'role',
      enddate: '20202020',
      card: 470826,
    },
  ],
  setWorkers: () => {
    return [
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
        card: 470826,
      },
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
        card: 470826,
      },
    ]
  },
}
