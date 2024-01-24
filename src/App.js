import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import RegistrationPage from './components/account/RegisterationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>    
  );
}

export default App;
