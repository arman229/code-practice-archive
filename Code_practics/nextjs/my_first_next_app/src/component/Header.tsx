import React, {FC} from "react";
 import sunimg from '@/assets/image/sun.svg'
import moonimg from '@/assets/image/moon.svg'
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
interface HearderType {
    toggleDarkMode: () => void
    isDarkMode: boolean
}

const Header: FC<HearderType> = ({toggleDarkMode, isDarkMode}) => {
    return (
        <>

            <div
                className={'flex justify-between  py-4 text-2xl p-3 dark:text-[#9eb8cf] dark:bg-[#091319] text-white bg-blue-500'}>

                <div>

                    <span className="text-4xl font-semi-bold ">Todo</span>

                </div>

                <button onClick={toggleDarkMode} className={'p-2'}>       {!isDarkMode ? <Image src={sunimg} alt="Sun" /> : <Image src={moonimg} alt="Moon" />} </button>
            </div>
        </>
    )
}
export default Header
