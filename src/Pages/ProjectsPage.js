import React from 'react';
import Title from '../Components/Title/Title';

const ProjectsPage = () => {
    return (
        <div className="ProjectsPage" style={{margin: "0rem 10rem", paddingTop:"3rem"}}>
            <div className="title">
                <Title title={'Projects'} span={'Projects'} />
            </div>
        </div>
    );
};

export default ProjectsPage;