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
    <a href="#">
      <Typography as="li" className="p-1 font-medium text-black">
        {label}
      </Typography>
    </a>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="About Us" />
      <NavItem label="Pricing" />
      <NavItem label="Contact Us" />
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
    <Navbar color="transparent" fullWidth>
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer text-lg font-bold text-black"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button color="gray" className="hidden lg:inline-block">
          Sign in
        </Button>
        <IconButton
          size="sm"
          variant="text"
          onClick={handleOpen}
          className="ml-auto bg-slate-950 flex justify-center items-center text-white lg:hidden rounded-md p-2 hover:bg-slate-800 transition"
          aria-label="Toggle menu"
        >
          <span className="font-extrabold w-full select-none">−</span>
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          <NavList />
          <Button className="mb-2" fullWidth>
            Sign in
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default KitchenNav;