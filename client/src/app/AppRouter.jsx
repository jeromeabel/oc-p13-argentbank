import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
// import Error404 from './pages/Error404/Error404';

const AppRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        { path: 'profile', element: <Profile /> },
        // {
        //   path: 'profile/:id',
        //   element: <Profile />,
        //   errorElement: <Error404 />,
        // },
        // { path: '*', element: <Error404 /> },
      ],
    },
  ]
  //  { basename: '/oc-p13-argentbank' } // Deploy to this folder
);

export default AppRouter;
