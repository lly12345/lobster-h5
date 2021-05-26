import React, { Component } from 'react'
import './index.less'
import '@/styles/style.less'
import { CSSTransition } from 'react-transition-group'

import beerImg from '@/assets/lobster/fujian-beer.png'
import ml from '@/assets/lobster/fujian/ml.png'

import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import title from '@/assets/lobster/title.png'
import logo from '@/assets/lobster/logo.png'

import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'

import one from '@/assets/lobster/fujian/1.png'
import two from '@/assets/lobster/fujian/2.png'
import three from '@/assets/lobster/fujian/3.png'
import four from '@/assets/lobster/fujian/4.png'
import food from '@/assets/lobster/fujian/food.png'
import longxia2 from '@/assets/lobster/lobster-second.png'


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
        return <div className="pageFuJian animated zoomIn">
            <div className="headline">
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

            </div>
            <div className="info">
                <img className="one" src={one} alt="" />
                <img className="two" src={two} alt="" />
                <img className="three" src={three} alt="" />
                <img className="food" src={food} alt="" />
                <img className="four" src={four} alt="" />
            </div>
            <div className="middle">
                <img className="ml" src={ml} />
                <img className="beer" src={beerImg} />
                <img className="longxia1" src={longxia2} alt="" />
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
        </div>

    }

}

export default PageOne