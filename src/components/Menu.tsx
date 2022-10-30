const Menu = () => {
    return (
        <div
            className=" bg-[#F94F4F] py-[57px]  w-[438px] lg:py-auto lg:w-auto lg:pt-[56px] lg:pb-[58px] lg:w-auto hidden sm:flex flex-row justify-between   items-center pl-[33px] pr-[40px] lg:justify-start lg:gap-x-[48px] lg:pl-[69px] lg:pr-[165px]">
            <div
                className="flex flex-row justify-between w-[190px] items-center  font-com not-italic font-normal text-[15px] lg:text-base leading-8 text-white lg:w-[224px] ">
                <a className="hover:font-bold">About</a>
                <a className="hover:font-bold">Service</a>
                <a className="hover:font-bold">Projects</a>
            </div>
            <button
                className="w-[147px] h-[64px]  lg:w-[199px] lg:h-[64px] flex justify-center items-center bg-[#191921] text-white font-com not-italic font-extrabold text-base leading-[20px] hover:bg-[#434356] ">Schedule a Call</button>

        </div>
    );
};
export default Menu;
