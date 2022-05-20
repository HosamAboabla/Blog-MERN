import './App.css';
import NavBar from './components/NavBar/NavBar';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';
import Home from './pages/Home/Home';
import DetailPost from './pages/DetailPost/DetailPost';
import Loading from './components/Loading/Loading';
import {BrowserRouter , Routes, Route} from 'react-router-dom' //react router
import SideBar from './components/SideBar/SideBar';
import Statistics from './pages/Statistics/Statistics';
import Topics from './pages/Topics/Topics';
import Users from './pages/Users/Users';

function App() {
  // element={<DetailPost />}
  return (
    <div>
      

      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:slug" element={<DetailPost />} />
          <Route path="/*" element={<><h2>ERROR 404 not found</h2></>}/>
          <Route path="/admin-statistics" element={<Statistics/>}/>
          <Route path="/admin-topics" element={<Topics/>}/>
          <Route path="/admin-users" element={<Users/>}/>
          <Route path="/side" element={<SideBar/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />

      
    </div>
  );
}

export default App;

/*


*/