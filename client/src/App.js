import './App.css';
import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';
import Home from './pages/Home/Home';
import Loading from './components/Loading/Loading';
import {BrowserRouter , Routes, Route} from 'react-router-dom' //react router

function App() {
  return (
    <div>
      

      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>

        </Routes>
      </BrowserRouter>
      <Footer />

      
    </div>
  );
}

export default App;

/*


*/