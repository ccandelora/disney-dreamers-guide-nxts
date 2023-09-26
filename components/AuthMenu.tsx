"use client";
import { useSession , signOut} from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function AuthMenu() {
  const {data, status} = useSession();

  const isAuth = status === "authenticated";

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: true },
    { name: 'Add Post', href: '/add-post', current: false },
    { name: 'Add User', href: '/sign-up', current: false },
  ]
  
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  if (isAuth) {
    return (
      <nav className="flex flex-col px-4" aria-label="Sidebar">
        <ul role="list" className="-mx-2 space-y-1">
            <li><button onClick={()=> signOut()}>Logout</button></li>
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

