// import logo from "./logo.svg";
import "./App.css";
import img2 from "./img.jpg"; //form src

import React, { Fragment } from "react";

function App() {
    return (
        <Fragment>
            <div className="bag">
                <nav className="navbar">
                    <h1 className="titel">Mohamed Ali Touil</h1>
                </nav>
                <div
                    style={{ border: "solid 1 black", width: "100%" }}
                    className="items"
                ></div>
                <br />
                <img src={img2} alt="img2" className="imgClass" />
                <img src="Paris.jpg" alt="img3" className="dali" />
                <br />
                <video width="550" height="485" controls className="vid">
                    <source src="myVideo.mp4" type="video/mp4" />
                </video>
            </div>
        </Fragment>
    );
}

export default App;
