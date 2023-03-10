import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProfileAPIContainer from "./components/Profile/ProfileAPIContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId" element={<ProfileAPIContainer />} />
            <Route path="/profile/" element={<ProfileAPIContainer />} />
            
            <Route path="/dialogs/*" element={<DialogsContainer />} />

            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
