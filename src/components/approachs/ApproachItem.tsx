const ApproachItem = (props: { id: string, title: string, content: string }) => {
    return (<div className=" flex flex-col justify-start items-start relative pt-4  ">
        <p className=" absolute object-left-top  z-0 font-com not-italic font-extrabold text-[80px] leading-[88px] mix-blend-normal text-[white]/[.25]">{props.id}</p>
        <p className="pl-4 pt-[44px] z=10 font-com not-italic font-extrabold text-[15px] leading-[25px] text-white top-[44px] lg:text-[20px] lg:leading-8 lg:pl-[59px] ">{props.title}</p>
        <p className="pl-4 w-[311px] font-com not-italic font-normal text-[15px] leading-[25px] text-white mt-[15px] sm:w-[355px] lg:text-lg lg:leading-8 lg:w-[445px] lg:pl-[59px]">{props.content}</p>

        <p></p>

    </div>);
};
export default ApproachItem;
