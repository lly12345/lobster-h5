import React, { Component } from 'react'
import './index.less'
import '@/styles/style.less'
import { CSSTransition } from 'react-transition-group'

import beerImg from '@/assets/lobster/lizhi/beer.png'
import ml from '@/assets/lobster/common/ml.png'

import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import title from '@/assets/lobster/title.png'
import logo from '@/assets/lobster/logo.png'

import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'

import one from '@/assets/lobster/lizhi/1.png'
import two from '@/assets/lobster/lizhi/2.png'
import three from '@/assets/lobster/lizhi/3.png'
import four from '@/assets/lobster/lizhi/4.png'
import food from '@/assets/lobster/lizhi/food.png'
import longxia2 from '@/assets/lobster/lobster-second.png'

const page = 4

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
        return <div  className={['pageLiZhi common', 'animated ', this.props.index == page ? "fadeIn" : null].join(' ')}>
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
                    <img className="title animated wobble delay-2s" src={title} alt="" />
                </CSSTransition>
                <img className={['logo', 'animated delay-1s', this.props.index == page ? "bounceInDown" : null].join(' ')} src={logo} alt="" />

            </header>
            <div className="info">
                <img className={['one', 'animated delay-.2s', this.props.index == page ? "slideInRight" : null].join(' ')} src={one} alt="" />
                <img className={['two', 'animated delay-.4s', this.props.index == page ? "slideInRight" : null].join(' ')} src={two} alt="" />
                <img className={['three', 'animated delay-.6s', this.props.index == page ? "slideInRight" : null].join(' ')} src={three} alt="" />
                <img className={['food', 'animated delay-.8s', this.props.index == page ? "flipInX" : null].join(' ')} src={food} alt="" />
                
                <img className={['four', 'animated delay-.9s', this.props.index == page ? "slideInRight" : null].join(' ')} src={four} alt="" />
            </div>
            <div className="middle">
                {/* <img className="ml" src={ml} /> */}
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