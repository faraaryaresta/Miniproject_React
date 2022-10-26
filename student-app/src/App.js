import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { 
  BrowserRouter, Routes, Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='pt-5'>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/student" element={<Student></Student>}></Route>
          <Route path="/add" element={<AddStudent></AddStudent>}></Route>
          <Route path="/edit/:id" element={<EditStudent></EditStudent>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
