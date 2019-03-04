import React from 'react'
import './index.less'
import menu from '../../utils/menu'
import {Icon, Layout, Menu, Switch} from 'antd'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import Top from '../header'
import Bottom from "../footer";
import Content from '../content'

const SubMenu = Menu.SubMenu;
const {Sider} = Layout
export default class MyIndex extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            mode: 'inline',
            theme: 'dark',
            collapsed: false,
            current: 'index'
        }
    }

    clear = (e) => {
        //只有我们要退出的时候才在state中清空被选中的菜单数据
        if (e.key === 'loginOut') {
            this.setState({
                current: 'index'
            })
        }
    };
    toggle = () => {
        console.log('改变前。当前的collapsed是', this.state.collapsed);
        const collapsed = this.state.collapsed;
        this.setState({
            collapsed: !collapsed,
            mode: collapsed ? 'inline' : 'vertical'
        }, () => {
            console.log('改变了。当前的collapsed是', this.state.collapsed);  //把这个log放在回调函数里才会打印出和上面不一样的值
            //如果是在setState的后面调用log，打印的值是不变的，因为state的更改是异步的
        });
    };
    switchChange = value => {
        this.setState({
            theme: value ? 'light' : 'dark'
        })
    };
    chickItem = (e) => {
        this.setState({
            current: e.key
        })
        console.log(e.key);
    };

    render() {
        const logoTheme = classNames(this.state.theme, 'google');//外部
        const spanTheme = classNames(this.state.theme, 'span'); //外部
        const menuTheme = classNames('menu');  //面板里面
        const theme = this.state.theme;
        return (
            <Layout className={'index'}>
                <Sider
                    className={'sider'}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    {/*{this.state.theme === 'light'?<:}*/}
                    <a href="https://www.baidu.com" target='_blank'>
                        <Icon type={'google'} className={logoTheme}/>
                    </a>
                    <span className={spanTheme}>小麋鹿</span>
                    <Menu
                        theme={this.state.theme}
                        onClick={this.chickItem}
                        defaultOpenKeys={['index']}
                        selectedKeys={[this.state.current]}  //key值为什么会变色（被选中的时候就把key值设置为state的current）
                        className={menuTheme}
                        mode={this.state.mode}
                    >
                        {
                            menu.map(value => {
                                if (value.children && value.children.length) {
                                    return (
                                        <SubMenu key={value.url}
                                                 title={<span><Icon
                                                     type={value.icon}/><span>{value.name}</span></span>}>
                                            {value.children.map(sv =>
                                                (<Menu.Item key={sv.url}><Link to={`/${sv.url}`}/>{sv.name}</Menu.Item>)
                                            )}
                                        </SubMenu>
                                    )
                                }

                                return <Menu.Item key={value.url}><Link
                                    to={`/${value.url}`}><Icon
                                    type={value.icon}/><span>{value.name}</span></Link></Menu.Item>
                            })
                        }
                    </Menu>
                    <Switch className={'switch'} checked={theme === 'light'} checkedChildren={'light'}
                            unCheckedChildren={'dark'} onChange={this.switchChange}/>
                </Sider>
                <Layout>
                    <Top toggle={this.toggle} collasped={this.state.collapsed} clear={this.clear}/>
                    <Content/>
                    <Bottom/>
                </Layout>
            </Layout>
        )
    }
}

