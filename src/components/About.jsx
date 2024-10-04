import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div className='bg-white dark:bg-black h-[800px]'>
      <div className="h-full">
        <div className="flex justify-center items-center pt-10 pb-10 flex-col">
          <h1 className='text-6xl text-neutral-950 dark:text-neutral-100  hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer '>{t("about")}</h1>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-[1200px] h-full   bg-neutral-200 dark:bg-neutral-900">
            <div className="p-10 flex flex-col gap-3">
              <h1 className='text-2xl text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer '>{t("personal_info")}</h1>
              <div className="lg:w-[900px]">
                <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer '>
                  {t("p")}
                </h1>
              </div>
              <div className="flex flex-col md:flex-row mt-10 items-center gap-7 md:gap-32">
                <div className="flex flex-col mr-20 md:mr-0 gap-3 text-2xl ">
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("f_name")} </h1>
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("l_name")}</h1>
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("birth")}</h1>
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("Nationality")}</h1>
                </div>
                <div className="flex flex-col gap-3 text-2xl ">
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("Phone")}</h1>
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("Address")}</h1>
                  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("Languages")}</h1>
               <a href="https://web.telegram.org/a/">  <h1 className='text-neutral-950 dark:text-neutral-100  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer'>{t("Telegram")}</h1>  </a>
                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About