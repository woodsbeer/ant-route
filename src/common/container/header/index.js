import React from 'react'
import {Icon, Layout, Menu} from 'antd'
import './index.less'
import * as screenFull from 'screenfull'
import {Link} from 'react-router-dom'

const {Header} = Layout
const {SubMenu} = Menu
export default class MyTop extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      user: ''
    }
  }

  componentWillMount() {
    this.setState({
      user: '小可爱'
    })
  }

  screenFullClick = () => {
    if (screenFull.enabled) {
      screenFull.request()
    }
  }

  render() {
    console.log('top刷新');
    console.log(this.props.collasped);
    return (
        <Header className={'header'} style={{background: 'white'}}>
          <Icon className='toggle' type={this.props.collasped ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}/>
          <Menu mode="horizontal" onClick={this.props.clear} className={'userMenu'}>
            <SubMenu title={<span><Icon type={'user'}/><span>{this.state.user}</span></span>}>
              <Menu.Item key={'loginOut'}><Link to={'/login'}/>退出 </Menu.Item>
            </SubMenu>
          </Menu>
          <Icon type={'arrows-alt'} onClick={this.screenFullClick} className={'screenFull'}/>
        </Header>
    )
  }
}

