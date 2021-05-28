import React, { Component } from 'react'
import { post } from 'utils/request'

import './index.less'


import PageOne from '@/pages/LobsterFestival/pageOne'
import PageTwo from '@/pages/LobsterFestival/pageTwo'
import PageThree from '@/pages/LobsterFestival/pageThree'
import FuJian from '@/pages/LobsterFestival/FuJian'
import JiangXi from '@/pages/LobsterFestival/JiangXi'
import LiZhi from '@/pages/LobsterFestival/LiZhi'
import CuXiao from '@/pages/LobsterFestival/cuxiao'
import Gift from '@/pages/LobsterFestival/gift'
class LobsterFestival extends Component {
  // console.log('import.meta.env', import.meta.env);

  componentDidmount() {
    // post('/user/wx-login', { id: 100003 }).then(res => {
    //   let sign = {}
    //   Object.assign(sign, res.data.sign, { token: res.data.token }, { uid: res.data.uid })
    //   console.log(sign);
    //   window.localStorage.setItem('sign', JSON.stringify(sign))
    // })
    
  }

  render() {
    return (
      <div>
        <PageOne></PageOne>
        <PageThree></PageThree>
        <PageTwo></PageTwo>
        <FuJian></FuJian>
        <JiangXi></JiangXi>
        <LiZhi></LiZhi>
        <CuXiao></CuXiao>
        <Gift></Gift>
      </div>
    )
  }

}
export default LobsterFestival