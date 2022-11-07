import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addStudents } from '../../redux/studentSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './style.css';


const AddStudent = () => {
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [ortu, setOrtu] = useState('');
    const [noHandphone, setnoHandphone] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [jenisKelamin, setjenisKelamin] = useState('');
    const [alamat, setAlamat] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        if (nama||umur||ortu||noHandphone||tanggal||jenisKelamin||alamat.length !== 0) {
        await dispatch(addStudents({nama, umur, ortu, noHandphone, tanggal, jenisKelamin, alamat}));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Menambahkan students',
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/student');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ada harus mengisi form terlebih dahulu!',
            });
        };
    };


  return (
    <div>
        <Navbar/>
        <div className='container form pt-5 d-flex justify-content-center'>
            <div className='card shadow-sm radius ' style={{width:"60%"}} >
                <div className="card-header-add text-center" >
                    <h1>Form Students</h1>
                </div>
                <div className="card-body-add d-flex justify-content-center" >
                    <form onSubmit={submitHandler} className="box mt-5" style={{width:"90%"}}> 
                        <div className="mb-3">
                            <label className="form-label">Nama</label>
                            <input 
                                type="text"      
                                className="form-control"
                                name='nama'
                                placeholder='Masukkan nama...'
                                value={nama}
                                onChange= {(e) => setNama(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Umur</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                name='umur'
                                placeholder='Masukkan umur...'
                                value={umur}
                                onChange= {(e) => setUmur(e.target.value)} 
                                style={{width:"52%"}}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nama Ayah/Ibu</label>
                            <input 
                                type="text"      
                                className="form-control"
                                name='ortu'
                                placeholder='Masukkan nama...'
                                value={ortu}
                                onChange= {(e) => setOrtu(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">No Handphone</label>
                            <input 
                                type="number"                            
                                className="form-control" 
                                name='noHandphone'
                                placeholder='Masukkan nomor...'
                                value={noHandphone}
                                onChange= {(e) => setnoHandphone(e.target.value)}
                                style={{width:"52%"}}  
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tanggal Daftar</label>
                            <input 
                                type="date"                            
                                className="form-control" 
                                name='tanggal'
                                aria-describedby="tanggal"
                                value={tanggal}
                                onChange= {(e) => setTanggal(e.target.value)} 
                                style={{width:"52%"}} 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="jenisKelamin">Jenis Kelamin</label>
                            <select type="text" 
                                onChange= {(e) => setjenisKelamin(e.target.value)} 
                                value={jenisKelamin} 
                                className="form-control" 
                                name='jenisKelamin'
                                style={{width:"28%"}} 
                                >
                                <option selected disabled value="">Choose...</option>
                                <option>Laki-Laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Alamat</label>
                            <textarea 
                                className="form-control"
                                name='alamat'    
                                placeholder='Masukkan alamat...'
                                rows="5"
                                value={alamat}
                                onChange= {(e) => setAlamat(e.target.value)} >
                            </textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div><br/>
                    </form>
                </div>
            </div>
        </div>
        <div><Footer/></div>
    </div>
  )
}


export default AddStudent