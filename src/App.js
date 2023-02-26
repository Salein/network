import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile store={props.store}/>} />

            <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
