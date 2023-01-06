import React from "react"

export default function Main() {
    return (
        <main className="main">
        <div className="section1">
            <p className="name">Joan Kirui</p>
            <p className="frontend">Frontend Developer</p>
            <p className="github">github/joankirui</p>
        </div>
        <div className="container text-center">
        <div className="row align-items-center">
        <div className="col">
            <button className="button1"><i className="fa fa-envelope fa-2xs" aria-hidden="true"></i>&nbsp;&nbsp;Email</button>
        </div>
        <div className="col">
            <button className="button2"><i className="fa fa-linkedin-square fa-2xs" aria-hidden="true"></i>&nbsp;&nbsp;Linkedin</button>
        </div>
        </div>
        </div>
            <div className="section2">
            <p className="about">About</p>
            <p className="about-p">I am a frontend developer with a particular interest
             in making things simple and automating daily 
             tasks. I try to keep up with security and best 
             practices, and am looking for new things to
              learn</p>
            <p className="interests">Interests</p>
            <p className="interests-p">Food expert,music scholar.Reader,internet 
            fanatic.Bacon buff. Enterpreneur. Travel geek.Pop 
            culture ninja. Coffee fanatic</p>
            </div>
        </main>
    )
}