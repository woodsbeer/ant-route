import React from 'react'
import './index.less'
import {Button, DatePicker, Select} from 'antd'

export default class SearchBar extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      //每个表单的数据通过key,value存在state里面
      datas: {}
    }
  }

  searchChange = (data, value) => {
    let datas = this.state.datas;
    //再判断是否是数组的时候如果是长度0的数组要设置为undefine，也就是变更传入的参数，为了安全起见我们设一个临时变量进行操作
    let newValue = value;
    if (Array.isArray(value) && value.length === 0) {
      //如果是一个长度为零的数组要设置相应的值为undefined，让控件调用默认值
      //因为长度为0的数组也是可以通过if检测为有值，所以对他做特别检测
      newValue = undefined;
    }
    //如果是日期范围控件的话会是长度为2的数组key，以及长度为2的数组value
    if (typeof data.key !== 'string') {
      datas[data.key[0]] = newValue && newValue[0];
      datas[data.key[1]] = newValue && newValue[1]
    }
    else {
      datas[data.key] = newValue;
    }
    this.setState({datas: {...datas}})
    console.log('change成功，state现在是', this.state.datas);
  };

  createInputs = () => {
    const datas = this.props.searchData;
    const componnets = [];

    for (const data of datas) {
      let componnet;
      const items = data.items;
      switch (data.type) {
        case 'select':
          componnet = (<Select
              placeholder="请选择"
              value={this.state.datas[data.key] === undefined ? (data.defaultValue && data.defaultValue.toString()) : this.state.datas[data.key]}
              multiple={data.multiple}
              // disabled={this.state.datas[data.key]}
              onChange={(value) => {
                data.onChange && data.onChange(value);
                this.searchChange(data, value)
              }}
              style={{
                width: '100%',
              }}
          >
            {items && items.map(({mean, value}) =>
                <Select.Option key={value.toString()} value={value.toString()}>{mean}</Select.Option>)}
          </Select>);
          break
        case 'rangePicker':
          componnet = (<DatePicker.RangePicker
              showTime
              format="YYYY-MM-DD"
              value={[this.state.datas[data.key[0]], this.state.datas[data.key[2]]]}
              onChange={value => {
                this.searchChange(data, value)
              }}
              showToday={false}
              style={{
                width: '100%',
              }}
          />)
          break
      }
      componnets.push(<div key={data.key} className={'field'}>
        <span className={'title'}>{data.title}:</span>
        <div className={'input'}>{componnet}</div>
      </div>)
    }
    return componnets;
  };
  resetHandle = () => {
    this.setState({datas: {}})
  };
  //把表单的数据更新到父控件，我们先做一些校验
  searchHandle = () => {
    const fields = {}
    const state = this.state.datas;
    console.log(state);
    for (let key in state) {
      let value = state[key];
      if (!value)
        continue
      if (Array.isArray(value)) {
        fields[key] = value
        continue
      }
      //除了是数组以外，值还可能是对象，所以用trim方法要谨慎
      if (typeof value === 'string')
        value =value.trim();
      if (value !== '')
        fields[key] = value;

    }
    this.props.submitHandle(fields)
  };

  render() {
    return (<div className={'searchBar'}>
      {this.createInputs()}
      <div className={'buttonGround'}>
        <Button onClick={this.resetHandle} className={'resetBut but'} icon={'reload'}/>
        <Button onClick={this.searchHandle} className={'searchBut but'} icon={'search'}/>
      </div>
    </div>)
  }
}

