import React from 'react';
import teacher from './img/teacher.jpg';
import teacher2 from './img/teacher2.jpg';
import teacher3 from './img/teacher3.jpg';
import students from './img/students.jpg';
import './Home.css';


const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
        <h3>Happy Schools</h3>
          <p>The best way to buy beautiful modern furniture.</p>
          <button className="btn btnbanner">Show now</button>
        </div>
      </div><br/><br/>

      <section className="about">
        <h1 className="heading"> <span>about</span> us </h1>
        <div className="row">
            <div className="image">
              <img src={students} className="logo-atas" alt="logo"/>
            </div>
            <div className="content">
                <h3>what makes our special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                <a className="btn">learn more</a>
            </div>
        </div>
    </section>


      <section className="variations" id="variations">
        <h1 className="heading"> Our Teachers<span>Variations</span> </h1>
        <p>teachers</p>
        <div className="box-container">
            <div className="box">
                <img src={teacher} className="logo-atas"  alt="logo"/>
                <h3>Ayasha </h3>
            </div>
            <div className="box">
                <img src={teacher2} className="logo-atas"  alt="logo"/>
                <h3>Azahra</h3>
            </div>
            <div className="box">
                <img src={teacher3} className="logo-atas"  alt="logo"/> 
                <h3>Sams  </h3>
            </div>
        </div>
      </section>

    {/* <div className="col-md-3 card">
      <img src={teacher4} className="logo-atas"  alt="logo"/> 
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="col-md-3 card">
      <img src={teacher4} className="logo-atas"  alt="logo"/> 
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="col-md-3 card">
      <img src={teacher4} className="logo-atas"  alt="logo"/> 
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="col-md-3 card">
      <img src={teacher4} className="logo-atas"  alt="logo"/> 
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div> */}


    </>
  )
};

export default Home;