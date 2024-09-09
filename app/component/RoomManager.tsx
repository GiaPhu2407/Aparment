"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { GrUserManager } from "react-icons/gr";
import { MdCleaningServices } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";

export function RoomManager() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý nhân viên",
      href: "#",
      icon: (
        <GrUserManager className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý dịch vụ",
      href: "#",
      icon: (
        <MdCleaningServices className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý đặt phòng",
      href: "#",
      icon: (
        <TbBrandBooking className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý phòng",
      href: "#",
      icon: (
        <MdOutlineBedroomParent className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý thông tin khách hàng",
      href: "#",
      icon: (
        <IoIosInformationCircleOutline className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Thống Kê",
      href: "#",
      icon: (
        <FaChartLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-full" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Gia Phu",
                href: "#",
                icon: (
                  <img
                    src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=bOEh471GIxUQ7kNvgHsX5jW&_nc_ht=scontent.fdad2-1.fna&oh=00_AYDcWgJsXxzR4n9Z_AzzVIwJKxH7nhOj5EkpjS99C-PUzg&oe=66DB9B05"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between  items-center mt-10 ml-10">
        <div className="flex items-center space-x-2">
          <label htmlFor="room-type" className="mr-2">
            Hạng Phòng
          </label>
          <select id="room-type" className="border border-gray-300 p-2 rounded">
            <option>Phòng VIP</option>
            <option>Phòng Tiêu Chuẩn</option>
            <option>Phòng Đơn</option>
          </select>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Thêm Phòng
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="flex">
              <h3>Id</h3>
              <input type="text" name="" id="" className="ml-10" />
            </div>
            <div className="flex">
              <h3>Ảnh</h3>
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
              />
            </div>
            <div className="flex">
              <h3>Tên Phòng</h3>
              <input type="text" name="" id="" className="ml-10" />
            </div>
            <div className="flex">
              <h3></h3>
              <input type="text" name="" id="" className="ml-10" />
            </div>
            <div className="flex">
              <h3>Id</h3>
              <input type="text" name="" id="" className="ml-10" />
            </div>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto mt-20 ">
          <thead>
            <tr>
              <th className="px-10 py-3 text-left">Id</th>
              <th className="px-10 py-3 text-left">Ảnh</th>
              <th className="px-10 py-3 text-left">Tên phòng</th>
              <th className="px-10 py-3 text-left">Trạng Thái</th>
              <th className="px-10 py-3 text-left">Lịch Đặt Phòng</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-10 py-4">1</td>
              <td className=" py-4 text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-auto"
                    src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                    alt="Room Image"
                  />
                </div>
              </td>
              <td className="px-10 py-4">Phòng VIP</td>
              <td className="px-10 py-4">Đang ở</td>
              <td className="px-10 py-4">8/9/2024</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="px-10 py-4">2</td>
              <td className=" py-4 text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-auto"
                    src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                    alt="Room Image"
                  />
                </div>
              </td>
              <td className="px-10 py-4">Phòng VIP</td>
              <td className="px-10 py-4">Đang ở</td>
              <td className="px-10 py-4">8/9/2024</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="px-10 py-4">3</td>
              <td className=" py-4 text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-auto"
                    src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                    alt="Room Image"
                  />
                </div>
              </td>
              <td className="px-10 py-4">Phòng VIP</td>
              <td className="px-10 py-4">Đang ở</td>
              <td className="px-10 py-4">8/9/2024</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="px-10 py-4">4</td>
              <td className=" py-4 text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-auto"
                    src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                    alt="Room Image"
                  />
                </div>
              </td>
              <td className="px-10 py-4">Phòng VIP</td>
              <td className="px-10 py-4">Đang ở</td>
              <td className="px-10 py-4">8/9/2024</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="px-10 py-4">5</td>
              <td className=" py-4 text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-auto"
                    src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                    alt="Room Image"
                  />
                </div>
              </td>
              <td className="px-10 py-4">Phòng VIP</td>
              <td className="px-10 py-4">Đang ở</td>
              <td className="px-10 py-4">8/9/2024</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-b">
              <td className="px-10 py-4">6</td>
              <td className=" py-4 text-center">
                <div className="flex justify-center">
                  <img
                    className="w-20 h-auto"
                    src="https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"
                    alt="Room Image"
                  />
                </div>
              </td>
              <td className="px-10 py-4">Phòng VIP</td>
              <td className="px-10 py-4">Đang ở</td>
              <td className="px-10 py-4">8/9/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RoomManager;
