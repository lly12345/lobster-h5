// router/index.js
import LobsterFestival from 'pages/LobsterFestival/pageEnroll'
// import Index from 'pages/LobsterFestival/cuxiao'
import Index from 'pages/LobsterFestival/test'


const routes = [{
  path: '/',
  component: Index,
},
{
  path: "/enroll",
  component: LobsterFestival
}
];

export default routes
