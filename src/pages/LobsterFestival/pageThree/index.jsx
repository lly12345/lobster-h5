import React, { Component } from 'react'
import './index.less'
import '@/styles/style.less'


import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'

import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'

import longxia2 from '@/assets/lobster/lobster-second.png'

import one from '@/assets/lobster/page-three/1.png'
import two from '@/assets/lobster/page-three/2.png'
import three from '@/assets/lobster/page-three/3.png'

import fonterTitle from '@/assets/lobster/page-three/fonter-title.png'
import headerTitle from '@/assets/lobster/page-three/header-title.png'
import xiangliao from '@/assets/lobster/xiangliao.png'


class PageThree extends Component {
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
            <div className="common pageThree page">
                <header className="headline">
                   
                </header>
                <div className="container-bg">
                    <img  className={['headerTitle','animated delay-.6s',this.props.index == 1?"slideInLeft":null].join(' ')} src={headerTitle} alt="" />
                    <div className="container">
                        <img  className={['one','animated delay-.6s',this.props.index == 1?"flipInX":null].join(' ')} src={one} alt="" />
                        <img className={['two','animated delay-.8s',this.props.index == 1?"flipInX":null].join(' ')} src={two} alt="" />
                        <img className={['three','animated delay-.9s',this.props.index == 1?"flipInX":null].join(' ')} src={three} alt="" />
                    </div>
                    <img  className={['fonterTitle','animated delay-.6s',this.props.index == 1?"slideInRight":null].join(' ')} src={fonterTitle} alt="" />
                </div>

                <div className="spindrift">
                    <img className="spindrift1" src={spindrift1} alt="" />
                    <img className="spindrift2" src={spindrift2} alt="" />
                </div>
                <div className="lobster">
                    <img className="longxia1" src={longxia2} alt="" />
                </div>
                {/* 香料 */}
                <img className="xiangliao" src={xiangliao} alt="" />
                <footer>
                    <img className="wave wave1" src={wave1} alt="" />
                    <img className="wave wave2" src={wave2} alt="" />
                    <img className="wave wave3" src={wave3} alt="" />
                </footer>
            </div>
        
        )
    }

}

export default PageThree
