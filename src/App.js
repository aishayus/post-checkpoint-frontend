import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import SignUp from './components/SignUp.js';
import NavBar from './components/NavBar.js';
import LogIn from './components/LogIn.js';
// import AddBlog from './pages/AddBlog.js';
import Footer from './components/Footer.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn/>}/>
        {/* <Route path='/create' element={<AddBlog />}/> */}
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
