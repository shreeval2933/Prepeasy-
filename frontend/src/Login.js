import React, { useState } from "react";
import "./componets/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const handelname = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const [email, setEmail] = useState("");
  const handelemail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const [pass, setPass] = useState("");
  const handelpass = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  const registerUser = async (e) => {
    console.log("function callled");
    e.preventDefault();

    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: pass,
      }),
    });
    const data = res.json();
    if (res.status === 200) {
      alert("register successfully");
      history("/login");
    } else {
      alert("Email already exist");
    }
    console.log(data);
  };

  const [lemail, setLemail] = useState("");
  const handelLemail = (e) => {
    setLemail(e.target.value);
    console.log(lemail);
  };
  const [lpass, setLpass] = useState("");
  const handelLpass = (e) => {
    setLpass(e.target.value);
    console.log(lpass);
  };

  const loginUser = async (e) => {
    console.log("login function callled");
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lemail: lemail,
        lpassword: lpass,
      }),
    });
    const data = res.json();
    // console.log(data)
    if (res.status === 200) {
      history("/listpage");
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <>
      <div className="b1" >
        <div className="main3">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true" className="ha">
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required=""
                className="op"
                onChange={handelname}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                className="op"
                onChange={handelemail}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                className="op"
                onChange={handelpass}
              />
              <button onClick={registerUser}>Sign up</button>
            </form>
          </div>
          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true" className="ha">
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                className="op"
                onChange={handelLemail}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                className="op"
                onChange={handelLpass}
              />
              <button onClick={loginUser}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
