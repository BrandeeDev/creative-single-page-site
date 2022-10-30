import hero from "../assets/mobile/image-hero.jpg";
import heroTablet from "../assets/tablet/image-hero.jpg";
import heroDesktop from "../assets/desktop/image-hero.jpg";

const Presentation = () => {
    return (
        <div
            className="w-full flex flex-col justify-start items-start   pt-[40px] sm:pt-0 pb-[96px] lg:pb-0 sm:pt-0 sm:flex-row sm:justify-start sm:items-center sm:relative sm:mt-0 ">
            <img src={hero} alt="" className="sm:hidden h-[200px] w-full sm:h-[606px] lg:h-[800px]  "/>
            <img src={heroTablet} alt=""
                 className="hidden sm:flex w-3/5 z-0  absolute right-0 bottom-0  h-full  lg:hidden"/>
            <img src={heroDesktop} alt="" className="hidden lg:flex  w-3/5 z-0  absolute right-0 h-full bottom-0 "/>

            <div
                className="w-full flex flex-col justify-start items-start px-6 pt-[56px] sm:px-0 sm:pl-[39px] sm:z-10  sm:pt-[151px] lg:pl-[165px] lg:pt-[184px] lg:pb-[160px] ">
                <h1 className="font-com font-extrabold not-italic text-[40px] leading-[40px] sm:text-[56px] sm:leading-[56px] text-black   sm:w-[398px] lg:text-[80px] lg:leading-[88px] lg:w-[600px]">Branding
                    &
                    website design agency</h1>
                <p className="font-com not-italic font-normal text-[15px] leading-[25px] text-black mt-[15px] sm:mt-[19px]  sm:w-[398px] lg:mt-[39px] lg:text-lg lg:leading-[18px] lg:w-[540px]">We
                    specialize in visual storytelling by creating cohesive brand and website design solutions for
                    small businesses, giving lasting impressions to audiences in a digital world.</p>
                <button
                    className="w-[177px] h-[72px] flex justify-center items-center bg-[#F94F4F] font-com not-italic font-extrabold text-lg leading-[22px] mt-[65px] sm:mt-8 text-white lg:mt-[48px] hover:bg-[#FF9393] ">Learn
                    More
                </button>


            </div>

        </div>
    )
};
export default Presentation;
