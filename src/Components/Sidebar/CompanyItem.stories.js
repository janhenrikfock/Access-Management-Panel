import React from 'react'

import CompanyItem from './CompanyItem'

export default {
  title: 'Sidebar/Listitem',
  component: CompanyItem,
}
const Template = (args) => <CompanyItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sectionName: 'Primary GmbH',
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
export const LongName = Template.bind({})
LongName.args = {
  sectionName: 'Sehr langer Firmenname GmbH & Co.KG',
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
export const ShortName = Template.bind({})
ShortName.args = {
  sectionName: 'OK AG',
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
