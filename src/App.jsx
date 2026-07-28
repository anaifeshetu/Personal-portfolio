import Hero from "./section/Hero";
import Projects from "./section/Projects"
import Achivements from "./section/Achivements";
import About from "./section/About";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import Navbar from "./layout/Navbar";
import Approach from "./section/Approach";



function App() {
  
  return (
    <div className='min-h-screen overflow-x-hidden  '>
<Navbar/>

<main>
  <Hero/>
  <About/>
  <Projects/>
  <Achivements/>
  <Skills/>
  <Approach/>
  <Contact/> 

  
</main>
    </div>
    
     
  )
}

export default App;
