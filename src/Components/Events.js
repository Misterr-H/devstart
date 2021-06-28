import React from 'react'
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';

export default function Events() {
    return (
        <>

            <div className="flex flex-wrap flex-col sm:ml-36 ml-3 lg:mr-96 mr-3 mt-10">
                <h1 className="sm:text-7xl text-3xl md:ml-0 ml-0 text-transparent bg-clip-text bg-gradient-to-r mt-10 from-white to-gray-500 block">Events</h1>
                <div className="mt-10 flex flex-wrap sm:flex-row flex-col">
                    <img src="./elephant.jpg" className="sm:w-1/2 w-full h-96"></img>
                    <div className="flex-wrap flex flex-col sm:w-1/2 w-auto">
                        <h1 className="text-center text-white text-3xl mx-auto sm:mt-0 mt-10">Elephant Ride</h1>
                        <h1 className="text-center text-gray-400 text-xl mt-5">Got bored of riding Cars and Trains? Want to get experience How a natural ride feels? At Jurassic Park get experience of how it feels riding an Elephant. Get an Elephant as your friend for the whole Jurassic Park trip and explore the Park with your new Friend.</h1>
                    </div>
                </div>
                <div className="mt-20 flex flex-wrap sm:flex-row flex-col">
                    <img src="./magic.jpg" className="sm:w-1/2 w-full h-96 sm:hidden inline"></img>
                    <div className="flex-wrap flex flex-col sm:w-1/2 w-auto">
                        <h1 className="text-center text-white text-3xl mx-auto sm:mt-0 mt-10">Junglee Magic Show</h1>
                        <h1 className="text-center text-gray-400 text-xl mt-5">Entertain your family and friends with an EASY, SAFE, and AFFORDABLE Junglee magic show. We have trained many animals who can create a memorable, energetic and hilarious show that you will never forget.  The wonder, astonishment, and delight on the children’s faces are what you will remember most! Have fun with the help of Mr. Bananas! (monkey) , mr dumbo(elephant), and many more!!!</h1>
                    </div>
                    <img src="./magic.jpg" className="sm:w-1/2 w-full h-96 sm:inline hidden"></img>
                </div>
                <div className="mt-20 flex flex-wrap sm:flex-row flex-col">
                    <img src="./bungee.jpg" className="sm:w-1/2 w-full h-96"></img>
                    <div className="flex-wrap flex flex-col sm:w-1/2 w-auto">
                        <h1 className="text-center text-white text-3xl mx-auto sm:mt-0 mt-10">Bungee Jumping</h1>
                        <h1 className="text-center text-gray-400 text-xl mt-5">Get ready for an everlasting unforgettable experience. Boost your adrenaline in a free fall of 55 m over the edge of Mayem Lake. The entire activity will be done under the supervision of a jump master all the way from New Zealand. Get your experience of bungee jumping in Goa recorded to take these unforgettable moments back home.</h1>
                    </div>
                </div>
                <div className="mt-20 flex flex-wrap sm:flex-row flex-col">
                    <img src="./rafting.jpg" className="sm:w-1/2 w-full h-96 sm:hidden inline"></img>
                    <div className="flex-wrap flex flex-col sm:w-1/2 w-auto">
                        <h1 className="text-center text-white text-3xl mx-auto sm:mt-0 mt-10">Rafting</h1>
                        <h1 className="text-center text-gray-400 text-xl mt-5">Get ready to join an exciting rafting expedition.River rafting in MinKava one adrenaline-pumping recreation that draws adventure seekers from all over the country. A thrilling experience awaits you as you embark upon the meandering course of the MinKava river .The stunning scenery flanked on both sides of the river is another spectacle to behold while you maneuver your raft along the calm waters.we have a bunch of skilled rafting guides who will accompany you on your journey. So get ready for a memorable thrilling experience.</h1>
                    </div>
                    <img src="./rafting.jpg" className="sm:w-1/2 w-full h-96 sm:inline hidden"></img>
                </div>
                <div className="mt-20 flex flex-wrap sm:flex-row flex-col">
                    <img src="./cowboy.jpg" className="sm:w-1/2 w-full h-96"></img>
                    <div className="flex-wrap flex flex-col sm:w-1/2 w-auto">
                        <h1 className="text-center text-white text-3xl mx-auto sm:mt-0 mt-10">Cowboys Battle</h1>
                        <h1 className="text-center text-gray-400 text-xl mt-5">Get a thrilling and adventures experience of being a Cowboy at AT&T Stadiums with trained horses and battle with other players in Western Showdown.</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
