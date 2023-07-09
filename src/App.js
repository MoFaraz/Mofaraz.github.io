import NavBar from "./Component/Navbar";
import Pre from "../src/Component/Pre"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from "react";

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
          <Pre load={load}/>
            <NavBar />
      </BrowserRouter>
        );
}

export default App;
