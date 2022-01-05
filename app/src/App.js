import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import Carousel from './Components/CarouselComponent';
import Contact from './Components/Contact';
import BottomNav from './Components/BottomNav';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Contact />
      <BottomNav />
    </div>
  );
}

export default App;
