import React from 'react'
import { GiCigarette, GiEvilEyes, GiOutbackHat } from "react-icons/gi";
import pic1 from '../assets/bgpic1.jpg'
import pic2 from '../assets/bgpic2.jpg'
import pic3 from '../assets/bgpic3.jpg'
import indiaflag from '../assets/india.png'
import { useNavigate } from 'react-router-dom';
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import XButton from '../xcomponents/xbutton';
import XLoader from '../xcomponents/xloader';

const Homepage = () => {
   const navigate = useNavigate();

   const handleGettingStarted = () => {
        navigate('/content'); // Change to the first page or content route you want to display
   };  
  return (
    <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col gap-6 items-center justify-center mt-[200px]'>
            <GiEvilEyes className='text-[250px] relative rounded-full' style={{ boxShadow: '0 0 30px 5px #2f00ff' }}/>
            {/* <GiOutbackHat className='text-[300px] absolute top-36 text-red-600 '/> 
            <GiCigarette  /> */}
            <h1 className='text-3xl font-semibold font-notosans'>Xsans</h1>
        </div>
        
        <div className='flex w-full justify-center mt-[60px]'>
          <button onClick={handleGettingStarted} className='px-9 text-xl py-3 rounded-3xl font-notosans font-medium border-2 border-gray-700 bg-white text-black'>Getting Start</button>
        </div>
         
        {/* components tiles  */}
        <div className='mx-[170px] flex flex-col items-center mt-32'>
            <label className='text-4xl font-notosans font-medium mb-20'>Experience power of Xsans Components</label>
            <div className='flex rounded-lg w-full h-[600px] bg-[#171717] overflow-hidden mb-32'>
                <div className='w-[50%] h-full flex justify-center flex-col gap-7 px-9'>
                    <h1 className='text-4xl font-semibold font-notosans'>Xsans buttons</h1>
                    <p className='text-wrap text-lg font-light font-notosans'>Button that can change your user experience beyond your expectations.</p>
                </div>
                <div className='w-[50%] h-full bg-cover bg-center overflow-hidden'  style={{ backgroundImage: `url(${pic1})`, height:'cover' }}>
                    <div className="h-full flex justify-center items-center bg-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7.2px]">
                        <div className="flex justify-center px-[110px] py-[150px] rounded-lg  items-center bg-black/80 hover:bg-black/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.2px]">
                          <XButton onClick={() => alert('Button clicked!')} variant="primary">Button</XButton>
                        </div>
                    </div>  
                </div>
            </div>

            <div className='flex rounded-lg shadow-2xl w-full h-[600px] bg-[#171717] overflow-hidden mb-32'>
                <div className='w-[50%] h-full bg-cover bg-center overflow-hidden'  style={{ backgroundImage: `url(${pic3})`, height:'cover' }}>
                    <div className="h-full flex justify-center items-center bg-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7.2px]">
                        <div className="flex justify-center px-[110px] py-[150px] rounded-lg  items-center bg-black/80 hover:bg-black/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.2px]">
                            <XLoader type="spinner" size="lg" color="blue" />
                        </div>
                    </div>  
                </div>
                <div className='w-[50%] h-full flex justify-center flex-col gap-7 px-9'>
                    <h1 className='text-4xl font-semibold font-notosans'>Xsans Progress</h1>
                    <p className='text-wrap text-lg font-light font-notosans'>Progressbar that can change your user experience beyond your expectations.</p>
                </div>
            </div>

            <div className='flex rounded-lg w-full h-[600px] bg-[#171717] overflow-hidden mb-32'>
                <div className='w-[50%] h-full flex justify-center flex-col gap-7 px-9'>
                    <h1 className='text-4xl font-semibold font-notosans'>Xsans buttons</h1>
                    <p className='text-wrap text-lg font-light font-notosans'>Button that can change your user experience beyond your expectations.</p>
                </div>
                <div className='w-[50%] h-full bg-cover bg-center overflow-hidden'  style={{ backgroundImage: `url(${pic1})`, height:'cover' }}>
                    <div className="h-full flex justify-center items-center bg-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[7.2px]">
                        <div className="flex justify-center px-[110px] py-[150px] rounded-lg  items-center bg-black/80 hover:bg-black/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.2px]">
                          <XButton onClick={() => alert('Button clicked!')} variant="primary">Button</XButton>
                        </div>
                    </div>  
                </div>
            </div>
        </div>

        {/* footer */}
        <div className='bg-[#0c0c0b] flex flex-col gap-5 w-full'>
          <div className='from-[#001cce] to-[#ff005d] w-full py-[1px] bg-gradient-to-r'></div>
          <div className='flex items-center justify-between w-full mb-5 px-7'>
              <h1 className='flex gap-3 items-center text-md font-light font-baloo'>Proudly made in <img src={indiaflag} className='w-6 h-5'/> by Ravi Kant</h1>
              <div className='flex gap-5'>
                <FaDiscord className='text-gray-300 hover:text-white' />
                <FaTwitter className='text-gray-300 hover:text-white'/>
                <FaGithub className='text-gray-300 hover:text-white'/>
                <FaLinkedin className='text-gray-300 hover:text-white'/>
                <IoMail className='text-gray-300 hover:text-white'/>
              </div>
          </div>
        </div>


    </div>
  )
}

export default Homepage;