import './App.css';
import { NavigationBar } from './Komponen/Navbar';
import { MainContent } from './Komponen/Maincontent';
import { LoginPage } from './Komponen/login';
import { SignUp } from './Komponen/signup';
import { BeritaPage } from './Kategori/berita';
import { OlahragaPage } from './Kategori/olahraga';
import { CuacaPage } from './Kategori/cuaca';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    <NavigationBar/>
    </div>
    <Router>
      <Routes>
        <Route path='/olahraga' element={<OlahragaPage/>}/>
        <Route path='/cuaca' element={<CuacaPage/>}/>
        <Route path='/berita' element={<BeritaPage/>}/>
        <Route path='/home' element={<MainContent/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
