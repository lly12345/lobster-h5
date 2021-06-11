import React, { Component } from 'react'
import './index.less'
import { post } from 'utils/request'
import { getQueryVariable } from 'utils/URLquery'


// 子组件
import PicturesWall from '@/components/upload'

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
import map from '@/assets/lobster/map.png'

const mapStyle = {
  width: '90%',
  height: '2.5rem',
  borderRadius: '.2rem',
  overflow: 'hidden',
  margin: '0 auto'

}

class pageEnroll extends Component {
  constructor() {
    super()
    this.state = {
      id: window.localStorage.getItem('shopId') || 0,
      name: window.localStorage.getItem('name') || '',
      phone: window.localStorage.getItem('tel') || '',
      address: '',
      pictures: []
    }
  }
  componentDidMount() {
    const latlng = getQueryVariable('latng')
    const address = getQueryVariable('addr')
    const id = getQueryVariable('id')||window.localStorage.getItem('uid')
    setTimeout(() => {
      console.log(id);
    });

    if (id) {
      window.localStorage.setItem('uid', id)
      post('/user/wx-login', { id: id }).then(res => {
        let sign = {}
        Object.assign(sign, res.data.sign, { token: res.data.token }, { uid: res.data.uid }, { activityId: 2 })
        console.log(sign);
        window.localStorage.setItem('sign', JSON.stringify(sign))
      })
    }
    if (latlng && address) {
      this.setState({
        address: address,
        lat: latlng.split(',')[0],
        lng: latlng.split(',')[1],
      })
       
    }
  }

  initMap(latitude = 26.08928, longitude = 119.320658) {
    console.log('latitude', latitude);
    let center = new TMap.LatLng(latitude, longitude)
    //定义map变量，调用 TMap.Map() 构造函数创建地图
    let map = new TMap.Map(document.getElementById('map'), {
      center: center,//设置地图中心点坐标
      zoom: 13,   //设置地图缩放级别
      viewMode: '2D'
    });
    map.removeControl(TMap.constants.DEFAULT_CONTROL_ID.ZOOM);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleUsernameChange(event) {
    this.setState({
      name: event.target.value
    })
    setTimeout(() => {

      window.localStorage.setItem("name", this.state.name)
    });

  }

  handleTelChange(event) {
    this.setState({
      phone: event.target.value
    })
    setTimeout(() => {

      window.localStorage.setItem("tel", this.state.phone)
    });

  }

  handleSubmit() {
    if (!(/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/.test(this.state.phone))) {
      return alert("请填写正确的电话号码")
    }
    console.log(this.state);
    post('/shop', this.state).then(res => {
      console.log(res);
      if (!res.success) return alert(res.msg)
      confirm('提交成功，十二小时内会有人审核')
    })
  }
  handleAddress = () => {
    window.location.href = "https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=https://h5.fuzhouxiaoyu.com/longxiajie/&key=WCBBZ-J426J-3REF5-FYGFW-KM7Q5-CAFTX&referer=myapp"
  }


  getFileList = (val) => {
    console.log(val);
    const newFileList = val.map(item => {
      return {
        id: item.uid,
        url: item.url
      }
    })
    this.setState({
      pictures: newFileList
    },()=>{
      console.log(this.state);
    })
    
  }



  render() {

    return (
      <div className="p6 pageEnroll enroll">
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

        <div className="content">

          <div className="info">
            <h6>报名页</h6>
            <div className="form">
              <div className="input-item">
                <span>门店名称：</span>
                <input type="text" value={this.state.name} onChange={this.handleUsernameChange.bind(this)} />
              </div>
              <div className="input-item">
                <span>门店电话：</span>
                <input type="text" value={this.state.phone} onChange={this.handleTelChange.bind(this)} />
              </div>
              <div className="input-item">
                <span>门店地址：</span>
                {/* <button style onClick={this.handleAddress}>选择地址</button> */}
                <div className="select-address" onClick={this.handleAddress}>{this.state.address == '' ? '选择地址' : this.state.address}</div>
              </div>

            </div>

          </div>
          {/* <Map></Map> */}
          <div className="map-overlay" >
            {/* <div id="map" style={mapStyle} ></div> */}
            <img className="map" src={map} alt="" onClick={this.handleAddress} />
          </div>

          <div className="picture-list">
            <h6>门店展示：</h6>
            <p>最多可以上传三张照片</p>
            <div className="shop-img">
              <PicturesWall content={this.getFileList.bind(this)}></PicturesWall>
            </div>

          </div>
          <button className="btn" onClick={this.handleSubmit.bind(this)}>提交</button>

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
      </div >

    )
  }

}

export default pageEnroll