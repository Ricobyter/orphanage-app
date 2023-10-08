import './App.css';
import Contact_Us from './Components/Contact_Us';
import Footer from './Components/Footer';
import Image_Slider from './Components/Image_Slider';
import Navbar from './Components/Navbar';
import Our_Work from './Components/Our_Work';

function App() {
  return (
    <div>
      <Navbar/>
      <Our_Work/>
      <Image_Slider/>
      <Contact_Us/>
      <Footer/>
    </div>
  );
}

export default App;
