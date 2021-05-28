import React, { Component } from 'react'
import './index.less'
import '@/styles/style.less'
import { CSSTransition } from 'react-transition-group'

import beerImg from '@/assets/lobster/beer1.png'
import lobsterImg from '@/assets/lobster/1.png'
 
import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import title from '@/assets/lobster/title.png'
import logo from '@/assets/lobster/logo.png'
 
import lobsterSecond from '@/assets/lobster/2.png'
import activity from '@/assets/lobster/activity.png'
import flag from '@/assets/lobster/flag.png'
import box from '@/assets/lobster/box.png'
 
const page = 5
class PageOne extends Component {
  constructor() {
    super();
    this.state = {
      title: true,
      logo: false,
      rightTitle: false
    }
  }

  render() {
    return <div className="pageOne common animated zoomIn cuxiao">
      <header className="headline">
        <CSSTransition
          in={this.props.index == page}
          timeout={3000}
          classNames="title"
          unmountOnExit
          appear={true}
          onEnter={(el) => { }}
          onEntered={(el) => { this.setState({ logo: true }) }}
        >
          <img className="title animated wobble delay-1s" src={title} alt="" />
        </CSSTransition>
        <img className={['logo', 'animated delay-1s', this.props.index == page ? "bounceInDown" : null].join(' ')} src={logo} alt="" />

      </header>
      <div className="middle">
        <div className="middle-left" >
          <img  className={['lobster','animated delay-.2s',this.props.index == page?"slideInLeft":null].join(' ')} src={lobsterImg} alt="" />
        </div>
        <img className="beer" src={beerImg} />
        <div className="middle-right">
          <img className={['lobster-second','animated delay-.2s',this.props.index == page?"slideInRight":null].join(' ')} src={lobsterSecond} alt="" />
        </div>
      </div>
      <footer>
        <img className="wave wave1" src={wave1} alt="" />
        <img className="wave wave2" src={wave2} alt="" />
        <img className="wave wave3" src={wave3} alt="" />
      </footer>

      <div className="footer-detail">
        <div className="left">
          <img className={['flag','animated delay-.9s',this.props.index == page?"flipInX":null].join(' ')} src={flag} alt="" />
          <img  className={['activity','animated delay-.5s',this.props.index == page?"slideInLeft":null].join(' ')} src={activity} alt="" />
        </div>
        <div className="right">
          <img  className={['box','animated delay-.2s',this.props.index == page?"slideInRight":null].join(' ')} src={box} alt="" />
          {/* <div className="right-tip">(奖品以实物为准)</div> */}
        </div>
        <div className="tip">具体详询门店促销员</div>
      </div>



    </div>

  }

}

export default PageOne