import React from 'react';
import about from '../../images/about-me.png';

const ImageSection = () => {
    return (
        <div className="ImageSection row d-flex">
            <div className="img col-lg-4">
                <img style={{minWidth:"315px"}} className="img-fluid" src={about} alt=""/>
            </div>
            <div style={{minWidth:"310px"}} className="col-lg-6 offset-md-1">
            <div className="about-info">
                <h4>I am <span style={{color: "#06cef7"}}> Shozol Hossen</span></h4>
                <p className="about-text">
                An intellectually curious, self-motivated and enthusiastic MERN Stack developer with a
                deep interest in JavaScript as well as React, seeking an opportunity to extend my
                development skill. Experience in designing and developing user interfaces, testing,
                debugging and problem solving.
                </p>
                <div className="about-details">
                    <div className="left-section">
                            <p>Full Name</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                        </div>
                        <div className="right-section">
                            <p>: Md Shozol Hossen</p>
                            <p>: Bangladeshi</p>
                            <p>: Bengali, English, Hindi</p>
                            <p>: Pabna, Bangladesh</p>
                        </div>
                </div>
                    <a class="text-decoration-none mt-1" href="https://drive.google.com/uc?export=download&amp;id=1NI0oA-15s6W8Jsdw1AEiN6cS5pb5P78H" download="">
                            <button type="button" class="font-weight-light text-uppercase resume-download-btn">
                                GET RESUME
                            </button>
                    </a>
            </div>
            </div>
        </div>
    );
};

export default ImageSection;