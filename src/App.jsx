import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

// Pages ////
import Home from './pages/Home';
import Product from './pages/Product';
import Factory from './pages/Factory';
import News from './pages/News';
import RDCenter from './pages/RDCenter';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="factory" element={<Factory />} />
        <Route path="news" element={<News />} />
        <Route path="rd-center" element={<RDCenter />} />
        <Route path="about" element={<AboutUs />} />
        <Route  path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
