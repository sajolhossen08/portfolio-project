import React from 'react';
import ImageSection from '../Components/ImageSection/ImageSection';
import SkillsSection from '../Components/SkillsSection/SkillsSection';
import Title from '../Components/Title/Title';

const AboutPage = () => {
    return (
        <div className="AboutPage" style={{margin: "0rem 10rem", paddingTop:"3rem"}}>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS3'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Bootstrap 4'} progress={'76%'} width={'76%'} />
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'SASS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Router'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Firebase Auth'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Express Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'MongoDB'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Web Design'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'WordPress'} progress={'60%'} width={'60%'} />
            </div>
        </div>
    );
};

export default AboutPage;