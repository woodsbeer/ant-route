import React from 'react'
import {Card, Col, Icon, Row, Timeline} from 'antd'
import './index.less'
import mr from '../../images/minren.jpg'
import xy from '../../images/xiaoying.jpg'
import zz from '../../images/zuozu.jpg'
import ct from '../../images/chutian.jpg'

export default class Index extends React.Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (<div>
      <Row gutter={6}>

        <Col span={4}>
          <div className={'cloud-box'}>
            <Card>
              <div className={' y-center'}>
                <div className={'mr-m flex1to1'}>
                  <Icon type={'heart'} className={'text-2x text-danger'}/>
                </div>
                <div className={'clear flex1to1'}>
                  <div className={'text-muted'}>收藏</div>
                  <h2>333</h2>
                </div>
              </div>

            </Card>
          </div>
          <div className={'cloud-box'}>
            <Card>
              <div className={' y-center'}>
                <div className={'mr-m flex1to1'}>
                  <Icon type={'cloud'} className={'text-2x text-info'}/>
                </div>
                <div className={'clear flex1to1'}>
                  <div className={'text-muted clear'}>云数据</div>
                  <h2>111</h2>
                </div>
              </div>

            </Card>
          </div>
        </Col>
        <Col span={4}>
          <div className={'cloud-box'}>
            <Card>
              <div className={' y-center'}>
                <div className={'mr-m flex1to1'}>
                  <Icon type={'camera'} className={'text-2x text-danger'}/>
                </div>
                <div className={'clear flex1to1'}>
                  <div className={'text-muted'}>照片</div>
                  <h2>333</h2>
                </div>
              </div>

            </Card>
          </div>
          <div className={'cloud-box'}>
            <Card>
              <div className={' y-center'}>
                <div className={'mr-m flex1to1'}>
                  <Icon type={'mail'} className={'text-2x text-info'}/>
                </div>
                <div className={'clear flex1to1'}>
                  <div className={'text-muted'}>邮件</div>
                  <h2>111</h2>
                </div>
              </div>
            </Card>
          </div>
        </Col>
        <Col className={'cloud-box'} span={16} style={{height: 201, border: 'black 1px solid'}}>

        </Col>
        <Col span={8}>
          <div className={'cloud-box'}>
            <Card>
              <div className={'pb-m'}>
                <h3>建站日记</h3>
                <small>2个待完成，一个ok啦</small>
              </div>
              <a className={'rtSync'}><Icon type={'sync'}/></a>
              <Timeline>
                <Timeline.Item>
                  <p>第一个p</p>
                </Timeline.Item>
                <Timeline.Item>
                  <p>第二个p</p>
                </Timeline.Item>
                <Timeline.Item color={'green'}>3333</Timeline.Item>
                <Timeline.Item>4444</Timeline.Item>
                <Timeline.Item color={'yellow'}>5555</Timeline.Item>
              </Timeline>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <div className={'cloud-box'}>
            <Card>
              <div className={'pb-m'}>
                <h3>消息栏</h3>
              </div>
              <a className={'rtSync'}><Icon type={'sync'}/></a>
              <ul className={'list-group'}>
                <li className={'list-group-item'}>
                  <a className={'w-40  mr-m'}>
                    <img className={'img-responsive img-circle'} src={mr} alt=""/>
                  </a>
                  <div className={'clear talkD'}>
                    <a className={'block'}>圣诞老人</a>
                    <span>啊呀啊呀你烦死了</span>
                  </div>
                </li>
                <li className={'list-group-item'}>
                  <a className={'w-40  mr-m'}>
                    <img className={'img-circle img-responsive' } src={xy} alt=""/>
                  </a>
                  <div className={'clear talkD'}>
                    <a className={'block'}>笨蛋麋鹿</a>
                    <span>我好笨啊我好笨啊</span>
                  </div>
                </li>
                <li className={'list-group-item'}>
                  <a className={'w-40  mr-m'}>
                    <img  className={'img-circle img-responsive'} src={zz} alt=""/>
                  </a>
                  <div className={'clear talkD'}>
                    <a className={'block'}>路人</a>
                    <span>好羡慕他们啊</span>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <div className={'cloud-box'}>
            <Card>
              <div className={'pb-m'}>
                <h3>访问量</h3>
                <small>2个待完成，一个ok啦</small>
              </div>
              <a className={'rtSync'}><Icon type={'sync'}/></a>
            </Card>
          </div>
        </Col>
      </Row>


    </div>)
  }
}

