// router/index.js
import LobsterFestival from 'pages/LobsterFestival/pageEnroll'
import Index from 'pages/LobsterFestival/JiangXi'
 

const routes = [{
  path: '/',
  redirect: '/enroll',
  component: Index,
},
  {
    path: "/enroll",
    component: LobsterFestival
  }
];

export default routes
