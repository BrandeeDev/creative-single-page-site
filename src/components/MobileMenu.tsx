const MobileMenu=(props:{style:string})=>{
    return(<div className={`${props.style}  w-[252px] h-[292px] bg-[#191921] pt-8 pb-7 flex flex-col justify-start items-center gap-y-6`}>
        <p className="menu-item">About</p>
        <p className="menu-item">Service</p>
        <p className="menu-item">Projects</p>
        <button className="w-[199px] h-[64px] bg-[#F94F4F] font-com font-extrabold not-italic text-base leading-[20px] text-white">Schedule a Call</button>


    </div>);
};
export  default  MobileMenu;
