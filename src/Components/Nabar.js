import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Logo from '../Assets/Logo.png'
// import { Link } from 'react-router-dom';
import {navMenus,navLabels} from './MenuItems';
import Dropdown from './Dropdown';
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { api, serverUrl, imageServerUrl } from "../misc/api.js";




export default function Nabar() {
    const [settings, setSettings] = useState('');
    const [menus, setMenus] = useState([]);
    const fetchSiteSettings = () => {
        api.get('site-settings')
            .then(res => {
                const abridgeSettings = res.data;
                setSettings(abridgeSettings);
            })
            .catch(console.log);

    };
    const fetchMenus = () => {
        api.get('menu-submenu')
            .then(res => {
                const abridgeMenus = res.data;
                setMenus(abridgeMenus);
            })
            .catch(console.log);

    };
    useEffect(() => {
        fetchSiteSettings();
        fetchMenus();
    },[2]);


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
    })
  
    const onMouseEnter = (e) => {
      const menuText = e.target.text.trim().toLowerCase() || '';
  
      if (window.innerWidth < 960){
        setActiveMenu(false);
      }else{
        setActiveMenu({
          menu1: menuText === 'about',
          menu2: menuText === 'academics',
          menu3: menuText === 'admission',
          menu4: menuText === 'faith',
          menu5: menuText === 'parents',
          menu6: menuText === 'student life',
          
        })
      }
    }
  
    const onMouseLeave = () =>{
      if(window.innerWidth < 960){
        setActiveMenu(false);
      }else{
        setActiveMenu({
          menu1: false,
          menu2: false,
          menu3: false,
          menu4: false,
          menu5: false,
          menu6: false,
        })
      }
    };
  
    // const closeMobileMenu = () => setClick(false)

    const openPortal = () => {
      console.log("Clicked");
      window.open(settings?.portal_url);
    };

  return (
    <NavbarContainer>
      <ContactNavbar>
        <ul className="navcont">
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
              alt="logo" />
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
                    menuPic={settings?.menu_pic}
                    menuText={settings?.menu_text}
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
                    menuPic={settings?.menu_pic}
                    menuText={settings?.menu_text}
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
                    menuPic={settings?.menu_pic}
                    menuText={settings?.menu_text}
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
                    menuPic={settings?.menu_pic}
                    menuText={settings?.menu_text}
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
                    menuPic={settings?.menu_pic}
                    menuText={settings?.menu_text}
                  menuArray={navMenus.parents}
                  label={navLabels["parents"]}
                />
              )}
            </li>
            {/* <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Student Life </Link>      {activeMenu.menu5 && <Dropdown menuArray={navMenus.studentlife}/>}</li>
                <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> <Link to={'/'} onClick={closeMobileMenu}> Parents </Link>      {activeMenu.menu6 && <Dropdown menuArray={navMenus.parents}/>}</li> */}
          </ul>
          <Button onClick={openPortal}>
              PORTAL
          </Button>
        </div>
      </DetailsNavbar>
    </NavbarContainer>
  );
}





const NavbarContainer = styled.nav``

