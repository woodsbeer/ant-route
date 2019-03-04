import React, {Component} from 'react';
import './App.less';
import createBrowserHistory from 'history/createBrowserHistory'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom/es'
import MtHome from './common/component/Home/TestHome'
import AntOne from './common/component/AntOne'
import Login from './common/component/login/login'
import Number from './common/component/antNumber/AntNumber'
// import MyIndex from './container/index'
import MyIndex from './common/container/index'
// import MyIndex from 'container/index/index'
// import MyIndex from '@/container/index'
const history = createBrowserHistory();
const location = history.location;

console.log('container');

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        {/*//在当前页面的最上面直接用一个Route检测路由，如果是'/',跳转home*/}

                        <Switch>
                            <Route exact path={'/'} render={() => {
                                return (<Redirect to={'/home'}/>)
                            }}/>
                            {/*<Redirect to={'/home'}/>*/}
                            <Route path='/home' component={MtHome}/>
                            <Route path='/antOne' component={AntOne}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/number' component={Number}/>
                            <Route path='/index' component={MyIndex}/>
                        </Switch>
                        {/*{location.hash}ddd*/}
                    </div>

                </BrowserRouter>
            </div>
        );
    }
}

export default App;

