import NavBar from "./Component/Navbar";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import './style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <BrowserRouter>
            <NavBar />
      </BrowserRouter>
        );
}

export default App;
