import React from 'react'
import EmptyList from './EmptyList'

export default {
  title: 'Workerlist/Emptylist',
  component: EmptyList,
}
const Template = (args) => <EmptyList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
