import React from 'react'
import Instructor from '../../../assets/Images/Instructor.png'
import HighLightText from './HighLightText'
import CTAbutton from './CTAbutton'
import { FaArrowRight } from 'react-icons/fa'
const InstructorSection = () => {
  return (
    <div className='mt-20 w-full sm:w-screen '>
        <div className='flex flex-col lg:flex-row  gap-20 items-center'>

            <div className='w-[50%]'>
                <img
                src={Instructor}
                    alt='temp'
                    className="shadow-white shadow-[-20px_-20px_0_0]"
                />
            </div>

            <div className='w-[50%] flex flex-col gap-10'>
                <div className='text-4xl font-semibold'>
                    Become an <br/><HighLightText text={"Instructor"}/>
                </div>

                <p className='font-medium text-[16px] w-[80%] text-richblack-300 '>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                </p>
                <div className='w-fit'>
                    <CTAbutton active={true} linkto={'/signup'} >
                        <div className='flex gap-2 items-center'>
                            <p>Start Teaching Today</p>
                        <FaArrowRight/>
                        </div>
                    </CTAbutton>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default InstructorSection