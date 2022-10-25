import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AddStudent from './pages/AddStudent';
import ShowStudent from './pages/ShowStudent';

function App() {
  return (
    <div className='container'>
      <AddStudent></AddStudent>
      <ShowStudent></ShowStudent>
    </div>
  );
}

export default App;
