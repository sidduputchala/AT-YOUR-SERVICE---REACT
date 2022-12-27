import React from "react";
import HomeNav from "../components/HomeNav.js";
import member1 from "./Images/member1.jpeg";
import member2 from "./Images/member2.jpg";
import member3 from "./Images/member3.jpg";
import member4 from "./Images/member4.jpg";
import "./css/About.css";
import Footer from "../components/Footer.js";

function About() {
  return (
    <div className="body">
      <HomeNav />

      <br style={{ marginTop: "100px" }}></br>
      {/* <h1 className="text-center fw-bold">Team AYS</h1>
      <p className="text-muted text-center">
        The team with a vision to connect customers and service provides and
        fill the gap in the market demand
      </p> */}
      {/* <section className="team"> */}

      <div className="container py-5">
        <div className="row text-center text-white">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4"> About Us</h1>
          </div>
        </div>
      </div>
      <p style={{marginLeft:"5px", marginRight:"5px"}}>
      At Your Service provides a platform that allows skilled and experienced
        professionals to connect with users looking for specific services. All
        the professionals, though experienced and skilled, undergo intensive
        training modules before being allowed to list their services on the
        platform. Once on the platform, our match-making algorithm identifies
        professionals who are closest to the users’ requirements and available
        at the requested time and date.
      </p>
      <div className="container">
        <div className="row text-center">
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Siddu Putchala</h5>
              <span className="small text-uppercase text-muted">
                Web Developer
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Prabhash Varma</h5>
              <span className="small text-uppercase text-muted">
                Web Developer
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Saketh Chamalla</h5>
              <span className="small text-uppercase text-muted">
                Web Developer
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <img
                src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <h5 className="mb-0">Kasyap</h5>
              <span className="small text-uppercase text-muted">
                Web Developer
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="social-link">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h4>"With great power comes great responsibility"</h4>
      <Footer />
    </div>
  );
}

export default About;