import React from "react";
import heroImg from "../assets/images/heroImg.png";
import playstation from "../assets/images/PlayStation.png";
import airPods from "../assets/images/airsMax.png";
import visionPro from "../assets/images/visionPro.png";
import mac from "../assets/images/MacBook.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div>
      <section className="bg-[#211C24] py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className=" text-center md:text-left max-w-xl">
            <h2 className=" mt-15 md:mt-1 text-[#909090] font-semibold text-xl md:text-2xl">
              Pro. Beyond.
            </h2>
            <h1 className="font-[100] text-4xl md:text-7xl text-white mt-4 leading-tight tracking-wide">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <p className="text-[#909090] mt-6 text-base md:text-lg leading-7">
              Created to change everything for the better. For everyone
            </p>
            <Link to="/shop">
              <button className="mt-6 w-[180px] h-[55px] border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition">
                Shop Now
              </button>
            </Link>
          </div>

          <div className="mt-10 md:mt-0">
            <img
              src={heroImg}
              alt="iPhone 14 Pro"
              className="w-full max-w-[350px] md:max-w-[500px] object-contain relative top-16 "
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col md:flex-row items-center p-6 h-[328px]">
            <img
              src={playstation}
              alt="Playstation"
              className="w-[240px] md:w-[300px] object-contain"
            />
            <div className="md:ml-6 mt-6 md:mt-0 text-center md:text-left">
              <h1 className="font-medium text-3xl md:text-5xl leading-tight">
                Playstation 5
              </h1>
              <p className="text-[#909090] text-sm leading-6 max-w-[340px] mx-auto md:mx-0 mt-2.5">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex items-center bg-[#EDEDED] w-full md:w-1/2 h-[272px] gap-4 px-6">
              <img
                src={airPods}
                alt="AirPods"
                className="w-[80px] object-contain"
              />
              <div>
                <h1 className="font-light text-xl md:text-2xl leading-snug">
                  Apple AirPods <span className="font-medium">Max</span>
                </h1>
                <p className="text-[#909090] text-sm leading-5 mt-2">
                  Computational audio. Listen, it's powerful.
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#353535] text-white w-full md:w-1/2 h-[272px] gap-4 px-6">
              <img
                src={visionPro}
                alt="Vision Pro"
                className="w-[80px] object-contain"
              />
              <div>
                <h1 className="font-light text-xl md:text-2xl leading-snug">
                  Apple Vision <span className="font-medium">Pro</span>
                </h1>
                <p className="text-[#909090] text-sm leading-5 mt-2">
                  An immersive way to experience entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EDEDED] w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-between p-6 lg:h-[600px]">
          <div className="text-center sm:text-left sm:pl-8">
            <h1 className="text-4xl sm:text-6xl leading-tight font-light">
              Macbook <span className="font-medium">Air</span>
            </h1>
            <p className="max-w-[360px] text-[#909090] text-sm leading-6 mt-4 mx-auto sm:mx-0">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Link to="/shop">
              <button className="mt-6 w-[190px] h-[55px] border border-black rounded-md hover:bg-black hover:text-white transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>
          <img
            src={mac}
            alt="Macbook"
            className="block xs:hidden w-[250px] sm:w-[300px] mt-6 sm:mt-0 object-contain"
          />
        </div>
      </section>
    </div>
  );
}
