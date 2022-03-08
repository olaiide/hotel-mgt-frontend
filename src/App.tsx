import React from "react";
import NavBar from "./components/NavBar/NavBar";
import DashHome from "./pages/DashHome/DashHome";
import Login from "./pages/onboarding/Login/Login";
import Register from "./pages/onboarding/Register/Register";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalstyles";
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<DashHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
