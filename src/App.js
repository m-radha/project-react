
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from './assets/local-storage/local-storage';
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Posts></Posts>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





