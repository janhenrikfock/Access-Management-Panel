import React from 'react'

import NewWorkerForm from './NewWorkerForm'

export default {
  title: 'Modal New Worker/NewWorkerForm',
  component: NewWorkerForm,
}
const Template = (args) => <NewWorkerForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  renderNewWorker: () => {
    return true
  },
  setRenderNewWorker: () => {
    return true
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
