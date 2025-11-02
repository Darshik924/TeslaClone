
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Features from './components/Features';
import ImageCarousel from './components/ImageCarousel';



function App() {

  return (
    <>
      <Navbar />
      <Content />
      <ImageCarousel/>
      <br/><br/><br/>
      <Features/>
    </>
  );
}

export default App;
