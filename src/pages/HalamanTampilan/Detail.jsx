import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Guest from "../../layouts/Guest";
import './Detail.css'

export default function Detail() {
  const { nomor } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get('https://equran.id/api/v2/surat/' + nomor)
      .then((res) => {
        console.log(res.data.data.ayat);
        setDetail(res.data.data.ayat);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nomor]);
  return (
    <div>
      {/* navbar bagian detial */}
   
      <Guest>
        <Link to={'/'}>kembali</Link>
        <div className="">
          <div className="row">
            {detail && detail.map((ayat) => {
              return (
                <div key={ayat.nomorAyat} className="pt-2">
                  <div className="card rounded-3 shadow-sm pt-0" style={{ borderLeft: '4px solid #B576FE' }}>
                    <div className="card-body">
                      <h5 className="card-title">{ayat.nomorAyat}</h5>
                      <p className="card-text nama-arab-detail ">
                        {ayat.teksArab}
                      </p>
                      <p className="card-text pt-2">{ayat.teksLatin}</p>
                      <p style={{ color: '#B576FE' }}>{ayat.teksIndonesia}</p>
                    </div>
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </Guest>
    </div>
  );
}
