import React from 'react'
import FooterText from '../core/Home/FooterText'
import FooterHeading from '../core/Home/FooterHeading'
import footerImage from '../../assets/Logo/Logo-Full-Light.png'
import { FaFacebook,FaGoogle,FaYoutube } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className='bg-richblack-800'>
            <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
            
            <div className='border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700'>
            {/* Section 1 */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
                    <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
                        <img src={footerImage} alt='error'/>
                        <FooterHeading text={`Company`}/>
                        <FooterText text={"About"}/>
                        <FooterText text={"Careers"}/>
                        <FooterText text={"Affiliates"}/>
                        <div className='flex gap-3 text-lg'>
                            <FaFacebook className='hover:text-richblack-50 transition-all duration-200 cursor-pointer'/>
                            <FaGoogle className='hover:text-richblack-50 transition-all duration-200 cursor-pointer'/>
                            <FaXTwitter className='hover:text-richblack-50 transition-all duration-200 cursor-pointer'/>
                            <FaYoutube className='hover:text-richblack-50 transition-all duration-200 cursor-pointer'/>
                        </div>
                    </div>


                    <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0 flex flex-col gap-2 mt-2">
                        <FooterHeading text={"Resources"}/>
                        <FooterText text={"Articles"}/>
                        <FooterText text={"Blogs"}/>
                        <FooterText text={"Chart Sheet"}/>
                        <FooterText text={"Code Challenge"}/>
                        <FooterText text={"Docs"}/>
                        <FooterText text={"Projects"}/>
                        <FooterText text={"Videos"}/>
                        <FooterText text={"Workspaces"}/>
                    </div>
                    <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0 flex flex-col gap-2 mt-2">
                        <div className='flex flex-col gap-2 mt-2'>
                            <FooterHeading text={"Plans"}/>
                            <FooterText text={"Paid Memberships"}/>
                            <FooterText text={"For Students"}/>
                            <FooterText text={"Business Solutions"}/>
                        </div>
                    <div className='flex flex-col gap-2 mt-2'>
                        <FooterHeading text={"Community"}/>
                        <FooterText text={"Forums"}/>
                        <FooterText text={"Chapters"}/>
                        <FooterText text={"Events"}/>
                    </div>
                    
                </div>
                </div>

                
                {/* Section 2 */}
                <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3 ">
                    <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0 flex flex-col gap-2 mt-2'>
                        <FooterHeading text={"Subjects"}/>
                        <FooterText text={"AI"}/>
                        <FooterText text={"Cloud Computing"}/>
                        <FooterText text={"Code Foundations"}/>
                        <FooterText text={"Computer Science"}/>
                        <FooterText text={"CyberSecurity"}/>
                        <FooterText text={"Data Analytics"}/>
                        <FooterText text={"Data Science"}/>
                        <FooterText text={"Data Visualisation"}/>
                        <FooterText text={"Developer Tools"}/>
                        <FooterText text={"DevOps"}/>
                        <FooterText text={"Game Development"}/>
                        <FooterText text={"IT"}/>
                        <FooterText text={"Machine Learning"}/>
                        <FooterText text={"Mobile Development"}/>
                        <FooterText text={"Web Design"}/>
                        <FooterText text={"Web Development"}/>
                    </div>
                    <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0 flex flex-col gap-2 mt-2'>
                    <FooterHeading text={"Languages"}/>
                        <FooterText text={"Bash"}/>
                        <FooterText text={"C++"}/>
                        <FooterText text={"C#"}/>
                        <FooterText text={"GO"}/>
                        <FooterText text={"HTML & CSS"}/>
                        <FooterText text={"Java"}/>
                        <FooterText text={"JavaScript"}/>
                        <FooterText text={"Kotlin"}/>
                        <FooterText text={"PHP"}/>
                        <FooterText text={"Python"}/>
                        <FooterText text={"R"}/>
                        <FooterText text={"Ruby"}/>
                        <FooterText text={"SQL"}/>
                        <FooterText text={"Swift"}/>
                    </div>


                    <div className='w-[48%] lg:w-[30%] mb-7 lg:pl-0 flex flex-col gap-2 mt-2'>
                        <FooterHeading text={"Career Building"}/>
                        <FooterText text={"Career paths"}/>
                        <FooterText text={"Career services"}/>
                        <FooterText text={"Interview prep"}/>
                        <FooterText text={"Professional certification"}/>
                        <FooterText text={"Mock Interviews"}/>
                        <FooterText text={"Full Catalog"}/>
                        <FooterText text={"Beta Content"}/>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm"><div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full"><div className="flex flex-row"><div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3 "><a href="/privacy-policy">Privacy Policy</a></div><div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3 "><a href="/cookie-policy">Cookie Policy</a></div><div className="  px-3 "><a href="/terms">Terms</a></div></div><div className="text-center">Copyright © 2024 Studynotion - Raj Mandhare</div></div></div>
        </div>
  )
}

export default Footer