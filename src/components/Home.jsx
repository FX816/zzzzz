import React from 'react'
import { useTranslation } from "react-i18next";
// import  work from "./public/work.jpg" 
import work from "/work2.png"
const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div className='bg-white dark:bg-black h-[800px]'>
    <div className="flex items-center justify-center pt-7">
    <h1 className='text-6xl text-black dark:text-white hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("home")}</h1>
    </div>
    <div className="flex flex-col justify-center md:flex-row">
     <div className="hidden md:flex ml-32">
       <img src={work} alt="logo" />
      </div>
      <div className="flex flex-col items-center mt-10 md:mt-20 gap-7">
      <h1 className='cursor-pointer text-2xl md:text-5xl text-black dark:text-white '>{t("name")}</h1>
      <h1 className='cursor-pointer text-2xl md:text-5xl text-teal-700'>{t("stack")}</h1>
      <h1 className='cursor-pointer text-2xl md:text-5xl text-teal-700 '>15 Y.O</h1>

      </div>
       <div className="">
        
       </div>
    </div>

    </div>
  )
}

export default Home