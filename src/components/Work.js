import React from 'react'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
// react-router-dom
import { Link } from 'react-router-dom'
const Work = () => {
  return (
    <section className='section' id='work'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row gap-x-10'>
                <motion.div 
                variants={fadeIn('right', 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
                    <div>
                        <h2 className='h2 leading-tight text-accent'>
                            My Projects<br />
                        </h2>
                        <p className='max-w-sm mb-16'>
                            These are fullstack projects I built using NodeJs, React, MongoDB, SQL, these projects were deployed in a VPS server using Ubuntu
                        </p>
                    </div>
                    <Link to='http://45.90.223.234:3000' className='group relative overflow-hidden border-2 
                    border-white/50 rounded-xl'>
                        <div className='group-hover:bg-black/70 w-full h-full absolute
                        z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500
                        z-50'>
                            <span className='text-gradient'>
                                Eommerce Website
                            </span>
                        </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700
                        z-50'>
                            <span className='text-3xl text-white'>For this project I used React and Redux to control the application state, for the API request I used axios, and the backend was made by Strapi, were I applied concepts such as Authorization,
                                the Application was deployed in a  VPS Server using ubuntu  </span>
                        </div>
                    </Link>
                </motion.div>
                {/* <motion.div 
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                className='flex-1 flex flex-col gap-y-10'>
                    <div className='group relative overflow-hidden border-2 
                    border-white/50 rounded-xl'>
                        <div className='group-hover:bg-black/70 w-full h-full absolute
                        z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500
                        z-50'>
                            <span className='text-gradient'>
                                UI/UX Design
                            </span>
                        </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700
                        z-50'>
                            <span className='text-3xl text-white'>Project Title</span>
                        </div>
                    </div>
                    { }
                    <div className='group relative overflow-hidden border-2 
                    border-white/50 rounded-xl'>
                        <div className='group-hover:bg-black/70 w-full h-full absolute
                        z-40 transition-all duration-300'></div>
                        <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500
                        z-50'>
                            <span className='text-gradient'>
                                UI/UX Design
                            </span>
                        </div>
                        <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700
                        z-50'>
                            <span className='text-3xl text-white'>Project Title</span>
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </div>
    </section>
  )
}

export default Work