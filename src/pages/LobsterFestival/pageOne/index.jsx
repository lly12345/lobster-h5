import React from 'react'
import './index.less'
import beerImg from '@/assets/lobster/beer.png'
import lobsterImg from '@/assets/lobster/lobster.png'
import capImg from '@/assets/lobster/cap.png'
import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'


export default function LobsterFestival() {
  return <div className="pageOne">
    <img className="beer" src={beerImg} alt="" />
    <div className="animation-one">
      <img className="lobster" src={lobsterImg} alt="" />
      <img className="cap" src={capImg} alt=""/>
    </div>
    <footer>
      <img className="wave wave1" src={wave1} alt=""/>
      <img className="wave wave2" src={wave2} alt=""/>
      <img className="wave wave3" src={wave3} alt=""/>

    </footer>


  </div>
}