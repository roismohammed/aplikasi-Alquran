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
    handleSearch = (e) => {
        if (e.target.value != '') {
            let quranDiFilter = this.state.quran.filter(quran => {
                return quran.namaLatin.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1
            })
            this.setState({
                quran: quranDiFilter
            })

        } else (
            this.componentDidMount()
        )
    }

    render() {
        return (
            <Guest>
                <div className="p-3">
                    {/* Bagian pencarian */}
                    <div>
                        <input
                            className="form-control"
                            type="text"
                            style={{
                                border: "1px solid #219F6A",
                                padding: "5px",
                                borderRadius: "15px 15px 15px 15px",
                                outline: "none",
                                placeContent: "center"
                            }}
                            placeholder="Cari Surat"
                            onChange={this.handleSearch}
                        />
                    </div>

                    {/* bagian sidebar */}
                    <div className="pt-3">
                        <div className="nav">
                            <div className="col-sm-6">
                                <h2>as</h2>
                            </div>
                            <div className="col-sm-6">
                                <img className="mt-5 mx-5" src="./quran2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* Daftar surat al-Quran */}
                    <div>
                        {this.state.quran.map(data => (
                            <Link key={data.nomor} to={'/detail/' + data.nomor} className="tabler-hover container nav-link mt-3" >
                                <div className="border-bottom list-group-center container d-flex align-items-center justify-content-between container lef p-0">
                                    <div style={{ color: 'black' }} className="d-flex" >
                                        <div className="rhombus-border ">
                                            <h5 className=" mb-0 mt-1 ">{data.nomor} </h5>
                                        </div>
                                        <div className="container-nama">
                                            <h4 className="mb-0 nama-latin ">{data.namaLatin}</h4>
                                            <p className="arti">{data.arti}. ayat {data.jumlahAyat}</p>
                                        </div>
                                    </div>
                                    <div style={{ color: 'black' }}>
                                        <h3 className="nama-arab"> {data.nama}</h3>
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
