import React, { Component } from 'react'
import './index.less'
import { post } from 'utils/request'
import { getQueryVariable } from 'utils/URLquery'


// 子组件
import PicturesWall from '@/components/upload'
import Map from '@/components/map'
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



class pageEnroll extends Component {
  constructor() {
    super()
    this.state = {
      id: 2000,
      name: '',
      phone: '',
      address: ''
    }
  }
  componentDidMount() {

    const url = decodeURIComponent(window.location.href)
    const latlng = getQueryVariable(url, 'latng')
    setTimeout(() => {
      console.log(url);
      console.log(latlng.split(','));
      this.setState({
        address: getQueryVariable(url, 'addr'),
        lat: latlng.split(',')[0],
        lng: latlng.split(',')[1]
      })
    });

    console.log(this.state);
    post('/user/wx-login', { id: 100003 }).then(res => {
      let sign = {}
      Object.assign(sign, res.data.sign, { token: res.data.token }, { uid: res.data.uid }, { activityId: 2 })
      console.log(sign);
      window.localStorage.setItem('sign', JSON.stringify(sign))
    })
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
  }

  handleTelChange(event) {
    this.setState({
      phone: event.target.value
    })
  }

  handleSubmit() {
    console.log(this.state);
    post('/shop', this.state).then(res => {
      console.log(res);
      if (!res.success) return alert(res.msg)
    })
  }
  handleAddress = () => {
    window.location.href = "https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=http://localhost:3000/&key=WCBBZ-J426J-3REF5-FYGFW-KM7Q5-CAFTX&referer=myapp"
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
    })
    console.log(newFileList);
  }



  render() {
    return (
      <div className="pageEnroll">
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
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
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
          <Map></Map>
          <div className="picture-list">
            <h6>门店展示：</h6>
            <p>最多可以上传三张照片</p>
            <PicturesWall content={this.getFileList.bind(this)}></PicturesWall>
          </div>
          <button className="btn" onClick={this.handleSubmit.bind(this)}>提交</button>

        </div>
      
        <div className="lobster">
            <img className="longxia1" src={longxia1} alt="" />
            <img className="longxia2" src={longxia2} alt="" />
          </div>
      </div>

    )
  }

}

export default pageEnroll