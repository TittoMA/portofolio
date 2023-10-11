import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CardContainer from './components/CardContainer';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter basename='/portofolio'>
      <div className='bg-slate-700 text-[#607B96] min-h-screen p-16'>
        <CardContainer>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </CardContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
