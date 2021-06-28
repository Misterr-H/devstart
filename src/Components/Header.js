import React from 'react'

export default function Header(props) {
    return (
        <div className="flex flex-wrap flex-row container mt-8">
            <img src="./logo.png" className="h-5 w-5 sm:ml-4 mt-1"></img>
            <h1 className="text-white text-xl ml-2">Jurassic Park</h1>
            {/* {props.showicon ? 
                <div className="ml-auto">
                    <a onClick={function () {
                        window.open("https://www.github.com/Misterr-H");
                    }} className="fa fa-github fa-2x noSelect mx-1 sm:mx-7 text-white"></a>
                    <a onClick={function () {
                        window.open("https://www.linkedin.com/in/himanshu-saini-9821631b1");
                    }} className="fa fa-linkedin fa-2x noSelect mx-1 sm:mx-7 text-white"></a>
                    <a onClick={function () {
                        window.open("https://www.instagram.com/0._.himanshu._.0");
                    }} className="fa fa-instagram fa-2x noSelect mx-1 sm:mx-7 text-white"></a>
                </div>
                :
                <div className="ml-auto -mr-60 lg:mr-0 lg:ml-auto main -mt-4 noSelect">
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

                </div>} */}

                <div className="ml-auto absolute right-0 sm:right-5">
                    <h1 className="text-white text-xl">STUDIOS</h1>
                </div>
        </div>
    )
}
