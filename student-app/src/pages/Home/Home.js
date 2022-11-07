import React from 'react';
import teacher from './img/teacher.jpg';
import teacher2 from './img/teacher2.jpg';
import teacher3 from './img/teacher3.jpg';
import teacher4 from './img/teacher4.jpg';
import students from './img/students.jpg';
import students2 from './img/students2.jpg';
import students3 from './img/students3.jpg';
import students4 from './img/students4.jpg';
import kegiatan1 from './img/kegiatan1.jpg';
import kegiatan2 from './img/kegiatan2.jpg';
import kegiatan3 from './img/kegiatan3.jpg';
import kegiatan4 from './img/kegiatan4.jpg';
import kegiatan5 from './img/kegiatan5.jpg';
import kegiatan6 from './img/kegiatan6.jpg';
import kegiatan7 from './img/kegiatan7.jpg';
import kegiatan8 from './img/kegiatan8.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="banner">
        <div className="content">
        <h3>Happy Schools</h3>
          <p>Membentuk Anak anda dengan positif sedini mungkin, <br/>merupakan hal terbaik yang dapat anda berikan bagi Masa Depan mereka.</p>
          <Link to="/contact" className="btn btnbanner">Contact</Link>
        </div>
      </div>

      <div className="about">
          <h1 className="text-center title-sec pt-5">About Us</h1>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-5 text-center">
                  <img src={students}
                  alt="laundry"
                  className="img img-fluid"/>
              </div>
              <div className="col-md-7">
                <p className='aboutschools'>
                  Di Era Modern ini, kami melihat bahwa banyak orang tua yang harus bekerja atau melakukan aktifitas yang penting sehingga banyak diantara mereka yang kekurangan waktu dan tenaga untuk merawat anak mereka.<br/><br/>
                  Melihat kebutuhan seperti ini maka, DayCare terpanggil untuk memenuhi gap yang ada untuk merawat anak-anak tersebut dan mendirikan pusat penitipan anak yang memiliki fasilitas yang memadai serta sarana pembelajaran bagi anak-anak agar mereka dapat memiliki pengetahuan yang baik dalam hal yang menyangkut SQ, EQ dan IQ.<br/><br/>
                  DayCare bukan sekedar tempat penitipan anak biasa, kami memiliki komitmen untuk mendidik setiap anak dalam karakter serta melatih kemandirian mereka. Kami terus mengupayakan hal-hal yang memberi kontribusi positif bagi setiap anak yang dipercayakan kepada kami sesuai dengan prinsip core value kami : Love, Fun, Care.<br/><br/>
                  DayCare juga mengutamakan komunikasi yang baik dengan setiap orang tua mengenai perkembangan anak didik kami, Kami sangat menyadari bahwa perkembangan/pertumbuhan yang baik dan positif akan sangat membantu mereka dalam mereka memasuki jenjang berikutnya dalam PreSchool maupun Kindergarten.
                </p>
              </div>
            </div>
          </div>
      </div>

      <div id="teacher" className="teacher">
        <h1 className="text-center title-sec pt-3">Our Teachers</h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img src={teacher}
                  className="card-img-top"
                  alt="Leeana"/>
                <div className="card-body">
                  <p className="card-text text-center">Mrs.Leeana</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img  src={teacher2}
                  className="card-img-top"
                  alt="Diana"/>
                <div className="card-body">
                  <p className="card-text text-center">Mrs.Diana</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img src={teacher3}
                  className="card-img-top"
                  alt="Leeo"/>
                <div className="card-body">
                  <p className="card-text text-center">Mr.Leeo</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img  src={teacher4}
                  className="card-img-top"
                  alt="laundry"/>
                <div className="card-body">
                  <p className="card-text text-center">Mr.Cha Eunwoo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog" id="blog">
        <h1 className="text-center title-sec m-0 pb-5">Learning Is Fun</h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card hvr-float">
                <div className="card-img">
                  <img src={students2}
                    alt="games"
                    className="img-fluid rounded-top"/>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title">Games</h4>
                  <p className="card-text">Games pada anak usia dini adalah fondasi terbaik untuk sukses di sekolah. Ini akan bermanfaat sekali dalam mengembangkan semua keterampilan belajar yang diperlukan.</p>
                </div>
                  <div className="card-footer text-center">
                    <Link className="card-link btn" style={{background:"#8cb791"}}>Read more</Link>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card hvr-float">
                <div className="card-img">
                  <img src={students3}
                    alt="activities"
                    className="img-fluid rounded-top"/>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title">Activities</h4>
                  <p className="card-text">Kegiatan kami akan menantang dan berkembang kreativitas, imajinasi, keterampilan berpikir, dan keterampilan sosial anak Anda.</p>
                </div>
                  <div className="card-footer text-center">
                    <Link className="card-link btn" style={{background:"#8cb791"}}>Read more</Link>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card hvr-float">
                <div className="card-img">
                  <img src={students4}
                    alt="education"
                    className="img-fluid rounded-top"/>
                </div>
                <div className="card-body text-center">
                  <h4 className="card-title">Education</h4>
                  <p className="card-text">Pusat kami menyediakan banyak kegiatan pendidikan untuk membuat anak-anak Anda tetap terlibat. Mereka belajar sambil bermain.</p>
                </div>
                  <div className="card-footer text-center">
                    <Link className="card-link btn" style={{background:"#8cb791"}}>Read more</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="alasan" className="alasan">
        <h1 className="text-center title-sec pt-3">Mengapa harus DayCare Schools?</h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                <div className="card-body">
                  <h3 className="card-text text-center">Laporan Perkembangan Anak</h3>
                  <p className="card-text text-center">Perkembangan anak merupakan barometer bagi setiap orang tua dan pendidik agar dapat mengarahkan anak dengan lebih baik. Laporan Perkembangan Anak yang bisa akses melalui Smartphone,
                     setiap hal positif akan terus kami pacu untuk ditingkatkan, setiap hal tidak positif akan kami konsultasikan kepada setiap orang tua agar dapat mencari solusi terbaik bagi anak. Komunikasi antara orang tua dan kami adalah kunci agar anak dapat bertumbuh kearah yang lebih baik.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                <div className="card-body">
                  <h3 className="card-text text-center pt-2">Kegiatan yang Menarik Anak</h3>
                  <p className="card-text text-center pt-3">Kami menyadari bahwa anak-anak perlu ada kegiatan setiap hari untuk mereka dapat terus belajar, Kami bukan hanya sekedar daycare tempat penitipan anak tanpa kegiatan. Kami terus mengupayakan kegiatan agar anak dapat aktif dan bertumbuh, fasilitas Education Games/Tools, 
                    Kelas-kelas kecil seperti pengenalan Bahasa Inggris, Menonton tayangan Edukatif, Kegiatan Outdoor secara berkala. Kami menyiapkan anak anda agar siap memasuki PreSchool.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                <div className="card-body">
                  <h3 className="card-text text-center pt-2">Cek Kesehatan Rutin/Berkala</h3>
                  <p className="card-text text-center pt-4">Kesehatan amat penting untuk dijaga, oleh karena itu tempat penitipan anak secara rutin/berkala akan mengecek temperature suhu anak, perkembangan motorik anak, pengukuran tinggi & berat, menggosok gigi setiap hari, dan Toilet Training untuk usia tertentu.</p><br/><br/><br/><br/>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                <div className="card-body">
                  <h3 className="card-text text-center pt-3">Biaya Kompetitif</h3>
                  <p className="card-text text-center pt-5">DayCare Schools menyadari bahwa biaya adalah salah satu pertimbangan dalam memilih tempat penitipan anak, karena itu kami memberikan biaya yang sangat kompetitif, Admin pendaftaran terjangkau + Diskon khusus selama promo, Komisi menarik bagi Referal, dsb. Mari kunjungi kami untuk lebih mengenal kami.</p><br/><br/><br/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="activities" className="activities">
        <h1 className="text-center title-sec pt-3">Activities</h1>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img src={kegiatan1}
                  className="card-img-top"
                  alt="Leeana"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img  src={kegiatan2}
                  className="card-img-top"
                  alt="Diana"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img src={kegiatan3}
                  className="card-img-top"
                  alt="Leeo"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img  src={kegiatan4}
                  className="card-img-top"
                  alt="laundry"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img src={kegiatan5}
                  className="card-img-top"
                  alt="Leeana"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img  src={kegiatan6}
                  className="card-img-top"
                  alt="Diana"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img src={kegiatan7}
                  className="card-img-top"
                  alt="Leeo"/>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-light bg-gradient hvr-float">
                  <img  src={kegiatan8}
                  className="card-img-top"
                  alt="laundry"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wisdom" id="wisdom">
            <div className="content3">
              <h3 className='text-center'>MASIH TIDAK PERCAYA?</h3>
              <p>"Ingin mendapatkan informasi lebih lanjut tentang pusat pembelajaran kami atau ingin melihatnya di dalam, jangan ragu untuk menjadwalkan kegiatan. Kunjungi kami hari ini!"</p>
            </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
};

export default Home;