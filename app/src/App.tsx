import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetailPage from './pages/ProductDetailPage';
import Industries from './pages/Industries';
import Infrastructure from './pages/Infrastructure';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </Layout>
  );
}
