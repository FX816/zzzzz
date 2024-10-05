import React from 'react'
import { useTranslation } from 'react-i18next';

const Skill = () => {
    const { t } = useTranslation("skill");
    return (
        <div id='ddd' className='text-teal-700 h-[2300px] xl:h-[900px]  bg-white dark:bg-[#0e2624] '>
            <div className="flex items-center justify-center pt-7">
                <h1 className='text-6xl text-black dark:text-[#FFD700] hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("skil")}</h1>
            </div>
            <div className="">
                <div className="flex p-7 items-center justify-center flex-col gap-10 mt-10">    
                        <div className="text-wrap  xl:w-[900px]">
                            <h1 className='text-4xl text-black dark:text-[#FFD700] cursor-pointer'>1){t("html")}</h1>
                        </div>
                        <div className="text-wrap  xl:w-[900px]">
                             <h1 className='text-4xl text-black dark:text-[#FFD700] cursor-pointer'>2){t("css")}</h1>
                        </div>
                        <div className="text-wrap  xl:w-[900px]">
                               <h1 className='text-4xl text-black dark:text-[#FFD700] cursor-pointer'>3){t("td")}</h1>
                        </div>
                        <div className="text-wrap  xl:w-[900px]">
                            <h1 className='text-4xl text-black dark:text-[#FFD700] cursor-pointer'>4){t("js")}</h1>
                        </div> 
                       
                </div>
            </div>
        </div>
    )
}

export default Skill