import { BrowserRouter, Routes, Route } from 'react-router-dom';
import global from './styles/global.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Test from './Test';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

function App() {
  return (
    // Il ne peut y avoir que un seul élément, c'est pour cela que l'on crée une div, un fr/fragment/balise vide pour contenir les autres composants
    // Voir différence entre div et fragment
    // <>
    //   <h2>test</h2>
    //   <p>test</p>
    //   <Test />
    // </>

    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Layout /> }>

          <Route index element={ <Home color={"white"} /> } />

          <Route path="/contact" element={ <Contact /> } />

          <Route element={<ProtectedRoute />}><Route path="/blogs" element={ <Blogs /> } /></Route>

          <Route path="/login" element={ <Login /> } />

          <Route path="/logout" element={ <Logout /> } />

          <Route path='*' element={ <NoPage /> } />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;