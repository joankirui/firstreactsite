import React from "react"

export default function Footer(){
    return (
        <footer className="footer">
        <div id="container" className="container text-center">
        <div className="row align-items-center">
        <div className="col"></div>
        <div className="col twitter">
            <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
        </div>
        <div className="col facebook">
            <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
        </div>
        <div className="col insta">
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </div>
        <div className="col giticon">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </div>
         <div className="col"></div>
        </div>
        </div>
        </footer>
        
    )
}