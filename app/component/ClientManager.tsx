"use client";
import React, { useEffect, useState } from "react";
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

export function ClientManager() {
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
        "h-[1000px]"
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
                  <Image
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

interface IUser {
  id: number;
  name: string;
  email: string;
}

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getData();
        setUsers(data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    const result = await response.json();
    setMessage(result.message || result.error || "Có lỗi xảy ra");
  };

  return (
    <div>
      <div>
        <h1>Thêm người dùng mới</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="text-black rounded-sm mt-1  border ml-2 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label>Tên:</label>
            <input
              type="text"
              name="name"
              className="text-black rounded-sm mt-1  border ml-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit">Thêm mới</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      {/* <h2>Danh sách các users</h2>
      <Link href="/products_shoes">Thêm mới user</Link>
      <ul>
        {users.map((user: IUser) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.email}
          </li>
        ))}
      </ul> */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientManager;
