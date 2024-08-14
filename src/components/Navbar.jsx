import { Fragment } from "react";
import './Navbar.css';

export default function Navbar() {
    return (
        <Fragment>
            <div  className="mx- fixed-top">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand mx-2" href="#">
                            Al-Quran
                        </a>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}
