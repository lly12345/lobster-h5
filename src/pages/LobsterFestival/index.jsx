import React, { useEffect } from 'react'
import { post } from 'utils/request'

import './index.less'

import PageOne from '@/pages/LobsterFestival/pageOne'
import PageEnroll from '@/pages/LobsterFestival/PageEnroll'

export default function LobsterFestival() {
  console.log('import.meta.env', import.meta.env);
  useEffect(() => {
    post('/user/wx-login', {id:100003}).then(res => {
      let sign = {}
      Object.assign(sign,res.data.sign,{token:res.data.token},{uid:res.data.uid})
      console.log(sign);
      window.localStorage.setItem('sign',JSON.stringify(sign))
    })
  })
  return <div className="app">
    <PageEnroll></PageEnroll>
  </div>
}