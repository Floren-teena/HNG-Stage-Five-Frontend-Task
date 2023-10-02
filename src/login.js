import Logo from "./assets/logo/logo.svg";
import Google from "./assets/help_assets/Google.svg";
import Facebook from "./assets/help_assets/facebook.svg";

const login = () => {
  return (
    <div className="max-h-[90vh] bg-white flex flex-col pb-16 max-w-1/3 mx-auto">
      <nav className="flex flex-row items-center mt-6 md:ml-20 lg:ml-28 ml-10 w-screen h-[Hug (40px)]">
        <img
          className="w-[40px] h-[40px]"
          src={Logo}
          alt="HelpmeOut Logo"
          priority={true}
        />
        <div>
          <p className=" text-[#100A42] text-base font-[700] w-[89px] h-[19px]">
            Helpmeout
          </p>
        </div>
      </nav>

      <main className="w-1/3  h-auto mt-4 pb-12 gap-4 flex flex-col mx-auto justify-center">
        {/* div for Log in and sign in text */}
        <div className=" items-center justify-items-center flex flex-col h-24 gap-2">
          <h1 className="w-64 h-7 lg:h-12 font-[700] text-2xl lg:text-3xl lg:leading-10 text-[#141414] text-center">
            Log in or Sign up
          </h1>
          <p className="w-80 h-11 font-[300] text-sm leading-5 text-center text-[#434343] px-2">
            Join millions of others in sharing successful moves on{" "}
            <span className="font-Sen font-[400]">HelpMeOut.</span>
          </p>
        </div>

        {/* div for continue with google and facebook */}
        <div className="md:w-[Hug (475px)] w-auto h-[Hug (120px)] gap-5 flex flex-col justify-center md:justify-normal">
          <div className=" w-auto h-11 border border-[#141414] rounded-xl">
            <div className=" md:w-[Fixed (219px)] w-auto h-[Hug (42px)] py-[9px] md:px-[10px] px-1 flex flex-row gap-[18px] justify-center items-center">
              <img
                src={Google}
                alt="Google logo"
                className="w-[24px] h-[24px]"
                priority={true}
              />
              <p className="w-[169px] h-[24px] font-[500] text-[16px] text-[#141414]">
                Continue with Google
              </p>
            </div>
          </div>
          <div className="w-[475px] h-11 border rounded-xl border-[#141414]">
            <div className="w-[Hug (250px)] h-[Hug (42px)] ml-[23px] py-[10px] px[10px] flex flex-row gap-[18px] items-center justify-center">
              <img
                className="w-[24px] h-[24px]"
                src={Facebook}
                alt="Facebook Logo"
                priority={true}
              />
              <p className="w-[190px] h-[24px] font-[500] text-[16px] tracking-normal text-[#141414]">
                Continue with Facebook
              </p>
            </div>
          </div>
        </div>

        {/*div for hr and text */}
        <div className="flex items-center w-[Hug (420px)] h-[Hug (16px)] mx-5">
          <hr className=" w-[200px] flex-grow border-t border-[#B9C2C8]" />
          <p className="w-[Hug (34px)] py-[1px] px-[10px] text-[#B9C2C8]">or</p>
          <hr className=" w-[200px] flex-grow border-t border-[#B9C2C8]" />
        </div>

        {/*Email and Password form */}
        <form className=" w-[Hug (475px)] flex flex-col gap-[16px] mt-[-8px]">
          <div className="w-[Fixed (475px)] h-[Hug (79px)] flex flex-col gap-3">
            <label
              htmlFor="email"
              className="w-[475px] h-[16px] font-WorkSans font-[500] text-[14px] text-[#141414]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-[Fill (475px)] h-[Hug (51px)] border border-[#B6B3C6] px-4 py-3 rounded-xl  focus:border-2 focus:outline-none focus:ring-0 focus:ring-[#120B48] focus:ring-500 focus:border-[#120B48] focus:border-500 placeholder:text-[#626262] placeholder:w-[443px] placeholder:h-[19px] placeholder:font-WorkSans placeholder:font-[500] placeholder:text-[16px]"
            />
          </div>
          <div className="w-[Fill (475px)] h-[Hug (79px)] flex flex-col gap-3">
            <label
              htmlFor="password"
              className="w-[475px] h-[16px] font-WorkSans font-[500] text-[14px] text-[#141414]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="w-[Fill (475px)] h-[Hug (51px)] px-4 py-3 border rounded-xl border-[#B6B3C6]  focus:border-2 focus:outline-none focus:ring-0 focus:ring-[#120B48] focus:ring-500 focus:border-[#120B48] focus:border-500 placeholder:text-[#626262] placeholder:w-[443px] placeholder:h-[19px] placeholder:font-WorkSans placeholder:font-[500] placeholder:text-[16px] placeholder:leading-[18.77px]"
            />
          </div>
        </form>

        {/*button*/}
        <button className="w-[Fill (475px)] h-[Hug (53px)] py-3 px-5 border rounded-lg bg-[#120B48]">
          <span className="text-white w-[Hug (68px)] h-[Hug (21px)] font-WorkSans">
            Sign Up
          </span>
        </button>
      </main>
    </div>
  );
};

export default login;
