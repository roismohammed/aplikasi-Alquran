import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './Detail.css'
import { RiArrowLeftSLine } from "react-icons/ri";

export default function Detail() {
  const { nomor } = useParams();
  const [detail, setDetail] = useState([]);


  useEffect(() => {
    axios
    .get('https://equran.id/api/v2/surat/' + nomor)
    .then((res) => {
      setDetail(res.data.data);
      console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [nomor]);
  return (
    <div className="p-3">
      {/* navbar bagian detial */}
      <div className="mx-3 fixed-top">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid d-flex">
            <Link to={'/'} className="nav-link" >< RiArrowLeftSLine className="kembali" /></Link>
            <p className="navbar-brand mx-auto">
              Al-Quran
            </p>
          </div>
        </nav>
      </div>

      {/* bagian sidebar */}

      <div className="pt-3 mt-5 ">
        <div className="p-3 nav-detail shadow-sm ">
          <div className="row ">
            <div className="col-sm-8 text-white text-center sidebar p-2">
              <h2>{detail.namaLatin}</h2>
              <p>{detail.arti}</p>
              <p className="border-arti"></p>
              <p className="mt-3"> {detail.tempatTurun} - {detail.jumlahAyat} Ayat</p>

              <h2 className="nama-arab-sidebar">ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم</h2>
            </div>
            <div className="col-sm-4">
              <img className="mt-0  " src="./quran2.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <>
        <div>
          <div className="row">
            {/* {detail && detail.map((ayat) => {
              return (
                <div key={ayat.nomorAyat} className="pt-2">
                  <div className="card rounded-3 shadow-sm pt-0">
                    <div className="card-body">
                      <h5 className="card-title rhombus-border-detail">{ayat.nomorAyat}</h5>
                      <p className="card-text nama-arab-detail ">
                        {ayat.teksArab}
                      </p>
                      <p className="card-text pt-2">{ayat.teksLatin}</p>
                      <p style={{ color: '#219F6A' }}>{ayat.teksIndonesia}</p>
                    </div>
                  </div>
                </div>

              );
            })} */}
          </div>
        </div>
      </>
    </div>
  );
}
