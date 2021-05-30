import React, { Component } from 'react'
import './index.less'


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
        console.log(window.screen.height);
        // let device = false
        // if (window.screen.height < 680) {
        //     console.log('设备高度小于700');
        //     device = true
        // }
        return (
            <div>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite={false}
                        dots={false}
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