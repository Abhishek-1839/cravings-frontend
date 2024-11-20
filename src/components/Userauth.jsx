import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signingimage from "../images/signing.png";
import "./Userauth.css";
// import Footer from "./Footer";
import Footeropy from "./Footeropy";

const Userauth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventdefault();
    console.log("first");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="fullbody">
        <div className="mainpart">
          <div className="leftside">
            <div className="flana">
              <h1 style={{ marginBottom: "0px" }}>Cravings<span style={{color:"orange"}}>.yum</span></h1>
              <h3 className="headings">Welcome Back 👋</h3>
              <p className="headings">
                Today is a new day. It's your day. You shape it.
                <br /> Sign in to start ordering.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="Signinform">
              <div>
                <label htmlFor="email" className="emailbox">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email is invalid",
                    },
                  })}
                  className="emailinput"
                  placeholder="Example@email.com"
                  style={{ borderRadius: "22px" }}
                />
                {errors.email && (
                  <p className="emailerror">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="passwordbox">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                  className="passwordinput"
                  placeholder="At least 8 charactersd"
                  style={{ borderRadius: "22px" }}
                />
                {errors.password && (
                  <p className="passworderror">{errors.password.message}</p>
                )}
              </div>
              <div className="forgottext">
                <Link
                  to="/forgot-password"
                  className="fpassword"
                  style={{ marginTop: "35px", color: "#FC8A06" }}
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="submitbutton"
                style={{ borderRadius: "22px", fontSize: "15px" }}
              >
                Sign in
              </button>
            </form>
            <p style={{ marginTop: "40px" }}>
              Don't you have an account?{" "}
              <span
                onClick={handleSignup}
                style={{
                  cursor: "pointer",
                  color: "#FC8A06",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
          <div className="rightside">
            <img src={signingimage} alt="signimage" className="signimage"></img>
          </div>
        </div>
        <div className="footer">
          {/* <Footer /> */}
          <Footeropy />
        </div>
      </div>
    </>
  );
};

export default Userauth;
