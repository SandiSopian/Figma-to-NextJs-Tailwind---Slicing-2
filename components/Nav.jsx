import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4 mt-24"
          href="#home"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About Us
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#menu"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Menu
        </a>
        <a
          className="text-xl font-normal my-4"
          href="#contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex sticky md:justify-center filter drop-shadow-md bg-transparent px-4 py-4 h-20 items-center -mb-20">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="flex justify-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "bg-black w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-black -rotate-45 -translate-y-3.5" : ""}`} />
        </div>

        <div className="hidden md:flex text-white shadow-sm">
          <NavLink to="/#home">HOME</NavLink>
          <NavLink to="/#about">ABOUT US</NavLink>
          <NavLink to="/#menu">MENU</NavLink>
          <NavLink to="/#contact">CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
}
