import React from 'react'

const FooterText = ({text}) => {
  return (
    <div className=" cursor-pointer hover:text-richblack-50 transition-all duration-200 font-inter text-[16px] leading-[24px]">
    {text}
    </div>
  )
}

export default FooterText