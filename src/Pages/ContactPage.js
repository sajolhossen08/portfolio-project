import React from 'react';
import Title from '../Components/Title/Title';
import emailjs from "emailjs-com";

const ContactPage = () => {
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_EMAILJS_USER_ID}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="ContactPage" style={{margin: "0rem 10%", paddingTop:"3rem"}}>
            <div className="title">
                <Title title={'Contact'} span={'Contact'} />
            </div>
            <div className="contact-data mt-4">
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="resume-download-btn" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    );
};

export default ContactPage;