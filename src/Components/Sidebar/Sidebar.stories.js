import React from 'react'

import Sidebar from './Sidebar'

export default {
  title: 'Sidebar',
  component: Sidebar,
}
const Template = (args) => <Sidebar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  sortedWorkers: [[], [], []],
  setopenCompany: {},
  setRenderNewWorker: false,
}
