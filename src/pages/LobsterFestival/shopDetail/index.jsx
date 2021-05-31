import React, { Component } from 'react'

import './index.less'
import { post, get } from 'utils/request'
import { getQueryVariable } from 'utils/URLquery'
import { Carousel, WingBlank } from 'antd-mobile';


// 图片
import beerImg from '@/assets/lobster/beer.png'
import wave1 from '@/assets/lobster/bottom1.png'
import wave2 from '@/assets/lobster/bottom2.png'
import wave3 from '@/assets/lobster/bottom3.png'
import logo from '@/assets/lobster/logo.png'
import spindrift1 from '@/assets/lobster/spindrift1.png'
import spindrift2 from '@/assets/lobster/spindrift2.png'
import longxia1 from '@/assets/lobster/page-enroll/longxia1.png'
import longxia2 from '@/assets/lobster/page-enroll/longxia2.png'


import code from '@/assets/lobster/code.png'


const mapStyle = {
  width: '100%',
  height: '3rem',
  borderRadius: '.2rem',
  overflow: 'hidden',
  margin: '0 auto'

}

const page = 8


class ShopDetail extends Component {
  constructor() {
    super()
    this.state = {
      img: [],
      title: '',
      tel: '',
      addr: '',
      lat: '0',
      lng: '0',
      show: false
    }
  }


  componentDidMount() {
    const id = getQueryVariable('id') || window.localStorage.getItem('uid')
    if (id) {
      window.localStorage.setItem('uid', id)
      post('/user/wx-login', { id: id }).then(res => {
        let sign = {}
        Object.assign(sign, res.data.sign, { token: res.data.token }, { uid: res.data.uid }, { activityId: 2 })
        console.log(sign);
        window.localStorage.setItem('sign', JSON.stringify(sign))
        console.log(window.localStorage.getItem('shopId'));
        get(`/shop/detail?id=${window.localStorage.getItem('shopId')}`).then(res => {
          console.log(res);
          if (!res.success) {
            this.setState({
              show: false
            })
          } else {
            this.setState({
              show: true
            })
          }
          this.setState({
            img: res.data.pictures,
            title: res.data.name,
            tel: res.data.phone,
            addr: res.data.address,
            lat: parseFloat(res.data.lat),
            lng: parseFloat(res.data.lng)
          })
          this.initMap(res.data.lat, res.data.lng)
          const url = window.encodeURI(window.location.href);
          // get(
          //   `/index/wx-config?url=${url}`
          // ).then(res => {
          //   console.log(res);
          //   wx.config({
          //     debug: false,
          //     appId: 'wx73e5ccd9a6aaadf3',
          //     // timestamp: String(Date.now()),
          //     timestamp: res.data.timestamp,
          //     nonceStr: res.data.noncestr,
          //     signature: res.data.signature,
          //     jsApiList: [
          //       // 所有要调用的 API 都要加到这个列表中
          //       'updateAppMessageShareData',
          //       'onMenuShareTimeline',
          //       'openLocation',
          //       'getLocation'
          //     ]
          //   });
            
          // })
        })
      })
    }
  }



  initMap(latitude, longitude) {
    let center = new TMap.LatLng(latitude, longitude)
    //定义map变量，调用 TMap.Map() 构造函数创建地图
    let map = new TMap.Map(document.getElementById('local'), {
      center: center,//设置地图中心点坐标
      zoom: 13,   //设置地图缩放级别
      pitch: 43.5,  //设置俯仰角
      rotation: 45,    //设置地图旋转角度
      viewMode: '2D'
    });
    var marker = new TMap.MultiMarker({
      id: "marker-layer", //图层id
      map: map,
      styles: { //点标注的相关样式
        "marker": new TMap.MarkerStyle({
          "width": 25,
          "height": 35,
          "anchor": { x: 16, y: 32 },
          "src": "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png"
        })
      },
      geometries: [{ //点标注数据数组
        "id": "demo",
        "styleId": "marker",
        "position": new TMap.LatLng(latitude, longitude),
        "properties": {
          "title": "marker"
        }
      }]
    });
    map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
  }

  handleGo(lat, lng) {
    console.log('去这里');
    console.log('lat:'+lat+'lng:'+lng);
    let that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res);
        wx.openLocation({
          latitude: lat,
          longitude: lng,
          scale: 28,
          address: that.state.addr,
          success: res => {
            console.log(res)
          },
          fail:err=>{
            console.log(err);
          }
        })
      }
    })



  }


  render() {

    return (

      <div className={['p6 shop-detail pageEnroll', 'animated delay-.2s', this.props.index == page ? "swing" : null].join(' ')}>
        <header className="headline">
          {/* <CSSTransition
            in={this.props.index == 1}
            timeout={3000}
            classNames="title"
          
            appear={true}
            onEnter={(el) => { }}
            onEntered={(el) => { this.setState({ logo: true }) }}
          >
            <img className="title animated wobble delay-2s" src={title} alt="" />
          </CSSTransition> */}

          <img className={['logo', 'animated delay-1s', this.props.index == 1 ? "bounceInDown" : null].join(' ')} src={logo} alt="" />

        </header>

        <div className="content" style={{ display: this.state.show ? 'block' : 'none' }}>
          <div className="img-list" >
            <WingBlank>
              <Carousel
                autoplay={true}
                infinite
                dots={true}
                touchmove={e => e.stopPropagation()}
              >
                {
                  this.state.img.map((item, i) => {
                    return <div className="img-box" key={i}>
                      <img className="banner" src={item.url} alt="" />
                    </div>
                  })
                }
              </Carousel>
            </WingBlank>

          </div>
          <div className="detail">
            <h3>{this.state.title}</h3>
            <p>联系电话：{this.state.tel}</p>
            <p>门店地址：{this.state.addr}</p>
            <div className="map">
              <div id="local" style={mapStyle}></div>
              <div className="address">
                <span>{this.state.addr}</span>
                <button onClick={()=>this.handleGo(this.state.lat, this.state.lng)}>立即前往</button>
              </div>
            </div>
            <img className="code" src={code} alt="" />

          </div>

        </div>
        <div className="content verify" style={{ display: !this.state.show ? 'block' : 'none' }}>
          <div className="verify">
            门店尚在审核
        </div>
        </div>

        <div className="lobster">
          <img className="longxia1" src={longxia1} alt="" />
          <img className="longxia2" src={longxia2} alt="" />
        </div>
        <div className="middle">
          <img className="beer" src={beerImg} />
        </div>


        <div className="spindrift">
          <img className="spindrift1" src={spindrift1} alt="" />
          <img className="spindrift2" src={spindrift2} alt="" />
        </div>
        {/* <div className="lobster">
          <img className="longxia1" src={longxia1} alt="" />
        </div> */}
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

export default ShopDetail