import Link from "next/link";
import React from "react";
import { AiFillBug } from 'react-icons/ai';

const Navbar = () => {
    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug /></Link>
      <ul className="flex space-x-6">
        {links.map(link => (
            <li className="text-zinc-400 hover:text-zinc-700 transition-colors" key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
