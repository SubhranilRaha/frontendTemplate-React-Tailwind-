import React,{useState} from 'react'
import icon from './logo.png'


function Homenav() {
    const[show,setShow]=useState(false)
  return (
    <div className="sticky top-0 bg-white" >
        <nav id='mobileview' className='lg:hidden'>
            <div className="flex flex-row justify-between">
            <div className="">
            <a href="/" className='flex items-center'>
                    <img src={icon} alt="" className='py-2 pl-2 h-14 '/>
                    <div className="">
                    <span className="text-cus font-[Poppins] font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
            </a>
            </div>
            <div onClick={()=>setShow(!show)}>
            <i class="uil uil-bars text-cus2 pr-3 pt-1"></i>  
            </div>
            </div>
            <div>
                {
                    show?<ul className='flex flex-col justify-center pb-8 text-xl shadow-lg rounded-3xl pl-14 font-pops'>
                    <li className="py-3 pt-5 hover:text-first">
                        <i class="uil uil-estate pr-2"></i>
                        <a href="#" className="">HOME</a></li>
                    <li className="py-3 hover:text-first">
                        <i class="uil uil-chart pr-2"></i>
                        <a href="#" className="">ABOUT</a></li>
                    <li className="py-3 hover:text-first">
                        <i class="uil uil-users-alt pr-2"></i>
                        <a href="#" className="">PARTNERS</a></li>
                    <li className="py-3 hover:text-first">
                        <i class="uil uil-envelope pr-2"></i>
                        <a href="#" className="">CONTACT</a></li>
                    <div className='flex flex-row pt-5 justify-betweem'>
                        <div className="hover:text-orange-500">
                        <button className="flex justify-center w-32 py-1 mr-5 -translate-x-2 border-2 hover:border-first rounded-3xl group active:scale-95"><a href="#" className="text-base font-semibold text-slate-400 group-hover:text-orange-500 ">LOG IN</a></button>
                        </div>
                        
                        <button className="flex items-center justify-center w-32 py-1 rounded-3xl hover:text-first bg-first hover:bg-orange-500 active:scale-95"><a href="#" className="text-base font-semibold text-white ">SIGN IN</a></button>
                    </div>
                   
                </ul>:null
                }
            </div>
            
        </nav>
        <nav id='desktopview' className='hidden lg:block'>
        <div className="flex justify-between">
        
            <div className="flex flex-row">
            <a href="/" className='flex items-center'>
                    <img src={icon} alt="" className='h-12 pl-2'/>
                    <div className="">
                    <span className="text-cus font-[Poppins] font-cus text-txt">PRAG</span>
                    <span className="font-[Poppins] text-cus font-extrabold text-first">MATE</span>
                    <span className="font-[Poppins] text-4xl text-txt">.</span>
                    </div>
            </a>
            </div>

                <ul className='flex flex-row items-center justify-center text-xl pl-14 font-pops'>
                    <li className="p-3 hover:text-first">
                        <i class="uil uil-estate pr-2"></i>
                        <a href="#" className="">HOME</a></li>
                    <li className="p-3 hover:text-first">
                        <i class="uil uil-chart pr-2"></i>
                        <a href="#" className="">ABOUT</a></li>
                    <li className="px-2 py-3 hover:text-first">
                        <i class="uil uil-users-alt pr-2"></i>
                        <a href="#" className="">PARTNERS</a></li>
                    <li className="p-3 hover:text-first">
                        <i class="uil uil-envelope pr-2"></i>
                        <a href="#" className="">CONTACT</a></li>
                    
                </ul>
                <div className='flex flex-row justify-betweem'>
                        <div className="hover:text-orange-500">
                        <li className="flex justify-center w-32 py-1 mt-2 mr-5 border-2 active:scale-95 hover:border-first rounded-3xl group"><a href="#" className="text-base font-semibold text-slate-400 group-hover:text-orange-500 ">LOG IN</a></li>
                        </div>
                        
                        <li className="flex items-center justify-center w-32 py-1 mt-2 mr-2 active:scale-95 h-9 rounded-3xl hover:text-first bg-first hover:bg-orange-500"><a href="#" className="text-base font-semibold text-white ">SIGN IN</a></li>
                    </div> 
            </div>
        </nav>
    </div>
  )
}

export default Homenav