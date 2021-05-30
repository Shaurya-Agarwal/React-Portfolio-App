import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-particles-js'
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Particles
        params={{
          particles: {
            number:{
              value: 30,
              density:{
                enable: true,
                value_area:900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width:6,
                color:"#fff"
              }
            }
          }
      }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    </Router>
    </>
  );
}

export default App