const ContactNavbar = styled.div`
    position:relative ;
    width:100% ;
    display: flex ;
    text-align:center ;
    height: 60px ;
    align-items:center ;

    .navcont2{
      display:none ;
    }

    .navcont{
        padding: 0;
        list-style:none;
        margin:0 ;
        display:flex ;
        gap:3rem;
        padding-left:20px  ;


        .list1{
            font-size:clamp(0.7rem, 1vw, 1rem);
            display:flex ;
            justify-content:center ;
            align-items:center ;
            text-align:left ;
            &:before{
                content: '🕿';
                padding-right:10px ;
                font-size:clamp(1.1rem, 1vw, 0.9rem);
                color: red;

            }
        }

        .list2{
          font-size:clamp(0.7rem, 1vw, 1rem);
            display:flex ;
            justify-content:center ;
            align-items:center ;
            text-align:left ;
            line-height:break ;
            &:before{
                content: '🖂';
                padding-right:10px ;
                color: red;
                font-size:clamp(0.9rem, 1vw, 1rem);

            }
        }


    }

    

    @media screen and (min-width: 280px) and (max-width: 1080px) {
      flex-direction:column;
      justify-content: left;
      position:relative ;
      width:100% ;
      display: flex ;
      text-align:center ;
      height: 60px ;
      align-items:center ;
      padding:  0   ;

        .navcont{
          display:none !important;
        }

        .navcont2{
          display:flex  !important;
          justify-content:space-between ;
          gap:0;
          width: 93%;
          padding:0 ;
          .list1{
            font-size:clamp(0.7rem, 1vw, 1rem);
            display:flex ;
            justify-content:center ;
            align-items:center ;
            text-align:left ;
            &:before{
                content: '🕿';
                padding-right:10px ;
                font-size:clamp(1.1rem, 1vw, 0.9rem);
                color: red;

            }
        }

        .list2{
          font-size:clamp(0.7rem, 1vw, 1rem);
            display:flex ;
            justify-content:center ;
            align-items:center ;
            text-align:left ;
            line-height:break ;
            &:before{
                content: '🖂';
                padding-right:10px ;
                color: red;
                font-size:clamp(0.9rem, 1vw, 1rem);

            }
        }

        }
    }
`

const DetailsNavbar = styled.div`
    display:flex ;
    width:100% ;
    justify-content:space-between ;
    background-color:#e21020;
    z-index:100 ;
    position:relative ;
    height: 7rem;
    align-items: center;
.home{
    position: relative;
    width: 20%;
    img{
        height:100%;
        width:100% ;
        object-fit:contain ;
    }
}

.menu-item{
    display:none;
}
.list-container{
    display:flex ;
    padding-right: 4%;
    height: 100%;
    align-items: center;

  .link-up{
        display:flex ;
        gap:1.5rem;
        list-style:none ;
        margin: 0;
        padding: 0 2rem;
        height:100% ;
    li{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        cursor: pointer;

      a{
          text-decoration:none;
          font-size:clamp(1rem, 6vw, 1.3rem);
          color:#fff ;
          height:100% ;
        display:flex;
        align-items:center;
      }}
  }}
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home{
        position: relative;
        width: 60%;
    img{
        height:100%;
        width:100% ;
        object-fit:contain ;
    }
}

    .list-container.active{
      position: absolute;
      flex-direction: column;
      display: flex;
      justify-content: center;
      /* justify-content: space-between; */
      height: 500px;
      background-color: #e2102073;
      background-color:#e21020;
      top:110px;
      right:0 ;
      width: 100%;
      padding: 0;

      .link-up{
        display:flex ;
        flex-direction:column ;
        gap:2rem;
        list-style:none ;
        margin: 0;
        padding: 0 2rem;
    li{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        cursor: pointer;

      a{
          text-decoration:none;
          font-size:clamp(1rem, 6vw, 1.3rem);
          color:#fff ;
          height:100% ;
        display:flex;
        align-items:center;
      }}
  }

    }
    .list-container{
      position: absolute;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;
      right:-700px;
      top:-700px;
        transition: all .5s linear;

    }


    .menu-item{
        display:block;
        width:15% ;

        svg{
          font-size:50px ;
          color:#fff ;
        }
    }
    
  }

  

`

const Button = styled.button`
    height: 40px;
    position: relative;
    /* top:36% ; */
    width: 6rem ;
    background-color:#e21020;
    color:#fff ;
    border: none;
    box-shadow: 0 5px 7px 7px rgba(0, 0 , 0, 0.2);
    transition:all 0.5s ease ;
    font-size:clamp(.9rem, 6vw, 1rem);
    font-weight:900;

    a{
      text-decoration:none ;
      color:#fff ;
    }

    &:hover{
        transform:scale(1.1);
        cursor:pointer;
    }


    @media screen and (min-width: 280px) and (max-width: 1080px) {
      top:7% ;
      width: 90% ;
      margin:0 auto ;
    }
`
