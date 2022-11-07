import React, { useState } from 'react';
import './Contact.css';
// sweetalert2
import Swal from 'sweetalert2';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {

  const baseData ={
    firstname: "",
    lastname: "",
    email: "",
    pesan: ""
  }
  const [data, setData] = useState(baseData);
  const regex = /^[A-Za-z ]*$/;
  const regex1 = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  const [errorMassage, setErrorMassage] = useState("");
  
  
  const handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "firstname") {
      if (regex.test(value)) {
        setErrorMassage("")
      } else {
        setErrorMassage("Nama Lengkap Harus Berupa Huruf")
      }
    };

    if (name === "lastname") {
      if (regex.test(value)) {
        setErrorMassage("")
      } else {
        setErrorMassage("Nama Lengkap Harus Berupa Huruf")
      }
    };

    if (name === "email") {
        if (regex1.test(value)) {
          setErrorMassage("")
        } else {
        setErrorMassage("Email Tidak Sesuai")
      }
    };


    setData({
      ...data,
      [name]: value
    })
    console.log("data", data)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (errorMassage !== "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Data Pendaftar Tidak Sesuai!',
      });
    } else {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Nama  : ${data.firstname} ${data.lastname}5
                Email : ${data.email} 
                Pesan : ${data.pesan} 
                Berhasil Diterima`,
        showConfirmButton: true,
      })
    };
    resetData()
    event.preventDefault()
  };

  const resetData = () => {
    setData(baseData);
    setErrorMassage("")
  };

  return (
    <>
      <Navbar/>
      <div className="contact-form" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-5 ">
                <h1 className="title-sec">Contact Us</h1>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 field">
              <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                  <label>
                    First Name*
                    <input
                      type="text"
                      name="firstname"
                      required
                      onChange={handleInput}
                      value={data.firstname}
                      className="form-control form-control-lg me-2"
                      style={{width:"95%"}}
                    />
                  </label>
                  <label>
                    Last Name
                    <input
                      type="text"
                      name="lastname"
                      required
                      onChange={handleInput}
                      value={data.lastname}
                      className="form-control form-control-lg"
                      style={{width:"95%"}}
                    />
                  </label><br/>
                </div>
                <div className="input-group mb-3">
                  <label>
                    Email*
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={handleInput}
                      value={data.email}
                      className="form-control form-control-lg"
                      style={{width:"95%"}}
                    />
                  </label><br/>
                </div>
                <div className="input-group mb-3">
                  <label>
                    What can we help you with?
                    <textarea   style={{width:"95%", height:"80px", borderRadius: "5px"}} 
                      className="form-control form-control-lg" 
                      name="pesan" 
                      value={data.pesan} 
                      onChange={handleInput} ></textarea>
                  </label><br/>
                </div>
                <span className="errorMassage">{errorMassage}</span><br/><br/>
                <input className="btn btn-warning btn-block" type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div><Footer/></div>
    </>
  );
}

export default Contact;