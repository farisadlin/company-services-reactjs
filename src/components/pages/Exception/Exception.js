import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import {AiOutlineSafety} from "react-icons/ai"
import "./Exception.css";

function Exception({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                {/* <div className="top-line">{topLine}</div> */}
                <div className="left-div">
                  <AiOutlineSafety
                    style={{ fontSize: "24px", color: "blue" }}
                  />
                </div>
                <div className="right-div">
                  <h1
                    className={lightText ? "heading" : "heading dark"}
                    style={{ fontSize: "24px" }}
                  >
                    {headline}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle"
                        : "home__hero-subtitle dark"
                    }
                    style={{ color: "#9DA0B3" }}
                  >
                    {description}
                  </p>
                  <Link to="/sign-up">
                  <Button
                    className="buttonCustom"
                    buttonSize="btn--wide"
                    buttonColor="blue"
                  >
                    {buttonLabel}
                  </Button>
                </Link>
                </div>
                
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exception;
