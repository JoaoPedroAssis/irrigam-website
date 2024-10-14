import LandingPage from "./LandingPage"
import Navbar from "./components/Layouts/Navbar"
import Footer from "./components/Layouts/Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
        <div
          className={"relative flex size-full min-h-screen flex-col items-center justify-start pt-16 lg:pt-20"}
        >
          <LandingPage />
        </div>
        <Footer />
    </>
  )
}

export default App
