"use client"
import Image from "next/image";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

function _SideBar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/dashboard",
      icon: <IoHomeOutline />,
    },
    {
      id: 2,
      name: "Explore",
      path: "/dashboard/explore",
      icon: <MdOutlineExplore />,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/dashboard/upgrade",
      icon: <FaShieldAlt />,
    },
    {
      id: 4,
      name: "Logout",
      path: "/dashboard/logout",
      icon: <IoLogOutOutline />,
    },
  ];

  const path=usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/LOGO.png"} width={100} height={100} alt="logo" />
      <hr className="my-5" />
      <ul>
        {Menu.map((item, index) => {
            
          return (
            <Link href={item.path}>
            <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path==path &&'bg-gray-100 text-black'}`}>
              <div className="text-xl">
                <li key={index} className="flex items-center gap-3 my-3">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              </div>
            </div>
            </Link>
          );
        })}
      </ul>
      <div className="absolute bottom-9 w-[80%]">
        <Progress  value={60}/>
        <h2 className="text-sm my-2">3 out of 60 course created</h2>
        <h2 className="text-xs text-gray-500">Upgrade Your Plan For Unlimited Course Genration</h2>
      </div>
    </div>
  );
}

export default _SideBar;
