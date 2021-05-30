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
 

import one from '@/assets/lobster/gift/1.png'
import two from '@/assets/lobster/gift/2.png'
import three from '@/assets/lobster/gift/3.png'
import four from '@/assets/lobster/gift/4.png'
import five from '@/assets/lobster/gift/5.png'
import six from '@/assets/lobster/gift/6.png'
import seven from '@/assets/lobster/gift/7.png'
import eight from '@/assets/lobster/gift/8.png'

const gift = [
  { title: '开瓶器', url: one },
  { title: '吸管', url: two },
  // { title: 'TAG', url: three },
  { title: '扇子', url: four },
  { title: '清凉拖鞋', url: five },
  // { title: '帽子', url: six },
  // { title: '午睡毯', url: seven },
  { title: '夏日清凉马扎', url: eight },
]

const page = 6
class Gift extends Component {
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
      <div className="p6 common pageEnroll page gift">
        <header className="headline">
     
          {/* <CSSTransition
            in={this.props.index == 1}
            timeout={3000}
            classNames="title"
          
            appear={true}
            onEnter={(el) => { }}
            onEntered={(el) => { this.setState({ logo: true }) }}
          >
            <img className="title animated wobble delay-2s" src={title} alt="" />
          </CSSTransition> */}

          <img className={['logo', 'animated delay-1s', this.props.index == 1 ? "bounceInDown" : null].join(' ')} src={logo} alt="" />

        </header>
        <div className="p6-conteiner">
          <div className="content">
            <div className="title">盲盒奖励</div>
            <div className="gift-box">
              {
                gift.map((item, i) => {
                  return (
                    <div className={['gift-item', 'animated delay-.6s', this.props.index == page ? "flipInY" : null].join(' ')} key={i}>
                      <img src={item.url} alt="" />
                      <div>{item.title}</div>

                    </div>
                  )
                })
              }
            </div>

          </div>

        </div>

        <div className="middle">
          <img className="beer" src={beerImg} />
        </div>
        <div className="spindrift">
          <img className="spindrift1" src={spindrift1} alt="" />
          <img className="spindrift2" src={spindrift2} alt="" />
        </div>
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

export default Gift