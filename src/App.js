import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Metodo from './components/Metodo';
import Error from './components/Error';

const App = () => {
  return (
    <>    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/metodo/:tipo" element={<Metodo />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>  
    </>
  );
}

export default App;
