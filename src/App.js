import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Article from "./components/Article/Article";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="article" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





