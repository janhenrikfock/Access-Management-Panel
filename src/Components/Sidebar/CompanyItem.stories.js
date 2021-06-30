import React from 'react'

import CompanyItem from './CompanyItem'

export default {
  title: 'Sidebar/Listitem',
  component: CompanyItem,
}
const Template = (args) => <CompanyItem {...args} />

export const CompanyNames = Template.bind({})

CompanyNames.args = {
  sectionName: 'Sehr langer Firmenname GmbH',
  setOpenCompany: () => {
    return {
      name: 'name',
      surname: 'surname',
      id: 765432,
      company: 'companyname',
      role: 'role',
      enddate: '20202020',
    }
  },
  worker: {
    name: 'name',
    surname: 'surname',
    id: 765432,
    company: 'companyname',
    role: 'role',
    enddate: '20202020',
  },
}
