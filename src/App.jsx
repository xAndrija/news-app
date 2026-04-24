
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Article from './pages/article/Article.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
