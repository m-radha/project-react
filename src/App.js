
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Posts } from './assets/local-storage/local-storage';
import Home from "./components/Home";
import Register from './components/Register';
import Login from './components/Login';
import Password from './components/Password';
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article></Article>
      {/* <Posts></Posts>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;





