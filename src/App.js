import './App.css';
import About_Us from './Components/About_Us';
import Contact_Us from './Components/Contact_Us';
import Entry_image from './Components/Entry_image';
import Footer from './Components/Footer';
import Image_Slider from './Components/Image_Slider';
import Navbar from './Components/Navbar';
import Our_Work from './Components/Our_Work';
import Sponsors from './Components/Sponsors';

function App() {
  return (
    <div>
      <Navbar/>
      <Entry_image/>
      <About_Us/>
      <Our_Work/>
      <Image_Slider/>
      <Sponsors/>
      <Contact_Us/>
      <Footer/>
    </div>
  );
}

export default App;
