import React from 'react'
import CompanyItem from './CompanyItem'
import { useOpenCompany } from '../../hooks/useOpenCompany'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Sidebar/Listitem',
  component: CompanyItem,
}
const Template = (args) => <CompanyItem {...args} />

export const CompanyNames = Template.bind({})

CompanyNames.args = {
  sectionName: 'Sehr langer Firmanname GmbH',

  worker: {
    name: 'name',
    surname: 'surname',
    id: 765432,
    company: 'companyname',
    role: 'role',
    enddate: '20202020',
  },
}
