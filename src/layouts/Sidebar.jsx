
import { RiSettingsLine } from "react-icons/ri";

import MyImage from "/my-image-cut.jpg"

import { TbSquareKey } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";
import { AiFillUnlock } from "react-icons/ai";
import { FaUserGroup, FaMoneyBill1, FaPercent, FaMessage, FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";


const Sidebar = () => {

    // Sidebar Navigation Button Data
    const allNavigations = [
        {item: "Dashboard", icon: TbSquareKey},
        {item: "Products", icon: AiFillUnlock},
        {item: "Customers", icon: FaUserGroup},
        {item: "Income", icon: FaMoneyBill1},
        {item: "Promote", icon: FaPercent},
        {item: "Help", icon: FaMessage},
    ]

    // Current navigation button state
    const [currentNav, setCurrentNav] = useState(allNavigations[0].item);

    // show mobile sidebar state
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <aside>
        {/* Desktop sidebar */}
        <div className="bg-sky-950 lg:w-[300px] h-screen md:flex flex-col text-white hidden ">
            <div className="flex flex-row p-6 font-bold text-lg align-baseline">
                <RiSettingsLine className="w-8 h-8 mx-2" />
                <span className="hidden lg:block">Dashboard</span>
            </div>
            <div className="lg:m-10 m-4 text-gray-400">
                { allNavigations.map((navigation) => (
                    <button key={navigation.item} 
                        className={(currentNav === navigation.item ? 
                            'bg-sky-800 rounded-md text-gray-100 ' : '' ) + 
                            'flex flex-row w-full content-center justify-center lg:justify-start py-3 my-2 px-2 '}
                        onClick={() => {setCurrentNav(navigation.item)}}
                    >
                    <navigation.icon className="w-6 h-6 lg:mr-3" />
                        <span className="hidden lg:block">
                            {navigation.item}
                        </span>
                    {currentNav !== navigation.item && <FaChevronRight className="hidden lg:block w-3 h-3 lg:ml-auto self-center" />}
                </button>
                )) }
            </div>
            <div className="mt-auto">
                <div className="mb-12 mx-4 flex flex-row p-3 bg-sky-800 rounded-md justify-center">
                    <img src={MyImage} className="w-10 h-10 rounded-full mx-2" />
                    <div className="hidden lg:block">
                        <p className="text-sm">Neeraj Nanvani</p>
                        <p className="text-xs text-gray-400">Front End Developer</p>
                    </div>
                    <FaAngleDown className="hidden lg:block w-4 h-4 ml-8 self-center" />
                </div>
            </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="block md:hidden w-full bg-sky-900 top-0  fixed z-10">
            <div className="flex flex-row text-white font-bold text-lg align-baseline p-4">
                <RiSettingsLine className="w-8 h-8 mx-2" />
                <span>Dashboard</span>
                <button onClick={() => setShowMobileSidebar(!showMobileSidebar)} className="ml-auto w-8 h-8 ">
                    <GiHamburgerMenu />
                </button>
            </div>

            {showMobileSidebar && <div className="absolute w-full bg-sky-900 ">
                <div className="lg:m-10 m-4 text-gray-400">
                    { allNavigations.map((navigation) => (
                        <button key={navigation.item} 
                            className={(currentNav === navigation.item ? 
                                'bg-sky-800 rounded-md text-gray-100 ' : '' ) + 
                                'flex flex-row w-full content-center  py-3 my-2 px-2 '}
                            onClick={() => {setCurrentNav(navigation.item, setShowMobileSidebar(false))}}
                        >
                        <navigation.icon className="w-6 h-6     mr-3" />
                            <span className="">
                                {navigation.item}
                            </span>
                        {currentNav !== navigation.item && <FaChevronRight className="w-3 h-3 ml-auto self-center" />}
                    </button>
                    )) }
                </div>
            </div>}
        </div>
    </aside>
  )
}

export default Sidebar