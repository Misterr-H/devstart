import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="flex flex-row flex-wrap border-t-2 border-gray-700 sm:ml-36 ml-3 mt-10 lg:mr-96 mr-3">
                <h1 className="sm:text-xl text-white mt-5">© Copyright. All rights reseved</h1>
                <h1 className="sm:text-xl text-white mt-5 ml-auto">STUDIOS</h1>
            </div>
            <div className="flex flex-wrap flex-row sm:ml-36 ml-3 lg:mr-96 mr-3 mt-5 justify-center">
                <img src="./booster.png" className="h-5 w-5 mt-1"></img>
                <h1 className="text-white text-xl ml-2">Mister H Technologies</h1>
            </div>
        </>
    )
}
