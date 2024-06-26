import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/Contact';
import Service from './routes/service';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>

      

    </div>
  );
}

export default App;
