import React from 'react'

export default function Couple() {
    return (
        <>
        <div className="flex flex-wrap flex-col mt-10">
            <h1 className="text-red-600 text-sm sm:text-xl mx-auto text-opacity-70">5% Discount for Couples</h1>
            <h1 className="text-white text-xl mx-auto mt-10">Partner 1</h1>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="name" className="text-gray-500 text-xl mr-2">Name: </label>
                <input type="text" className="bg-gray-800 text-white outline-none" />
            </div>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="phone" className="text-gray-500 text-xl mr-2">Phone: </label>
                <input type="number" className="bg-gray-800 text-white outline-none" />
            </div>

            <h1 className="text-white text-xl mx-auto mt-10">Partner 2</h1>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="name" className="text-gray-500 text-xl mr-2">Name: </label>
                <input type="text" className="bg-gray-800 text-white outline-none" />
            </div>
            <div className="flex flex-wrap flex-row mx-auto mt-5">
                <label for="phone" className="text-gray-500 text-xl mr-2">Phone: </label>
                <input type="number" className="bg-gray-800 text-white outline-none" />
            </div>
        </div>
        <button className="noSelect mx-auto focus:outline-none outline-none rounded-full md:w-40 w-full mt-8 h-12 text-white bg-gradient-to-r to-pink-500 from-blue-600">Book Tickets</button>
        </>
    )
}
