import React from 'react';
import Title from '../Components/Title/Title';

const ContactPage = () => {
    return (
        <div className="ContactPage" style={{margin: "0rem 10rem", paddingTop:"3rem"}}>
            <div className="title">
                <Title title={'Contact'} span={'Contact'} />
            </div>
        </div>
    );
};

export default ContactPage;