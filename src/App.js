import './App.css';
import Boxes from './components/Boxes';
import Covid from './components/Covid';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import Form from './components/Form';
import FormBtns from './components/FormBtns';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <FormBtns/>
      <Form/>
      <Boxes/>
      <Covid/>
      <Destinations/>
      <Footer/>
      <FooterBottom/>
      
    </div>
  );
}

export default App;
