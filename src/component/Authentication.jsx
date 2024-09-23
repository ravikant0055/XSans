import React, { useState } from 'react'
import { GiEvilEyes } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import login from '../assets/loginpic.jpg'
import pc from '../assets/pc.jpg'
import pic1 from '../assets/bgpic1.jpg'
import pic2 from '../assets/bgpic2.jpg'
import pic3 from '../assets/bgpic3.jpg'
import pic4 from '../assets/bgpic4.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Authentication = () => {
  const [eyes, setEyes] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center h-[93vh] w-full'>
      <div className='flex rounded-lg w-[80%] h-[600px] bg-[#171717] overflow-hidden'>
            <div className='flex items-center justify-center w-[50%] bg-cover bg-center' style={{ backgroundImage: `url(${pic3})`, height:'cover' }}>

            </div>
            <div className='w-[50%] flex flex-col p-10 gap-5 justify-between'>
               <div className='flex flex-col justify-start gap-10 mt-20'>
                  <h1 className='text-4xl font-notosans font-semibold'>Login</h1>
                  <input className='px-2 py-3 bg-[#686868] rounded-lg border border-[#8a8888]'  type='text' placeholder='email or username'/>
                  <div className="relative">
                    <input className='px-2 py-3 bg-[#686868] rounded-lg border border-[#8a8888] w-full pr-10'
                      type={eyes ? 'text' : 'password'} placeholder='Password' />
                    {eyes ? (<FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setEyes(false)}/>)
                          : (<FaEye className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setEyes(true)}/>)
                    }
                  </div>
                  <button className='w-fit bg-[#fff0f0] text-slate-700 px-7 py-2 rounded-lg font-notosans font-semibold border border-[#707070]'>Login</button>
               </div>
               <div className='flex justify-center'>
                   <h1>Don't have an account?<Link to='/' className='font-notosans font-semibold text-[#00dfeb]'> Sing up</Link></h1>
               </div>
            </div>
      </div>
    </div>
  )
}

export default Authentication;