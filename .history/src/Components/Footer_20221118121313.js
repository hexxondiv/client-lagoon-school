import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import SchLogo from "../Assets/Logo.png";
import Icofont from "react-icofont";
import "./Footer.css";
import {api} from "../misc/api";









function Footer() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const [isShown3, setIsShown3] = useState(true);
  const [settings, setSettings] = useState('');
  const [ulinks, setULinks] = useState([]);

  const fetchSiteSettings = () => {
    api.get('site-settings')
        .then(res => {
          const abridgeSettings = res.data;
          setSettings(abridgeSettings);
        })
        .catch(console.log);

  };

  const fetchUsefulLinks = () => {
    api.get('useful-links')
        .then(res => {
          const abridgeULinks = res.data;
          setULinks(abridgeULinks);
        })
        .catch(console.log);

  };
  // console.log(ulinks)

  useEffect( ()=>{
    fetchSiteSettings();
    fetchUsefulLinks();

  },[]);

  return (
    <>
      <footer className="footer ">
        <div className="col-md-12 flexy">
          <div className="col-md-5">
            <Link to={"/"}>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/images/${settings?.logo}`}
                alt="logo"
                className="footerlogo"
              />
            </Link>{" "}
            <p>
              {" "}
              {settings?.address}
              <br /> <br /> Secondary: {settings?.secondary_phone} <br />
              Primary: {settings?.primary_phone} <br /> <br />
              <a href="#"> Direction</a>
            </p>
          </div>

          <div className="col-md-3">&nbsp;</div>

          <div className="col-md-4 last">
            <h3>Useful Links</h3>

            <ul className="list-unstyled">
              {ulinks?.map((link, index) => {
                return (
                  <li>
                    <a href={link.url} target={link.target}>
                      {link.title}
                    </a>
                  </li>
                );
              })}{" "}
              {/*<li>*/}
              {/*  <a href="/ESC">Elara Study Center</a>*/}
              {/*</li>{" "}*/}
              {/*<li>*/}
              {/*  <a href="/Whitesand">Whitesand School</a>*/}
              {/*</li>{" "}*/}
              {/*<li>*/}
              {/*  <a href="/ROseville">Rosevile School</a>*/}
              {/*</li>{" "}*/}
              {/*<li>*/}
              {/*  <a href="/OpusDei">Opus Dei</a>*/}
              {/*</li>{" "}*/}
              {/*<li>*/}
              {/*  <a href="#">NAWA</a>*/}
              {/*</li>*/}
            </ul>

            <ul className="list-inline none">
              <li className="list-inline-item">
                <a href={settings?.facebook} target="_blank">
                  <Icofont icon="icofont-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={settings?.instagram} target="_blank">
                  <Icofont icon="icofont-instagram" />
                </a>
              </li>{" "}
              <li className="list-inline-item" target="_blank">
                <a href={settings?.twitter}>
                  <Icofont icon="icofont-twitter" />
                </a>
              </li>{" "}
              <li className="list-inline-item">
                <a href={settings?.youtube}>
                  <Icofont icon="icofont-youtube-play" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className=" flexy boda">
        <div className="col-md-3 copi">
          <p>
            &copy; {new Date().getFullYear()} The {settings?.display_name} - All
            Rights Reserved
          </p>
        </div>
        <div className="col-md-7">&nbsp;</div>
        <div className="col-md-2 lastcopi">
          <p>
            <a href="inquiry.html">Contact Us</a> <span>|</span> Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
