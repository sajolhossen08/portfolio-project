import React from 'react';

const ServicesSection = ({image, title, text}) => {
    return (
        <div className="ServicesSection col-md-4">
            <div className="service text-center">
                <div className="service-content">
                    <img style={{width:"100px"}} src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        <small>{text}</small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;