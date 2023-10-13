import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="screen">
          {loading && ( 
            <div className="loading-box">
              <img src="/tandwiel.gif" alt="" />
            </div>
          )}

        <div className="top">
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
