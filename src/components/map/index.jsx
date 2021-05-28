import React, { Component } from "react"
import { post } from 'utils/request'
import logo from '@/assets/lobster/logo.png'

const mapStyle = {
    width: '90%', 
    height: '2.5rem', 
    borderRadius: '.2rem',
    overflow: 'hidden',
    margin: '0 auto'

}

class Map extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        // this.initMap(26.08928,119.320658)
        wx.getLocation({
            type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            success: (res) => {
                console.log(res);
                let latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                let longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                // 初始化地图
                this.initMap(latitude, longitude)
            },
            fail: err => {
                console.log(err); 
                this.initMap(26.08928,119.320658)
                
            }  
        });
        this.initMap(26.08928,119.320658)

    }

    initMap(latitude, longitude) {
        let center = new TMap.LatLng(latitude, longitude)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        let map = new TMap.Map(document.getElementById('map'), {
            center: center,//设置地图中心点坐标
            zoom: 13,   //设置地图缩放级别
            pitch: 43.5,  //设置俯仰角
            rotation: 45,    //设置地图旋转角度
            viewMode: '2D'
        });
    }

    render() {
        return (
            <div id="map" style={mapStyle}></div>
        )
    }
}

export default Map