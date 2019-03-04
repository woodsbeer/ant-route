import  React from 'react'
import  NothingCom from './nothingComponent.js'
const getCom = (Component,type)=> class XX extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render(){
        return(<Component type={type}/>)
    }
}
export const NumberCom =  getCom(NothingCom,'number');
export const AntoneCom = getCom(NothingCom,'antone');