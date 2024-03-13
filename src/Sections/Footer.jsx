import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia, Models } from "../constants"
import { React, useState} from 'react'
import AirMax from "../components/AirMax"

export const Footer = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <footer className=" max-container">
      <div className=" flex justify-around items-start flex-wrap max-lg:flex-col">
        <div className=" flex flex-col">
          <a href="/">
            <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className=" mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. 
            Find Your perfect Size In Store. Get Rewards
          </p>
          <div className=" flex items-center mt-8 gap-5">
            {
              socialMedia.map((icon) => (
                <div className=" flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer">
                  <a href={icon.link} target="_blank" rel="noopener noreferrer" className=" cursor-pointer">
                    {/* traget opens the link in a new tab & rel for security reasons */}    
                    <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
        <div className=" flex flex-1 lg:gap-10 gap-20 flex-wrap relative pl-40">
          {
            Models.map((section) => (
              <div key={section}>
                <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li key={link.name} className=" text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                        <a className=" cursor-pointer" href={link.link}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        
        <div className=" flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap relative">
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {
                    section.links.map((link) => (
                      <li key={link.name} className=" text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                        <a>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className=" flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"> 
          <div className=" flex flex-1 justify-start items-center cursor-pointer font-montserrat gap-2">
            <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
            <p className=" hover:text-slate-gray">Copyright. All rights reserved.</p> 
          </div>
          <p className=" font-montserrat cursor-pointer hover:text-slate-gray">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
