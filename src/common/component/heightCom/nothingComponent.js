import  React from 'react'
import {withRouter} from "react-router-dom";
 class XX extends React.Component{
    constructor() {
        super(...arguments);
        this.state = {

        }
        console.log(this.props);
    }
    componentDidMount() {

    }
    render(){
        return(<div>
            我的type是{this.props.type}
            我的locationname是{this.props.history.location.pathname}
        </div>)
    }
}
export  default  withRouter(XX)