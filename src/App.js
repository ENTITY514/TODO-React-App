import './App.css';
import MainPage from './Pages/Main_Page/page'
import AboutPage from './Pages/About_Page/page'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
