"use client"

import Navbar from "../../components/navBar";

export default function AboutMe() {

  
    return (
      <div className=' bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway'>
                  <div className="relative">
                      <img src="/images/MenuBarFlower.png" className="w-1/4"
                      />
                  </div>
                  
                  <Navbar></Navbar>
          
      
                  <div className="relative flex justify-center items-center">
      
                      <div className="relative text-7xl hover-glow-title ms-5 me-5 mt-3">
                          Hi! I'm Jackie - Thank you for stopping by!
                      </div>
                  </div> 
                  <div className='flex flex-row ms-20 me-20'>
                      <div className="flex-2 flex justify-start mt-20 ms-20 ps-10">
                          I am currently a student in IT - Web Programming at NSCC's Truro campus and looking forward to graduating spring of 2025. 
                          I previously had a 14 year career  in the payroll industry where I held positions in customer serivce, programming and management. 
                          I'm a passionate lifelong learner who values diversity, creativity, and wellness in the workplace. I am delighted to be
                          embarking into the exciting world of software-development. 
                          <br></br><br></br>
                          This portfolio is a small sampling of completed projects as well as work currently underway.
                          <br></br><br></br>
                          You'll find my social links below.  I'd love to hear from you and learn what brought you to my page. 
                      </div>
                      <div className="mt-10 me-10">
                              <img 
                                  src="/images/headshot2.jpg" 
                                  className="object-contain rounded-full" 
                              />
                      </div>
                  </div>
              </div>
          );
      }
      