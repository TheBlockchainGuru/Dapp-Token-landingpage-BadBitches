import { useState } from "react";

import "./App.css";
import back from "./assets/image/main_back.png";
import logo from "./assets/image/logo.png";
import october from "./assets/image/october.png";
import twitter from "./assets/image/twitter.png";
import icon1 from "./assets/image/icon1.png";
import icon2 from "./assets/image/icon2.png";
import icon3 from "./assets/image/icon3.png";
import menu from "./assets/image/menu.png";
import instagram from "./assets/image/instagram.png"
import facebook from "./assets/image/facebook.png"


import PieChart from "react-pie-graph-chart";
function App() {
  const [showStatus, setShowStatus] = useState(false);
  const example = [
    {
      type: "Presale",
      value: 50,
      color: "#9FE64E",
    },
    {
      type: "Liquidity",
      value: 40,
      color: "#00D89E",
    },
    {
      type: "Team",
      value: 10,
      color: "#5637C8",
    },
  ];
  return (
    <div className="bg-[#1B1C20] relative font-[700]">
      {/* Header */}

      <div className="text-center absolute z-10 py-4 w-full flex">
        <div className="flex w-[50%] justify-between px-8 lg:px-16">
          <div>
            <img src={logo} alt="logo" className="w-[70%]" />
          </div>
          <a
            className="hidden sm:block text-white text-[20px] font-[200]"
            href="/#tokenomics"
          >
            Tokenomics
          </a>
          <a
            className="hidden sm:block text-white text-[20px] font-[200]"
            href="/#roadmap"
          >
            Roadmap
          </a>
          <div>
            <a className="text-white text-[20px] font-[200]" href="/#about">
              About
            </a>
          </div>

          <div>
            <a className="text-white text-[20px] font-[200]" href="/#whitepaper">
              Whitepaper
            </a>
          </div>
        </div>
        {/* <div className="hidden sm:flex w-[50%] justify-between px-8 lg:px-16">
          <div>
            <button className="bg-[#E88034] text-black rounded-full px-4 py-2">
              Connect Wallet
            </button>
          </div>
        </div> */}
        <div
          className="block sm:hidden ml-auto px-4"
          onClick={() => setShowStatus(!showStatus)}
        >
          <img
            src={menu}
            className="xs:w-[30px] xs:h-[30px] w-[15px] h-[15px]"
            alt="menu"
          />
        </div>
        <div
          className={`absolute top-[40px] bg-gray-900 items-center justify-center right-0 ${
            showStatus ? "flex" : "hidden"
          } flex-col text-[15px] xs:text-[20px] z-50`}
        >
          <div
            style={{ fontFamily: "Alumni Sans Inline One" }}
            className="italic tracking-[5px] font-normal text-[#E88034]"
            onClick={() => setShowStatus(false)}
          >
            Connect Wallet
          </div>
          <a
            style={{ fontFamily: "Alumni Sans Inline One" }}
            className="italic tracking-[5px] text-white  font-[normal]"
            href="/#roadmap"
            onClick={() => setShowStatus(false)}
          >
            Roadmap
          </a>
          <a
            style={{ fontFamily: "Alumni Sans Inline One" }}
            className="italic tracking-[5px] text-white font-normal"
            href="/#about"
            onClick={() => setShowStatus(false)}
          >
            About us
          </a>
        </div>
      </div>

      {/*Home*/}

      <div className="text-center relative pb-[20%]">
        <img src={back} className="w-full h-full absolute" alt="back" />
        <div className="absolute w-[50%] h-full bg-black bg-opacity-40 left-0"></div>
        <div className="pt-[10%] relative">
          <p className="text-white xs:text-[25px] sm:text-[30px] md:text-[40px] lg:text-[60px] font-['Inter'] ">
            Building the <span className="text-[#E88034]">Bad Bitches</span> on
            the Blockchain
          </p>
          <p className="text-white xs:text-[20px] md:text-[30px] lg:text-[40px] font-['Inter']">
            THE AGE OF BAD BITCHES IS NOW
          </p>
        </div>
        <div className="mt-[10%] relative ">
          <a href = "https://bscscan.com/token/0x54714b13111a8AB291973b5E9EEbD64081629654" target="_blank" rel="noreferrer">
            <button className="p-2 sm:p-3 border-[#E88034] border-2 rounded-full text-white text-[10px] sm:text-[20px] md:text-[25px] md:tracking-wide" >
              0x54714b13111a8AB291973b5E9EEbD64081629654
            </button>
          </a>
       
        </div>
      </div>

      {/* The Breakdown */}
      <div className="text-center md::h-[100vh] relative flex flex-col items-center pb-24" id = "tokenomics">
        <img src={back} className="w-full h-full absolute" alt="back" />
        <div className="absolute w-full h-full bg-black bg-opacity-70 left-0"></div>
        <div className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] relative pt-8">
          <p className="text-[#E88034]">THE BREAKDOWN</p>
          <p className="text-white">funding and token allocation chart</p>
        </div>
        <div className="flex sm:flex-row flex-col w-[70%] md:w-[60%] mt-[10%]">
          <div className="w-full sm:w-[50%]">
            <div className="text-white md:text-[25px] lg:text-[35px] underline relative -mt-8 lg:-mt-16">
              Token Allocation
            </div>
            <PieChart data={example} />
          </div>

          <div className="w-full sm:w-[50%] relative text-left text-[15px] sm:text-[20px] md:text-[30px]">
            <p className="text-white mt-4">Team: 10%</p>
            <div class="w-full bg-[#1B1829] rounded-full">
              <div class="bg-[#5637C8] text-blue-100 text-center h-2 sm:h-4 p-0.5 leading-none rounded-l-full w-[10%]"></div>
            </div>
            <p className="text-white mt-4">Liquidity: 40%</p>
            <div class="w-full bg-[#112B24] rounded-full">
              <div class="bg-[#00D89E] text-blue-100 text-center h-2 sm:h-4 p-0.5 leading-none rounded-l-full w-[10%]"></div>
            </div>
            <p className="text-white mt-4">Presale: 50%</p>
            <div class="w-full bg-[#2B371D] rounded-full">
              <div class="bg-[#9FE64E] text-blue-100 text-center h-2 sm:h-4 p-0.5 leading-none rounded-l-full w-[10%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="text-center relative flex flex-col items-center" id="roadmap">
        <div className="absolute w-full h-full bg-black bg-opacity-70 left-0"></div>
        <p className="text-[27px] sm:text-[35px] md:text-[50px] text-[#E88034] relative">
          Bad Bitches roadmap
        </p>
        <div className="w-[60%] mt-24 relative ">
          <p className="text-white text-[20px] sm:text-[30px] md:text-[40px] text-left">
            Jan
          </p>
          <img src={october} alt="october" className="mt-8 w-full" />
        </div>
      </div>

      {/* About Us */}

      <div className="text-center lg:h-[100vh] relative flex flex-col items-center pb-24" id="about">
        <img src={back} className="w-full h-full absolute" alt="back" />
        <div className="absolute w-full h-full bg-black bg-opacity-70 left-0"></div>
        <div className="relative pt-24 px-8">
          <p className="text-[27px] sm:text-[35px] md:text-[50px] text-[#E88034]">
            About Us
          </p>
          <p className="text-[22px] sm:text-[30px] text-white font-[400] mt-8">
            Read all about Bad Bitches to help understand everything there is to
            know:
          </p>
        </div>
        <div className="flex flex-col w-[60%] mt-24 rounded-2xl bg-[#232428] relative justify-center text-[20px] sm:text-[30px] md:text-[40px] p-8 bg-opacity-50">
          <p className="text-[#E88034] underline">what is Bad bitches</p>
          <p className="text-white">tokenomics</p>
          <p className="text-white">gitbook</p>
          <p className="text-white">whitepaper - coming soon</p>
        </div>
      </div>

      {/* Footer */}

      <div className="text-center relative px-6 sm:px-16 md:px-24 py-6">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="logo" className="w-[70%]" />
          </div>
          <div className="flex gap-2 sm:gap-4 md:gap-8 mr-[20px]">
          <a href = "https://twitter.com/Badbitchies9" target="_blank" rel="noreferrer">
            <img
              src={twitter}
              alt="twitter"
              className="sm:w-[30px] sm:h-[30px] xs:w-[20px] xs:h-[20px] w-[15px] h-[15px]"
            />
          </a>
          <a href = "https://www.facebook.com/cyrptocurrency2023" target="_blank" rel="noreferrer">
            <img
              src={facebook}
              alt="facebook"
              className="sm:w-[30px] sm:h-[30px] xs:w-[20px] xs:h-[20px] w-[15px] h-[15px]"
            />
          </a>

          <a href =  "https://www.instagram.com/badbitches0778/" target="_blank" rel="noreferrer">
            <img
              src={instagram}
              alt="instagram"
              className="sm:w-[30px] sm:h-[30px] xs:w-[20px] xs:h-[20px] w-[15px] h-[15px]"
            />
          </a>

          <a href = "https://www.coingecko.com/" target="_blank" rel="noreferrer">
            <img
              src={icon2}
              alt="icon2"
              className="sm:w-[30px] sm:h-[30px] xs:w-[20px] xs:h-[20px] w-[15px] h-[15px]"
            />
          </a>

          <a href = "https://coinmarketcap.com/" target="_blank" rel="noreferrer">
            <img
              src={icon3}
              alt="icon3"
              className="sm:w-[30px] sm:h-[30px] xs:w-[20px] xs:h-[20px] w-[15px] h-[15px]"
            /></a>
          </div>
        </div>
        <div className="text-[15px] sm:text-[22px] text-white font-[400] text-right mt-8">
          Bad Bitches 2022. all rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
