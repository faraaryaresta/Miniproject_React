import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import kids from './kids.jpg'

const Signup = () => {
    const history = useNavigate();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const [ data, setData ] = useState(true);

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password ){
            setData(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: ' Pleace Fill Every Field!',
            })
            
        }else {
            setData(true);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));

            console.log("Saved In Local Storage");
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Silahkan Login',
                showConfirmButton: false,
                timer: 1500
            });
            history("/login")
        }
    }

    
  return (
    <div>
        <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className="right mt-5" style={{ width: "100%" }}>
                    <div className="signimg mt-5">
                        <img src={kids} style={{ maxWidth: 500 }} alt="" />
                    </div>
                </div> 
                <div className='left mt-3 p-3' style={{ width: "100%" }}>
                    <h3 className='text-center col-lg-6'>Regristrasi</h3>
                    <form onSubmit={handlerSubmit}>
                        <div className="mb-3 col-lg-6">
                            <label className="form-label">Name</label>
                            <input 
                                placeholder="Enter Your Name" 
                                type="name" 
                                className="form-control"
                                name='nama' 
                                id="exampleInputNama1" 
                                aria-describedby="emailHelp"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-lg-6">
                            <label className="form-label">Email address</label>
                            <input 
                                placeholder="Enter email" 
                                type="email" 
                                className="form-control"
                                name='email' 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3 col-lg-6">
                            <label className="form-label">Password</label>
                            <input 
                                placeholder="password" 
                                type="password" 
                                className="form-control" 
                                name='password'
                                id="exampleInputPassword1"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className='btn col-lg-6 text-white' style={{ background: "rgb(67, 185, 127)" }} type="submit">
                            Submit
                        </button>
                        <p className='mt-3'>Already Have an Account <span><Link to="/login">LogIn</Link></span> </p>
                    </form>
                </div>
            </section>
        </div>

    </div>
  )
}

export default Signup