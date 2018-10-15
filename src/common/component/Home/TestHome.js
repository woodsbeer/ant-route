import React from 'react'
import {Link} from 'react-router-dom/es'
import './home.less'
class TestHome extends React.Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
        <div className={'testHome'}>
          <Link to={'/'}>home</Link><br/>
          <Link to={'/antOne'}>AntOne</Link><br/>
          <Link to={'/login'}>Login</Link>
          <Link to={'/number'}>Number</Link>
        </div>
    )
  }
}

export default TestHome

