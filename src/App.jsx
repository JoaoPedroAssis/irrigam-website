import LandingPage from "./LandingPage"
import Navbar from "./components/Layouts/Navbar"
import Footer from "./components/Layouts/Footer"


function App() {

  return (
    <>
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
