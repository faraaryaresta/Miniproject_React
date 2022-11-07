import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents, studentSelectors, updateStudents } from '../../redux/studentSlice';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './style.css';

const EditStudent = () => {
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('');
    const [ortu, setOrtu] = useState('');
    const [noHandphone, setnoHandphone] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [jenisKelamin, setjenisKelamin] = useState('');
    const [alamat, setAlamat] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const student = useSelector((state) => studentSelectors.selectById(state, id));

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    useEffect(() => {
        if(student) {
            setNama(student.nama);
            setUmur(student.umur);
            setOrtu(student.ortu);
            setTanggal(student.tanggal);
            setnoHandphone(student.noHandphone);
            setjenisKelamin(student.jenisKelamin);
            setAlamat(student.alamat);
        }
    }, [student]);

    const updateHandler = async (e) => {
        e.preventDefault();
        if (nama||umur||ortu||noHandphone||tanggal||jenisKelamin||alamat.length !== 0) {
        await dispatch(updateStudents({id, nama, umur, ortu, noHandphone, tanggal, jenisKelamin, alamat}));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Update students',
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
                    <h1>Edit Students</h1>
                </div>
                <div className="card-body-add d-flex justify-content-center" >
                    <form onSubmit={updateHandler} className="box mt-5" style={{width:"90%"}}> 
                        <div className="mb-3">
                            <label className="form-label">Nama</label>
                            <input 
                                type="text" 
                                required
                                className="form-control"
                                placeholder='Masukkan nama...'
                                name='nama'
                                value={nama}
                                onChange= {(e) => setNama(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Umur</label>
                            <input 
                                type="number" 
                                required
                                className="form-control" 
                                placeholder='Masukkan umur...'
                                name='umur'
                                value={umur}
                                onChange= {(e) => setUmur(e.target.value)} 
                                style={{width:"52%"}}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nama Ayah/Ibu</label>
                            <input 
                                type="text" 
                                required
                                className="form-control"
                                placeholder='Masukkan nama...'
                                name='ortu'
                                value={ortu}
                                onChange= {(e) => setOrtu(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">No Handphone</label>
                            <input 
                                type="number" 
                                required
                                className="form-control" 
                                name='noHandphone'
                                placeholder='Masukkan nommor...'
                                value={noHandphone}
                                onChange= {(e) => setnoHandphone(e.target.value)}
                                style={{width:"52%"}}  
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tanggal Daftar</label>
                            <input 
                                type="date" 
                                required
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
                                required >
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
                                required
                                rows="5"
                                value={alamat}
                                onChange= {(e) => setAlamat(e.target.value)} >
                            </textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <Link to="/student" data-toggle="tooltip" 
                                data-placement="top" 
                                className="btn btn-primary rounded shadow me-2">Cancel</Link>
                        </div><br/>
                    </form>
                </div>
            </div>
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default EditStudent