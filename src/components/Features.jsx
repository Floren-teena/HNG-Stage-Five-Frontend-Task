import FeatureIcon from "../assets/help_assets/Feature_icon.svg";
import FeatureIcon2 from "../assets/help_assets/Feature_icon2.svg";
import FeatureIcon3 from "../assets/help_assets/Feature_icon3.svg";

const Features = () => {
  return (
    <main className=" h-auto max-h-[766px] w-4/5 lg:max-w-[1440px] mx-auto m-0 bg-white flex flex-col py-20 px-0 gap-16 justify-center items-center">
      {/* div for features title */}
      <div className=" w-[800px] h-auto max-h-[88px] gap-2 flex flex-col items-center">
        <h1 className=" w-[800px] h-[50px] font-Sora font-bold text-4xl text-center text[#141414]">
          Features
        </h1>
        <p className="w-[800px] h-[30px] font-WorkSans font-normal text-xl text-center text[#616163]">
          Key Highlights of Our Extension
        </p>
      </div>
      {/* div for main content */}
      <div className=" flex flex-col md:flex-row w-4/5 lg:max-w-[1240px] h-auto max-h-[454px] gap-14 items-center">
        {/* also try justify space between */}
        {/* div for 3 column text */}
        <div className=" w-2/5 lg:w-[548px] h-auto max-h-[402px] flex flex-col items-center gap-12">
          <div className="md:w-548 max-w-full h-auto max-h-[102px] flex flex-row gap-4">
            <img src={FeatureIcon} alt="feature icon" />
            <div className=" flex flex-col w-[484px] max-w-full h-auto max-h-[102px] gap-3">
              <h1>Simple Screen Recording0 0</h1>
              <p></p>
            </div>
          </div>
          <div>
            <img src={FeatureIcon2} alt="" />
            <div>
              <h1>word</h1>
              <p></p>
            </div>
          </div>
          <div>
            <img src={FeatureIcon3} alt="" />
            <div>
              <h1>word</h1>
              <p></p>
            </div>
          </div>
        </div>
        {/* div for image on the right */}
        <div></div>
      </div>
    </main>
  );
};

export default Features;
