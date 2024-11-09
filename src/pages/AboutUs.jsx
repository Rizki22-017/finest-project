export const AboutUs = () => {
  return (
    <>
      <>
        {/* about Section */}
        <section id="about" className="about section ">
          <img src="assets/img/hero-bg.jpg" alt="" className="about-bg" />
          <div className="container">
            <div className="row gy-4 justify-content-between">
              <div className="col-lg-4 order-lg-last about-img">
                <img
                  src="assets/img/finest-full.png"
                  className="img-fluid animated"
                  alt=""
                />
              </div>
              <div className="col-lg-6  d-flex flex-column justify-content-center">
                <h1>
                  <span>About Us</span>
                </h1>
                <p>
                  We believe that the ocean is a precious resource and must be
                  managed wisely for the sustainability of future generations
                </p>
                <div className="d-flex">
                  <a href="#about" className="btn-get-started">
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="glightbox btn-watch-video d-flex align-items-center"
                  >
                    <i className="bi bi-play-circle" />
                    <span>Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="about-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x={50} y={3} />
            </g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x={50} y={0} />
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x={50} y={9} />
            </g>
          </svg>
        </section>

        <section className="gradasi">
          
        </section>

        <>
          {/* About Section */}
          <section
            id="aboutmore"
            className="aboutmore section"
          >
            {/* Section Title */}
            <div className="container section-title">
              <h2>Our Story</h2>
            </div>
            {/* End Section Title */}
            <div className="container">
              <div className="row gy-3">
                <div className="col-lg-12 d-flex flex-column justify-content-center">
                  <div className="aboutmore-content ps-0 ps-lg-3">
                    <p className="fst-italic">
                      <b>Finest</b> was founded with a vision to empower coastal
                      communities and support the sustainability of the blue
                      economy. We believe that the ocean is a precious resource
                      and must be managed wisely for the sustainability of
                      future generations. Through education, innovation and
                      collaboration, we strive to connect communities with the
                      economic benefits of the sea, while preserving its
                      sustainability. Our story is the story of a community
                      working together to build a sustainable and prosperous
                      future for all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>

        {/* /about Section */}

        {/* Team Section */}
        <section id="team" className="team section light-background">
          {/* Section Title */}
          <div className="container section-title">
            <h2>Team</h2>
            <p>
              <span>Our Hardworking</span>{" "}
              <span className="description-title">Meet Our Team</span>
            </p>
          </div>
          {/* End Section Title */}
          <div className="container">
            <div
              className="row gy-4"
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Narita</h4>
                    <span>Project Manager</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Soraya</h4>
                    <span>Scrum Master</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
            </div>
            <div className="row gy-4 mt-3">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Rafiqa</h4>
                    <span>Hipster</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Zahra</h4>
                    <span>Hipster</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Rizki</h4>
                    <span>Hacker</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter-x" />
                      </a>
                      <a href="">
                        <i className="bi bi-facebook" />
                      </a>
                      <a href="">
                        <i className="bi bi-instagram" />
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Risna</h4>
                    <span>Hacker</span>
                  </div>
                </div>
              </div>
              {/* End Team Member */}
            </div>
          </div>
        </section>
        {/* /Team Section */}

        {/* Contact Section */}
        <section id="contact" className="contact section">
          {/* Section Title */}
          <div className="container section-title" >
            <h2>Get in Touch</h2>
            <p>
              <span>Need Help?</span>{" "}
              <span className="description-title">Want to speak to someone about your startup? We’d love to chat!</span>
            </p>
          </div>
          {/* End Section Title */}
          <div className="container" >
            <div className="row gy-4">
              <div className="col-lg-5">
                <div className="info-wrap">
                  <div
                    className="info-item d-flex"
                  >
                    <i className="bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Address</h3>
                      <p>Infinite Learning, Nongsa Digital Park, Batam City</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                  >
                    <i className="bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Us</h3>
                      <p>+628 1211111</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <div
                    className="info-item d-flex"
                  >
                    <i className="bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p>info@plis.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9646979271192!2d104.0994175739594!3d1.1852274988034512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da2900514d61f3%3A0xc5c787a8b72c6356!2sInfinite%20Learning%20Indonesia!5e0!3m2!1sid!2sid!4v1731170124970!5m2!1sid!2sid"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 270 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <label htmlFor="name-field" className="pb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        className="form-control"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email-field" className="pb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email-field"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="subject-field" className="pb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject-field"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message-field" className="pb-2">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={10}
                        id="message-field"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
        {/* /Contact Section */}
      </>
    </>
  );
};
