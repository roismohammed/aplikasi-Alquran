import React from "react";
import Guest from "./layouts/Guest";
import { RiBookmarkFill } from "react-icons/ri";
import axios from "axios";
import './Index.css'
import { Link } from "react-router-dom";
class Index extends React.Component {
    state = {
        quran: []
    };

    componentDidMount() {
        axios.get("https://equran.id/api/v2/surat")
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    quran: res.data.data
                });
            })
            .catch((error) => {
                console.error("gagal", error);
            });
    }

    render() {
        return (
            <Guest>
                <div className="">
                    {/* Bagian pencarian */}
                    <div>
                        <input
                            type="text"
                            style={{
                                border: "1px solid #C937BD",
                                width: "240px",
                                padding: "5px",
                                borderRadius: "15px 1px 1px 15px",
                                outline: "none",
                                placeContent: "center"
                            }}
                            placeholder="Cari Surat"
                        />

                        <button
                            style={{
                                backgroundColor: "#C937BD",
                                border: "none",
                                width: "130px",
                                padding: "6px",
                                marginLeft: "3px",
                                color: "white",
                                borderRadius: "1px 15px 15px 1px"
                            }}
                        >
                            <RiBookmarkFill style={{ position: "relative", top: "-1px", left: "-5px" }} /> Bookmark
                        </button>
                    </div>
                    {/* Daftar surat al-Quran */}
                    <div>
                        {this.state.quran.map(data => (
                            <Link key={data.nomor} className="container nav-link mt-3" >
                                <div className="border-bottom list-group-center container hover d-flex align-items-center justify-content-between container lef p-0">
                                    <div style={{ color: 'black' }} className="d-flex" >
                                        <h4 className=" mb-0 mt-1">{data.nomor} </h4>
                                        <div className="container-nama">
                                            <h3 className="mb-0 nala-latin ">{data.namaLatin}</h3>
                                            <p className="arti">{data.arti}. ayat {data.jumlahAyat}</p>
                                        </div>
                                    </div>
                                    <div style={{ color: 'black' }}>
                                        <h3> {data.nama}</h3>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Guest>
        );
    }
}

export default Index;
