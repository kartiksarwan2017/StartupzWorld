import React from 'react';
import Carousal from '../Carousal/Carousal';
import Explore from "../Explore/Explore";
import {HiMagnifyingGlass} from "react-icons/hi2";
import "./Home.scss";

const Home = () => {
  return (
    <>
     <div className='home-container'>
        <Carousal />

        <main>
          <div className='search-container d-flex flex-col'>
            <div className='heading-content'>
              <h1 className='font-semibold text-8xl tracking-normal antialiased'>Discover</h1>
              <h1 className='font-medium text-5xl tracking-normal subpixel-antialiased'>amazing startups</h1>
              <p>Find great startups curated by our experts for investing.</p>
            </div>
            <div className='search-bar d-flex my-10'>
              <div className='search-input w-5/12 mr-10 p-3'>
              <p>Startup Name</p>
              <input type="text" placeholder="Ex: Nearbygrocer, Nykaa, etc" />
              </div>
            </div>
            <button className='rounded-none bg-red-500 p-4 text-2xl text-white inline w-40 rounded-lg d-flex items-center hover:bg-red-600 relative left-[47%] bottom-[135px] h-24 '>
                <HiMagnifyingGlass className='mr-2 text-3xl' />
                Search
            </button>
          </div>

          <Explore />
        </main>
     </div>
    </>
  )
}

export default Home;