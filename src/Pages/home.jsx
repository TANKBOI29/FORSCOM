import Topbar from '../Components/Topbar'
import Front from '../Components/Front'
import About from "../Components/About"
import Footer from "../Components/Footer"
import Unit from "../Components/Units"
import Propaganda from '../Components/Propaganda'

function Home(){
    return (
        <>
          <div id="topbar" className="flex h-full bg-neutral-900">
            <Topbar />
          </div>
          <div id="hero" className="flex h-full bg-neutral-900">
            <Front />
          </div>
          <main>
            <section id="about" className="flex h-full bg-transparent py-20 px-8 justify-center">
              <About />
            </section>
          </main>
          <div id="units" className="flex h-full justify-center items-center bg-transparent">
            <Unit/>
          </div>
          <div id="propaganda" className="flex h-full justify-center items-center bg-transparent">
            <Propaganda/>
          </div>
    
          <footer id="footer" className='flex h-full px-0 pt-8'>
            <Footer />
          </footer>
        </>
    )
};

export default Home;
