import NavBar from "./Component/Navbar";
import Preloader from "../src/Component/Pre";
import ScrollToTop from "./Component/ScrollToTop";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";
import Home from "./Component/Home/Home";

function App() {
    const [load, updateLoad] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false)
        }, 1200)

        return () => clearTimeout(timer)
    }, []);
  return (
      <BrowserRouter>
          <div className='App' id={load ? 'no-scroll' : 'scroll'}>
          <Preloader load={load}/>
          <NavBar />
          <ScrollToTop/>
          <Routes>
              <Route path='/' element={<Home />}/>
          </Routes>
          </div>
      </BrowserRouter>
        );
}

export default App;
