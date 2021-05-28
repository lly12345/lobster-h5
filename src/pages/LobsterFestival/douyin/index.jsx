import React, { Component } from 'react'
import './index.less'



import { CSSTransition } from 'react-transition-group'

// 图片
import beerImg from '@/assets/lobster/beer.png'
import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import logo from '@/assets/lobster/logo.png'
import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'
import longxia1 from '@/assets/lobster/page-enroll/longxia1.png'
import longxia2 from '@/assets/lobster/page-enroll/longxia2.png'

import banner from '@/assets/lobster/douyin/banner.png'
import title from '@/assets/lobster/douyin/title.png'



const page = 7
class DouYin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      title: true,
      logo: false,
      rightTitle: false
    }
  }

  render() {
    return (
      <div className="p6 common pageDouYin page">
        <header className="headline">
          <CSSTransition
            in={this.props.index == 1}
            timeout={3000}
            classNames="title"
            unmountOnExit
            appear={true}
            onEnter={(el) => { }}
            onEntered={(el) => { this.setState({ logo: true }) }}
          >
            <img className="title animated wobble delay-2s" src={title} alt="" />
          </CSSTransition>

          <img className={['logo', 'animated delay-1s', this.props.index == 1 ? "bounceInDown" : null].join(' ')} src={logo} alt="" />

        </header>
        <div className="content">
          <img className={['banner', 'animated delay-.5s', this.props.index == page ? "flipInX" : null].join(' ')} src={banner} alt="" />
          <div className="detail">
            <div className={['title', 'animated delay-.5s', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>
              <img src={title} alt="" />
              <p className="">双重好礼享不停</p>
            </div>
            <h2 className={['animated delay', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>二重礼：视频挑战 津喜翻倍</h2>
            <h2 className={['animated delay', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>巨型龙虾钳挑战</h2>
            <p className={['animated delay', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>
              1、到店消费麦之初/荔枝啤酒6瓶，即可参与龙虾节线上挑战赛互动；
            </p>
            <p className={['animated delay', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>2、挑战者双手使用巨型龙虾钳道具夹起2瓶啤酒，拍摄并上传挑战视频，转发朋友圈或抖音，即可获得精美小礼品一份；
              </p>
            <p className={['animated delay', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>3、抖音粉丝过万，点赞或评论超过100更有精美好礼。</p>
            <h6 className={['animated delay', this.props.index == page ? "fadeInUpBig" : null].join(' ')}>具体详询门店促销员</h6>
          </div>

        </div>
        <div className="middle">
          <img className="beer" src={beerImg} />
        </div>


        <div className="spindrift">
          <img className="spindrift1" src={spindrift1} alt="" />
          <img className="spindrift2" src={spindrift2} alt="" />
        </div>
        {/* <div className="lobster">
          <img className="longxia1" src={longxia1} alt="" />
        </div> */}
        <div className="lobster">
          <img className="longxia1" src={longxia1} alt="" />
          <img className="longxia2" src={longxia2} alt="" />
        </div>

        <footer>
          <img className="wave wave1" src={wave1} alt="" />
          <img className="wave wave2" src={wave2} alt="" />
          <img className="wave wave3" src={wave3} alt="" />
        </footer>
      </div>

    )
  }

}

export default DouYin