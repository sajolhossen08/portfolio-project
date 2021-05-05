import React from 'react';
import ImageSection from '../Components/ImageSection/ImageSection';
import SkillsSection from '../Components/SkillsSection/SkillsSection';
import Title from '../Components/Title/Title';
import design from '../images/web-design.png';
import responsiveWeb from '../images/responsive-design.png';
import webDev from '../images/web-development.png';
import webAppDev from '../images/web-app-development.png';
import bugFix from '../images/bug-fixing.png';
import ServicesSection from '../Components/ServicesSection/ServicesSection';

const AboutPage = () => {
    return (
        <div className="AboutPage justify-content-center" style={{margin: "0 10%", paddingTop:"3rem"}}>
            <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS3'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Bootstrap 4'} progress={'76%'} width={'76%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'SASS'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Router'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Firebase Auth'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'MongoDB'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'WordPress'} progress={'60%'} width={'60%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="row services-container d-flex text-center">
                <ServicesSection image={design} title={'WEB DESIGN'} 
                text={"In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design"}
                />
                <ServicesSection image={responsiveWeb} title={'RESPONSIVE DESIGN'} 
                text={"Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size."}
                />
                <ServicesSection image={webDev} title={'WEB DEVELOPMENT'} 
                text={"Web development is the building and maintenance of websites; it's the work that happens behind the scenes."}
                />
                <ServicesSection image={bugFix} title={'BUG FIXING'} 
                text={"A bug fix is a change to a system or product designed to handle a programming bug/glitch.Many different types of programming bugs that create errors with system implementation."}
                />
                <ServicesSection image={webAppDev} title={'WEB APP DEVELOPMENT'} 
                text={"Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet."}
                />

                
            </div>
        </div>
    );
};

export default AboutPage;