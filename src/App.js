import React, { useState, useEffect, useStyles } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import SliderHome from './components/MainPage/Slider';
import { Navbar, Products, Cart, Checkout } from './components';
import { commerce } from './lib/commerce';
import Data from "./components/Data"
import Sdata from "./components/shops/Sdata"
import HotProducts from './components/asicminers/HotProducts';
import "./App.css"
import Home from './components/MainPage/Home';
import ProductsGPU from './components/Products/ProductsGPU';
import ProductsJas from './components/Products/ProductsJas';
import Mailer from './components/Support/Mailer';
import Footer from './components/Footer/Footer';

import AboutUs from './components/about/AboutUs';
import Faquestions from './components/faq/Faq';
import ShippingPolicy from './components/shippingpolicy/ShippingPolicy';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy';
import RefundPolicy from './components/refundpolicy/RefundPolicy';
import TermsOfService from './components/termsofservice/TermsOfService';

import ReactLoading from "react-loading";
import LOGO from './assets/LOGO.png';
import L7Details from './components/Products/Asic/L7Scrypt';
import A11ProDetails from './components/Products/Asic/A11Pro';
import KD5Details from './components/Products/Asic/KD5';
import KDBOXProDetails from './components/Products/Asic/KD-BOXPro';
import BMK1Details from './components/Products/Asic/BM-K1+';
import DR5Details from './components/Products/Asic/DR5';
import Z15Details from './components/Products/Asic/Z15';
import KDLiteDetails from './components/Products/Asic/KD-Lite';
import E9Details from './components/Products/Asic/E9';
import KDMaxDetails from './components/Products/Asic/KDMax';

import RTX3070Details from './components/Products/GPU/RTX3070';
import RTX3090Details from './components/Products/GPU/RTX3090';
import RX6700XTDetails from './components/Products/GPU/RX6700XT';

import X41UDetails from './components/Products/Jas/X4-1U';
import X41U1UDetails from './components/Products/Jas/X4-C 1U';

import TrackOrder from './components/trackorder/TrackOrder';
import PackageNotFound from './components/trackorder/PackageNotFound';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [input, setInput] = useState('');
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const routeAsic = "/asicminers";
  const routeGPU = "/graphicscards";
  const routeJas = "/jasminers";

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  useEffect(() => {
  }, [input]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const { productItems } = Data
  const { shopItems } = Sdata

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1300)
  }, [])
//<divstyle={{ display: 'flex' }}>
  return (
    <>

    {loading === false ? (
    <Router>
      <div>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        
        <Routes>
       
          <Route exact path={process.env.PUBLIC_URL + '/'} element={<><Home /><HotProducts route={routeAsic} products={products} onAddToCart={handleAddToCart}/></>}/>

          <Route exact path={process.env.PUBLIC_URL + '/asicminers'} element={<Products route={routeAsic} products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />} />

          <Route exact path={process.env.PUBLIC_URL + '/about'} element={<AboutUs/>} /> 

          <Route exact path={process.env.PUBLIC_URL + '/graphicscards'} element={<ProductsGPU route={routeGPU} products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />}/>
            
          <Route exact path={process.env.PUBLIC_URL + '/jasminers'} element={<ProductsJas route={routeGPU} products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />}/>

          <Route exact path={process.env.PUBLIC_URL + '/asicminers/L7'} element={<L7Details products={products} onAddToCart={handleAddToCart}/>}/> 
      
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/A11Pro'} element={<A11ProDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/KD5'} element={<KD5Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/KD-BOXPro'} element={<KDBOXProDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/BM-K1+'} element={<BMK1Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/DR5'} element={<DR5Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/Z15'} element={<Z15Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/KDLite'} element={<KDLiteDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/E9'} element={<E9Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/asicminers/KDMax'} element={<KDMaxDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          

          <Route exact path={process.env.PUBLIC_URL + '/graphicscards/RTX3070'} element={<RTX3070Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/graphicscards/RTX3090'} element={<RTX3090Details products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/graphicscards/RX6700XT'} element={<RX6700XTDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          

          <Route exact path={process.env.PUBLIC_URL + '/jasminers/X4-1U'} element={<X41UDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/jasminers/X4-C1U'} element={<X41U1UDetails products={products} onAddToCart={handleAddToCart}/>}/>
            
          

          <Route exact path={process.env.PUBLIC_URL + '/track'} element={<TrackOrder text={setInput} text2={input}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/track/orderstatus'} element={<PackageNotFound text={input}/>}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/cart'} element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />}/>
            
          
          <Route exact path={process.env.PUBLIC_URL + '/checkout'} element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />}/>
            
          

          <Route exact path={process.env.PUBLIC_URL + '/contact'} element={<Mailer />}/>
            
          

          <Route exact path={process.env.PUBLIC_URL + '/faq'} element={<Faquestions/>}/> 
            
          
          <Route exact path={process.env.PUBLIC_URL + '/shipping-policy'} element={<ShippingPolicy/>}/> 
            
          
          <Route exact path={process.env.PUBLIC_URL + '/privacy-policy'} element={<PrivacyPolicy/>}/> 
            
          
          <Route exact path={process.env.PUBLIC_URL + '/refund-policy'} element={<RefundPolicy/>}/> 
            
          
          <Route exact path={process.env.PUBLIC_URL + '/terms-of-service'} element={<TermsOfService/>}/> 
            


        </Routes>
        <Footer/>

      </div>
    </Router>
        ) : (
          <div>
          <img className="loadingbrologo" src={LOGO} alt="MainMining" height="25px" />
          <ReactLoading className="loadingbro" color='#ffcd4e' type="spin" height={140} width={80} />
          </div>
          )}
          </>
    
  );
};

export default App;
//        <Footer/>
