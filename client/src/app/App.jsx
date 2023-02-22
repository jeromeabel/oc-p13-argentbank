import { createBrowserRouter } from 'react-router-dom';

import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
// import Error404 from './pages/Error404/Error404';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectCurrentToken } from '../features/authSlice';

const PrivateRoute = ({ element }) => {
  const token = useSelector(selectCurrentToken);
  return token ? element : <Navigate to="/login" replace={true} />;
};

const App = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'login', element: <Login /> },
        {
          path: 'profile',
          element: <PrivateRoute element={<Profile />} />,
        },
        // { path: '*', element: <Error404 /> },
      ],
    },
  ]
  //  { basename: '/oc-p13-argentbank' } // Deploy to this folder
);

export default App;
