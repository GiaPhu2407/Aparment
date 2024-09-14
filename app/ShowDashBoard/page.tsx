// import React from "react";
// import SidebarDemo from "../component/dashboard";
// const page = () => {
//   return (
//     <div>
//       <SidebarDemo />
//     </div>
//   );
// };

// export default page;

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
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GrUserManager } from "react-icons/gr";
import { MdCleaningServices } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
import { FileSymlink } from "lucide-react";
import PieChartDemo from "@/components/pieChart";
import LineChartDemo from "@/components/LineChart";
import ChartDemoPage from "@/components/BarChart";
import PolarChartDemo from "@/components/Polararea";
import MixedChartDemo from "@/components/mixedchart";
import RadarChartDemo from "@/components/radarchart";
import { GoPeople } from "react-icons/go";
const page = () => {
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
      href: "/ShowPersonelManager",
      icon: (
        <GrUserManager className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Quản lý dịch vụ",
      href: "/ShowServiceManager",
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
      href: "/ShowRoomManger",
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
      <Sidebar open={open} setOpen={setOpen} animate={false}>
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
                    className="h-7 w-7 flex-shrink-0 rounded-full "
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
};
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
    <div className="flex">
      <div>
        <div className="stats shadow flex items-center mb-10 w-[750px] ">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
        <div className="flex">
          <div>
            <ChartDemoPage />
          </div>
          <div className="ml-10">
            <PieChartDemo />
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-7">
          <div className="p-0 m-0 h-[300px]">
            <LineChartDemo />
          </div>
          <div className="p-0 m-0  h-[300px]">
            <LineChartDemo />
          </div>
          <div className="p-0 m-0 h-[300px]">
            <LineChartDemo />
          </div>
          <div className="p-0 m-0 h-[300px]">
            <LineChartDemo />
          </div>
          <div className="p-0 m-0  h-[300px]">
            <LineChartDemo />
          </div>
          <div className="p-0 m-0  h-[300px]">
            <LineChartDemo />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <PolarChartDemo />
          </div>
          <div>{/* <MixedChartDemo /> */}</div>
          <div>
            <RadarChartDemo />
          </div>
        </div>
      </div>
      {/* Content 1  */}
      <div className="relative">
        <div className="absolute top-0 right-36 w-[100px] h-[50px] mt-2 ">
          <p className="font-extrabold">Notification</p>
          <div className="flex my-5">
            <div className="mt-1  ">
              <GoPeople />
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                You have a bug that needs....
              </p>
              <p className="text-sm text-gray-500 ml-2">5m ago</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="mt-1 ">
              <GoPeople />
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">New user registered</p>
              <p className="text-sm text-gray-500 ml-2">1:23 AM</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="mt-1 ">
              <GoPeople />
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                You have a bug that needs....
              </p>
              <p className="text-sm text-gray-500 ml-2">0:32 AM</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="mt-1 ">
              <GoPeople />
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                Andi Lane subscribed to you
              </p>
              <p className="text-sm text-gray-500 ml-2">Yesterday 12:39 AM</p>
            </div>
          </div>
        </div>
      </div>
      {/* Content 2 */}
      <div className="relative">
        <div className="absolute top-[350px] right-44 w-[100px] h-[50px] mt-2 ">
          <p className="font-extrabold">Activities</p>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=cBtDM4VOrzgQ7kNvgGzZVqa&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A828t2YNiXD0IX9947EaHtO&oh=00_AYCPO6al1z14lOE9jh_4FC8I62G66_fmYVo3qVbfU0VEpw&oe=66E85985"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                Endited the details of Project X
              </p>
              <p className="text-sm text-gray-500 ml-2">5m ago</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=cBtDM4VOrzgQ7kNvgGzZVqa&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A828t2YNiXD0IX9947EaHtO&oh=00_AYCPO6al1z14lOE9jh_4FC8I62G66_fmYVo3qVbfU0VEpw&oe=66E85985"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                Changed the status of Project
              </p>
              <p className="text-sm text-gray-500 ml-2">1:23 AM</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=cBtDM4VOrzgQ7kNvgGzZVqa&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A828t2YNiXD0IX9947EaHtO&oh=00_AYCPO6al1z14lOE9jh_4FC8I62G66_fmYVo3qVbfU0VEpw&oe=66E85985"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">Submitted a bug</p>
              <p className="text-sm text-gray-500 ml-2 whitespace-nowrap">
                Yesterday 12:39 AM
              </p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=cBtDM4VOrzgQ7kNvgGzZVqa&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A828t2YNiXD0IX9947EaHtO&oh=00_AYCPO6al1z14lOE9jh_4FC8I62G66_fmYVo3qVbfU0VEpw&oe=66E85985"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                Modified A data in Page X
              </p>
              <p
                className="text-sm text-gray-500 ml-2
              "
              >
                Last Thursday 3:34 AM
              </p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=cBtDM4VOrzgQ7kNvgGzZVqa&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A828t2YNiXD0IX9947EaHtO&oh=00_AYCPO6al1z14lOE9jh_4FC8I62G66_fmYVo3qVbfU0VEpw&oe=66E85985"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">
                Deleted a page in Project X
              </p>
              <p
                className="text-sm text-gray-500 ml-2
              "
              >
                Aug 11
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content 3  */}
      <div className="relative">
        <div className="absolute top-[750px] right-44 w-[100px] h-[50px] mt-2 ">
          <p className="font-extrabold">Contacts</p>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/428603879_3699291333727981_8450238390845543097_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8eAl4DqSiHc45WD_3ZUa0Yj2_k1pIrCxiPb-TWkisLKdt4xrCZnSawKeji-j5xGqR90NFt9JrVnVNHzicN-9h&_nc_ohc=cBtDM4VOrzgQ7kNvgGzZVqa&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=A828t2YNiXD0IX9947EaHtO&oh=00_AYCPO6al1z14lOE9jh_4FC8I62G66_fmYVo3qVbfU0VEpw&oe=66E85985"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">Gia Phu</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/440943990_3551789455042108_2565515360192367734_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFXG90i3fJyDLzbanQykfLJ-GDsEHpP54b4YOwQek_nhrCFWj0HHcUawSEq1g4dFpFSwietwkWeiTJ1ybfJp3wp&_nc_ohc=MePK9oKzkoMQ7kNvgH5FaSV&_nc_ht=scontent.fdad1-4.fna&_nc_gid=AuXIjTZmlZD8b1lLKqygn8S&oh=00_AYAis50L2ger5m8spIeJM9evuDWsyafXqy1j7_B8audMhA&oe=66E8C611"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">Diu Hien</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/426594388_952879249774939_1978058452152390104_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFCurdSdJnfrRgBDMWHNCIYgTZw5PRQ11-BNnDk9FDXX1hU34RVY15yxIDM5SBryw4Ii1pl_12qn4bhgCXjFQkk&_nc_ohc=dQ6hjXNR4YAQ7kNvgHTvxbq&_nc_ht=scontent.fdad2-1.fna&oh=00_AYDy3m7sUqrpB-KlQX2FrdnN-yTsRUssyxg-vMQbEPUDTg&oe=66E8D0C4"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">Le Huy</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/455112302_1525163028117234_8150191852465374999_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGOeOd-aodiE6m6YLLBDD2yLiUBIhY_w84uJQEiFj_DzlHmEYhP-Y-Mq-wIYmWdbgtSBe5H6V-2zKZIhgR6vRWd&_nc_ohc=WFE6RxJMiMoQ7kNvgFMLHNt&_nc_ht=scontent.fdad1-3.fna&_nc_gid=A0RQP5Yqqlczw4omYzkREO3&oh=00_AYAwgbF7r9PR2x_dLp8m7os7reSw3ndhYjnKlS2D3Q2Yfw&oe=66E8C6A9"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">Ba Viet</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="avatar   ">
              <div className="w-8 h-8">
                <img
                  src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/333578710_152449781004654_2005173142519798115_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFhCPe6nS0mnDJ8MJEmw01xhvjZ-YqJYXGG-Nn5iolhQ7yjRTX65m03wUGqMeYPna4dQXjgubUU4uOyyCO0R7F&_nc_ohc=6YNYRoj5iCAQ7kNvgH9Vj8a&_nc_ht=scontent.fdad1-4.fna&_nc_gid=AmnYEvt6idjWJfTJAqz-0Nq&oh=00_AYCXnd0mvOWS4o6Uj4laWVZfmdbNkrQCB3EY4YKH6J3pQw&oe=66E8B280"
                  alt=""
                  className=" rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="whitespace-nowrap ml-2">Quoc Thinh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
