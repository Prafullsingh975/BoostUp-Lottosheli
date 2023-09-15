import React from "react";
import blog1 from "../assets/blog.jpg";
import blog2 from "../assets/blog2.jpg";

export default function Footer() {
  return (
    <>
      <div className="relative flex w-full gap-10 bg-[#222222] px-20 pt-20  text-gray-500 max-md:flex-col md:h-[90vh]">
        <div className="flex flex-col gap-6 md:w-1/4">
          <h1 className="text-lg font-bold uppercase text-white">
            contact information
          </h1>
          <p className="flex w-full gap-5 duration-200 hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.438 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125ZM12 12q.825 0 1.413-.587T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Z"
              />
            </svg>{" "}
            2130 Fulton Street San Diego, CA 94117-1080 USA
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"
              />
            </svg>{" "}
            1-800-1234-567
          </p>
          <p className="flex w-full gap-5 text-white duration-200 hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
              />
            </svg>{" "}
            email@gami.com
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M19.5 16c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5m-5.29 5H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v9.21c-.5-.13-1-.21-1.5-.21c-.17 0-.33 0-.5.03V8H5v11h9.03c-.03.17-.03.33-.03.5c0 .5.08 1 .21 1.5Z"
              />
            </svg>

            <div>
              <p>Mon: Closed</p>
              <p>Thu–Fri: 11:00am – 8:00pm</p>
              <p className="w-full">Sat–Sun: 8:00am – 10:00pm</p>
            </div>
          </p>
        </div>
        <div className="flex flex-col gap-6 md:w-1/5">
          <h1 className="text-lg font-bold uppercase text-white">
            recent blog posts
          </h1>

          <div className="flex w-full gap-5">
            <img src={blog1} alt="" />
            <div>
              <p className="italic">2 days ago</p>
              <p className="text-white">How Dancers Cope With Mental Stress</p>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <img src={blog2} alt="" />
            <div>
              <p className="italic">2 days ago</p>
              <p className="text-white">How Dancers Cope With Mental Stress</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-1/5">
          <h1 className="text-lg font-bold uppercase text-white">Socials</h1>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
              />
            </svg>
            Facebook
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M0 0h24v24H0z" />
                <path
                  fill="white"
                  d="M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186l-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107l-.081.043c-1.315.663-2.518.952-3.827.9c-1.056-.04-1.446 1.372-.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332l.393-.779l.44-.862l.214-.434l.118-.247c.265-.565.456-1.033.574-1.43l.014-.056l.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a.997.997 0 0 0-.231.057l-.086.038a7.46 7.46 0 0 1-.88.36l-.356.115l-.271.08l-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z"
                />
              </g>
            </svg>
            Twitter
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M27.39 13.82H16.21v4.63h6.44c-.6 2.95-3.11 4.64-6.44 4.64a7.09 7.09 0 0 1 0-14.18a7 7 0 0 1 4.42 1.58L24.12 7a12 12 0 1 0-7.91 21c6 0 11.45-4.36 11.45-12a9.56 9.56 0 0 0-.27-2.18Z"
              />
            </svg>{" "}
            Google
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M0 0h24v24H0z" />
                <path
                  fill="white"
                  d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM9 9v6a1 1 0 0 0 1.514.857l5-3a1 1 0 0 0 0-1.714l-5-3A1 1 0 0 0 9 9z"
                />
              </g>
            </svg>
            Youtube
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 256 256"
            >
              <g fill="white">
                <path
                  d="M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48Zm-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40Z"
                  opacity=".2"
                />
                <path d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
              </g>
            </svg>{" "}
            Instagram
          </p>
        </div>

        <div className="flex flex-col gap-6 md:w-1/5">
          <h1 className="text-lg font-bold uppercase text-white">
            Quick Links
          </h1>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
              />
            </svg>
            About
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
              />
            </svg>
            Classes
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
              />
            </svg>
            Gallery
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
              />
            </svg>
            Training Programs
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
              />
            </svg>
            Blogs
          </p>
          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z"
              />
            </svg>
            Contact us
          </p>
        </div>
        <div className="flex flex-col gap-6 md:w-1/5">
          <h1 className="text-lg font-bold uppercase text-white">
            Twitter Feed
          </h1>

          <p className="flex w-full gap-5 duration-200  hover:text-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M0 0h24v24H0z" />
                <path
                  fill="white"
                  d="M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186l-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107l-.081.043c-1.315.663-2.518.952-3.827.9c-1.056-.04-1.446 1.372-.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332l.393-.779l.44-.862l.214-.434l.118-.247c.265-.565.456-1.033.574-1.43l.014-.056l.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a.997.997 0 0 0-.231.057l-.086.038a7.46 7.46 0 0 1-.88.36l-.356.115l-.271.08l-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z"
                />
              </g>
            </svg>
          </p>
        </div>
      </div>
      <div className="h-[10vh] w-full items-center justify-center bg-[#0E0E0E] px-20 py-5 text-gray-500 ">
        © 2023 All Rights Reserved Terms of Use and Privacy Policy
      </div>
    </>
  );
}
