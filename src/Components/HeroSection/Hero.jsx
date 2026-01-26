import React from "react";
import gp from "../../assets/GooglePlay.png";
import appstore from "../../assets/Appstore.png";
import iphone from "../../assets/Iphone.png";

import iconStopwatch from "../../assets/iconStopwatch.png";
import iconBoard from "../../assets/iconBoard.png";
import iconCheck from "../../assets/iconCheck.png";
import iconPower from "../../assets/iconPower.png";
import iconCrosshair from "../../assets/iconCrosshair.png";
import iconClock from "../../assets/iconClock.png";

const FloatingIcon = ({ className, bg, icon }) => (
  <div
    className={`hidden md:flex absolute ${className} h-14 w-14 lg:h-16 lg:w-16 rounded-full ${bg}
    items-center justify-center shadow-lg transition-transform hover:scale-110`}
  >
    <img src={icon} className="h-6 w-6 lg:h-7 lg:w-7" alt="" />
  </div>
);

const Hero = () => {
  return (
    <div>
    <div className="pt-20 bg-base-200">
      <div className="w-full max-w-550 mx-auto flex items-center justify-center">
        <div className="hero bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                We Build{" "}
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  Productive
                </span>{" "}
                Apps
              </h1>

              <p className="py-3 text-[#627382]">
                At HERO.IO , we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting. Our goal is to turn
                your ideas into digital experiences that truly make an impact.
              </p>

              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline font-bold mr-5">
                <img className="h-4 w-4 md:h-6 md:w-6" src={gp} alt="" />
                Google Play
              </button>

              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline font-bold">
                <img className="h-4 w-4 md:h-6 md:w-6" src={appstore} alt="" />
                App Store
              </button>
              <div className="relative mt-10 w-full flex justify-center overflow-visible">
          <div className="relative w-fit">
            <img
              src={iphone}
              alt=""
              className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px]"
            />
            <FloatingIcon
              icon={iconStopwatch}
              bg="bg-sky-500"
              className="md:left-[-110px] md:top-[90px] lg:left-[-120px] lg:top-[120px]"
            />
            <FloatingIcon
              icon={iconCheck}
              bg="bg-blue-700"
              className="md:left-[-140px] md:top-[200px] lg:left-[-210px] lg:top-[240px]"
            />
            <FloatingIcon
              icon={iconPower}
              bg="bg-green-600"
              className="md:left-[-180px] md:top-[320px] lg:left-[-250px] lg:top-[380px]"
            />
            <FloatingIcon
              icon={iconClock}
              bg="bg-red-500"
              className="md:right-[-110px] md:top-[110px] lg:right-[-120px] lg:top-[140px]"
            />
            <FloatingIcon
              icon={iconBoard}
              bg="bg-blue-600"
              className="md:right-[-140px] md:top-[220px] lg:right-[-210px] lg:top-[260px]"
            />
            <FloatingIcon
              icon={iconCrosshair}
              bg="bg-cyan-500"
              className="md:right-[-180px] md:top-[330px] lg:right-[-250px] lg:top-[390px]"
            />
          </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-16 px-4 text-white bg-gradient-to-br from-[#6B2EF0] to-[#8B5CF6]">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold mb-10">
      Trusted By Millions, Built For You
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <p className="text-sm opacity-90 mb-3">Total Downloads</p>
        <h3 className="text-5xl md:text-6xl font-extrabold leading-none mb-3">29.6M</h3>
        <p className="text-sm opacity-85">21% More Than Last Month</p>
      </div>

      <div>
        <p className="text-sm opacity-90 mb-3">Total Reviews</p>
        <h3 className="text-5xl md:text-6xl font-extrabold leading-none mb-3">906K</h3>
        <p className="text-sm opacity-85">46% More Than Last Month</p>
      </div>

      <div>
        <p className="text-sm opacity-90 mb-3">Active Apps</p>
        <h3 className="text-5xl md:text-6xl font-extrabold leading-none mb-3">132+</h3>
        <p className="text-sm opacity-85">31 More Will Launch</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Hero;
