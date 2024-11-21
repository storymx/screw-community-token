import './App.css'
import NavBar from "./components/navbar/NavBar.tsx";
import TimeLine from "./components/timeline/TimeLine.tsx";
import LogoImage from "./components/LogoImage/LogoImage.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

  return (
      <div>
          <div className=''>
              <NavBar/>
          </div>

          <div className={'font-extrabold text-4xl text-pink-600'}> LOOSE SCREW COMMUNITY TOKEN</div>

          <div className='p-36'>
              <LogoImage/>
          </div>

          <div>
              <TimeLine/>
          </div>

          <div>
              <Footer />
          </div>
      </div>
  )
}

export default App
