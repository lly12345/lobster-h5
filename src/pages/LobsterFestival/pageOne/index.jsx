import React from 'react'
import './index.less'
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


export default function LobsterFestival() {
  return <div className="pageOne">
    <div className="headline">
      <img className="title" src={title} alt="" />
      <img className="logo" src={logo} alt="" />
    </div>
    <div className="middle">
      <div className="middle-left" >
        <img className="lobster" src={lobsterImg} alt="" />
        <img className="cap" src={capImg} alt="" />
      </div>
      <img className="beer" src={beerImg} />
      <div className="middle-right">
        <img className="right-title" src={rightTitle} alt="" />
        <img className="lobster-second" src={lobsterSecond} alt="" />
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
  </div>
}