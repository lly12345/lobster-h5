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
import longxia1 from '@/assets/lobster/page-two/longxia2.png'
import longxia2 from '@/assets/lobster/page-enroll/longxia2.png'
// 文字部分
import one from '@/assets/lobster/page-two/1.png'
import two from '@/assets/lobster/page-two/2.png'
import three from '@/assets/lobster/page-two/3.png'
import four from '@/assets/lobster/page-two/4.png'



// 引导页
class PageTwo extends Component {
    constructor() {
        super();
        this.state = {
            title: true,
            logo: false,
            rightTitle: false
        }
    }

    render() {
        return (
            <div className="page pageTwo">
                <header className="headline">
                    <CSSTransition
                        in={this.state.title}
                        timeout={3000}
                        classNames="title"
                        unmountOnExit
                        appear={true}
                        onEnter={(el) => { }}
                        onEntered={(el) => { this.setState({ logo: true }) }}
                    >
                        <img className="title animated wobble delay-2s" src={title} alt="" />
                    </CSSTransition>
                    <CSSTransition
                        in={this.state.logo}
                        timeout={2000}
                        classNames="logo"
                        unmountOnExit
                        onEntered={(el) => { this.setState({ rightTitle: true }) }}
                    >
                        <img className="logo" src={logo} alt="" />
                    </CSSTransition>

                </header>
                <div className="container">
                    <img className="one" src={one} alt="" />
                    <img className="two" src={two} alt="" />
                    <img className="three" src={three} alt="" />
                    <img className="four" src={four} alt="" />
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

export default PageTwo