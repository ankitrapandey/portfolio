import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gmail Clone"
          des=" Developed the mail app using html, css, Javascript, Tailwind, Gogle Oauth and react Git hub for version control.In this user can see the message recieved,see their draft mail, Snoozed mail,and also send mail to other and delete the mails ."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="OTT App"
          des=" Developed an OTT app using HTML,Css, Tailwind Google Oauth and react, and git hub for version control.In this user can can log in with google also and there are various categories of the tv show Movies etc ."
          src={projectThree}
        />
        
        
      </div>
    </section>
  );
}

export default Projects