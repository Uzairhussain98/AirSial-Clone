import './App.css';
import Banner from './components/Banner';
import Boxes from './components/Boxes';
import Covid from './components/Covid';
import Destinations from './components/Destinations';
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
      {/* <Banner/> */}
      <Destinations/>
      
    </div>
  );
}

export default App;
