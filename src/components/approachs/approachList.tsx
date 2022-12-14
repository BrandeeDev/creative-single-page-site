import ApproachItem from "./ApproachItem";

const approachs = [
    {
        id: "01",
        title: "Brand Strategy",
        content: "Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key."
    },
    {
        id: "02",
        title: "Brand Design",
        content: "Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively."
    },
    {
        id: "03",
        title: "Web Design",
        content: "A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues."
    },

];
const ApproachList = () => {
    return (<div
        className="py-[96px] px-6 bg-[#F94F4F] sm:bg-white sm:flex sm:flex-row lg:flex-row-reverse sm:justify-between sm:items-center sm:px-0 sm:py-0  lg:relative  ">
        <div
            className="font-com not-italic font-extrabold text-[32px] leading-[40px] text-white sm:h-full sm:text-black sm:px-[39px] sm:w-2/5 lg:grow lg:text-[56px] lg:leading-[64px]  lg:z-20 lg:object-cover lg:absolute lg:top-[400px] lg:left-[165px] lg:w-[600px]  ">
            Our approach for creating a winning brand
        </div>

        <ul className="flex flex-col w-full justify-center items-start  gap-y-[40px] mt-[49px] sm:bg-[#F94F4F]  sm:mt-0  sm:py-[120px] lg:py-[200px] sm:px-[40px] list-none sm:z-10 sm:w-3/5  lg:gap-y-[56px] lg:items-end  lg:pr-[106px] lg:w-[895px]   ">

            {approachs.map(a => <li key={a.id}><ApproachItem id={a.id} title={a.title} content={a.content}/></li>)}

        </ul>


    </div>)

};
export default ApproachList;
