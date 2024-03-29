import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/Background";

export default function SignUp() {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();

    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      navigate("/");
    }
  };

  return (
    <Container>
      <>
        <Background />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={credentials.name}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Your Current Address" className="form-text">
                Address
              </label>
              <input
                type="geolocation"
                className="form-control"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="m-3 btn btn-primary">
              Submit
            </button>
            <Link to="/login" className="m-3 btn btn-danger">
              Already a User
            </Link>
          </form>
        </div>
      </>
    </Container>
  );
}

const Container = styled.div`
  .background {
    width: 430px;
    height: 600px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }

  form {
    height: 720px;
    width: 500px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 70%;
    bottom: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(17, 56, 129, 0.1);
    box-shadow: 0 0 40px rgba(72, 84, 155, 0.6);
    padding: 50px 35px;
  }
  form * {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }

  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgb(240, 219, 219);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }
  ::placeholder {
    color: #e5e5e5;
  }
  button {
    width: 40%;
    background-color: #88a3ee;
    color: #080710;
    padding: 4px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }

`;
