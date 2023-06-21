import { Fragment } from "react";

export default function Navbar() {
    return (
        <Fragment>
            <div className="container p-2">
                <div className="nav" style={{ backgroundColor: '#C937BD', height: '130px', borderRadius: '10px' }}>
                    <div className="p-3 text-white">
                        <h1 className="border-bottom border-white">Al-Quran </h1>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
