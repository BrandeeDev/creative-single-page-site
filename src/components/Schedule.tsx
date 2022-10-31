import strategic from "../assets/mobile/image-strategic.jpg";
import strategicTablet from "../assets/tablet/image-strategic.jpg";
import strategicDesktop from "../assets/desktop/image-strategic.jpg";
import wave from "../assets/desktop/bg-pattern-wave-red.svg"

const Schedule = () => {
    return (<div className="flex flex-col justify-start items-start w-full bg-[#191921] sm:flex-row sm:h-[538px] lg:h-[784px]">
        <div className="flex w-full h-[200px] sm:w-1/2 sm:h-[658px] lg:h-[984px] relative lg:w-full lg:grow ">
            <img src={strategic} alt="" className="w-full h-full z-0 sm:hidden"/>
            <img src={wave} alt=""
                 className="w-[63px] h-[29px] absolute -bottom-[15px] left-[24px] object-cover z-10 sm:bottom-auto sm:left-auto sm:top-[145px] sm:-right-[31px] lg:top-[234px] lg:w-[135px] lg:h-[61px] lg:-right-[68px]"/>
            <img src={strategicTablet} alt="" className="hidden sm:flex  h-full z-0 w-full object-cover lg:hidden"/>
            <img src={strategicDesktop} alt="" className="hidden lg:flex h-full z-0 w-full object-cover  "/>
        </div>
        <div
            className="w-full flex flex-col justify-start items-start py-[72px] px-6 sm:gap-y-8  sm:px-[69px] sm:py-[120px] sm:w-1/2 lg:py-[200px] lg:pl-[154px] lg:w-[705px] ">
            <h3 className="  font-com font-extrabold not-italic text-[32px] leading-[40px] lg:text-[56px] lg:leading-[64px] lg:w-[410px] ">
                <span className=" text-[#F94F4F]">Design</span>
                <span className="inline sm:block lg:inline text-white "> {" is strategic."}</span>
            </h3>
            <p className="mt-6 sm:mt-auto font-com not-italic font-normal text-[15px] leading-[25px] text-white text-left w-[327px] sm:w-[281px] lg:text-lg lg:leading-8 lg:w-[445px] lg:mt-[43px]">“A
                well-crafted design
                strategy consistently produces desired outcomes and brand awareness. We are firm believers that success
                lies in creative collaboration with our clients.”</p>
            <a className="font-com not-italic font-extrabold text-[15px] leading-[18px] text-[#F94F4F] border-b-[2px] border-[#F94F4F] pb-[9px] mt-[40px] sm:mt-auto lg:text-lg lg:leading-[22px] lg:mt-[48px] hover:text-[#FF9393] hover:border-[#FF9393]  bg-inherit">Schedule
                a Call</a>

        </div>


    </div>)
};
export default Schedule;
