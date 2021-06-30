import React from 'react'

import Sidebar from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [
    (Sidebar) => (
      <div
        style={{
          width: '40vh',
        }}
      >
        <Sidebar />
      </div>
    ),
  ],
}
const Template = (args) => <Sidebar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sortedWorkers: {
    FirmaGmbH: [
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
      },
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
      },
    ],
    FirmenName: [
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
      },
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
      },
    ],
    CompanyName: [
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
      },
      {
        name: 'name',
        surname: 'surname',
        id: 765432,
        company: 'companyname',
        role: 'role',
        enddate: '20202020',
      },
    ],
  },
  setopenCompany: () => {
    return {
      name: 'name',
      surname: 'surname',
      id: 765432,
      company: 'companyname',
      role: 'role',
      enddate: '20202020',
    }
  },
  setRenderNewWorker: () => {
    return true
  },
}
