import React from 'react'
import {Button} from 'antd'
import './index.less'
export  default  class Animation extends React.Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (<div className={'animation'}>
<Button>开始动画</Button>
        <div className={'angle'}/>
        <div className={'line'}/>
    </div>)
  }
}
