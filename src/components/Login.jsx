import axios from "axios";
import React, { useState } from "react";

export default function Login({ pop }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(loginData);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `http://localhost:5050/api/user/login`,
        loginData,
        config,
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoginData({
        email: "",
        password: "",
      });
      pop(true);
      // console.log(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const resetPassword = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `http://localhost:5050/api/game/777/register`,
        { tables: JSON.stringify(values), lottery: lotteries, amount: pay },
        config,
      );
      console.log(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  return (
    <>
      <div className="absolute flex h-full w-full items-center justify-center pt-32">
        <form
          onSubmit={handleSubmit}
          className="absolute z-50 flex h-1/2 w-11/12 flex-col items-center justify-center gap-5 rounded-lg bg-white px-5 max-md:px-2 md:w-1/4 "
        >
          <h1 className="w-full text-center  text-2xl font-bold">Sign Up</h1>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={loginData.email}
            className="w-full rounded border-2 p-3 "
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={loginData.password}
            className="w-full rounded border-2 p-3 "
          />
          <button
            // onClick={() => pop(true)}
            type="submit"
            className=" w-full rounded-md bg-blue-400 p-3 text-2xl  font-bold text-white"
          >
            Entrance
          </button>
          <div className="text-center italic">
            <p onClick={resetPassword}>Reset password using email</p>
            {/* <p>Reset password using SMS</p> */}
          </div>
        </form>
      </div>
    </>
  );
}
