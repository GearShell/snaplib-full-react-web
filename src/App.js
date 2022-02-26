import './App.css';
import Header from './components/Header';
import Home from  './components/Home';
import Photography from './components/Photography';
import Gallery from './components/Gallery';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
            <Routes>
              <Route exact path='/' element= { <Home/> } />
              <Route path='/photography' element= { <Photography/> }/>
              <Route path='/gallery' element= { <Gallery/> }/>
              <Route path='/about' element= { <About/> } />
              <Route path='/contact' element= { <Contact/> } />
            </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
