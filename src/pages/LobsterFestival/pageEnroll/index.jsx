import React, { useEffect } from 'react'
import './index.less'
import PicturesWall from '@/components/upload'
import Map from '@/components/map'

import beerImg from '@/assets/lobster/beer.png'
import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import logo from '@/assets/lobster/logo.png'
import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'



export default function pageEnroll() {

  useEffect(() => {
    console.log(111);

  })

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  const handleClick = (e) => {
    console.log(e);
    console.log('被点击了');
  }

  return <div className="pageEnroll">
    <div className="bg">
      <div className="headline">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="middle">

        <img className="beer" src={beerImg} />

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

    <div className="content">

      <div className="info">
        <h6>报名页</h6>
        <div className="form">
          <div className="input-item">
            <span>门店名称：</span>
            <input type="text" />
          </div>
          <div className="input-item">
            <span>门店电话：</span>
            <input type="text" />
          </div>
          <div className="input-item">
            <span>门店地址：</span>
            <button>选择地址</button>
          </div>

        </div>

      </div>
      <Map></Map>
      <div className="picture-list">
        <h6>门店展示：</h6> 
        <p>最多可以上传三张照片</p>
        <PicturesWall></PicturesWall>
      </div>
      <button className="btn">提交</button>

    </div>
  </div>
}