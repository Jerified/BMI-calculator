/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Body = () => {
  return (
  <>
    <main className='pt-[32rem] sm:pt-[28rem] md:pt-[10rem] lg:pt-[2rem] flex flex-col md:flex-row md:gap-0 gap-14 xl:gap-28 md:items-center xl:px-20'>
        <div className="basis-[50%] px-0 md:relative right-[2rem] xl:static w-full xl:w-[70%]">
            <Image className='mx-auto md:mx-0 w-full ' src='/assets/images/image-man-eating.webp' width={500} height={200} alt='img'  />
        </div>
        <div className="basis-[50%] px-6 md:pl-0 xl:-24">
          <h1 className="font-bold text-3xl">What your BMI result means</h1>
          <p className="font-medium pt-6 max-w-[3">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type
          2 diabetes. Aim for a nutritious diet with reduced fat and
          sugar content, incorporating ample fruits and vegetables.
          Additionally, strive for regular physical activity, ideally about
          30 minutes daily for five days a week.
          </p>
        </div>
    </main>
  </>
  )
}

export default Body