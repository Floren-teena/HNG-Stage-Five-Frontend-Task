import Arrow from "../assets/help_assets/arrow-right.svg";
import Woman1 from "../assets/help_assets/woman_blue.svg";
import FatherAndSon from "../assets/help_assets/father_son.svg";
import Woman2 from "../assets/help_assets/woman_orange.svg";
import Grey from "../assets/help_assets/dotted_image_grey.svg";
import Green from "../assets/help_assets/dotted_image_green.svg";

const Splashscreen = () => {
  return (
    <main className=" max-h-[90vh] max-w-full bg-white flex md:flex-row flex-col w-full px-6 justify-center gap-2 items-center">
      {/* div for text on the left */}
      <div className=" w-[45%] ml-8 mt-28 h-[Hug (317px)]">
        <div className="w-[Hug (548px)] h-[Hug (204px)]">
          <h1 className="w-[Hug (468px)]  h-[Hug (128px)] font-Sora font-bold md:text-6xl text-4xl text-[#141414] mb-5">
            Show Them Don’t Just Tell
          </h1>
          <p className="w-[490px]  h-[56px] font-normal text-lg leading-7 text-[#000000BF] mb-10">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
        </div>
        <a href="/">
          <button className="w-[Hug (239px)] h-[Hug (65px)] border rounded-lg py-[22px] px-6 bg-[#120B48] text-white flex hover:bg-[#141414] transform duration-500 hover:py-6 hover:px-7 ">
            Install HelpMeOut
            <img src={Arrow} alt="Arrow" className="ml-3" />
          </button>
        </a>
      </div>

      {/* div for the images on the right */}
      <div className="relative w-[55%] h-screen mt-28">
        {/* Dotted Grey image */}
        <img
          src={Grey}
          alt="Dotted Grey"
          className="absolute top-5 right-[-4px] w-5/12 h-[313px]"
        />
        {/* Dotted Green image */}
        <img
          src={Green}
          alt="Dotted Green"
          className="absolute bottom-2 left-0 w-5/12 h-[330px]"
        />

        {/* Left-side images (scaled to half the height of the right-side image) */}
        <img
          src={Woman1}
          alt="Lady on Blue"
          loading="lazy"
          style={{ borderRadius: "25px" }}
          className="absolute top-[195px] left-[37px] transform -translate-y-1/2 w-[280px] h-[214px] rounded-2xl"
        />
        <img
          src={FatherAndSon}
          alt="Father and child on a laptop"
          loading="lazy"
          style={{ borderRadius: "32px" }}
          className="absolute bottom-[-20px] left-[37px] transform -translate-y-1/2 w-[280px] h-[214px] rounded-2xl"
        />
        {/* Right-side image */}
        <img
          src={Woman2}
          alt="Lady on Orange"
          loading="lazy"
          style={{ borderRadius: "32px" }}
          className="absolute top-1/2 right-[37px] transform -translate-y-1/2 w-[280px] h-[448px] rounded-2xl"
        />
      </div>
    </main>
  );
};

export default Splashscreen;
