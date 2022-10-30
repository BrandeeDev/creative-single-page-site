import wave from "../assets/desktop/bg-pattern-wave-red.svg";
const Footer = () => {
    return (<div className="py-[100px] px-6 bg-white flex flex-col gap-y-[47px] justify-start items-start sm:flex-row sm:justify-between  sm:px-[39px] sm:items-center sm:pt-[70px] sm:pb-[101px] lg:pt-[120px] lg:pb-[115px] lg:px-[165px] lg:relative">
        <img src={wave} alt="" className="w-[134px] h-[60px] hidden lg:flex absolute self-center  -left-[67px]" />

        <h2 className="font-com not-italic font-extrabold text-[32px] leading-[40px] text-black sm:w-[398px] lg:text-[56px] lg:leading-[64px] lg:w-[635px]">Let's build something
            great together.</h2>
        <button className="w-[199px] h-[64px] flex justify-center items-center bg-[#F94F4F] font-com not-italic font-extrabold text-bae leading-[20px] text-white hover:bg-[#FF9393]">Schedule a Call</button>
    </div>);
};
export default Footer;
