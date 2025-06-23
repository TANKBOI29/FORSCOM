import Topbar from '../Components/Topbar'
import Front from '../Components/Front'
import About from "../Components/About"
import Footer from "../Components/Footer"
import FadeContent from "../Components/FadeContent"

function Fade(){
    return (
        <>
          <div id='hero' className='relative w-full h-full flex items-center justify-center bg-neutral-800 overflow-hidden'>
            <FadeContent />
          </div>
    
          <footer id="footer" className='flex h-full px-0 pt-8'>
            <Footer />
          </footer>
        </>
    )
};

export default Fade;