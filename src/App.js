import React, {Component} from 'react';
import './App.less';
import './iconfont'
import createBrowserHistory from 'history/createBrowserHistory'
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom/es'
// import MyIndex from './container/index'
import Loadable from "react-loadable";
// import MyIndex from 'container/index/index'
// import MyIndex from '@/container/index'
const history = createBrowserHistory();
// const location = history.location;
const Loading = () => (<div>loading~~</div>);
const Home = Loadable({
    loader: () => import('./common/component/Home/TestHome'),
    loading: Loading,
});
const AntOne = Loadable({
    loader: () => import('./common/component/AntOne'),
    loading: Loading,
});
const Login = Loadable({
    loader: () => import('./common/component/login/login'),
    loading: Loading,
});
const Number = Loadable({
    loader: () => import('./common/component/antNumber/AntNumber'),
    loading: Loading,
});
const Index = Loadable({
    loader: () => import('./common/container/index'),
    loading: Loading,
});
class App extends Component {
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              {/*//在当前页面的最上面直接用一个Route检测路由，如果是'/',跳转home*/}
              <Route exact path={'/'} render={() => {
                return (<Redirect to={'/home'}/>)
              }}/>
              <Switch>
                {/*<Redirect to={'/home'}/>*/}
                <Route path='/home' component={Home}/>
                <Route path='/antOne' component={AntOne}/>
                <Route path='/login' component={Login}/>
                <Route path='/number' component={Number}/>
                <Route path='/index' component={Index}/>
              </Switch>
              {/*{location.hash}ddd*/}
            </div>

          </BrowserRouter>
        </div>
    );
  }
}

export default App;

