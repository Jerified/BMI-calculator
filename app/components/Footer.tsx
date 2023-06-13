/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className="px-6 md:px-20 pt-4 ">
      <div className="text-center ">
        <h2 className='font-bold text-3xl'>Limitations of BMIs</h2>
        <p className='py-6'>
          Although BMI is often a practical indicator of healthy weight, it is not
          suited for every person. Specific groups should carefully consider their
          BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="pt-6 grid md:grid-cols-2 gap-7 md:justify-items-cente">
        <div className="shadow-lg rounded-xl py-6 px-6">
          <div className='flex gap-4 items-center'>
            <Image src="/assets/images/icon-gender.svg" alt="gender" width={40} height={100} />
            <h5 className='text-xl font-semibold '>Gender</h5>
          </div>
          <p className='pt-3'>
            The development and body fat composition of girls and boys vary with age. Consequently,
            a child's age and gender are considered when evaluating their BMI.
          </p>
        </div>
        <div className="shadow-lg rounded-xl py-6 px-6">
          <div className='flex gap-4 items-center'>
            <Image src="/assets/images/icon-age.svg" alt="age" width={40} height={100} />
            <h5 className='text-xl font-semibold '>Age</h5>
          </div>
          <p className='pt-3'>
            In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
            body fat content.
          </p>
        </div>
        <div className="shadow-lg rounded-xl py-6 px-6">
          <div className='flex gap-4 items-center'>
            <Image src="/assets/images/icon-muscle.svg" alt="age" width={40} height={100} />
            <h5 className='text-xl font-semibold '>Muscle</h5>
          </div>
          <p className='pt-3'>
            BMI may misclassify muscular
            individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className="shadow-lg rounded-xl py-6 px-6">
          <div className='flex gap-4 items-center'>
            <Image src="/assets/images/icon-pregnancy.svg" alt="age" width={40} height={100} />
            <h5 className='text-xl font-semibold '>Pregnancy</h5>
          </div>
          <p className='pt-3'>
            Expectant mothers experience weight
            gain due to their growing baby.
            Maintaining a healthy pre-pregnancy
            BMI is advisable to minimise health
            risks for both mother and child.
          </p>
        </div>
        <div className="md:justify-self-center">
        <div className="shadow-lg rounded-xl py-6 px-6 ">
          <div className='flex gap-4 items-center'>
            <Image src="/assets/images/icon-race.svg" alt="age" width={40} height={100} />
            <h5 className='text-xl font-semibold'>Race</h5>
          </div>
          <p className='pt-3'>
            Certain health concerns may affect
            individuals of some Black and Asian
            origins at lower BMIs than others. To
            learn more, it is advised to discuss this
            with your GP or practice nurse.
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer