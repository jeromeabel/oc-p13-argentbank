import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

/**
 * Layout provides the main container for the website
 * It also contains the ToastContainer that allows to give feedbacks for the user
 */
function Layout() {
  return (
    <>
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        autoClose={3000}
      />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
