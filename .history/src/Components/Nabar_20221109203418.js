import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { navMenus, navLabels } from "./MenuItems";
import Dropdown from "./Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { api, serverUrl, imageServerUrl } from "../misc/api.js";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Nabar() {
  const [click, setClick] = useState(false);

  const [settings, setSettings] = useState("");
  const [menus, setMenus] = useState([]);
  const fetchSiteSettings = () => {
    api
      .get("site-settings")
      .then((res) => {
        const abridgeSettings = res.data;
        setSettings(abridgeSettings);
      })
      .catch(console.log);
  };
  const fetchMenus = () => {
    api
      .get("menu-submenu")
      .then((res) => {
        const abridgeMenus = res.data;
        setMenus(abridgeMenus);
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchSiteSettings();
    fetchMenus();
  }, [2]);

  // console.log(settings);

  // const [setClick] = useState(false);
  const [navbarState, setNavbarState] = useState(false);

  const [activeMenu, setActiveMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,
  });

  const onMouseEnter = (e) => {
    const menuText = e.target.text.trim().toLowerCase() || "";

    if (window.innerWidth < 960) {
      setActiveMenu(false);
    } else {
      setActiveMenu({
        menu1: menuText === "about",
        menu2: menuText === "academics",
        menu3: menuText === "admission",
        menu4: menuText === "faith",
        menu5: menuText === "parents",
        menu6: menuText === "student life",
      });
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setActiveMenu(false);
    } else {
      setActiveMenu({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
      });
    }
  };

  // const closeMobileMenu = () => setClick(false)

  const openPortal = () => {
    console.log("Clicked");
    window.open(settings?.portal_url);
  };
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <NavbarContainer>
      <ContactNavbar>
        <ul className="navcont web-menu-item">
          <li className="list1">
            {" "}
            {settings?.primary_phone} &nbsp; {settings?.secondary_phone}
          </li>
          <li className="list2">{settings?.email}</li>
        </ul>
        <ul className="navcont2">
          <li className="list1">
            {" "}
            {settings?.primary_phone} <br />
            {settings?.secondary_phone}
          </li>
          <li className="list2">{settings?.email}</li>
        </ul>
      </ContactNavbar>
      <DetailsNavbar>
        <a href={"/"} className="home">
          <img
            src={`${process.env.REACT_APP_SERVER_URL}/images/${settings?.logo}`}
            alt="logo"
          />
        </a>
        <div className="menu-item">
          {navbarState ? (
            <VscChromeClose onClick={() => setNavbarState(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setNavbarState(true)} />
          )}
        </div>
        <div
          className={navbarState ? "list-container active" : "list-container "}
        >
          <ul className="link-up">
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {" "}
              <a href={"/about"}> About </a>{" "}
              {activeMenu.menu1 && (
                <Dropdown
                  menuPic={settings?.menus["about"].image}
                  menuText={settings?.menus["about"].caption}
                  menuArray={navMenus.about}
                  label={navLabels["about"]}
                />
              )}
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {" "}
              <a href={"/academics"}> Academics </a>{" "}
              {activeMenu.menu2 && (
                <Dropdown
                  menuPic={settings?.menus["academics"].image}
                  menuText={settings?.menus["academics"].caption}
                  menuArray={navMenus.academics}
                  label={navLabels["academics"]}
                />
              )}
            </li>

            <li>
              <a
                href={"/about/opus-dei"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Faith
              </a>
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {" "}
              <a href={"/admission"}> Admission </a>{" "}
              {activeMenu.menu3 && (
                <Dropdown
                  menuPic={settings?.menus["admission"].image}
                  menuText={settings?.menus["admission"].caption}
                  menuArray={navMenus.admission}
                  label={navLabels["admission"]}
                />
              )}
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {" "}
              <a href={"/student_life"}> Student Life </a>{" "}
              {activeMenu.menu6 && (
                <Dropdown
                  menuPic={settings?.menus["studentlife"].image}
                  menuText={settings?.menus["studentlife"].caption}
                  menuArray={navMenus.studentlife}
                  label={navLabels["studentlife"]}
                />
              )}
            </li>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {" "}
              <a href={"/parents"}> Parents </a>{" "}
              {activeMenu.menu5 && (
                <Dropdown
                  menuPic={settings?.menus["parents"].image}
                  menuText={settings?.menus["parents"].caption}
                  menuArray={navMenus.parents}
                  label={navLabels["parents"]}
                />
              )}
            </li>
          </ul>
          <div className="mobile-menu">
            <ul className="mainMenu">
              <li className="item" id="account">
                <a href="#account" className="btn">
                  About
                </a>
                <div className="subMenu">
                  <a
                    href={"/about/welcome-to-the-lagoon-school"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                    rel="noopener noreferrer"
                  >
                    Welcome to the Lagoon School
                  </a>{" "}
                  <a
                    href={"/about/message-from-the-principal"}
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Meet The Head
                  </a>
                  <a
                    href={"/about/education"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Educational Phylosophy & Model
                  </a>
                  <a
                    href={"/about/virtual-tour"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Virtual tour
                  </a>{" "}
                  <a
                    href={"/about/opus-dei"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Faith
                  </a>{" "}
                  <a
                    href={"/about/partnership-with-parents"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Partnership with Parents
                  </a>
                </div>
              </li>
              <li className="item" id="academics">
                <a href="#academics" class="btn">
                  Academics
                </a>
                <div className="subMenu">
                  <a
                    href={"/apply"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Academic Facilities
                  </a>{" "}
                  <a
                    href={"/fees"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Primary School
                  </a>{" "}
                  <a
                    href={"/transfer"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Secondary School
                  </a>
                  <
                    to={"/transfer"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Courses
                  </>
                  <NavLink
                    to={"/transfer"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Academic Calendar
                  </NavLink>{" "}
                </div>
              </li>
              <li className="item" id="support">
                <a href={"/about/opus-dei"} class="btn">
                  Faith
                </a>
              </li>
              <li className="item" id="admission">
                <a href="#admission" className="btn">
                  Admission
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/principal"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Admission Procedure
                  </NavLink>{" "}
                  <NavLink
                    to={"/message"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Scholarships
                  </NavLink>
                  <NavLink
                    to={"/history"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    FAQs
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Apply to Lagoos School
                  </NavLink>
                </div>
              </li>
              <li className="item" id="life">
                <a href="#life" className="btn">
                  Student Life
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/principal"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Life in Lagoon
                  </NavLink>{" "}
                  <NavLink
                    to={"/message"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Lagoon Traditions
                  </NavLink>
                  <NavLink
                    to={"/history"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Service
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Clubs & Activities
                  </NavLink>
                  <NavLink
                    to={"/Conduct"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Mentoring & Tutorials{" "}
                  </NavLink>
                </div>
              </li>{" "}
              <li className="item" id="parents">
                <a href="#parents" className="btn">
                  Parents
                </a>
                <div className="subMenu">
                  <NavLink
                    to={"/principal"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    NAFAD
                  </NavLink>{" "}
                  <NavLink
                    to={"/message"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Digital Safety
                  </NavLink>
                  <NavLink
                    to={"/history"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Lunch Menu
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Mentoring & Tutorials
                  </NavLink>
                  <NavLink
                    to={"/Conduct"}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Uniform
                  </NavLink>
                </div>
              </li>
              <li className="item">
                <button onClick={openPortal} className="mobile-portal portal">
                  PORTAL
                </button>
              </li>
            </ul>
          </div>
          <Button onClick={openPortal} className="web-portal">
            PORTAL
          </Button>
        </div>
      </DetailsNavbar>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav``;

const ContactNavbar = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  text-align: center;
  height: 60px;
  align-items: center;

  .navcont2 {
    display: none;
  }

  .navcont {
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;
    gap: 3rem;
    padding-left: 20px;

    .list1 {
      font-size: clamp(0.7rem, 1vw, 1rem);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
      &:before {
        content: "🕿";
        padding-right: 10px;
        font-size: clamp(1.1rem, 1vw, 0.9rem);
        color: red;
      }
    }

    .list2 {
      font-size: clamp(0.7rem, 1vw, 1rem);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
      line-height: break;
      &:before {
        content: "🖂";
        padding-right: 10px;
        color: red;
        font-size: clamp(0.9rem, 1vw, 1rem);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: left;
    position: relative;
    width: 100%;
    display: flex;
    text-align: center;
    height: 60px;
    align-items: center;
    padding: 0;

    .navcont {
      display: none !important;
    }

    .navcont2 {
      display: flex !important;
      justify-content: space-between;
      gap: 0;
      width: 93%;
      padding: 0;
      .list1 {
        font-size: clamp(0.7rem, 1vw, 1rem);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        &:before {
          content: "🕿";
          padding-right: 10px;
          font-size: clamp(1.1rem, 1vw, 0.9rem);
          color: red;
        }
      }

      .list2 {
        font-size: clamp(0.7rem, 1vw, 1rem);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        line-height: break;
        &:before {
          content: "🖂";
          padding-right: 10px;
          color: red;
          font-size: clamp(0.9rem, 1vw, 1rem);
        }
      }
    }
  }
`;

const DetailsNavbar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #e21020;
  z-index: 100;
  position: relative;
  height: 7rem;
  align-items: center;
  .home {
    position: relative;
    width: 20%;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .menu-item {
    display: none;
  }
  .list-container {
    display: flex;
    padding-right: 4%;
    height: 100%;
    align-items: center;

    .link-up {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0 2rem;
      height: 100%;

      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        cursor: pointer;

        a {
          text-decoration: none;
          font-size: clamp(1rem, 6vw, 1.3rem);
          color: #fff;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  @media screen and (min-width: 668px) {
    .mobile-menu {
      display: none;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      position: relative;
      width: 60%;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }

    .list-container.active {
      position: absolute;
      flex-direction: column;
      display: flex;
      justify-content: center;
      height: 750px;
      background-color: #e21020;
      top: 110px;
      right: 0;
      width: 100%;

      padding: 0;

      .link-up {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0 2rem;
        @media screen and (max-width: 620px) {
          display: none;
        }
        li {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          cursor: pointer;

          a {
            text-decoration: none;
            font-size: clamp(1rem, 6vw, 1.3rem);
            color: #fff;
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .list-container {
      position: absolute;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      right: -700px;
      top: -700px;
      transition: all 0.5s linear;
    }

    .menu-item {
      display: block;
      width: 15%;

      svg {
        font-size: 50px;
        color: rgb(40, 146, 221) !important;
      }
    }
  }
`;

const Button = styled.button`
  height: 40px;
  position: relative;
  /* top:36% ; */
  width: 6rem;
  background-color: #e21020;
  color: #fff;
  border: none;
  box-shadow: 0 5px 7px 7px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  font-size: clamp(0.9rem, 6vw, 1rem);
  font-weight: 900;
  @media screen and (max-width: 620px) {
    width: 25rem !important;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    top: 7%;
    width: 90%;
    margin: 0 auto;
  }
`;
