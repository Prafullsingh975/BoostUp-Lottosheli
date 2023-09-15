import React, { useRef, useState } from "react";
// import "./DashboardNav.css";
import { useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import gsap from "gsap";

const DashboardNav = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(1);
  const first = useRef(null);

  const rightNAV = (e) => {
    e.preventDefault();
    if (flag === 1) {
      if (window.innerWidth <= 600) {
        gsap.to(first.current, {
          left: "0%",
          duration: 1,
        });
      } else {
        gsap.to(first.current, {
          left: "0%",
          duration: 1,
        });
      }
      setFlag(0);
    } else {
      if (window.innerWidth <= 600) {
        gsap.to(first.current, {
          left: "-250px",
          duration: 1,
        });
      } else {
        gsap.to(first.current, {
          left: "-15%",
          duration: 1,
        });
      }

      setFlag(1);
    }
  };
  // const [hover, setHover] = useState("white")

  return (
    <div className="top-12 duration-200 max-md:absolute" id="main1">
      <div className="rightNav bg-dark text-light" ref={first}>
        {/* <h2
          className="dashmargin"
          style={{ marginLeft: "20px" }}
          onClick={rightNAV}
        >
          DASHBOARD <i className="ri-menu-4-line lg-ms-3 ms-5"></i>
        </h2> */}
        <div className="txtdash">
          <Sidebar className="  m-2 rounded-xl outline-dotted outline-2 outline-offset-4 outline-blue-500">
            <Menu
              menuItemStyles={{
                button: {
                  // the active class will be added automatically by react router
                  // so we can use it to style the active menu item
                  color: "rgb(10, 2, 126)",
                  backgroundColor: "white",
                  [`&.active`]: {
                    backgroundColor: "white",
                    color: "red",
                  },
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  sessionStorage.removeItem("token");
                  navigate("/login");
                }}
              >
                {" "}
                <h6 className=" ">Logout</h6>{" "}
              </MenuItem>
              <SubMenu label="EMPLOYEE">
                <MenuItem onClick={() => navigate("/admin/createEmployee")}>
                  {" "}
                  <h6 className=" ">Create_Emp</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/ShowAllEmployees")}>
                  {" "}
                  <h6 className=" ">Show_All_Emp</h6>{" "}
                </MenuItem>
              </SubMenu>
              <SubMenu label="Charts">
                <MenuItem onClick={() => navigate("/admin/charts")}>
                  Charts
                </MenuItem>
              </SubMenu>
              <SubMenu label="Loan buttons">
                <MenuItem onClick={() => navigate("/admin/AddLoanButton")}>
                  Add Loan Button
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/deleteLoanButton")}>
                  Delete Loan Buttons
                </MenuItem>
              </SubMenu>
              <SubMenu label="LEAD">
                <MenuItem onClick={() => navigate("/admin/createLead")}>
                  {" "}
                  <h6 className="">Create Lead</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/showLeads")}>
                  {" "}
                  <h6 className="">Show Lead</h6>{" "}
                </MenuItem>
              </SubMenu>
              {/* <SubMenu label="LOAN">
                <MenuItem onClick={() => navigate("/admin/createLead")}>
                  {" "}
                  <h6 className="">Manual Login</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/otherServices")}>
                  {" "}
                  <h6 className="">Digital Login</h6>{" "}
                </MenuItem>
              </SubMenu> */}
              <SubMenu label="ATTENDENCE">
                <MenuItem onClick={() => navigate("/admin/AttendanceSheet")}>
                  {" "}
                  <h6 className=" ">AttendanceSheet</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/AttendanceListAll")}>
                  {" "}
                  <h6 className=" ">AttendanceListAll</h6>
                </MenuItem>
              </SubMenu>
              <SubMenu label="MANAGER">
                <MenuItem onClick={() => navigate("/admin/createAreaManager")}>
                  {" "}
                  <h6 className=" ">Create Area Manager</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/showAreaManager")}>
                  {" "}
                  <h6 className=" ">Show Area Manager</h6>
                </MenuItem>
                {/* <MenuItem
                  onClick={() => navigate("/admin/createBranchManager")}
                >
                  {" "}
                  <h6 className=" ">Create Branch Manager</h6>
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/showBranchManager")}>
                  {" "}
                  <h6 className=" ">Show Branch Managers</h6>
                </MenuItem> */}
                <MenuItem
                  onClick={() => navigate("/admin/addAreaManagerAttendance")}
                >
                  {" "}
                  <h6 className=" ">Area Manager Attendance</h6>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Loan Management">
                <MenuItem onClick={() => navigate("/admin/loanDetails")}>
                  {" "}
                  <h6 className=" ">Show Loans</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/addLoan")}>
                  {" "}
                  <h6 className=" ">Add Loan</h6>
                </MenuItem>
              </SubMenu>

              <MenuItem onClick={() => navigate("/admin/addCibilBtn")}>
                {" "}
                <h6 className=" ">Add Cibil Button</h6>
              </MenuItem>
              <MenuItem onClick={() => navigate("/admin/addLoanEligibityBtn")}>
                {" "}
                <h6 className=" ">Add Check Loan Eligibility Buttton</h6>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/admin/addLoanVerificationBtn")}
              >
                {" "}
                <h6 className=" ">Add Loan Verification Button</h6>
              </MenuItem>
              <MenuItem onClick={() => navigate("/admin/deleteLinkBtns")}>
                {" "}
                <h6 className=" ">Delete Link Buttons </h6>
              </MenuItem>

              <SubMenu label="Customers">
                <MenuItem onClick={() => navigate("/admin/showCustomers")}>
                  All Customers
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/admin/customerStatusDashboard")}
                >
                  Customer Status Dashboard
                </MenuItem>
              </SubMenu>

              <SubMenu label="NOTIFICATION">
                <MenuItem onClick={() => navigate("/admin/createNotification")}>
                  {" "}
                  <h6>Create Notification</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/showNotification")}>
                  {" "}
                  <h6>Show Notification</h6>
                </MenuItem>
              </SubMenu>
              <SubMenu label="DOCUMENT">
                <MenuItem onClick={() => navigate("/admin/createDocument")}>
                  {" "}
                  <h6 className=" ">Add Document Button</h6>{" "}
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/showDocument")}>
                  {" "}
                  <h6 className=" ">Show Document Button</h6>
                </MenuItem>
                <MenuItem onClick={() => navigate("/admin/deleteDocumentBtn")}>
                  {" "}
                  <h6 className=" ">Delete Document Button</h6>
                </MenuItem>
              </SubMenu>
              <MenuItem onClick={() => navigate("/admin/changePassword")}>
                Change Password
              </MenuItem>

              {/* <MenuItem onClick={() => navigate("/admin/Incomplete")}>
                {" "}
                <h6>Incomplete</h6>{" "}
              </MenuItem>
              <MenuItem>
                {" "}
                <h6 className=" " onClick={() => navigate("/admin/ToDo")}>
                  ToDo
                </h6>
              </MenuItem>
              <MenuItem>
                {" "}
                <h6 className=" " onClick={() => navigate("/admin/Progress")}>
                  Progress
                </h6>
              </MenuItem> */}
            </Menu>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
