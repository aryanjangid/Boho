import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './components/Carousel';
import Brands from './components/Brands';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Brands />
    </div>
  );
}

export default App;
