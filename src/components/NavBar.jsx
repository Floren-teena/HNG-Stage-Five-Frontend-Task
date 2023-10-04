// import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";

const Navbar = () => {
  return (
    <div className=" md:max-h-[8vh] flex flex-col bg-white">
      <nav className=" m-0 py-[12px] px-4 md:px-10 lg:px-16 xl:px-40   flex flex-col md:flex-row sm:flex-row items-center justify-between border-b-2 border-[#eff2f4]">
        <div className="w-[Hug (157px)] h-[Hug (60px)] flex flex-row items-center gap-1">
          <img
            src={Logo}
            alt="HelpmeOut Logo"
            className="w-[40px] h-[40px]"
            priority={true}
          />
          <p className="w-[89px] h-[19px] text-[16px] font-[700] leading-[19.36px] text-[#100A42]">
            HelpMeOut
          </p>
        </div>
        <div className="w-[253px] py-[10px] pl-[20px] pr-[21px] flex flex-row justify-between">
          <a href="/">
            <p className="w-[Hug (68px)] h-[Hug (19px)] ml-[20px] text-[#000000] font-[500] font-WorkSans text-[16px] leading-[18.77px] hover:text-[#7768ec]">
              Features
            </p>
          </a>
          <a href="/">
            <p className="w-[Hug (105px)] h-[Hug (19px)] ml-[10px] text-[16px] font-WorkSans font-[500] leading-[18.77px] text-[#000000] whitespace-nowrap hover:text-[#7768ec]">
              How It works
            </p>
          </a>
        </div>
        <div className="w-[Hug (128px)] py-[12px] px-[10px]">
          <div className="w-[Hug (108px)] h-[Hug (23px)]">
            {/* <Link to="../login.js">
              <p className=" text-[#120B48] font-Sora text-[18px] font-[600] text-center whitespace-nowrap hover:text-[#7768ec]">
                Get Started
              </p>
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
