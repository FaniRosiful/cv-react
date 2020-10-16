import React from 'react';
import { fb, ig, linked, ppp } from '../assets';
const Home = () => {
  return (
    <body className="home">
      <div className="flex-row">
        <div className="flex-colum">
          <div>
            <h1>Hi, Saya M Fani Rosiful Aqli</h1>
        <p>Saya seorang mahasiswa tingkat akhir Univeritas Telkom<br>
          </br>dari prodi S1 Teknik Telekomunikasi,<br></br> 
          saat ini saya sedang belajar Front End diprogram<br></br>
          Digital Talent Incubator Telkom 2020.</p>
          </div>
        
        </div>
        <div>
          <img className="bc" alt="Background" src={ppp} />
        </div>
        
      </div> 
      <div className="sosmed">
          <h2>FOLLOW ME <font className="at">AT</font></h2>
          <img className="icon" alt="facebook-icon" src={fb}  /><a href="https://www.facebook.com/fhaniee.nandha" className="akun"><p>Muhammad Fani</p></a>
          <img className="icon" alt="instagram-icon" src={ig} /><a href="https://instagram.com/fanirosiful?igshid=kpkk2iohhl93" className="akun"><p>Fani Rosiful</p></a>
          <img className="icon" alt="linkedin-icon" src={linked} /><a href="https://www.linkedin.com/in/m-fani-rosiful-aqli-4255ab1a7" className="akun"><p>M Fani Rosiful Aqli</p></a>
          </div>
    </body>
    
  )
};

export default Home;
