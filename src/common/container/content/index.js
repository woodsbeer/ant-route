import React from 'react'
import {Layout} from 'antd'
// import Index from '../../pages/index'
// import WaterFall from '../../pages/waterfall'
import {Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable'
import './index.less'

const {Content} = Layout;
//自定义加载页面
const Loading = () => (<div>loading~~</div>);
const Index = Loadable({
  loader: () => import('../../pages/index'),
  loading: Loading,
});
const Fall = Loadable({
  loader: () => import('../../pages/waterfall'),
  loading: Loading,
});
const Music = Loadable({
  loader:()=>import('../../pages/music/index'),
  loading:Loading
});
const Search = Loadable({
  loader:()=>import('../../pages/search'),
  loading:Loading
});
const animation = Loadable({
    loader:()=>import('../../pages/search'),
    loading:Loading
});

export default MyContent => (<Content className={'content'} id='ccontent'>
  <Switch>
    {/*//虽然已经在/index中显示的页面了，但是子路由还是要是完整的，前面加上index*/}
    <Route exact path={'/index'} component={Index}/>
    <Route path={'/index/waterfall'} component={Fall}/>
    <Route path={'/index/music'} component={Music}/>
    <Route path={'/index/searchEngine'} component={Search}/>
  </Switch>
</Content>)

