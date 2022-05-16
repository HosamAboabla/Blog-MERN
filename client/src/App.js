import './App.css';
import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';
import { Routes, Route} from 'react-router-dom' //react router

function App() {
  return (
    <div>
      <NavBar />
      <br />  <br /> <br />
      <Post />
      <br />  <br /> <br />
      <Comment />
      <br />  <br /> <br />
      <Footer />
      
    </div>
  );
}

export default App;

/*
<Routes>
  <Route path="/" element={<HomePage cart = {cart} setCart = {setCart} />}/>
  <Route path="/products" element={<HomePage cart = {cart} setCart = {setCart} />}/>
  <Route path="/products/:id" element={<Product cart = {cart} setCart = {setCart}/>}/>
  <Route path="/cart" element={<Cart cart = {cart} setCart = {setCart} />}/> 
  <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>

</Routes>

*/