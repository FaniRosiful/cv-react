import React from 'react';
import { prof, edu, exp, skil } from '../assets'
const Profile = () => {
  return (
    <body className="bodyProfile">
      <div className="flex-colum">
        <div className="flex-row">
            <div className="card">
              <img className="iconProf" alt="Profil" src={prof} />
              <table>
                <tr>
                <th>Born In</th><th>:</th><td>Jember</td>
                </tr>
                <tr>
                <th>Born On</th><th>:</th><td>05 August 1999</td>
                </tr>
                <tr>
                <th>Addres</th><th>:</th><td>Wuluhan Jember Jawa Timur</td>
                </tr>
              </table>
            </div>
            <div className="card">
              <img className="iconProf" alt="Pendidikan" src={edu} />
              <table>
                <tr>
                <th>2011-2017</th><th>:</th><td>Ponpes Nuris</td>
                </tr>
                <tr>
                <th>2011-2014</th><th>:</th><td>Mts "UN" Nuris</td>
                </tr>
                <tr>
                <th>2014-2017</th><th>:</th><td>MA "UN" Nuris</td>
                </tr>
                <tr>
                <th>2017-Now</th><th>:</th><td>Telkom University</td>
                </tr>
              </table>
            </div>
            <div className="card">
              <img className="iconProf" alt="Pengalaman" src={exp} />
              <table>
                <tr>
                <th>2017</th><th>:</th><td>Guru Kader Ponpes Nuris</td>
                </tr>
                <tr>
                <th>2018</th><th>:</th><td>Mentor Matkul Agama</td>
                </tr>
                <tr>
                <th>2019</th><th>:</th><td>Asprak Lab Upci</td>
                </tr>
              </table>
            </div>
        </div>
        <div className="flex-colum">
          <div className="flex-row">
          <div className="cardP">
              <img className="iconSet" alt="Profil" src={skil} />
              <table className="tabel">
                <tr>
                <td>Microsoft Office</td>
                </tr>
                <tr>
                <td>Arduino</td>
                </tr>
                <tr>
                <td>Basic C</td>
                </tr>
                <tr>
                <td>HTML, CSS</td>
                </tr>
              </table>
          </div>
            <div className="qotd">
              <p className="contactMi">" Man jadda</p>
              <p>Wajada <font className="contactMi">"</font></p>
            </div>
          </div>
            </div>
      </div>
    </body>
  )
};

export default Profile;
