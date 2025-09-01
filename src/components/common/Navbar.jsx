import React, { useEffect, useState } from 'react'
import { Link,matchPath } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart , AiOutlineMenu} from 'react-icons/ai'
import ProfileDropdown from '../core/Auth/ProfileDropdown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import axios from 'axios';
import {BsChevronDown} from 'react-icons/bs'



const subLinks = [
    {
        title:'python',
        link:'/catalog/python'
    },
    {
        title:'web dev',
        link:'/catalog/web-development'
    }
]
const Navbar = () => {
    // console.log(process.env.REACT_APP_BASE_URL)  
   const location = useLocation();
   const { token } = useSelector( (state) => state.auth);
   const { user } = useSelector( (state) => state.profile);
   const {totalItems} = useSelector( (state)=> state.cart);
   
   const [ssubLinks, setSublinks] = useState([])
   const [loading, setLoading] = useState(false)
   useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSublinks(res.data.allCategories);
        console.log(res.data.allCategories);
        console.log('printin navbar',ssubLinks);
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

   const matchRoute = (route) => {
     return matchPath({path:route},location.pathname);
   }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700  transition-all duration-200'>


        <div className='flex w-11/12 max-w-maxContent items-center justify-between'>


            <Link to={'/'}>
            <img src={logo} alt='asa' width={160} height={42}/>
            </Link>

            {/* Nav links */}

            <nav>
                <ul className=' gap-x-6 text-richblack-25 hidden md:flex'>
                    {
                        NavbarLinks.map( (ele,i) => {
                            return (<li key={i}>
                            {
                                ele.title === "Catalog" ? (
                                    <div className='flex items-center gap-2 group hover:cursor-pointer relative'>
                                        <p className='hover:text-yellow-25'>Catalog</p>
                                        <BsChevronDown className='mt-1 '/>


                                        <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>
                                        
                                            <div className='absolute left-[50%] top-0  -z-10 h-6 w-6 translate-x-[80%] translate-y-[-30%] rotate-45 select-none rounded bg-richblack-5'>

                                            </div>
                                           {
                                            ssubLinks.length ? (
                                                ssubLinks.map( (subLink,index) => (
                                                    <Link to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`} key={index}>
                                                        <p className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50'>{subLink.name}</p>
                                                    </Link>
                                                ))
                                            ) : (<div></div>)
                                           }

                                        </div>
                                    </div>
                                ) : (
                                    <Link to={ele?.path}>
                                            <p className={`${ matchRoute(ele?.path) ? "text-yellow-25":"text-richblack-25"}`}>
                                                {ele.title}
                                            </p>
                                    </Link>
                                )  
                            }
                            </li>)
                        })
                    }
                </ul>
            </nav>
            {/* Login Signup Dashboard */}
            <div className='flex gap-x-4 items-center'>
                
                {
                    user && user?.accountType !== 'Instructor' && (
                        <Link to='/dashboard/cart' className='relative'>
                            <AiOutlineShoppingCart className='text-white'/>
                            {
                                totalItems > 0 && (
                                    <span>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                    
                }
                {
                    token === null && (
                        <Link to='/login'>
                            <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'>
                                Log in
                            </button>
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to='/signup'>
                            <button className='rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100'>
                                Sign Up
                            </button>
                        </Link>
                    )
                }
                {
                    token !== null && <ProfileDropdown/>
                }

            </div>
            <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
        </div>


    </div>  
  )
}

export default Navbar