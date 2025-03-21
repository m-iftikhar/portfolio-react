import "./Home.css"
import Typewriter from "typewriter-effect";
import { Email, Phone } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Home()
{

    return(

        <section className="section home center">
         <h1>
          Hi, I am <span className='about__name'>Muhammad Iftikhar</span>
        </h1>
    
      <h2 className="typer"> 
        <Typewriter options={{strings:["Software Engineer", "Turning Ideas into Impact"],
        autoStart:true,loop:true,deleteSpeed:50}}/>
      </h2> 


        <p id="des">Software Engineer with 1 year of experience, specializing in building scalable, large-scale applications using the MERN
stack. Proficient in both frontend and backend development, with a strong focus on creating robust, scalable, and user-friendly
solutions..Always exploring new technologies,
refining best practices, and pushing boundaries.</p>
  
 
       <section id="social">
         <a href="https://github.com/m-iftikhar" target="_blank" aria-label='github' className='link link--icon'> <GitHubIcon /> </a>
         
         <a href="https://www.linkedin.com/in/muhammad-iftikhar-9938142bb/" target="_blank" aria-label='linkedin' className='link link--icon'> <LinkedInIcon /> </a>
         
         <a href='mailto:muhammadiftikhar.dev@gmail.com' aria-label="email" className='link link--icon'> <Email/> </a>

         <a href='tel:+923104628296' aria-label="phone" className='link link--icon'> <Phone/> </a>
    
      </section>
     
   
         <a href="https://drive.google.com/file/d/1wSqVbV0R-Zz0P3wYYg4o6GbHlal_DUan/view?usp=sharing" target="_blank" id="resumeButton">
            <span type='button' className='btn btn--outline'>  Resume </span>
          </a>
   
    </section>)
}

export default Home