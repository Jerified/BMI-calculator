/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <main className='relati'>
        <div className="bg-gradient h-screen xl:w-[75%] rounded-b-[4rem] p-6 lg:pl-20 relative ">
            <div className="flex flex-col items-center pt-8 xl:items-start">
        <div className="">
            <Image className='' src='/assets/images/logo.svg' width={40} height={100} alt='logo'/>
        </div>
        <div className=" xl:max-w-s pt-10 xl:pt-16">
        <h1 className='font-bold sm:max-w-[24.5rem] mx-auto xl:text-left xl:mx-0  text-5xl text-center'>Body Mass Index Calculator</h1>
        <p className='py-6 text-center text-xl xl:text-left xl:max-w-[30rem] lg:mx-0'>
            Better understand your weight in relation to your height using
            our body mass index (BM) calculator. While BMI is not the
            sole determinant of a healthy weight, it offers a valuable
            starting point to evaluate your overall health and well-being.
        </p>
        </div>
        </div>
        <div className="xl:absolute xl:top-[5rem] xl:-right-[13rem] xl:w-[40vw] ">
        <div className=" bg-white px-6 py-6 shadow-xl rounded-xl xl:mr-0">
            <h3 className="text-2xl font-bold ">Enter your details below</h3>
            <div className="flex justify-between lg:justify-start lg:gap-10 py-5 ">
            <div className="flex gap-5">
            <input type="radio" name="radio-7" id="" className="radio radio-info " />
            <p className="font-semibold text-lg">Metric</p>
            </div>
            <div className="flex gap-5 justify-start">
            <input type="radio" name="radio-7" id="" className="radio radio-info " />
            <p className="font-semibold text-lg">Imperial</p>
            </div>
            
            </div>
            <form action="" className="flex flex-col gap-6 md:flex-row">
                <div className="">
            <label className='font-semibold text-gray-400'>Height</label>
            <div className="relative">
            <input type="number" className="border border-gray-300 pl-6 rounded-lg h-[5rem] outline-none text-3xl font-semibold placeholder:text- w-full caret-blue-600" placeholder='0' />
            <p className="text-blue-600 font-semibold text-2xl absolute top-1/2 -translate-y-1/2 right-0 pr-6">cm</p>
            </div>
            </div>
            <div className="">
            <label className='font-semibold text-gray-400'>Weight</label>
            <div className="relative">
            <input type="number" className="border border-gray-300 pl-6 rounded-lg h-[5rem] outline-none text-3xl font-semibold placeholder:text- w-full caret-blue-600" placeholder='0' />
            <p className="text-blue-600 font-semibold text-2xl absolute top-1/2 -translate-y-1/2 right-0 pr-6">kg</p>
            </div>
            </div>
            </form>
            <div className="bg-blue-600 mt-6 xl:mb-4 p-6 text-white rounded-2xl md:rounded-r-full md:rounded-l-xl">
                <h1 className="text-xl font-semibold pb-4 text-center">Welcome!</h1>
                <p className="">Enter your height and weight and you'll see your BMI result here</p>
            </div>
        </div>
        </div>
        </div>
        
    </main>
  )
}

export default Header