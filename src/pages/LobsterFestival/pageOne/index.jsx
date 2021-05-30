import React, { Component } from 'react'
import './index.less'
import '@/styles/style.less'
import { CSSTransition } from 'react-transition-group'

import beerImg from '@/assets/lobster/beer.png'
import lobsterImg from '@/assets/lobster/lobster.png'
import capImg from '@/assets/lobster/cap.png'
import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import title from '@/assets/lobster/title.png'
import logo from '@/assets/lobster/logo.png'
import rightTitle from '@/assets/lobster/right-title.png'
import lobsterSecond from '@/assets/lobster/lobster-second.png'
import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'

class PageOne extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      index: props.index,
      title: true,
      logo: false,
      rightTitle: false
    }
  }




  render() {
    return <div className={['p6 p6-pageOne pageOne common', 'animated ', this.props.index == 0 ? "zoomIn" : null].join(' ')}>
      <div className="headline">
        <CSSTransition
          in={this.props.index == 0}
          timeout={3000}
          classNames="title"
        
          appear={true}
          onEnter={(el) => { }}
          onEntered={(el) => { this.setState({ rightTitle: true }) }}
        >
          <img className="title animated wobble delay-2s" src={title} alt="" />
        </CSSTransition>
        {/* <CSSTransition
          in={this.props.index == 0 &this.state.logo}
          timeout={2000}
          classNames="logo"
          unmountOnExit
          onEntered={(el) => { this.setState({ rightTitle: true })}}
        > */}
        <img className={['logo', 'animated delay-1s', this.props.index == 0 ? "bounceInDown" : null].join(' ')} src={logo} alt="" />
        {/* </CSSTransition> */}

      </div>
      <div className="middle">
        <div className={['middle-left', this.props.index == 0 ? "right-move" : null].join(' ')}>
          <img className='lobster' src={lobsterImg} alt="" />
          <img className="cap" src={capImg} alt="" />
        </div>
        <img className="beer" src={beerImg} />
        <div className="middle-right">
          <div style={{ height: '7rem' }}>
            <CSSTransition
              in={this.state.rightTitle}
              timeout={2000}
              classNames="right-headline"
            
              onEnter={(el) => { }}
            >
              <img className="right-title" src={rightTitle} alt="" />
            </CSSTransition>
          </div>
          <img className={['lobster-second', this.props.index == 0 ? "left-move" : null].join(' ')} src={lobsterSecond} alt="" />
        </div>
      </div>
      <div className="spindrift">
        <img className="spindrift1" src={spindrift1} alt="" />
        <img className="spindrift2" src={spindrift2} alt="" />
      </div>
      <footer>
        <img className="wave wave1" src={wave1} alt="" />
        <img className="wave wave2" src={wave2} alt="" />
        <img className="wave wave3" src={wave3} alt="" />
      </footer>
      <div className="allow" >
        <svg t="1622212652711" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1172" width="200" height="200"><path d="M779.180132 473.232045 322.354755 16.406668c-21.413706-21.413706-56.121182-21.413706-77.534887 0-21.413706 21.413706-21.413706 56.122205 0 77.534887l418.057421 418.057421L244.819868 930.057421c-21.413706 21.413706-21.413706 56.122205 0 77.534887 10.706853 10.706853 24.759917 16.059767 38.767955 16.059767s28.061103-5.353938 38.767955-16.059767L779.180132 550.767955C800.593837 529.35425 800.593837 494.64575 779.180132 473.232045z" p-id="1173" fill="#ffffff"></path></svg>
      </div>

    </div>

  }

}

export default PageOne