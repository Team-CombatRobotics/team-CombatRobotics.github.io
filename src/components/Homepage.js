import React from "react";
import Footer from "./Footer";
import "./Homepage.css";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section className="largescreen" id="video">
        <video
          src="images/TCRbgVideo.mp4"
          id="realvideo"
          muted
          loop
          autoplay
          width="100%"
          height="100%"
        ></video>
      </section>
      <section className="smallscreen centerize">
        <img src="images/TCR_blackLogo.png" alt=""></img>
      </section>

      <section id="aboutUs" className="centerize">
        <div className="box">
          <h1 className="heading">About Us</h1>
          TEAM COMBAT ROBOTICS founded in 2018, is a team of enthusiast
          undergraduate students from different factions of engineering, working
          on building efficient combat capable robots. TCR has built the first
          horizontal bar spinning robot in southern India. Working with
          different sub-system, TCR manages to design, built and put together
          mechanical and electrical aspects of the bot in its own workshops.
        </div>
        <div className="row">
          <div className="column box">
            <h1 className="heading">Vision</h1>
            To build the best bots, cause no unnecessary harm and to compete in
            various national and international robotics events held in India.
          </div>
          <div className="column box">
            <h1 className="heading">Mission</h1>
            To be one of the technical student projects to design,fabricate and
            manufacture innovative combat robots and at the same time focus on
            the practicality and feasibility of the bots in the combat arena.
          </div>
        </div>
        <div className="smallscreen box">
          <h1 className="heading">Vision</h1>
          To build the best bots, cause no unnecessary harm and to compete in
          various national and international robotics events held in India.
        </div>
        <div className="smallscreen box">
          <h1 className="heading">Mission</h1>
          To be one of the technical student projects to design,fabricate and
          manufacture innovative combat robots and at the same time focus on the
          practicality and feasibility of the bots in the combat arena.
        </div>
      </section>

      <section id="sponsors"></section>

      <section
        id="contactUs"
        className="centerize"
        style={{ background: "#000", width: "100vw" }}
      >
        <div className="row">
          <div className="Contacts contactColumn left">
            <i
              className="fa fa-volume-control-phone "
              id="phonenumber"
              style={{ color: "aliceblue" }}
              aria-hidden="true"
            >
              {" "}
              +9189715 68267
            </i>
            <i className="fas fa-envelope m-2"> tcr.manipal@gmail.com </i>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.6235867558083!2d74.79300428707894!3d13.351682121356601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a63a6625cf%3A0x84cae5b07cb4654c!2sMIT%20Central%20Library!5e0!3m2!1sen!2sin!4v1645613015681!5m2!1sen!2sin"
              id="map"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="teampic contactColumn right">
            <div className="col-sm-12 col-md-6 col-lg-6 ">
              <figure>
                <img className="img-fluid" src="images/team.jpeg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
