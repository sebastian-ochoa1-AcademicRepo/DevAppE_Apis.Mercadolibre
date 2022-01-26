import 'styles/globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from 'pages/index';
import Detalle from 'pages/detalle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/detalle/:itemid' element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
