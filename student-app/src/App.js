import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Student from './pages/Students/Student';
import AddStudent from './pages/Students/AddStudent';
import EditStudent from './pages/Students/EditStudent';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { 
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='pt-5'>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/student" element={<Student></Student>}></Route>
          <Route path="/add" element={<AddStudent></AddStudent>}></Route>
          <Route path="/edit/:id" element={<EditStudent></EditStudent>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
