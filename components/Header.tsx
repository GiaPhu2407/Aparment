import React from "react";
import { ModeToggle } from "./mode-theme";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-400 flex flex-col items-center p-[30px_152px_125px_152px] w-full box-sizing-border">
      <div className="m-[0_0_98px_0] flex flex-row justify-between items-center gap-10 w-[1286px] max-w-full box-sizing-border">
        <div className="flex flex-row items-center gap-2">
          {/* <img className="w-[37px] h-[36.8px]" alt="" />
          <img className="w-[14.9px] h-[16.6px]" alt="" />
          <div className="bg-[var(--gray-900,#18181B)] w-[2.8px] h-[16.3px]"></div>
          <img className="w-[10.4px] h-[12.3px]" alt="" />
          <img className="w-[6.5px] h-[11.9px]" alt="" />
          <img className="w-[2.8px] h-[16.1px]" alt="" />
          <img className="w-[7.6px] h-[14.5px]" alt="" />
          <img className="w-[12.2px] h-[16.5px]" alt="" />
          <img className="w-[12.8px] h-[16.3px]" alt="" /> */}
          {/* <div className="bg-[var(--gray-900,#18181B)] w-[2.9px] h-[16.1px]"></div> */}
        </div>
        <div className="flex flex-row justify-between gap-6 w-[410px]">
          <span className="font-['Inter'] font-semibold text-[16px] text-[var(--gray-900,#18181B)]">
            Home
          </span>
          <Link
            href={"/ShowHotel"}
            className="font-['Inter'] font-semibold text-[16px] text-[var(--gray-900,#18181B)]"
          >
            Hotel
          </Link>

          <span className="font-['Inter'] font-semibold text-[16px] text-[var(--gray-900,#18181B)]">
           Tour
          </span>
          <span className="font-['Inter'] font-semibold text-[16px] text-[var(--gray-900,#18181B)]">
           Service
          </span>
          <div className="flex-none font-['Inter'] font-semibold text-[16px] text-[var(--gray-900,#18181B)]">
            <ul className="menu menu-horizontal -mt-[14px] ">
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="bg-base-100 rounded-t-none ">
                    <li>
                      <a>Link 1</a>
                    </li>
                    <li>
                      <a>Link 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="rounded-[8px] border-2 border-[var(--blue-900,#0F172A)] p-[11px_16px] cursor-pointer">
          <span className="font-['Inter'] font-semibold text-[16px] text-[var(--blue-900,#0F172A)]">
            Start free trial
          </span>
        </div> */}

        <div className="menu-container flex  h-full">
          <div className="flex-grow flex items-center justify-end">
            <button className="btn btn-outline rounded-3xl">Login</button>
            <button className="btn btn-outline btn-primary ml-5 rounded-3xl">
              Sign Up
            </button>
          </div>
          <div className="ml-20">
            <ModeToggle />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-[1600px] box-sizing-border">
        <div className="rounded-[8px] flex flex-col items-start box-sizing-border max-w-[650px]">
          <h1 className="font-['Inter'] font-bold text-[80px] leading-tight text-[var(--blue-900,#0F172A)] mb-8">
            Meet the New Landingfolio Kit
          </h1>
          <p className="font-['Inter'] font-normal text-[21px] text-[var(--blue-6001,#4B5262)] mb-10">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>
          <div className="rounded-[8px] bg-[var(--primary-01,#485AFF)] p-[16px_24px] cursor-pointer">
            <span className="font-['Inter'] font-semibold text-[18px] text-white">
              Start using LandingFolio
            </span>
          </div>
        </div>
        <div className="rounded-[24px] bg-[var(--blue-100,#DBEAFE)] flex items-center justify-center w-[530px] h-[400px] box-sizing-border">
          <img
            src="https://pistachiohotel.com/UploadFile/Gallery/Overview/a2.jpg"
            className="h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
