import React from 'react'
import './index.less'
import {Layout} from 'antd'

const {Footer} = Layout
export default class Bottom extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      time: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    const time = this.state.time;
    this.setState({time: time + 1})
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (<Footer className={'myFooter'}>
      <span className={'text'}>你在小窝停留了<span className={'time'}>{this.state.time}s</span> <span
          className={'name'}>by --子馨</span></span>
    </Footer>)
  }
}

