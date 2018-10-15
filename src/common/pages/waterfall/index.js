import React from 'react'
import './index.less'
import fall from './waterfall'
import imgList from './imgUrlList'

let waterFall = null;
export default class MyHome extends React.Component {
  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    this.loadImg(imgList, this.initFall)
  }

  componentWillUnmount() {
    waterFall = null;
  }

  initFall() {
    waterFall = new fall.WaterFall({
      width: 1000,
      scrollElement: 'ccontent',
      contain: 'waterfall',
      num: 20
    })
    waterFall.on('load',  ()=> {
      const contain = document.getElementById('waterfall');
      setTimeout(()=>{
        for (let i = 0; i < 20; i++) {
          const img = new Image();
          img.src = imgList[i];
          img.setAttribute('class','img-box');

          contain.appendChild(img)
        }
        waterFall.emit('done');
      },1000)

    });
    waterFall.on('done',()=>{
      fall.tool.loading = false;
      const loadDiv = document.getElementsByClassName('loadDiv')[0];
      loadDiv.setAttribute('class','');
      waterFall.append()
      // console.log(this.toString(),'this');
    })
  }

  loadImg(imgList, initFall) {
    let count = 0;
    for (const imgListElement of imgList) {
      const img = new Image();
      img.src = imgListElement;
      if (img.complete) {  //已有缓存
        count++;
        if (count === imgList.length){
          console.log('complete');
          initFall();
          return
        }

      }
      else {
        img.onload = function () {
          count++;
          if (count === imgList.length) {  //下载完
            initFall()
            console.log('onload');
            return
          }
        }
      }

    }
  }

  render() {
    return (<div id={'waterfall'}>
      {
        imgList.map((value, index) => (
            <img key={index} src={value} className={'img-box'}/>
        ))
      }
    </div>)
  }
}

