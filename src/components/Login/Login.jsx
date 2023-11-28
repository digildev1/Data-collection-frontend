import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [MRCODE, setMRCODE] = useState("");
  const [PASSWORD, setpassword] = useState("");

  const handleUserData = async () => {
    // navigate("/home");
    await fetch("https://mr-backend-srwb.onrender.com/api/login-mr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ MRCODE, PASSWORD }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg == "Login Done") {
          localStorage.setItem("token", data.mr._id);
          navigate("/home");
        } else {
          alert("please check input");
        }
      });
  };

  return (
    <>
      {/* <section className="vh-78">
      <div className="container py-2 h-100">
        <div className="row d-flex justify-content-center align-items-center h-80">
          <div className="col col-xl-10">
            <div className="card shadow mb-5 bg-white rounded">
              <div className="row g-0 d-flex justify-content-center align-items-center login">
                <div className="col-md-6 col-lg-5 d-md-block p-4">
                  <img
                    src="https://bonista.techizertech.in/assets/images/bonista_logo 2.png"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center callout callout-danger">
                  <form
                    action="https://bonista.techizertech.in/user/login/submit"
                    className="form-login"
                    method="post"
                    acceptCharset="utf-8"
                  >
                    <input type="hidden" name="token" value="1b6e50611928487a32e1bdbe37f7b228" />

                    <div className="card-body p-4 p-lg-5 text-black">
                      <img
                        className="img-fluid float-right"
                        src="https://bonista.techizertech.in/assets/images/logo.png"
                        style={{ width: '50px' }}
                        alt="logo"
                      />
                      <div className="d-flex align-items-center mb-3 pb-1 text-center">
                        <span className="h1 fw-bold mb-0">Login</span>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="username">
                          User Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your username"
                          id="username"
                          name="username"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          id="password"
                          name="password"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                        onClick={homepage}
                          className="btn login btn-lg btn-block"
                          type="submit"
                          style={{ backgroundColor: '#A15845', color: '#F3EBE4' }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div>
                <img
                  className="img-fluid footerimg"
                  src="https://bonista.techizertech.in/assets/images/Bonista Footer.png"
                  alt="footer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

      <div class="bg-gradient-to-tr from-green-300 to-green-600 h-screen w-full flex justify-center items-center">
        <div class="bg-green-600 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
          <div class="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
            <h1 class="text-3xl">Hello</h1>
            <p class="text-5xl font-extrabold">Welcome!</p>
          </div>
          <div class="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
            <h3 class="text-3xl font-bold text-green-600 mb-4">LOGIN</h3>
            <form action="#" class="w-full flex flex-col justify-center">
              <div class="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
                  value={MRCODE}
                  onChange={(e) => setMRCODE(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
                  value={PASSWORD}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <button
                class="bg-green-600 font-bold text-white focus:outline-none rounded p-3"
                onClick={handleUserData}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
