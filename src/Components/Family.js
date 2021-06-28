import React from 'react'

export default function Family() {
    return (
        <>
        <div className="flex flex-wrap flex-col mt-10">
            <h1 className="text-red-600 text-sm sm:text-xl mx-auto text-opacity-70">10% Discount for Family Booking</h1>
            <h1 className="text-red-600 text-sm sm:text-xl mx-auto text-opacity-70">No Need to Mention Babies under Age of Four</h1>
            <h1 className="text-white text-xl mx-auto mt-10">Family Head</h1>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="name" className="text-gray-500 text-xl mr-2">Name: </label>
                <input type="text" className="bg-gray-800 text-white outline-none" />
            </div>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="phone" className="text-gray-500 text-xl mr-2">Phone: </label>
                <input type="number" className="bg-gray-800 text-white outline-none" />
            </div>

            <div className="flex flex-wrap flex-row mx-auto mt-14">
                <label for="phone" className="text-white  mr-2 sm:text-xl text-sm">Number of Adults: </label>
                <input id="adul" type="number" className="bg-gray-800 text-white outline-none sm:text-xl text-sm" min="1" max="5" onChange={() => {
                    const a = document.getElementById("adul");
                    if (a != null) {
                        let b = a.value;
                        if (b > 5) {
                            document.getElementById("adul").value = 5;
                        }
                        if (b < 0) {
                            document.getElementById("adul").value = 1;
                        }
                    }
                }} />
                <h1 className=" text-gray-700 ml-3 sm:text-xl text-sm">(Max 5)</h1>

            </div>

            <div className="flex flex-wrap flex-row mx-auto mt-4">
                <label for="phone" className="text-white  mr-2 sm:text-xl text-sm">Number of Teens(Age: 14-18): </label>
                <input id="teen" type="number" className="bg-gray-800 text-white outline-none sm:text-xl text-sm" min="1" max="3" onChange={() => {
                    const a = document.getElementById("teen");
                    if (a != null) {
                        let b = a.value;
                        if (b > 3) {
                            document.getElementById("teen").value = 3;
                        }
                        if (b < 0) {
                            document.getElementById("teen").value = 1;
                        }
                    }
                }} />
                <h1 className=" text-gray-700 ml-3 sm:text-xl text-sm">(Max 3)</h1>

            </div>

            <div className="flex flex-wrap flex-row mx-auto mt-4">
                <label for="phone" className="text-white  mr-2 sm:text-xl text-sm">Number of Kids(Age: 4-14): </label>
                <input id="kids" type="number" className="bg-gray-800 text-white outline-none sm:text-xl text-sm" min="1" max="3" onChange={() => {
                    const a = document.getElementById("kids");
                    if (a != null) {
                        let b = a.value;
                        if (b > 3) {
                            document.getElementById("kids").value = 3;
                        }
                        if (b < 0) {
                            document.getElementById("kids").value = 1;
                        }
                    }
                }} />
                <h1 className=" text-gray-700 ml-3 sm:text-xl text-sm">(Max 3)</h1>

            </div>

        </div>
        <button className="noSelect mx-auto focus:outline-none outline-none rounded-full md:w-40 w-full mt-8 h-12 text-white bg-gradient-to-r to-pink-500 from-blue-600">Book Tickets</button>
        </>
    )
}
