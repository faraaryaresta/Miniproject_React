import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStudents, studentSelectors } from '../redux/studentSlice';

const Student = () => {
// const { nama, nisn, noHandphone, email, jenisKelamin , alamat} = useSelector(state => state.student);

    const dispatch = useDispatch();
    const students = useSelector(studentSelectors.selectAll);

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);
  return (
    <div className='container pt-5'>
        <div className='box mt-5'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>NISN</th>
                            <th>Email</th>
                            <th>No Handphone</th>
                            <th>Jenis Kelamin</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.nama}</td>
                                <td>{student.nisn}</td>
                                <td>{student.email}</td>
                                <td>{student.noHandphone}</td>
                                <td>{student.jenisKelamin}</td>
                                <td>{student.alamat}</td>
                                <td>
                                    <button data-toggle="tooltip" data-placement="top" title="Delete" className="btn btn-light rounded shadow me-2">
                                        <i className="bi bi-trash">Delete</i>
                                    </button>
                                    <Link to={`/edit/${student.id}`} data-toggle="tooltip" data-placement="top" title="Edit" className="btn btn-light rounded shadow me-2">
                                        <i className="bi bi-pencil-square">Edit</i>
                                    </Link>
                                   
                                </td>
                            </tr>
                        ))}
                       
                    </tbody>
                </table>
            </div>


        {/* <div className='pt-3'>
            {students.map((student) => {
                return (
                <div className="container mt-3">
                    <div className="card shadow-sm radius">
                        <div className="card-header d-flex justify-content-end">
                            <button data-toggle="tooltip" data-placement="top" title="Detail" to="" className="btn btn-light rounded shadow me-2">
                                <i className="bi bi-eye">Detail</i>
                            </button>
                            <button data-toggle="tooltip" data-placement="top" title="Delete" className="btn btn-light rounded shadow me-2">
                                <i className="bi bi-trash">Delete</i>
                            </button>
                            <Link to={`/edit/${student.id}`} data-toggle="tooltip" data-placement="top" title="Edit" className="btn btn-light rounded shadow me-2">
                                <i className="bi bi-pencil-square">Edit</i>
                            </Link>
                        </div>
                        <div className="col-md-3 p-3">
                            <div className="card-body"  key={student.id} >
                                <h5>{student.nama}</h5>
                                <p>{student.nisn}</p>
                                <p>{student.email}</p>
                                <p>{student.noHandphone}</p>
                                <p>{student.jenisKelamin}</p>
                                <p>{student.alamat}</p>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div> */}




            
        </div>
  )
}

export default Student