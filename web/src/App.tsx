import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import { UserAdd } from "./components/UserAdd";
import { UserList } from "./components/UserList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/add-user" element={<UserAdd />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
