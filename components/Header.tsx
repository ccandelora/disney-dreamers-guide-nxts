import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";



const menuItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Articles",
    route: "/articles",
  },
  {
    title: "Wait Times",
    children: [
      {
        title: "Magic Kingdom",
        route: "/wait-times/magic-kingdom",
      },
      {
        title: "Epcot",
        route: "/wait-times/epcot",
      },
      {
        title: "Hollywood Studios",
        route: "/wait-times/hollywood-studios",
      },
      {
        title: "Animal Kingdom",
        route: "/wait-times/animal-kingdom",
      },
    ],
  },
];

export default function Header() {
  return (
    <header className=" grid grid-cols-2 gap-2 items-center bg-zinc-800 py-4 px-2">
      <div className="flex items-center">
        <Link href="https://www.disneydreamersguide.com" target="_blank">
            <Image src="/disney-dreamers-guide-low-resolution-logo-white-on-transparent-background.png" width={200} height={20} alt="logo" />
        </Link>
      </div>
      <div className="items-center text-white">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown item={item} />
          ) : (
            <Link className="hover:text-blue-500" href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
