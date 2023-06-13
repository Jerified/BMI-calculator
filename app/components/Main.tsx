import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <section className=" bg-gradient xl:rounded-3xl xl:mx-4">
    <div className='py-[5rem] px-6 xl:flex xl:items-start gap-5  my-20'>
        <div className="md:flex xl:flex-col items-center justify-center md:gap-12 xl:items-start">
        <Image  className='mx-0' src="/assets/images/icon-eating.svg" alt="iconEating" width={70} height={100} />
          <div className=''>
            <h4 className='font-semibold text-2xl py-5 md:pt-0'>Healthy eating</h4>
            <p>
              Healthy eating promotes weight control,
              disease prevention, better digestion, immunity,
              mental clarity, and mood.
            </p>
            </div>
        </div>
        <div className="md:flex xl:flex-col items-center justify-center md:gap-12 md:pt-8 xl:pt-0 xl:items-start">
        <Image className='pt-8 xl:pt-0' src="/assets/images/icon-exercise.svg" alt="iconExercice"  width={70} height={100} />
          <div>
            <h4 className='font-semibold text-2xl py-5 md:pt-0'>Regular exercise</h4>
            <p>
              Exercise improves fitness, aids weight control,
              elevates mood, and reduces disease risk,
              fostering wellness and longevity.
            </p>
            </div>
        </div>
        <div className="md:flex xl:flex-col items-center justify-center md:gap-12 md:pt-8 xl:pt-0 xl:items-start">
        <Image  className='pt-8 xl:pt-0' src="/assets/images/icon-sleep.svg" alt="iconeSleep" width={70} height={100} />
          <div>
            <h4 className='font-semibold text-2xl py-5 md:pt-0'>Adequate sleep</h4>
            <p>
              Sleep enhances mental clarity, emotional
              stability, and physical wellness, promoting
              overall restoration and rejuvenation.
            </p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Main