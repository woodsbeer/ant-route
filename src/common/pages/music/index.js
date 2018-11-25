import React from 'react'
import './index.less'
import {connect} from 'react-redux'
import {fetchMusic} from './redux/action'
import {Button, Modal} from 'antd'
import SearchBar from '../../component/SearchBar/index'
import Table from '../../component/table'
import {languageKindList, musicKindList, publishCountry, tableHeader} from '../../utils/musicDatas'
import moment from 'moment'

const {confirm} = Modal

class Music extends React.Component {
    constructor() {
        super(...arguments);
        console.log('constrctor');
        this.state = {
            addModal: false,
            editModal: false,
        }
    }

    fetchTableData = value => {
        this.props.fetchMusic({  // 默认是热歌版
            method: 'baidu.ting.billboard.billList',
            size: 100,
            type: value,
        })
    };
    getSearchData = () => ([{
        title: '歌曲类型',  //input前面的文字
        key: 'type',   //
        type: 'select',  //组件类型
        defaultValue: 2,  //默认值
        onChange: (value) => this.fetchTableData(value),
        items: musicKindList,
    }, {
        title: '发行国家',
        key: 'country',
        type: 'select',
        defaultValue: '全部',
        items: publishCountry,
    }, {
        title: '歌曲语种',
        key: 'language',
        type: 'select',
        defaultValue: '全部',
        items: languageKindList,
    }, {
        title: '发行时间段',
        key: ['start', 'end'],
        type: 'rangePicker',
    }]);
    musicSubmit = (datas) => {
        this.setState({fields: datas})
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps&&nextProps.musicList);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate',nextProps.musicList);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate',nextProps.musicList);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate',this.musicList);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        this.props.fetchMusic({  // 默认是热歌版
            method: 'baidu.ting.billboard.billList',
            size: 100,
            type: 2,
        })
        // console.log(this.props);
        // const {musicList} = this.props;
        // this.setState({musicList:this.props.musicList})
    }


    render() {
        let list = this.props.musicList;
        //下面的filter方法不会修改原数组。每次都是直接赋值仅仅是更改list对应的内存地址，不会对原list的数据有影响
        const field = this.state.fields;  //注意，field里面存的值是真实的数据，不是显示的那个值
        //这里做这么多判断是为了只匹配有值的选项，如果为空值就忽略掉
        if (field && field['country'] && field['country'].toString() !== '0') {
            list = list.filter(value =>
                value['country'] === publishCountry.find(value => value.value === parseInt(field['country'])).mean
            )
        }
        if (field && field['language'] && field['language'].toString() !== '0') {
            list = list.filter(value =>
                value['language'] === languageKindList.find(value => value.value === parseInt(field['language'])).mean
            )
        }
        if (field && field['start']) {
            list = list.filter(value =>
                value['publishtime'] >= moment(field.start) && value['publishtime'] <= moment(field.end)
            )
        }
        return (
            <div>
                <SearchBar searchData={this.getSearchData()} submitHandle={this.musicSubmit}/>
                <div className={'addDiv'}><Button className={'addBut'}>add</Button></div>
                <div style={{padding: 5}}>
                    <Table header={tableHeader} data={list}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        musicList: state.music.musicList,
        store: state
    }), {fetchMusic}
)(Music)

