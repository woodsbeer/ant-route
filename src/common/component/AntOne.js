import React from 'react'
import {AntoneCom} from '../component/heightCom'
import './antone.less'

export default class AntOne extends React.Component {
    constructor() {
        super(...arguments)
        console.log(this.props.location);
        this.state = {
            focusIndex: 0,
            input1: '',
            input2: '',
            input3: '',
            input4: '',
        }
    }

    componentDidMount() {
        // document.getElementsByClassName('mes')[0].focus();
    }

    handleKeyUp = e => {
        let index = this.state.focusIndex;
        if (e.keyCode === 8) {
            if (index > 0) {
                index = index-1;
                this.setState({focusIndex:index,[`input${index+1}`]: ''});
                return
            }
            else
                return
        }
        if (index <= 3)
            this.setState({[`input${index + 1}`]: e.keyCode, focusIndex: index + 1})
    };
    handleChange = e => {
        const index = e.target.dataset.index;
        this.setState({[`input${index}`]: e.target.value})
    }

    render() {
        const {focusIndex, input1, input2, input3, input4} = this.state;
        return (<div>
            antOneeeeeeeeeee {this.props.location.pathname}
            <AntoneCom/>
            <div className={'mes'}>

                <div className={'outInput'}><input  type="text" value={input1} data-index="1" maxLength={1}
                                                   onChange={this.handleChange}
                                                   className={'inputItem'}/></div>
                <div className={'outInput'}><input   type="text" value={input2} maxLength={1}
                                                   onChange={this.handleChange}
                                                   data-index="2"
                                                   className={'inputItem'}/></div>
                <div className={'outInput'}><input   type="text" value={input3} maxLength={1}
                                                   onChange={this.handleChange}
                                                   data-index="3"
                                                   className={'inputItem'}/></div>
                <div className={'outInput'}><input  type="text" value={input4} data-index="4" maxLength={1}
                                                   onChange={this.handleChange}
                                                   className={'inputItem'}/></div>
                {/*<div className={'outInput'}><input type="text" className={'inputItem'}/></div>*/}
                {/*<div className={'outInput'}><input type="text" className={'inputItem'}/></div>*/}
                {/*<div className={'outInput'}><input type="text" className={'inputItem'}/></div>*/}
            </div>
            <input type="text" className={'hiddle'} onKeyUp={this.handleKeyUp} autoFocus={true}/>
        </div>)
    }
}

