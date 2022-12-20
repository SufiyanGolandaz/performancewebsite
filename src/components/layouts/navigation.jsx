import logo from "../../logo.svg";
import appstyles from "../css/appstyles.css";
import { Link } from "react-router-dom";
import classes from "../css/testheader.module.css";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="/" className={classes.link}>
            <a className="navbar-brand page-scroll" href="">
              <img src={logo} />
            </a>
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/offerings">
                <a href="" id="titles">
                  Offerings
                </a>
              </Link>
            </li>
            <li>
              <Link to="/solutions">
                <a href="" className="page-scroll">
                  Solutions
                </a>
              </Link>
            </li>
            <li>
              <Link to="/collaterals">
                <a href="" className="page-scroll">
                  Collaterals
                </a>
              </Link>
            </li>

            <li>
              <Link to="/partners">
                <a href="" className="page-scroll ">
                  Alliance Partners
                </a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a href="" className="page-scroll">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
