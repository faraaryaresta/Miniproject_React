import React from 'react';
import { useSelector } from 'react-redux';

const ShowStudent = () => {
const { nama, nisn, noHandphone, email, jenisKelamin , alamat} = useSelector(state => state.student);

  return (
    <div>
        <div className="card shadow-sm radius">
            <div className="card-header d-flex justify-content-end">
                <button onClick="" data-toggle="tooltip" data-placement="top" title="Delete" className="btn btn-light rounded shadow me-2">
                    <i className="bi bi-trash">Delete</i>
                </button>
                <button onClick="" data-toggle="tooltip" data-placement="top" title="Edit" className="btn btn-light rounded shadow me-2">
                    <i className="bi ">Edit</i>
                </button>
            </div>
            <div className="card-body">
                <h5>Nama : {nama}</h5>
                <p>NISN : {nisn}</p>
                <p>Email : {email}</p>
                <p>No Hp : {noHandphone}</p>
                <p>Jenis Kelamin :{jenisKelamin}</p>
                <p>Alamat : {alamat}</p>
                
            </div>
        </div>
    </div>
  )
}

export default ShowStudent