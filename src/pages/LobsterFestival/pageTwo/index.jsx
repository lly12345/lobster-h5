import React, { Component } from 'react'
import './index.less'
import '@/styles/style.less'

import { CSSTransition } from 'react-transition-group'

import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import title from '@/assets/lobster/title.png'
import logo from '@/assets/lobster/logo.png'

import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'
import longxia1 from '@/assets/lobster/page-two/longxia2.png'
import longxia2 from '@/assets/lobster/page-enroll/longxia2.png'
// 文字部分
import one from '@/assets/lobster/page-two/1.png'
import two from '@/assets/lobster/page-two/2.png'
import three from '@/assets/lobster/page-two/3.png'
import four from '@/assets/lobster/page-two/4.png'

const page = 2

// 引导页
class PageTwo extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        this.state = {
            page:3,
            index: props.index,
            title: true,
            logo: false,
            rightTitle: false,
            isAppear: false
        }
    }

    

    render() {
        console.log('触发render');
        return (

            <div  >
                <CSSTransition
                    in={this.props.index == page}
                    timeout={3000}
                    // classNames="title"
                    
                    appear={true}
                    onEnter={(el) => { }}
                    onEntered={(el) => { this.setState({ logo: true }) }}
                >
                    <div className="p6 page common pageTwo ">
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
                        <div className="container">
                            <img className={['one','animated delay-.6s',this.props.index == page?"slideInLeft":null].join(' ')}  src={one} alt="" />
                            <img className={['two','animated delay-.6s',this.props.index == page?"slideInRight":null].join(' ')} src={two} alt="" />
                            <img className={['three','animated delay-.7s',this.props.index == page?"slideInLeft":null].join(' ')} src={three} alt="" />
                            <img className={['four','animated delay-.7s',this.props.index == page?"slideInRight":null].join(' ')} src={four} alt="" />
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

                </CSSTransition>

            </div>
        )
    }

}

export default PageTwo