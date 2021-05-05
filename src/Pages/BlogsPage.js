import React from 'react';
import comingSoon from '../images/commin-soon.png';
import Title from '../Components/Title/Title';

const BlogsPage = () => {
    return (
        <div className="BlogsPage" style={{margin: "0rem 10%", paddingTop:"3rem"}}>
            <div className="img">
                <Title title={'Blogs'} span={'Blogs'} />
                <img className="img-fluid d-block"  style={{margin: "3rem auto 0rem", opacity:".6"}} src={comingSoon} alt=""/>
            </div>
        </div>
    );
};

export default BlogsPage;