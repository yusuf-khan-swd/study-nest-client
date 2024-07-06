"use client";

import { removeTokenFromLocalStorage } from "@/helpers/token";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Navbar = () => {
  const websiteName = "StudyNest";

  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success("Logout success");
    removeTokenFromLocalStorage();
  };

  const menuItems = (
    <>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/course">Course</Link>
      </li>
      <li>
        <Link href="/faq">FAQ</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
      {user && (
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );

  const loginMenuItems = (
    <>
      {!user && (
        <>
          <button className="border rounded-lg mr-2">
            <Link className="btn btn-sm sm:btn-md btn-ghost" href="/register">
              Register
            </Link>
          </button>
          <button className="btn btn-sm sm:btn-md btn-primary">
            <Link href="/login">Login</Link>
          </button>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg sm:text-xl" href="/">
          {websiteName}
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {loginMenuItems}
        {user && (
          <>
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white hidden lg:block"
            >
              Logout
            </button>
          </>
        )}
      </div>
      {user && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                src={"/placeholder.jpg"}
                alt="avatar image"
                width={40}
                height={40}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button className="btn btn-error btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
