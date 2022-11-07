import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';
import notfound from './notfound.png';


const NotFound = () => {
    const history = useNavigate();
    const goHome = () => {
        history("/login")
    };
    
  return (
    
        <div className='pagenotfound'>
            <div className='textnot'>
                <img src={notfound}  alt="notfound"/>
                <h1>Oops! Something went wrong!</h1>
                <button onClick={goHome}>RETURN</button>
            </div>
        </div>
   
  )
}

export default NotFound