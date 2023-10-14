import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import env from "./../env";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Details from "./pages/Details";
import axios from "axios";
import Categories from "./pages/Categories";
import "bootstrap/dist/css/bootstrap.min.css"
import About from "./pages/About";




function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(env.BACKEND_URL);
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    window.Telegram.WebApp.expand();
  }, []);

  return (
    <>
      <div className="screen">
        {loading && (
          <div className="loading-box">
            <img src="/tandwiel.gif" alt="" />
          </div>
        )}

        {data.length >= 1 && (
          <>
              <Router>
                <div className="top">
                <Routes>
                  <Route path="/">
                    <Route index element={<Home data = {data}/>} />
                    <Route path="/categories" element={<Categories data = {data}/>} />
                    <Route path="/about" element = {<About/>} />
                    <Route path="/teacher/:id" element={<Details data = {data}/>} />
                  </Route>
                </Routes>
                </div>
                <Navbar />
              </Router>
          </>
        )}
      </div>
    </>
  );
}

export default App;
