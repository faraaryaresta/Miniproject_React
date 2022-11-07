import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStudents, studentSelectors, deleteStudents } from '../../redux/studentSlice';
import Swal from 'sweetalert2';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {FaEdit} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Student = () => {
    const dispatch = useDispatch();
    const students = useSelector(studentSelectors.selectAll);

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning", 
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#D33",
            confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteStudents(id))
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Delete students',
                    showConfirmButton: false,
                    timer: 1500
                });
            }  
        })
    };

    
  return (
    <div>
        <Navbar/>
        <div className='container pt-5'>
            <h1 className="text-center title-sec pt-3">Data Students</h1>
            <div className='box mt-5'>
                <table className='table'>
                    <thead className='item'>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Nama Ayah/Ibu</th>
                            <th>Tanggal Daftar</th>
                            <th>No Handphone</th>
                            <th>Jenis Kelamin</th>
                            <th>Alamat</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} className='item2'>
                                <td>{index + 1}</td>
                                <td>{student.nama}</td>
                                <td>{student.umur}</td>
                                <td>{student.ortu}</td>
                                <td>{student.tanggal}</td>
                                <td>{student.noHandphone}</td>
                                <td>{student.jenisKelamin}</td>
                                <td>{student.alamat}</td>
                                <td>
                                    <Link to={`/edit/${student.id}`} 
                                        data-toggle="tooltip" 
                                        data-placement="top" 
                                        title="Edit" 
                                        className="icons me-3">
                                        <i><FaEdit/></i>
                                    </Link>
                                    <Link onClick={() => deleteHandler(student.id)} 
                                        data-toggle="tooltip" 
                                        data-placement="top" 
                                        title="Delete" 
                                        className="icons "
                                        style={{color:"darkred"}}>
                                        <i><FontAwesomeIcon icon={faTrashCan}/></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    
                    </tbody>
                </table>
            </div> 
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default Student