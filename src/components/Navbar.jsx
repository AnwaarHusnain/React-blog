import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
const [open, setOpen] = useState(false)

  return (
    <div className="h-20 flex items-center justify-between p-5">
      <img
        src="Images/logo JJ copy 1.png"
        alt="logo"
        className="w-24 md:w-28 xl:w-36 2xl:w-40"
      />
      <ul className="hidden md:block">
        <li className="flex gap-8 lg:gap-16 text-sm md:text-base xl:text-lg">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/media"}>Media</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="flex items-center gap-3 md:gap-7 xl:gap-10">
        <img
          src="/Images/phone-call 1.svg"
          alt="phone icon"
          className="w-4 md:w-6 lg:w-7"
        />
        <span className="text-sm md:text-base xl:text-lg">Lets Talk</span>
        <img
          src="/Images/Menu Button.svg"
          alt="phone icon"
          className="w-5 cursor-pointer md:w-7 lg:w-8"
          onClick={()=> setOpen(true)}
        />
      </div>
    {/* menu */}
      <div className={`px-3 h-screen absolute transition-all top-0 right-0 w-44 bg-white drop-shadow-xl md:w-1/3 2xl:w-96 ${open ? '' : '-left-[100%]'} `}>
        <img
          src="/Images/Close.svg"
          alt=""
          className="absolute top-7 right-5 w-3 cursor-pointer"
          onClick={()=>setOpen(false)}
        />
        <div className="flex flex-col gap-5 py-10">
          <div className="flex flex-col gap-5 ">
            <img
              src="Images/logo JJ copy 1.png"
              alt="logo"
              className="w-24 md:w-28 xl:w-36 2xl:w-40"
            />
            <p className="text-gray text-sm">
              Lorem ipsum dolor sit amet consectetur. Lectus varius a nunc diam.
            </p>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="font-primaryfont">My Contacts</h1>
            <span className="text-gray text-sm">jwriterp@gmail.com</span>
            <span className="text-gray text-sm">(310) 488-4570</span>
          </div>

          <div className="grid grid-cols-2 grid-rows-2  gap-y-5 md:grid-cols-4 md:">
            <img src="Images/6.png" alt="" className="w-10" />
            <img src="Images/7.png" alt="" className="w-10" />
            <img src="Images/8.png" alt="" className="w-10" />
            <img src="Images/9.png" alt="" className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
