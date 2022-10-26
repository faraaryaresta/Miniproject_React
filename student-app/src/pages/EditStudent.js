import React, {useState} from 'react';



const EditStudent = () => {
    const [nama, setNama] = useState('');
    const [nisn, setNisn] = useState('');
    const [noHandphone, setnoHandphone] = useState('');
    const [email, setEmail] = useState('');
    const [jenisKelamin, setjenisKelamin] = useState('Laki-Laki');
    const [alamat, setAlamat] = useState('');



  

  return (
    <div className='card shadow-sm radius' style={{width:"60%"}}>
        <div className="card-header d-flex justify-content-center" >
            <h1>Form Students</h1>
        </div>
        <div className="card-body justify-content-center" >
            <form className="box mt-5" style={{width:"90%"}}> 
                <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input 
                        type="text" 
                        required
                        className="form-control"
                        value={nama}
                        onChange= {(e) => setNama(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">NISN</label>
                    <input 
                        type="number" 
                        required
                        className="form-control" 
                        value={nisn}
                        onChange= {(e) => setNisn(e.target.value)} 
                        style={{width:"52%"}}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">No Handphone</label>
                    <input 
                        type="number" 
                        required
                        className="form-control" 
                        value={noHandphone}
                        onChange= {(e) => setnoHandphone(e.target.value)}
                        style={{width:"52%"}}  
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        required
                        className="form-control" 
                        aria-describedby="emailHelp"
                        value={email}
                        onChange= {(e) => setEmail(e.target.value)} 
                        style={{width:"52%"}} 
                    />
                </div>
                <div className="mb-3">
                    <label className="jenisKelamin">Jenis Kelamin</label>
                    <select type="text" 
                        onChange= {(e) => setjenisKelamin(e.target.value)} 
                        value={jenisKelamin} 
                        className="form-control" 
                        style={{width:"28%"}} 
                        required >
                        <option>Laki-Laki</option>
                        <option>Perempuan</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Alamat</label>
                    <textarea 
                        className="form-control" 
                        required
                        rows="5"
                        value={alamat}
                        onChange= {(e) => setAlamat(e.target.value)} >
                    </textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditStudent