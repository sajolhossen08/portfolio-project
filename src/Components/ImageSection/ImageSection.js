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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatum necessitatibus perferendis numquam dolorem cumque facilis.
                    Desir per po la ta doso vi slone ve?
                </p>
                <div className="about-details">
                    <div className="left-section">
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Languages</p>
                            <p>Address</p>
                        </div>
                        <div className="right-section">
                            <p>: Lorem Ipsum</p>
                            <p>: 50</p>
                            <p>: French</p>
                            <p>: French, Spanish, English</p>
                            <p>: Beightbridge, United kingdom</p>
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