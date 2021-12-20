import { BsTelephoneFill } from "react-icons/bs";
import Button from "../../common/button/button";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "../../navbar/navbar";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./creative-banner.scss";

const CreativeBanner = () => {
  return (
    <div className="creative-banner ">
      <Navbar />

      <div className="headings container">
        <div className="row">
          <Slide left duration={1200}>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 heading-coloumn">
              <h3>Pakistan’s #1 Rated Digital Marketing Agency.</h3>

              <h1 className="over-write">
                Outsmart the competition with best in class creative strategies.
              </h1>
            </div>
          </Slide>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12  form-coloumn">
            <Fade duration={2000} delay={300} big>
              <div className="form">
                <h1>Grow Your Brand</h1>
                <h6>by partnering with SmartSites</h6>
                <hr />
                <form>
                  <FaUserCircle className="fa-circle" style={{ top: 30 }} />{" "}
                  <input placeholder="Full Name" type="text" />
                  <MdEmail className="md-email" style={{ top: 107 }} />
                  <input placeholder="Email Adress" type="text" />
                  <BsTelephoneFill
                    className="bs-telephone"
                    style={{ top: 184 }}
                  />
                  <input placeholder="Phone Number" type="text" />
                  <Button
                    label="Get Your Free Proposal"
                    style={{
                      borderRadius: "10px",
                      background: "#669021",
                      color: "white",
                      outline: "none",
                      border: "1px solid #66902f",
                      padding: "10px 18px",
                      marginTop: "35px",
                      marginBottom: "35px",
                      fontSize: "18px",
                      height: "-moz-fit-content",
                      height: "fit-content",
                    }}
                  />
                </form>
              </div>
            </Fade>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default CreativeBanner;
