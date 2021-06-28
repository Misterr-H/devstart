import React from 'react'

export default function School() {
    return (
        <>
        <div className="flex flex-wrap mt-10 flex-col w-auto">
            <h1 className="text-white text-xl mx-auto">Teacher who is Head of The Trip</h1>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="name" className="text-gray-500 text-xl mr-2">Name: </label>
                <input type="text" className="bg-gray-800 text-white outline-none" />
            </div>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="phone" className="text-gray-500 text-xl mr-2">Phone: </label>
                <input type="number" className="bg-gray-800 text-white outline-none" />
            </div>

            <div className="flex flex-wrap flex-row mx-auto mt-14">
                <label for="phone" className="text-white text-xl mr-2">Number of Teachers: </label>
                <input id="tnum" type="number" className="bg-gray-800 text-white outline-none" min="1" max="50" onChange={() => {
                    const a = document.getElementById("tnum");
                    if (a != null) {
                        let b = a.value;
                        if (b > 50) {
                            document.getElementById("tnum").value = 50;
                        }
                        if (b < 0) {
                            document.getElementById("tnum").value = 1;
                        }
                    }
                }} />
                <h1 className="text-xl text-gray-700 ml-3">(Max 50)</h1>

            </div>
            <h1 className="text-xl text-white mt-16 mx-auto">Number of Students:</h1>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="phone" className="text-white text-sm sm:text-xl mr-2">Smaller than age of 14: </label>
                <input id="ssnum" type="number" className="bg-gray-800 text-white outline-none text-sm sm:text-xl" min="1" max="200" onChange={() => {
                    const a = document.getElementById("ssnum");
                    if (a != null) {
                        let b = a.value;
                        if (b > 200) {
                            document.getElementById("ssnum").value = 200;
                        }
                        if (b < 0) {
                            document.getElementById("ssnum").value = 1;
                        }
                    }
                }} />
                <h1 className="text-sm sm:text-xl text-gray-700 ml-3">(Max 200)</h1>
            </div>

            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="phone" className="text-white text-sm sm:text-xl mr-2">Greater than age of 14: </label>
                <input id="sgnum" type="number" className="bg-gray-800 text-white outline-none text-sm sm:text-xl" min="1" max="200" onChange={() => {
                    const a = document.getElementById("sgnum");
                    if (a != null) {
                        let b = a.value;
                        if (b > 200) {
                            document.getElementById("sgnum").value = 200;
                        }
                        if (b < 0) {
                            document.getElementById("sgnum").value = 1;
                        }
                    }
                }} />
                <h1 className="sm:text-xl text-sm text-gray-700 ml-3">(Max 200)</h1>
            </div>
        </div>
        <button className="noSelect mx-auto focus:outline-none outline-none rounded-full md:w-40 w-full mt-8 h-12 text-white bg-gradient-to-r to-pink-500 from-blue-600">Book Tickets</button>
        </>
    )
}
