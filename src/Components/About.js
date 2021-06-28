import React from 'react'
import Footer from './Footer'

export default function About() {
    return (
        <>
            <div className="flex flex-wrap flex-col sm:ml-36 ml-3 lg:mr-96 mr-3 mt-10">
                <h1 className="sm:text-7xl text-3xl md:ml-0 ml-0 text-transparent bg-clip-text bg-gradient-to-r mt-10 from-white to-gray-500 block">About Us</h1>
                <p className="text-gray-400 text-xl mt-8">Jurassic Park is an adventures and Family Park Developed and Mainatned by <strong>STUDIOS</strong> organization.</p>
                <br />
                <br />
                <p className="text-gray-400 text-xl mt-8">Website designed and maintained by Himanshu, founder of Mister H Technologies.</p>


                <div className="main justify-center mt-10 noSelect">
                    <div className="icon" onClick={function () {
                        window.open("https://wa.me/919896039378");
                    }}>
                        <svg height="55" width="55">
                            <circle cx="27.5" cy="27.5" r="25" className="absolute" stroke="white" strokeWidth="4" fill="none"></circle>
                        </svg>
                        <i className="fa fa-whatsapp fa-lg"></i>
                    </div>
                    <div className="icon" onClick={function () {
                        window.open("https://www.github.com/Misterr-H");
                    }}>
                        <svg height="55" width="55">
                            <circle cx="27.5" cy="27.5" r="25" className="absolute" stroke="white" strokeWidth="4" fill="none"></circle>
                        </svg>
                        <i className="fa fa-github fa-lg"></i>
                    </div>
                    <div className="icon" onClick={function () {
                        window.open("https://www.linkedin.com/in/himanshu-saini-9821631b1");
                    }}>
                        <svg height="55" width="55">
                            <circle cx="27.5" cy="27.5" r="25" className="absolute" stroke="white" strokeWidth="4" fill="none"></circle>
                        </svg>
                        <i className="fa fa-linkedin fa-lg"></i>
                    </div>
                    <div className="icon" onClick={function () {
                        window.open("https://www.instagram.com/0._.himanshu._.0");
                    }}>
                        <svg height="55" width="55">
                            <circle cx="27.5" cy="27.5" r="25" className="absolute" stroke="white" strokeWidth="4" fill="none"></circle>
                        </svg>
                        <i className="fa fa-instagram fa-lg"></i>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}
