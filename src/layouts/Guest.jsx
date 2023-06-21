import { Fragment } from "react";
import Navbar from "../components/Navbar";

export default function Guest({ children }) {
    return (
        <Fragment>
            <Navbar />
            <div className="container">
                <div className="">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}