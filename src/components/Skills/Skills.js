
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaAws } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb, SiRedux,SiTypescript, SiExpress, SiChakraui, SiNetlify, SiVercel, SiTailwindcss, SiMaterialui, SiAntdesign, SiAzuredevops, SiDocker, SiKubernetes, SiNextdotjs, SiPostgresql, SiMysql, SiSocketdotio } from "react-icons/si";
import Githubcalendar from "react-github-calendar";

import './Skills.css'

function Skills() {

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title about_skills'>Skills</h2>
      
      <div id='container' className='skills__list'>
        {[ 
          { Icon: FaHtml5, name: "HTML5" },
          { Icon: FaCss3Alt, name: "CSS3" },
          { Icon: SiTailwindcss, name: "Tailwind CSS" },
          { Icon: SiTypescript, name: "Typescript" },
          { Icon: TbBrandJavascript, name: "JavaScript" },
          { Icon: FaReact, name: "React" },
          { Icon: SiRedux, name: "Redux" },
          { Icon: SiNextdotjs, name: "Next.js" },
          { Icon: FaNodeJs, name: "Node.js" },
          { Icon: SiExpress, name: "Express" },
          { Icon: SiSocketdotio, name: "Socket.IO" },
          { Icon: SiMongodb, name: "MongoDB" },
          { Icon: SiChakraui, name: "Chakra UI" },
          { Icon: SiMaterialui, name: "Material UI" },
          { Icon: SiAntdesign, name: "Ant Design" },
          { Icon: SiMysql, name: "MySQL" },
          { Icon: SiPostgresql, name: "PostgreSQL" },
          { Icon: FaGithub, name: "GitHub" },
          { Icon: SiNetlify, name: "Netlify" },
          { Icon: SiVercel, name: "Vercel" },
          { Icon: FaAws, name: "AWS" },
          { Icon: SiAzuredevops, name: "Azure" },
          { Icon: SiDocker, name: "Docker" },
          { Icon: SiKubernetes, name: "Kubernetes" }
          
          
         
         
        ].map(({ Icon, name }) => (
          <li key={name} className='skills__list-item btn btn--plain'>
            <Icon size={80} id="color" />
            <h5>{name}</h5>
          </li>
        ))}
      </div>

      <div id="gitstatus">
<h2 className="section__title">Days I <span className="about_skills"> Coded</span></h2>

<Githubcalendar
  username="m-iftikhar"
  blockSize={15}
  blockMargin={5}
  fontSize={16}
  color="#2978b5"

/>
</div>
    </section>
  );
}

export default Skills;








