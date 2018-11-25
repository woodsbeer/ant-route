import React from 'react'
import './index.less'

export default class SearchLogo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      logoIndex: 1,
      logos: [require('../../images/sougou_logo.png'), require('../../images/baidu_logo.png'), require('../../images/360_logo.png')],
      showList: false,
    }
  }

  handleClick = e => {
    const index = e.target.getAttribute('data-index');
    this.setState({logoIndex: index, showList: false}, () => this.props.handelSelectLogo(index));
  };
  handleShowList = () => {
    this.setState({showList: !this.state.showList})
  };
  li = () => {
    return this.state.logos.map((url, index) => <div key={index} className={'logoLi'} onClick={this.handleClick}>
      <img data-index={index} className={'logoList'} src={url} alt=""/></div>)
  };

  render() {
    return (
        <div className={'searchLogo'}>
          <img src={this.state.logos[this.state.logoIndex]} alt=""/>
          <span className={'selectToggle'} onClick={this.handleShowList}>
        <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-jiantouxia"/>
      </svg>
      </span>
          <div className={'selects'} style={{display: this.state.showList ? 'block' : 'none'}}>
            {this.li()}
          </div>
        </div>
    )
  }
}

