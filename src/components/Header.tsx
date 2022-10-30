import logo from "../assets/desktop/logo.svg";
import menu from "../assets/mobile/icon-hamburger.svg";
import cross from "../assets/mobile/icon-cross.svg";
import {useState} from "react";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleHandler = () => {
        setIsMenuVisible(prevState => !prevState);
    }
    return (<div className="w-full flex flex-row justify-between items-center px-6 pt-[40px] sm:pt-0 sm:pr-0 sm:pl-[39px] lg:pl-[165px]   relative">
        <img src={logo} alt="" className="w-[161px] h-[30px]"/>
        <button className="sm:hidden" onClick={toggleHandler}>
            <img src={menu} alt="" className={`w-[24px] h-[18px] ${isMenuVisible ? "hidden" : ""}`}/>
            <img src={cross} alt="" className={`w-[20px] h-[20px] ${isMenuVisible ? "" : "hidden"}`}/>
        </button>
        {isMenuVisible && <MobileMenu style="absolute object-cover  -bottom-[332px] right-[26px]"/>}
        <Menu/>


    </div>)
};
export default Header;