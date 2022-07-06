import './App.css';
import Main_Page from './Pages/Main_Page/main-page'
import Header from './Components/Header/header'
import Footer from './Components/Footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main_Page />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
