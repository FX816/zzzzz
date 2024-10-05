import React from 'react'
import { useTranslation } from "react-i18next";
// import  work from "./public/work.jpg" 
import work from "/work2.png"
import About from './About';
import Contact from './Contact';
import Skill from './Skill';
// import css from "/css.png"
// import html from "/html.png"
// import js from "/js.png"
// import td from "/tailwind.png"
const Home = () => {
  const { t } = useTranslation("home");

  return (
    <div id='aaa' className='bg-white dark:bg-[#0e2624] h-[2800px]'>
      <div className="flex items-center justify-center pt-7">
        <h1 className='text-6xl text-black dark:text-[#FFD700] hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("home")}</h1>
      </div>
      <div className="flex flex-col  md:flex-row">
        <div className="flex ml-10 xl:ml-32 flex-col mt-10 md:mt-20 gap-7">
          <h1 className='cursor-pointer text-2xl md:text-5xl text-black dark:text-[#FFD700] '>{t("name")}</h1>
          <h1 className='cursor-pointer text-2xl md:text-5xl text-black dark:text-[#FFD700]'>{t("stack")}</h1>
        <div className="text-wrap xl:w-[900px]">
            <h1 className='cursor-pointer text-2xl md:text-5xl text-black dark:text-[#FFD700]'>{t("info")}</h1>
          </div>
        </div>
      </div>
      <div className="mt-[200px]">
      <About/>
      </div>
      <div className="mt-[300px] xl:mt-0">
      <Contact/>
      </div>
      <div className="mt-[100px]">
      <Skill/>
      </div>
    </div>
  )
}

export default Home

//   {/* <div className="flex flex-col items-center justify-center mt-32">
{/* <h1 className='text-6xl text-black dark:text-white hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("skil")}</h1> */ }
{/* <div className="flex flex-col items-center justify-center mt-10 gap-20 md:flex-row">
 <div className="flex flex-col gap-10"> */}
{/* <div className="w-[150px]"><img src={html} alt="logo"/></div> */ }
{/* <h1 className='text-6xl text-black dark:text-white hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>HTML</h1>
  </div>
  <div className="flex flex-col gap-10"> */}
{/* <div className="w-[300px]"><img src={css} alt="logo" /></div> */ }
{/* <h1 className='text-6xl ml-20 text-black dark:text-white hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>CSS</h1>
  </div>
  <div className="flex flex-col gap-10"> */}
{/* <div className="w-[300px]"><img src={td} alt="logo" /></div> */ }
{/* <h1 className='text-6xl  text-black dark:text-white hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>TAILWIND</h1> 
  </div>
  <div className="flex flex-col gap-10"> */}
{/* <div className="w-[140px]"><img src={js} alt="logo" /></div> */ }
{/* <h1 className='text-6xl text-black dark:text-white hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>JAVA-SCRIPT</h1> */ }
{/* </div> */ }
{/* </div> */ }
{/* // </div> */ }