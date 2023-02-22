import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './Layout.module.scss';

function Layout() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
