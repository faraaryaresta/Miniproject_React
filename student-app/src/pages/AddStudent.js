import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { update } from '../redux/studentSlice';

const AddStudent = () => {
    const [nama, setNama] = useState('');
    const [nisn, setNisn] = useState('');
    const [noHandphone, setnoHandphone] = useState('');
    const [email, setEmail] = useState('');
    const [jenisKelamin, setjenisKelamin] = useState('Laki-Laki');
    const [alamat, setAlamat] = useState('');

    const dispatch = useDispatch();

    const updateStudent = (e) => {
        e.preventDefault();
        dispatch(update({
            nama, nisn, noHandphone, email, jenisKelamin , alamat
        }));

    }
  

  return (
    <div className='container-fluid'>
        <form onSubmit={updateStudent} className="box mt-5"> 
            <div className="form-group">
                <label className="form-label">Nama</label>
                <input 
                    type="text" 
                    className="form-control"
                    value={nama}
                    onChange= {(e) => setNama(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label className="form-label">Nisn</label>
                <input 
                    type="number" 
                    className="form-control" 
                    value={nisn}
                    onChange= {(e) => setNisn(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label className="form-label">No Handphone</label>
                <input 
                    type="number" 
                    className="form-control" 
                    value={noHandphone}
                    onChange= {(e) => setnoHandphone(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    className="form-control" 
                    aria-describedby="emailHelp"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label className="jenisKelamin">Jenis Kelamin</label>
                <select type="text" onChange= {(e) => setjenisKelamin(e.target.value)}  value={jenisKelamin} className="form-control">
                    <option value="lakilaki">Laki-Laki</option>
                    <option value="perempuan">Perempuan</option>
                </select>
            </div>
            <div className="form-group">
                <label className="form-label">Alamat</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={alamat}
                    onChange= {(e) => setAlamat(e.target.value)} 
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddStudent