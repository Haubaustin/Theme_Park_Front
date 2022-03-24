import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main'
import { Route, Routes, } from 'react-router-dom';
import About from './components/About.js'




function App() {

  return (
    <div className="App">
    <Header className ="Header"/>
    <div className='AppMain'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<About />} />
      </Routes> 
      </div>
    <Footer />
    </div>
  );
}

export default App;
