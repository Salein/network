import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile posts={props.posts} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
