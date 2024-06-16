// import React, { useState } from "react";
// import "./Navbar.css";
// import { assets } from "../assets/assets";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   return (
//     <div className="navbar">
//       <img src={assets.logo} alt="logo" className="logo" />
//       <ul className="navbar-menu">
//         <li
//           onClick={() => setMenu("home")}
//           className={menu === "home" ? "active" : ""}
//         >
//           Home
//         </li>
//         <li
//           onClick={() => setMenu("About-us")}
//           className={menu === "About-us" ? "active" : ""}
//         >
//           About-us
//         </li>
//         <li
//           onClick={() => setMenu("World-records")}
//           className={menu === "World-records" ? "active" : ""}
//         >
//           World Records
//         </li>
//         <li
//           onClick={() => setMenu("certificate")}
//           className={menu === "certificate" ? "active" : ""}
//         >
//           Get Certificate
//         </li>
//         <li
//           onClick={() => setMenu("contact-us")}
//           className={menu === "contact-us" ? "active" : ""}
//         >
//           Contact-us
//         </li>
//       </ul>
//       <div className="navbar-right">
//         {/* <img src="" alt="search" />
//         <div className="navbar-search-icon">
//           <img src="" alt="basket" />
//           <div className="dot"></div>
//         </div> */}
//         <button>sign in</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import "./Navbar.css";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section id="navbar">
        <nav
          className={`navbar navbar-expand-lg fixed-top ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <a className="navbar-brand" style={{ color: "white" }} href="#.com">
            <b>AASIYAN</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ width: "75%", backgroundColor: "#03045e" }}
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{ backgroundColor: "white" }}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    onClick={() => setMenu("home")}
                    className={"nav-link" && menu === "home" ? "active" : ""}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setMenu("about")}
                    className={"nav-link" && menu === "about" ? "active" : ""}
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setMenu("certificate")}
                    className={
                      "nav-link" && menu === "certificate" ? "active" : ""
                    }
                    href="#tech-stack"
                  >
                    Certificate
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setMenu("videos")}
                    className={"nav-link" && menu === "videos" ? "active" : ""}
                    href="#project"
                  >
                    Videos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => setMenu("contact")}
                    className={"nav-link" && menu === "contact" ? "active" : ""}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
