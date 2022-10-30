import img from "../assets/mobile/image-slide-1.jpg";
import imgTablet from "../assets/tablet/image-slide-1.jpg";
import whiteWave from "../assets/desktop/bg-pattern-wavy-white.svg";
import  next from "../assets/desktop/icon-arrow-next.svg";
import  prev from "../assets/desktop/icon-arrow-previous.svg";
import {useState} from "react";

const slides=[
    {
        title:"Brand naming & guidelines",
        description:"Lean Product Roadmap",
        year:"2019 Project",
        slide:"image-slide-1.jpg",

    },
    {
        title:"Brand identity & merchandise",
        description:"New Majestic Hotel",
        year:"2018 Project",
        slide:"image-slide-2.jpg",

    },
    {
        title:"Brand identity & web design",
        description:"Crypto Dashboard",
        year:"2016 Project",
        slide:"image-slide-3.jpg",

    },
];
const BrandNaming = () => {
    const[currentSlide,setCurrentSlide]=useState(0);
    const increment=(i:number)=>{
        return (++i)%3;
    }
    const decrement=(i:number)=>{
        return(i+2)%3;
    }
    const nextHandler=()=>{
        setCurrentSlide(prevState => increment(prevState));
    }
    const prevHandler=()=>{
        setCurrentSlide(prevState => decrement(prevState));
    }
    return (<div className="sm:flex sm:flex-row sm:justify-start sm:items-start sm:relative sm:pb-[120px] lg:pb-[200px]">
        <div className="w-full h-[404px] sm:absolute sm:right-0 sm:top-0 sm:w-3/5 sm:h-[472px]  sm:z-0 sm:object-cover relative  lg:w-8/12  lg:h-[728px]">
            <img src={require(`../assets/mobile/${slides[currentSlide].slide}`)} alt="" className="w-full h-full sm:hidden z-0"/>
            <img src={require(`../assets/tablet/${slides[currentSlide].slide}`)} alt="" className="hidden sm:flex w-full  h-full z-0 lg:hidden  "/>
            <img src={require(`../assets/desktop/${slides[currentSlide].slide}`)} alt="" className="hidden lg:flex w-full  h-full z-0   "/>


            <div
                className="absolute z-10 bottom-0 pr-8 w-full py-[35px] sm:pr-[40px] sm:py-[45px]  flex flex-col justify-center items-end font-com not-italic text-[15px] leading-[20px] text-right text-white bg-naming_gradient opacity-[0.75] mix-blend-normal lg:text-[20px] lg:leading-8 lg:pr-[154px] lg:py-[68px]">
                <p className="font-extrabold">{slides[currentSlide].description}</p>
                <p className="font-normal">{slides[currentSlide].year}</p>
            </div>

        </div>
        <div className="bg-[#191921] py-[64px] sm:py-[100px] sm:px-0 px-6 flex flex-col sm:px-[39px] gap-y-6 sm:gap-y-8 sm:relative sm:z-10 sm:w-1/2 lg:py-[152px] lg:pl-[165px] lg:w-auto lg:gap-y-[51px] lg:pr-[125px]  ">
            <h3 className="font-com font-extrabold not-italic text-[32px] leading-[40px] text-white sm:w-[281px] lg:text-[56px] lg:leading-[64px] lg:w-[445px]">{slides[currentSlide].title}</h3>
            <div className="flex flex-row justify-start items-center gap-x-4">
                <svg onClick={prevHandler} className="w-[40px] h-[40px] stroke-[#F94F4F] hover:stroke-[#FF9393]"  xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(-1 0 0 1 40 0)" className=" fill-none " fillRule="evenodd" >
                        <circle cx="20" cy="20" r="19.5"/>
                        <path className="stroke-[2px]"  d="M17.5 15l5 5-5 5"/>
                    </g>
                </svg>
                <svg onClick={nextHandler} className="w-[40px] h-[40px] stroke-[#F94F4F] hover:stroke-[#FF9393]"  xmlns="http://www.w3.org/2000/svg">
                    <g className=" fill-none " fillRule="evenodd" >
                        <circle cx="20" cy="20" r="19.5"/>
                        <path className="stroke-[2px]"  d="M17.5 15l5 5-5 5"/>
                    </g>
                </svg>

            </div>
            <img src={whiteWave} alt="" className="hidden sm:flex absolute top-[126px] -right-[32px] z-20 object-cover w-[63px] h-[29px] lg:top-[186px]"/>
        </div>
    </div>);
};
export default BrandNaming;
