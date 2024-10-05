import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import rasm1 from "/rasm1.svg"
// import rasm2 from "/rasm2.svg"
// import rasm3 from "/rasm3.svg"
// import rasm4 from "/rasm4.svg"
// import bg from "/bg.png"
const Form = () => {
    const BOT_TOKEN = "7910660710:AAGmhQuaYKFfnI0MRJZu4pT_v8qL5lsHhuk"
    const MY_ID = "6536476991"
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (e) => {
        console.log(1);
        console.log(e.ism);
        console.log(2);

        
        // window.location.reload();
        axios
            .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                chat_id: MY_ID,
                text: `New person:
 Name : ${e.ism}
 Number : ${e.number}     
 Email : ${e.email}
 SMS : ${e.sms}
                `,
            })
            .then((response) => {
                console.log("Message sent:", response.e);
                 window.location.reload();
            })
            .catch((error) => {
                console.error("Error sending message:", error);
            });
         
       
    }
    // const a = (e) => {
    
    // }
    // window.location.reload();
    return (
        <div className=''>

            <div className="flex justify-center flex-col bg-white dark:bg-[#0e2624] h-full  p-20 items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 ">
                    <div className="flex flex-col xl:flex-row gap-5 ">
                        <div className="flex flex-col gap-2">
                            <h1 className='text-black dark:text-[#FFD700]'>Имя:</h1>
                            <input {...register("ism")} type="text" className='border border-solid w-[200px] sm:w-[187px] text-black dark:text-white   rounded-xl border-[#FFD700]  bg-transparent mx-auto flex items-center justify-between pl-2' placeholder='Имя' />
                        </div>
                        <div className="flex flex-col gap-2">
                            {/* <h1></h1> */}
                            <h1 className='text-black dark:text-[#FFD700]'>Телефон:</h1>
                            <input type='text' {...register("number")} className='border border-solid w-[200px] sm:w-[187px] text-black dark:text-white   rounded-xl border-[#FFD700]  pl-2 bg-transparent mx-auto flex items-center justify-between' placeholder='+998' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className='text-black dark:text-[#FFD700]'>Email:</h1>
                        <input type="text" {...register("email")} className='border  w-[200px] sm:w-[400px] text-black  btext-black dark:orderwhite d rounded-xl border-[#FFD700]  pl-2 bg-transparent mx-auto flex items-center justify-between' placeholder='email@gmail.com' />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h1 className='text-black dark:text-[#FFD700]'>SMS:</h1>
                        <input type="text" {...register("sms")} className='border  w-[200px] sm:w-[400px] text-black  h-16 btext-black dark:orderwhite d rounded-xl border-[#FFD700]  pl-2 bg-transparent mx-auto flex items-center justify-between' />
                    </div>

                    <button type='submit'  className='bg-[#00B3B3]  w-[200px] sm:w-[400px] h-10 text-black '>
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form