import React from 'react';


export default function Content() {
    return (

        
        <div className="flex flex-wrap flex-col sm:mt-36 mt-14 sm:ml-36 ml-3 mr-3 lg:mr-96 ">
            
            <h1 className="sm:text-7xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 block">Welcome To</h1>
            <h2 className="sm:text-7xl text-3xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 block">The Jurassic Park</h2>
            <p className="text-gray-400 text-xl mt-8">The loudest, craziest, and the most amazing part of town. This simply is not just an Jurassic park, but a world of breath-taking charm. It's a place to celebrate the smaller moments and share big wonders. But whatever you do, here, everybody gets a little closer. And that is why we are India's only Amazement Park.</p>
            <button onClick={function() {
                window.location="bookings/normal";
            }} className="noSelect focus:outline-none outline-none rounded-full md:w-40 mt-8 h-12 text-white bg-gradient-to-r to-pink-500 from-blue-600">Book Now</button>
            <div className=" w-20 md:ml-0 ml-0 gradbord mt-20 rounded-3xl border-b-8"></div>
            
        </div>

    )
}
