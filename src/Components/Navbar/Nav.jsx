import React, { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { IoCloseOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

function Nav({ loginClicked, signupClicked }) {
  const [toggle, setToggle] = useState(false);

  const { searchTerm, setSearchTerm } = useAppContext();

  const handleSearchClear = () => {
    setSearchTerm("");
  };

  const toggleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className=" fixed h-20 md:h-24 ">
      <div className=" bg-stone-200 nav__bar w-full h-20 fixed flex flex-row items-center  justify-between p-6">
        <div className=" text-xl md:text-3xl font-semibold">
          <span className=" text-blue-600 text-2xl md:text-5xl font-semibold">
            N
          </span>
          anoquest
        </div>

        <div className="  flex flex-row items-center justify-end md:w-8/12">
          {/* search bar for small screens  */}

          <div className=" md:hidden bg-white bg-transparent p-1 rounded-lg w-2/3 flex flex-row items-center justify-between mr-6">
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-8 w-10/12 rounded-lg font-thin  p-2 "
            ></input>
            {searchTerm && (
              <span className=" text-2xl" onClick={handleSearchClear}>
                <IoCloseOutline />
              </span>
            )}
          </div>

          {/* - - - - - - -  - */}

          <div className=" nav__elements md:flex flex-row items-center md:text-2vh ">
            <ul className=" uppercase font-bold flex items-center">
              <li className=" float-right m-2">
                {" "}
                <Link to="/" className="">
                  Home{" "}
                </Link>{" "}
              </li>
              <li className=" float-right m-2">
                {" "}
                <Link to="about" className="">
                  About{" "}
                </Link>{" "}
              </li>
              <li className=" float-right m-2">
                {" "}
                <Link to="course" className="">
                  Course{" "}
                </Link>{" "}
              </li>

              <div className=" bg-white bg-transparent p-2 rounded-lg w-36 flex flex-row items-center justify-between">
                <input
                  type="text"
                  placeholder="Search here..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-8 w-10/12 rounded-lg font-thin p-2"
                ></input>
                {searchTerm && (
                  <span onClick={handleSearchClear}>
                    <IoCloseOutline />
                  </span>
                )}
              </div>

              <li className=" float-right m-4">
                {" "}
                <button
                  onClick={signupClicked}
                  className=" transition-all duration-300 border-2 bg-white hover:bg-blue-600
                     text-black hover:text-white h-10 rounded-sm w-16"
                >
                  Sign{" "}
                </button>{" "}
              </li>
              <span onClick={loginClicked} className=" text-2xl">
                <MdAccountCircle />{" "}
              </span>
            </ul>
            <span
              className="block md:hidden toggle text-4xl"
              onClick={toggleClick}
            >
              {toggle ? <IoMdClose /> : <FiAlignRight />}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`${
          toggle ? "mob__nav-slideOut" : "mob__nav-slideIn"
        } mob__nav z-50`}
      >
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/course"> Course </Link>{" "}
          </li>
          <li>
            {" "}
            <button onClick={signupClicked}> SIGNIN </button>
          </li>
          <li>
            {" "}
            <button onClick={loginClicked}> LOGIN </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
