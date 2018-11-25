import React from 'react'
import fetch from 'fetch-jsonp'
import SearchLogo from '../../component/SearchLogo'
import SearchPanel from '../../component/SearchPanel'
import {connect} from 'react-redux';
import './index.less'


class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            autoList: [],
            autoIndex: 0,
            urls: ['https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q=', 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=', 'https://www.sogou.com/web?query='],
            url: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=',
            logoIndex: 1
        }
        console.log(this.props, '这里直接从render中获取了state');
    }

    // componentDidMount() {
    //     this.s1()
    // }
    //
    // async s1() {
    //     let res = await this.a1();
    //     await console.log(res);
    // }
    //
    // async a1() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('a1a1');
    //         }, 2000)
    //     })
    // }

    handelSelectLogo = index => {
        this.setState({
            url: this.state.urls[index]
        })
    };
    changeAutoIndex = index => {
        this.setState({
            autoIndex: index
        })
    };
    updateAutoList = (list) => {
        this.setState({
            autoList: list
        })
    };
    getAutoList = () => {
        fetch(`https://sug.so.360.cn/suggest?word=${this.state.text}&encodein=utf-8&encodeout=utf-8`, {method: 'GET'})
            .then(res => res.json()).then(data => {
            this.setState({autoList: data.s})
        })
    }
    changeInput = value => {
        this.setState({
            text: value
        })
    };
    search = () => {
        window.location.href = this.state.url + this.state.text;
    }

    render() {
        return (<div>
            <SearchLogo handelSelectLogo={this.handelSelectLogo}/>
            <SearchPanel changeAutoIndex={this.changeAutoIndex} autoList={this.state.autoList}
                         autoIndex={this.state.autoIndex} search={this.search} updateAutoList={this.updateAutoList}
                         changeInput={this.changeInput} getAutoList={this.getAutoList}/>
        </div>)
    }

}
//这里就是通过state从redux中得到一个有数据的对象，然后结构进props，下面直接state.music的话就是在props中直接props.musiclist
//而一般情况是得到一个{music:state.music}的对象，props.music.musiclist获取
export default connect(state => state.music, {})(Search)
