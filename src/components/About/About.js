
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
  import { ThemeContext } from '../../contexts/theme';
  import { useContext } from 'react';
  import { useState } from 'react';
  import { useEffect } from 'react';
import {BiStar} from "react-icons/bi"
import profile from '../../Assets/profile.jpg'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import './About.css'



function About  () {
  

  const [{ themeName }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themeName === "light" ? "#23283e" : "#fcfcfc"
  );

 useEffect(() => {
    if (themeName === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themeName]);
 

  return (
     
    <div className='about center' id='about'>
      
      <h2>ABOUT <span className='about__name'> ME</span></h2>     
   
    
    
      <div className='about__contact' >

                 
                 <div>
        
                   <img src={profile} alt='iftikhar' id='profile'/>
    
                 </div>

                <div>
                    <h4 className='about__desc'>
                    As I explore myself further, I find my passion deeply rooted in solving complex problems, building scalable systems, and enhancing user experiences. Each project I take on pushes me to learn, adapt, and grow turning curiosity into impactful solutions.
                    Currently I am working at 100localzpvt.ltd as Mern Stack Developer.
                    </h4>
                    <br/>
                  <div id='interest' >
                   {/* <h4 className='about__desc'> Some of my interests apart form Coding :</h4> */}
               
                   <BiStar className='about__name'/> <span className='about__name'>I’m interested in Software Engineering and DevOps.</span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'>  I’m currently learning more Data Structure, Algorithms, Backend Engineering</span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'>I’m looking to collaborate on great projects ideas</span>
                   <br/>
                    {/* <BiStar className='about__name' /> <span className='about__name'>Watching Movies</span> */}
                    </div>
                </div>
                 
          </div>     
                  

           
            
               
                
      <h2 id='timeline'>MY <span className='about__name'>EDUCATION</span> </h2>

     
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement date=''  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Bachelor in Information Technology (BSIT)
            </h4>
            <p data-aos="fade-right">
            I hold a degree from the University of Education, Lahore, Pakistan, where I cultivated my technical skills and passion for software engineering.
            </p>
            

        </VerticalTimelineElement>
        </VerticalTimeline>



        
      <h2 id='timeline'>MY <span className='about__name'>Experience</span> </h2>

      <VerticalTimeline lineColor={linecolor}>
                
       <VerticalTimelineElement date='July 2025 - present'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             100localzpvt.Ltd,
            </h4>
            <p data-aos="fade-right">
           Currently working as a MERN Stack Developer at 100localzpvt.Ltd, building scalable and responsive web applications.
           Developing and maintaining RESTful APIs and dynamic user interfaces using React, Node.js, Express, and MongoDB.
           Collaborating with cross-functional teams to deliver high-performance, user-focused, and maintainable solutions.
            </p>
            

        </VerticalTimelineElement>


      <VerticalTimelineElement date='December 2024 - July 2025'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Octaloop Technologies
            </h4>
            <p data-aos="fade-right">
            Joined Octaloop Technologies as Full Stack Developer, where I Built end-to-end web applications using TypeScript, JavaScript, React, Next.js, Node.js, MongoDB, and PostgreSQL, ensuring seamless functionality and user experiences. Optimized APIs and error handling, cutting client-side issues by 25%. Collaborated with cross-functional teams, delivering projects on time while exceeding client expectations.
            </p>
        
        
        <VerticalTimelineElement date='July 2024 - October 2024'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             HeadStarter AI 
            </h4>
            <p data-aos="fade-right">
            Joined HeadStarter AI as Software Engineer Fellow,where I independently built three full-stack MERN applications, delivering scalable and user-friendly solutions. Additionally, I contributed to two team projects remotely, ensuring smooth collaboration and timely delivery. By optimizing code, I improved app performance, reducing load times by 25%, while effectively managing tasks and communication using Git, Jira, and Slack.
            </p>
            

        </VerticalTimelineElement>
        <VerticalTimelineElement date='April 2024 - June 2024'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
             Finsoll Technologies
            </h4>
            <p data-aos="fade-right">
            Joined Finsoll as Mern Intern, where I boosted user satisfaction by 30% by improving UI/UX, delivering intuitive interfaces shaped by user feedback. Streamlined frontend-backend integration with optimized error handling significantly improved system stability. Designed scalable solutions using Node.js, MongoDB, and Redux, ensuring seamless data flow and peak performance.
            </p>
            

        </VerticalTimelineElement>
       
        </VerticalTimeline>
        


       


        <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>

      
              
           

    

    
    </div>
  )
}

export default About
