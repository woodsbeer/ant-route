import React from 'react'
import './index.less'
export default class SearchPanel extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {}
  }


  handelInputKey = e => {

      const {keyCode} = e;
      switch (keyCode){
        case 13: e.preventDefault(); this.props.search(); break;   //enter
        case 38: if (this.props.autoIndex===0) {this.props.changeAutoIndex(9) }else{this.props.changeAutoIndex(this.props.autoIndex-1)} break;             //up
        case 40:if (this.props.autoIndex===9) {this.props.changeAutoIndex(0) }else{this.props.changeAutoIndex(this.props.autoIndex+1)} break;               //down
      }
  }

  render() {
    console.log(this.props);
    return (<div className={'searchPanel'}>
      <div className={'panelLeft'}>
        <input type="text" className={'panelInput'} autoFocus onChange={e => {
          this.props.changeInput(e.target.value);
          this.props.getAutoList();
        }} onKeyDown={this.handelInputKey}/> <span className={'inputX'}>&times;</span>
        {this.props.autoList.length !== 0 ? <div className={'autoList'}>
          {this.props.autoList.map((value ,index)=> <div key={index} style={{backgroundColor:index===this.props.autoIndex?'yellow':'white'}} onClick={() => {
            this.props.changeInput(value);
            this.props.updateAutoList([])
          }
          } className={'autoItem'}>{value}</div>)}
        </div> : ''}

      </div>
      <div className={'panelRight'}>
        <button className={'searchButton'} onClick={this.props.search}>sousousou</button>
      </div>
    </div>)
  }
}

