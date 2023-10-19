import { Link } from "react-router-dom";
import footerLogo from "/Images/footer logo .svg";

const Footer = () => {
  return (
    <div className="py-10 flex flex-col gap-5 items-center justify-center">
      <div className="w-full flex gap-10 flex-wrap justify-center items-center px-10 md:justify-between">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/media"}>Media</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-5 md:flex-row-reverse md:justify-between md:px-8">
        <img src={footerLogo} alt="" className="w-24" />
        <p className="text-gray text-sm ">© 2023 All rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
