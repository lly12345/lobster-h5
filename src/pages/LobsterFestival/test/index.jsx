import React, { Component } from 'react'
import './index.less'

import { post, get } from 'utils/request'
import { Carousel, WingBlank } from 'antd-mobile';

import PageOne from '@/pages/LobsterFestival/pageOne'
import PageTwo from '@/pages/LobsterFestival/pageTwo'
import PageThree from '@/pages/LobsterFestival/pageThree'
import FuJian from '@/pages/LobsterFestival/FuJian'
import JiangXi from '@/pages/LobsterFestival/JiangXi'
import LiZhi from '@/pages/LobsterFestival/LiZhi'
import CuXiao from '@/pages/LobsterFestival/cuxiao'
import Gift from '@/pages/LobsterFestival/gift'
import DouYin from '@/pages/LobsterFestival/douyin'
import ShopDetail from '@/pages/LobsterFestival/shopDetail'



class test extends Component {
    state = {
        currentIndex: 0,
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        const url = window.encodeURI(window.location.href);
        get(
            `/index/wx-config?url=${url}`
        ).then(res => {
            console.log(res);
            wx.config({
                debug: false,
                appId: 'wx73e5ccd9a6aaadf3',
                // timestamp: String(Date.now()),
                timestamp: res.data.timestamp,
                nonceStr: res.data.noncestr,
                signature: res.data.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'updateAppMessageShareData',
                    'updateTimelineShareData',
                    'openLocation',
                    'getLocation'
                ]
            });
            wx.ready(function () {
                wx.updateAppMessageShareData({
                    title: '雪津龙虾节', // 分享标题
                    desc: '这个夏天和自己人聚在一起，“津”彩一“夏”', // 分享描述
                    link: `https://h5.fuzhouxiaoyu.com/longxiajie/shop.html?shopId=${window.localStorage.getItem('shopId')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://h5.fuzhouxiaoyu.com/longxiajie/share-icon.jpg',
                    success: function (res) {
                        // 设置成功
                        console.log(res);
                    },
                    cancel: function (res) {
                        console.log(res);
                    }
                })

                wx.updateTimelineShareData({
                    title: '雪津龙虾节', // 分享标题
                    link: `https://h5.fuzhouxiaoyu.com/longxiajie/shop.html?shopId=${window.localStorage.getItem('shopId')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: 'https://h5.fuzhouxiaoyu.com/longxiajie/share-icon.jpg', // 分享图标
                    success: function (res) {
                        // 设置成功
                        console.log(res);
                    },
                    cancel: function (res) {
                        console.log(res);
                    }
                })
            });
        })

    }

    handleChange(index) {
        console.log('index', index);
        this.setState({
            currentIndex: index
        })
    }

    render() {
        console.log('邮编', returnCitySN["cid"]);
        let page
        if (350000 < returnCitySN["cid"] < 365000) {
            page = (<FuJian index={this.state.currentIndex}></FuJian>)
        } else {
            page = (<JiangXi index={this.state.currentIndex}></JiangXi>)
        }

        return (
            <div>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite={false}
                        dots={false}
                        vertical
                        // touchmove={e=>e.stopPropagation()}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.handleChange(index)}
                    >
                        <PageOne index={this.state.currentIndex}></PageOne>
                        <PageThree index={this.state.currentIndex}></PageThree>
                        <PageTwo index={this.state.currentIndex}></PageTwo>
                        {
                            page
                        }
                        {/* <JiangXi index={this.state.currentIndex}></JiangXi> */}
                        <LiZhi index={this.state.currentIndex}></LiZhi>
                        <CuXiao index={this.state.currentIndex}></CuXiao>
                        <Gift index={this.state.currentIndex}></Gift>
                        <DouYin index={this.state.currentIndex}></DouYin>
                        <ShopDetail index={this.state.currentIndex}></ShopDetail>
                    </Carousel>
                </WingBlank>

            </div>

        );
    }
}

export default test