import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import hero from './hero.png'

const Login = () => {
    const history = useNavigate();

    const [emaillog, setEmaillog] = useState('');
    const [passwordlog, setPasswordlog] = useState('');
    const [data, setData] = useState(true);

    const handlerSubmit = (e) => {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!emaillog || !passwordlog) {
            setData(false);
            console.log("Empty");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' You have not filled in!',
            })
        }else if (passwordlog !== pass || emaillog !== mail){
            setData(false)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Fill correct Info else keep trying!',
            })
        }else{
            setData(true);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Welcome to DayCare.',
                showConfirmButton: false,
                timer: 1500
            });
            history("/home")
        }
    }   

  return (
    <div>

        <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className="right mt-5" style={{ width: "100%" }}>
                    <div className="signimg mt-5">
                        <img src={hero} style={{ maxWidth: 500 }} alt="" />
                    </div>
                </div>
                <div className='left mt-3 p-3' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>LogIn</h3>
                    <form onSubmit={handlerSubmit}>
                        <div className="mb-3 col-lg-6">
                            <label className="form-label">Email address</label>
                            <input 
                                placeholder="Enter email" 
                                type="email" 
                                className="form-control" 
                                name='email'
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                onChange={(e) => setEmaillog(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-lg-6">
                            <label className="form-label">Password</label>
                            <input 
                                placeholder="password" 
                                type="password" 
                                name='password'
                                className="form-control" 
                                id="exampleInputPassword1"
                                onChange={(e) => setPasswordlog(e.target.value)}
                            />
                        </div>
                        <button className='btn col-lg-6 text-white' style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Login