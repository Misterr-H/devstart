import React from 'react'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fab, fas);


export default function Facilities() {
    return (
        <div className="flex flex-wrap flex-col sm:ml-36 ml-3 ">
            <div className="flex flex-wrap flex-col mr-3 lg:mr-96">
                <h1 className="sm:text-7xl text-3xl md:ml-0 ml-0 text-transparent bg-clip-text bg-gradient-to-r mt-10 from-white to-gray-500 block">Facilities</h1>
                <h1 className="text-gray-400 text-xl mt-8">Jurassic Park is a vast park of area upto 150 acres with full of Greenery and Beautiful Scenes along with many Rare and Amazing Animals.</h1>
                <div className="flex flex-col sm:flex-row flex-wrap mt-7">
                    <div className="flex flex-wrap flex-row sm:flex-col md:my-0 my-7 sm:mx-0 sm:mr-auto">
                        <div>
                            <FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-3xl text-white" icon={["fas", "pizza-slice"]} />
                        </div>
                        <div class="flex flex-wrap flex-col sm:ml-0 ml-3 w-40">
                            <h1 className="text-white text-xl sm:text-3xl">Food-Hubs</h1>
                            <h1 className="text-gray-400 text-md sm:text-lg">Enjoy a variety of foods italian, chinese, south-indian, and many more with 50+ food hubs located in the whole park.</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-row sm:flex-col md:my-0 my-7 sm:mx-auto">
                        <div>
                            <FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-3xl text-white" icon={["fas", "hat-cowboy"]} />
                        </div>
                        <div class="flex flex-wrap flex-col sm:ml-0 ml-3 w-40">
                            <h1 className="text-white text-xl sm:text-3xl">AT&T Stadium</h1>
                            <h1 className="text-gray-400 text-md sm:text-lg">Feel like a cowboy boy by joining other players at AT&T Stadium and Win Great Prizes. Can you defeat them all?</h1>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-row sm:flex-col md:my-0 my-7 sm:mx-auto">
                        <div>
                            <FontAwesomeIcon className="text-xl sm:mt-0 mt-1 sm:text-3xl text-white" icon={["fas", "heart"]} />
                        </div>
                        <div class="flex flex-wrap flex-col sm:ml-0 ml-3 w-40">
                            <h1 className="text-white text-xl sm:text-3xl">Romantic Nature</h1>
                            <h1 className="text-gray-400 text-md sm:text-lg">Get a bit more closer with your loved ones by spending time in the lap of beautiful nature and enjoy romantic scenes.</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-20 md:ml-0 ml-0 gradbord mt-20 rounded-3xl border-b-8"></div>
        </div>
    )
}
