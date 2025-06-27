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
      <div className="bg-[#211C24]">
        <div className="container mx-auto px-4 flex items-center justify-between flex-col md:flex-row gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-[#909090] font-semibold text-[25px] leading-[32px]">
              Pro. Beyond.
            </h2>
            <h1 className="font-[100] text-[48px] md:text-[96px] text-white leading-[1.2] md:leading-[72px] max-w-[714px] mt-4 tracking-wide">
              IPhone 14 <span className="font-bold">Pro</span>
            </h1>
            <p className="max-w-[714px] font-medium text-[18px] leading-[24px] text-[#909090] mt-8">
              Created to change everything for the better. For everyone
            </p>
            <button className="mt-6 bg-transparent text-white font-semibold w-[180px] h-[55px] rounded-lg border-2 border-white">
              <Link>Shop Now</Link>
            </button>
          </div>

          <div className="mt-12">
            <img
              src={heroImg}
              alt="iPhone 14 Pro"
              className="w-full max-w-[500px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-auto lg:h-[600px]">
          <div className="flex flex-col md:flex-row items-center p-4 h-[328px] ">
            <img
              src={playstation}
              alt=""
              className="w-[240px] md:w-[300px] h-auto object-contain "
            />

            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h1 className="font-medium text-[32px] md:text-[49px] leading-[40px]">
                Playstation 5
              </h1>
              <p className="text-[#909090] max-w-[338px] mx-auto md:mx-0 font-medium text-[14px] leading-[24px] mt-2.5">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex items-center bg-[#EDEDED] w-full md:w-1/2 h-[272px] gap-4 px-4">
              <img src={airPods} alt="" className="w-[80px] object-contain" />
              <div>
                <h1 className="font-light text-[22px] md:text-[29px] leading-[32px]">
                  Apple AirPods <span className="font-medium">Max</span>
                </h1>
                <p className="text-[#909090] text-[14px] leading-[20px] mt-2">
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>

            <div className="flex items-center bg-[#353535] w-full md:w-1/2 h-[272px] gap-4 px-4 text-white">
              <img src={visionPro} alt="" className="w-[80px] object-contain" />
              <div>
                <h1 className="font-light text-[22px] md:text-[29px] leading-[32px]">
                  Apple Vision <span className="font-medium">Pro</span>
                </h1>
                <p className="text-[#909090] text-[14px] leading-[20px] mt-2">
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-[#EDEDED] w-full lg:w-1/2 h-auto lg:h-[600px] p-6">
          <div className="text-center sm:text-left sm:pl-8">
            <h1 className="text-[40px] sm:text-[64px] leading-[1.2] font-[100]">
              Macbook <span className="font-medium">Air</span>
            </h1>
            <p className="max-w-[360px] text-[#909090] text-[14px] leading-[24px] mt-4 mx-auto sm:mx-0">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="mt-6 w-[190px] h-[55px] border rounded-[6px]">
              <Link>Shop Now</Link>
            </button>
          </div>
          <img
            src={mac}
            alt="Macbook"
            className="w-[250px] sm:w-[300px] mt-6 sm:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
