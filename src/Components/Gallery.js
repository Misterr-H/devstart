import React from 'react'
import Footer from './Footer'

export default function Gallery() {
    return (
        <>
            <div className="flex flex-wrap flex-col sm:ml-36 ml-3 lg:mr-96 mr-3 mt-10">
                <h1 className="sm:text-7xl text-3xl md:ml-0 ml-0 text-transparent bg-clip-text bg-gradient-to-r mt-10 from-white to-gray-500 block">Gallery</h1>
                <div className=" flex flex-wrap flex-col md:flex-row mt-10">
                    <div className="px-1 flex flex-wrap flex-col md:w-1/3 w-auto">
                        <img src="img1.jpg" className="my-1"></img>
                        <img src="img2.jpg" className="my-1"></img>
                    </div>
                    <div className="px-1 flex flex-wrap flex-col md:w-1/3 w-auto">
                        <img src="img3.jpg" className="my-1"></img>
                        <img src="img4.jpg" className="my-1"></img>
                        <img src="img7.jpg" className="my-1"></img>

                    </div>
                    <div className="px-1 flex flex-wrap flex-col md:w-1/3 w-auto">
                        <img src="img5.jpg" className="my-1"></img>
                        <img src="img6.jpg" className="my-1"></img>
                        <img src="img8.jpg" className="my-1"></img>
                        <img src="img9.jpg" className="my-1"></img>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
