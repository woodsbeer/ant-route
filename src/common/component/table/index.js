import React from 'react'
import './index.less'
import {
  Table,
  Icon,
  Tooltip,
} from 'antd'
export  default  class MyHome extends React.Component {
  constructor() {
    super(...arguments)

  }

  render() {
    return (<Table columns={this.props.header} dataSource={this.props.data} />)
  }
}