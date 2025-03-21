import {FaReact,FaNodeJs} from "react-icons/fa"
import {SiChakraui,SiMongodb,SiSocketdotio,SiTypescript,SiMaterialdesignicons, SiTailwindcss} from "react-icons/si"
import {TbApi} from "react-icons/tb"
import {IoLogoJavascript} from "react-icons/io"
import nft1 from '../../Assets/nft1.png'
import nft2 from '../../Assets/nft2.png'
import nft3 from '../../Assets/nft3.png'
import nft4 from '../../Assets/nft4.png'
import nft5 from '../../Assets/nft5.png'
import nft6 from '../../Assets/nft6.png'
import nft7 from '../../Assets/nft7.png'
import thread1 from '../../Assets/thread1.png'
import thread2 from '../../Assets/thread2.png'
import thread3 from '../../Assets/thread3.png'
import thread4 from '../../Assets/thread4.png'
import thread5 from '../../Assets/thread5.png'
import thread6 from '../../Assets/thread6.png'
import fusion1 from '../../Assets/fusion1.png'
import fusion2 from '../../Assets/fusion2.png'
import garments1 from '../../Assets/garments1.png'
import garments2 from '../../Assets/garments2.png'
import garments3 from '../../Assets/garments3.png'
import garments5 from '../../Assets/garments5.png'
import garments6 from '../../Assets/garments6.png'
import garments7 from '../../Assets/garments7.png'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={nft1} alt="NFT1"/>
            </SplideSlide>
           <SplideSlide>
           <img src={nft2} alt="nft 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src={nft3} alt="nft3"/>
           </SplideSlide>
           <SplideSlide>
           <img src={nft4} alt="nft3"/>
           </SplideSlide>
           <SplideSlide>
           <img src={nft5} alt="nft3"/>
           </SplideSlide>
           <SplideSlide>
           <img src={nft6} alt="nft3"/>
           </SplideSlide>
           <SplideSlide>
           <img src={nft7} alt="nft3"/>
           </SplideSlide>

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Chain Artistry</h3>

        <p className='project__description'>
        Developed the frontend of a blockchain-powered NFT marketplace for Octaloop using React and Tailwind CSS. The platform enables users to explore, create, and trade digital assets securely, featuring detailed listings for NFT types like miners and more. Designed for seamless interaction, ensuring intuitive navigation and engaging visuals.
        </p>

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <FaReact size={40} />
             <IoLogoJavascript size={40} />
             <SiTailwindcss size={40}/>
             
            
            
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://chain-artistry.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/m-iftikhar/ChainArtistry-" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>
    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={thread6} alt="thraed6"/>
            </SplideSlide>
            <SplideSlide>
             <img src={thread2} alt="thraed2"/>
            </SplideSlide>
            <SplideSlide>
             <img src={thread3} alt="thraed3"/>
            </SplideSlide>
            <SplideSlide>
             <img src={thread4} alt="thraed4"/>
            </SplideSlide>
            <SplideSlide>
             <img src={thread5} alt="thraed5"/>
            </SplideSlide>
            <SplideSlide>
             <img src={thread1} alt="thraed1"/>
            </SplideSlide>
           

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">NexThread</h3>

        <p className='project__description'>
        Developed a full-stack social media app using MERN stack with Chakra UI, featuring chat with image support, seen/unseen statuses via Socket.io. Integrated JWT security, post interactions, follow/unfollow features, account freezing, and real-time notifications.
        </p>

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
            <FaNodeJs size={40} />
             <IoLogoJavascript size={40} />
             <SiSocketdotio size={40}/>
            <SiChakraui size={40}/>
            <TbApi size={50}/>
          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://youtu.be/aZbN-LZJwlU"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Video </span>
          </a>


          <a href="https://github.com/m-iftikhar/thread-app" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------1 end-------------------------------------------> */}




{/* <-------------------------------------------------2 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={fusion1} alt="fusion 1"/>
            </SplideSlide>
            <SplideSlide>
             <img src={fusion2} alt="fusion2 "/>
            </SplideSlide>
            <SplideSlide>
             <img src={fusion1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
             <img src={fusion2} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
             <img src={fusion1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
             <img src={fusion2} alt="Image 1"/>
            </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Edu Fusion</h3>

  <p className='project__description'>
  Developing a full-stack course management platform using MERN, Next.js (TypeScript) with robust authentication and secure payment integration via Stripe. Implemented MongoDB, Cloudinary, and Redis for scalability, along with comprehensive error handling. Features include user/admin dashboards, profile management, course creation/editing, reviews, real-time notifications via Socket.IO, and advanced search/filter options.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiTypescript size={40} />
       <SiMaterialdesignicons size={40} />  
       <SiMongodb size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href=""  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Video(soon) </span>
          </a>


          <a href="https://github.com/m-iftikhar/Edu-Fusion"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}



{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src={garments1} alt="Image 1"/>
            </SplideSlide>
            <SplideSlide>
             <img src={garments2} alt="Image 2"/>
            </SplideSlide>
            <SplideSlide>
             <img src={garments3} alt="Image 3"/>
            </SplideSlide>
            <SplideSlide>
             <img src={garments6} alt="Image 4"/>
            </SplideSlide>
            <SplideSlide>
             <img src={garments5} alt="Image 5"/>
            </SplideSlide>
            <SplideSlide>
             <img src={garments6} alt="Image 6"/>
            </SplideSlide>
            <SplideSlide>
             <img src={garments7} alt="Image 7"/>
            </SplideSlide>
          

        </Splide>
</div>

<div>

  <h3 className="about_project">Garments Shopping Site</h3>

  <p className='project__description'>
  Developed a feature-rich garment shopping website for a client using the MERN stack, equipped with an intuitive admin panel for seamless management. The platform offers product listing, cart functionality, secure checkout, and user authentication. Admins can efficiently manage inventory, orders, and user data, ensuring smooth operations and enhanced customer experience.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiMongodb size={50} />
       <IoLogoJavascript size={40} />
      <FaNodeJs size={40}/>
      <FaReact size={40}/>

    </li>

  </ul>


   <div id='b'>
       <a href="https://youtu.be/mr99PrRSoqM"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/m-iftikhar/Garments-Shopping-site"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



    </section>
  )
}

export default Projects
