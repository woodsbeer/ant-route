const tool = {
  getDiv: (function () {
    let div;
    return function () {
      if (!div) {
        div = document.createElement('div');
      }
      return div;
    }

  })(),
  getMinIndexByGroup: function (list) {
    // console.log(Math.min(...list,'min'));
    // console.log(list);
    return list.indexOf(Math.min(...list))
  },
  loading: false,
  addEventListener:function (event,element,fun) {
    element.addEventListener(event,fun,false)
  }
};

function Event() {
  this.cabel = []
}

Event.prototype.on = function () {
  let type = Array.prototype.shift.call(arguments);
  let fun = Array.prototype.shift.call(arguments);
  if (!this.cabel[type]) {
    this.cabel[type] = [];
  }
  this.cabel[type].push(fun)
};
Event.prototype.emit = function () {
  let type = Array.prototype.shift.call(arguments);
  for (const cabelElement of this.cabel[type]) {
    cabelElement.apply(this, arguments)
  }
};

function WaterFall(option) {
  console.log('fall init');
  Event.call(this);
  this.option = {
    width: option.width || 1000,
    num: option.num || 20,
    contain: option.contain || 'waterfall',
    scrollElement: option.scrollElement || 'ccontent',
  }
  //在组件中的didMount声明函数中实例化WaterFall，这时候已经渲染好dom了，可以执行这些方法
  this.init();
  this.bind();
}

WaterFall.prototype = new Event();
const proto = WaterFall.prototype;
proto.init = function () {
  let contain = document.getElementById(this.option.contain);
  contain.style.width  = `${this.option.width}px`;
  let imgs = contain.getElementsByTagName('img');
  let preNum = Math.floor(this.option.width / imgs[0].offsetWidth);
  let prelist = [];
  for (let i = 0; i < preNum; i++) {
    prelist.push(imgs[i].offsetHeight);
  }
  // console.log(prelist,'prelist');
  let point = tool.getMinIndexByGroup(prelist);
  for (let i = 0; i < preNum; i++) {
    imgs[i].style.position = 'absolute';
    imgs[i].style.left = `${imgs[0].offsetLeft + i * imgs[0].offsetWidth}px`; //考虑到父组件的padding和子组件的margin，要加上第一个img的offsetleft
  }
  for (let i = preNum; i < imgs.length; i++) {
    imgs[i].style.position = 'absolute';
    // console.log(imgs.length,'imgs.length');
    // console.log(point,'point');

    imgs[i].style.left = `${imgs[point].offsetLeft}px`;
    imgs[i].style.top = `${prelist[point]}px`;
    prelist[point] += imgs[i].offsetHeight;
    point = tool.getMinIndexByGroup(prelist)
  }
};
proto.append = function () {
  console.log('append');
  let contain = document.getElementById(this.option.contain);
  let imgs = contain.getElementsByTagName('img');
  let preNum = Math.floor(this.option.width / imgs[0].offsetWidth);
  let prelist = [];
  let currentPosition = imgs.length - this.option.num;  //每次加二十张图片
  let nums = [];
  const imgObj = {};
  let count = 0;

  while (count < 100) {
    //在这个while循环中加判断是很重要的，可以避免上一批连续上下两张图片是最小的高度，是prelist的两个值left一样
    if (!imgObj[imgs[currentPosition-count-1].offsetLeft]) {
      imgObj[imgs[currentPosition-count-1].offsetLeft] = imgs[currentPosition-count-1].offsetLeft;
      prelist.push(imgs[currentPosition - 1 - count].offsetTop + imgs[currentPosition - 1 - count].offsetHeight);
      nums.push(count+1)
      if (nums.length===preNum)   //count不一定是连续的，所以我们判断nums的length做为判断的依据
        break;
    }
    count++;
  }
  console.log(prelist);
  console.log(currentPosition,'currentpoint');
  let point = tool.getMinIndexByGroup(prelist);   //这里是逆序放入的
  for (let i = 0; i < this.option.num; i++) {
    // console.log(, point + 1));
    console.log(nums);
    imgs[i + currentPosition].style.position = 'absolute';
    imgs[i + currentPosition].style.left = `${imgs[currentPosition - nums[Number(point)]].offsetLeft}px`;
    imgs[currentPosition + i].style.top = `${prelist[point]}px`;
    prelist[point] = imgs[currentPosition + i].offsetHeight+prelist[point];
    point = tool.getMinIndexByGroup(prelist);
  }
};
proto.loadImg = function () {
  const contain = document.getElementById(this.option.contain);
  const div = tool.getDiv();
  div.setAttribute('class', 'loadDiv');
  contain.appendChild(div);
}
proto.bind = function () {
  // console.log(document.getElementById(this.option.scrollElement),'kkkkkkkkkkkkkkkkkk');
  const scrollEvent =document.getElementById(this.option.scrollElement);
  const contain =document.getElementById(this.option.contain);
  tool.addEventListener('scroll',scrollEvent||window,scroll.bind(this))
};
const unbind = ()=>{
  console.log(document.getElementById('ccontent'));
  document.getElementById('ccontent').removeEventListener('scroll',scroll.bind(this));
  console.log('unbinding');
  console.log(document.getElementById('ccontent'));
}
const scroll =function() {
  // console.log('scroll');
  if (tool.loading)
    return
  // console.log('scrollCal');
  let contain = document.getElementById(this.option.contain);
  if (!contain)
    return  //就是如果切换了route，这个waterfall就被清空了我们在太用它传过来的东西会报空指针，需要手动退出
  let scrollElement = document.getElementById(this.option.scrollElement);
  let imgs = contain.getElementsByTagName('img');
  const scrollY = scrollElement.scrollTop;

  if (scrollElement.clientHeight + scrollY >= imgs[imgs.length-1].offsetTop) {
    console.log('scrolldo');
    tool.loading = true
    this.loadImg();
    this.emit('load')
  }
}
export default {WaterFall,tool,unbind}

