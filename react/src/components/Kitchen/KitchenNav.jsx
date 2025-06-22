import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function NavItem({ label }) {
  return (
    <a href="#" className="group">
      <Typography
        as="li"
        className="p-2 font-medium text-slate-200 hover:text-white transition-colors duration-200 group-hover:bg-slate-700 rounded-lg"
      >
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavItem label="Dashboard" />
    </ul>
  );
}

export function KitchenNav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      color="transparent"
      fullWidth
      className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 shadow-lg border-0 backdrop-blur-sm"
    >
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 px-4 py-2">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
            <span className="text-white text-xl font-bold">🍳</span>
          </div>
          <Typography
            as="a"
            href="#"
            className="cursor-pointer text-xl font-bold text-white tracking-tight hover:text-orange-300 transition-colors duration-200"
          >
            Kitchen Dashboard
          </Typography>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavList />
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 bg-slate-700 px-3 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-slate-200 text-sm font-medium">Online</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 bg-slate-700 px-3 py-2 rounded-lg hover:bg-slate-600 transition-colors duration-200 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">👨‍🍳</span>
            </div>
            <span className="text-slate-200 text-sm font-medium">Chef</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700 lg:hidden"
          ripple={false}
          onClick={handleOpen}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Menu */}
      <Collapse open={open}>
        <div className="container mx-auto px-4 pb-4">
          <NavList />

          {/* Mobile Status & Profile */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-slate-200 text-sm font-medium">
                  Kitchen Online
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">👨‍🍳</span>
                </div>
                <span className="text-slate-200 text-sm font-medium">Chef</span>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default KitchenNav;
