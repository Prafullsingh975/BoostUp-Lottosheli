import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import LayoutDash from "./LayoutDash";
import axios from "axios";
// import LayoutDash from './LayoutDash';
// import ActiveForm from './ActiveForm';
// import Deposit from './Deposit';
// import Refund from './Refund';
// import deposityData from './deposityData';
// import ductilityData from './ductilityData';
// import Winning from './Winning';
// import History from './History';

export default function Dashcard(props) {
  const [show, setShow] = useState(true);
  const [btn, setBtn] = useState(0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    mobileNumber: "",
    email: "",
    sendMail: false,
  });
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [formBtnEnabled, setFormBtnEnabled] = useState(true);

  //checkPassword
  useEffect(() => {
    if (password.newPassword) {
      if (password.oldPassword) {
        setFormBtnEnabled(true);
      }else setFormBtnEnabled(false);
    } else {
      setFormBtnEnabled(true);
    }
  }, [password]);

  // Update form States
  const handleUpdateData = (e) => {
    const { name, value } = e.target;
    if (name === "sendMail") {
      setUserData((pre) => {
        return {
          ...pre,
          [name]: e.target.checked,
        };
      });
    }else{
      setUserData((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
    }
  };
  const handleUpdatePassword = (e) => {
    const { name, value } = e.target;
      setPassword((pre) => {
        return {
          ...pre,
          [name]: value,
        };
      });
  };

  // API calls
  // const fetchData = async () => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${userInfo?.token}`,
  //       "Content-type": "application/json",
  //     },
  //   };
  //   try {
  //     const { data } = await axios.get(
  //       `http://localhost:5050/api/user/all-games`,
  //       config,
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // };
  const fetchUserData = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.get(
        `http://localhost:5050/api/user/`,
        config,
      );
      setUserData(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const handleSubmit = async () => {
    const body = {...userData,...password}
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const { data } = await axios.put(
        `http://localhost:5050/api/user/`, body,
        config,
      );
      // console.log(data);
    } catch (error) {
      console.log(error);
      return error;
    }

    // console.log(body);
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  // fetchData();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/dashboard") {
      setBtn(0);
    }
    if (location.pathname == "/dashboard/refund") {
      setBtn(1);
    }
    if (location.pathname == "/dashboard/deposits") {
      setBtn(2);
    }
    if (location.pathname == "/dashboard/ductility") {
      setBtn(3);
    }
    if (location.pathname == "/dashboard/winnings") {
      setBtn(4);
    }
    if (location.pathname == "/dashboard/history") {
      setBtn(5);
    }
  }, [location]);

  return (
    <>
      <div className="relative my-5 flex w-full flex-col justify-center gap-2 px-60 ">
        <h1>Cyans</h1>
        <div className="relative flex h-full w-full flex-col rounded-xl bg-[#E4E2E2] p-5">
          <div className="flex w-full gap-5 border-b-2 border-gray-500 pb-3 ">
            <p
              onClick={() => setShow(false)}
              className={` ${
                show ? "" : "border-b-4 border-blue-800"
              } cursor-pointer border-gray-500 pr-3 `}
            >
              Update details
            </p>
            <p
              onClick={() => setShow(true)}
              className={` ${
                show ? "border-b-4 border-blue-800" : ""
              } cursor-pointer  border-gray-500 pr-3 `}
            >
              Personal area
            </p>
          </div>
          <div className={`relative flex h-full w-full gap-10 py-5`}>
            <div
              className={`${
                show ? "flex flex-col" : "hidden"
              } relative h-full w-full rounded-xl bg-white px-6 py-3 pt-8 `}
            >
              <p className="text-xl">Personal area</p>
              <div className="mt-5 flex w-full justify-between text-white">
                <Link
                  onClick={() => setBtn(1)}
                  to="refund"
                  className={`${
                    btn == 1
                      ? "-mt-2 h-[2.5rem] bg-blue-400 py-2 "
                      : "bg-[#9F9D9D]"
                  } h-8 rounded-t-lg px-5  outline-none duration-200  `}
                >
                  Refund
                </Link>
                <Link
                  onClick={() => setBtn(2)}
                  to="deposits"
                  className={`${
                    btn == 2
                      ? " -mt-2 h-[2.5rem] bg-blue-400 py-2 "
                      : " bg-[#9F9D9D]"
                  } h-8 rounded-t-lg px-5  outline-none duration-200  `}
                >
                  Deposits
                </Link>
                <Link
                  onClick={() => setBtn(3)}
                  to="ductility"
                  className={`${
                    btn == 3
                      ? "-mt-2 h-[2.5rem] bg-blue-400 py-2"
                      : "bg-[#9F9D9D]"
                  } h-8 rounded-t-lg px-5  outline-none duration-200  `}
                >
                  Ductility
                </Link>
                <Link
                  onClick={() => setBtn(4)}
                  to="winnings"
                  className={`${
                    btn == 4
                      ? "-mt-2 h-[2.5rem] bg-blue-400 py-2 "
                      : " bg-[#9F9D9D]"
                  } h-8 rounded-t-lg px-5  outline-none duration-200  `}
                >
                  Winnings
                </Link>
                <Link
                  onClick={() => setBtn(5)}
                  to="history"
                  className={`${
                    btn == 5
                      ? "-mt-2 h-[2.5rem] bg-blue-400 py-2 "
                      : "bg-[#9F9D9D] "
                  } h-8 rounded-t-lg px-5  outline-none duration-200  `}
                >
                  history
                </Link>
                <Link
                  onClick={() => setBtn(0)}
                  to="/dashboard"
                  className={`${
                    btn == 0
                      ? " -mt-2 h-[2.5rem] bg-blue-400 py-2 "
                      : "bg-[#9F9D9D]"
                  } h-8 rounded-t-lg px-5  outline-none duration-200  `}
                >
                  Active forms
                </Link>
              </div>
              <LayoutDash>
                <Outlet />
              </LayoutDash>

              {/* <Routes>
             <Route path='/' element={<LayoutDash/>}>
                <Route path='/' element ={<ActiveForm/>}/>
                <Route path='/' element={<Deposit data={deposityData}/>}/>
                <Route path='refund' element={<Refund/>}/>
                <Route path='ductility' element={<Deposit data={ductilityData}/>}/>
                <Route path='winnings' element={<Winning/>}/>
                <Route path='dashboard/history' element={<History/>}/>
             </Route>
             </Routes> */}
            </div>
            <div
              className={`${
                show ? "hidden" : "flex flex-col"
              } relative h-full w-full rounded-xl bg-white px-6 py-5 pt-8 `}
            >
              <h1 className="text-xl">Update Details</h1>
              <div className="mt-5 flex h-full w-full flex-col gap-3 rounded-lg border-2 p-5">
                <div className="flex  gap-[11rem]">
                  <label>First name</label>
                  <input
                    onInput={handleUpdateData}
                    name="firstName"
                    type="text"
                    value={userData.firstName}
                    className="rounded-md border-2 border-black px-2 outline-none"
                  />
                </div>

                <div className="flex gap-[11rem]">
                  <label>Last name</label>
                  <input
                    onInput={handleUpdateData}
                    name="lastName"
                    type="text"
                    value={userData.lastName}
                    className="rounded-md border-2 border-black px-2  outline-none"
                  />
                </div>

                <div className="flex gap-[10.5rem]">
                  <label>ID Number </label>
                  <input
                    name="idNumber"
                    value={userData.idNumber}
                    type="text"
                    className="pointer-events-none rounded-md border-2 border-black bg-gray-300 px-2 outline-none"
                  />
                </div>

                <div className="flex gap-[8.5rem]">
                  <label>Mobile Number </label>
                  <input
                    onInput={handleUpdateData}
                    name="mobileNumber"
                    type="text"
                    value={userData.mobileNumber}
                    className="rounded-md border-2 border-black px-2 outline-none"
                  />
                </div>

                <div className="flex gap-[12.2rem]">
                  <label>E - Mail </label>
                  <input
                    onInput={handleUpdateData}
                    name="email"
                    type="email"
                    value={userData.email}
                    className="rounded-md  border-2 border-black px-2 outline-none"
                  />
                </div>

                <p className="text-sm italic">
                  No password entry is required when updating the details unless
                  you want to change a password. <br />
                  You can delete the automatically entered password and save
                  your new information.
                </p>
                <div className="flex gap-[11.8rem]">
                  <label>Password </label>
                  <input
                    onInput={handleUpdatePassword}
                    name="newPassword"
                    type="password"
                    value={password.newPassword}
                    className="rounded-md  border-2 border-black px-2 outline-none"
                  />
                </div>
                <div className="flex gap-20">
                  <label>Password Authentication </label>
                  <input
                    onInput={handleUpdatePassword}
                    placeholder="Password Authentication"
                    name="oldPassword"
                    type="password"
                    value={password.oldPassword}
                    className="rounded-md  border-2 border-black px-2 outline-none"
                  />
                </div>

                <div className="flex gap-2">
                  <input
                    name="sendMail"
                    type="checkbox"
                    onChange={handleUpdateData}
                    className="rounded-md  border-2 border-black px-2 outline-none"
                  />
                  <label>
                    To join the mailing list, add the check mark and save{" "}
                  </label>
                </div>
                <button
                  onClick={handleSubmit}
                  style={{
                    pointerEvents:
                      formBtnEnabled && userData.sendMail ? "auto" : "none",
                  }}
                  className={`${
                    formBtnEnabled && userData.sendMail
                      ? "bg-blue-500"
                      : "bg-blue-200"
                  } mx-auto my-2 rounded px-3 py-2 text-white`}
                >
                  update
                </button>
              </div>
            </div>

            <div className="flex h-1/4 w-1/3 flex-col rounded-xl bg-blue-400/50 p-5 text-center">
              <h1 className="border-b-[1px] border-gray-500 pb-4 text-3xl">
                balance
              </h1>
              <h1 className="flex items-center justify-center gap-2 border-b-[1px] border-gray-500 py-4 text-center text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm29.25 64H176a8 8 0 0 1 0 16h-16a48.05 48.05 0 0 1-48 48h-2.71l48 42a8 8 0 0 1-10.54 12l-64-56A8 8 0 0 1 88 136h24a32 32 0 0 0 32-32H88a8 8 0 0 1 0-16h51.69A32 32 0 0 0 112 72H88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16h-28.26a48.15 48.15 0 0 1 9.51 16Z"
                  />
                </svg>
                {Number(userData?.balance).toFixed(2)}
              </h1>
              <div className="my-2 flex justify-center gap-3">
                <button className="rounded-md bg-blue-400 p-1 text-white">
                  attraction
                </button>
                <button className="rounded-md bg-blue-400 p-1 text-white">
                  deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
