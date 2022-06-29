import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Background from '../Assets/Background.png'
// import Video from '../Assets/video-1.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import { Modal,Button as Btn } from "react-bootstrap";
import {api} from "../misc/api";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [firstTime, setFirstTime] = useState(false);
  const [settings, setSettings] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fetchSiteSettings = () => {
    api.get('site-settings')
        .then(res => {
          const abridgeSettings = res.data;
          setSettings(abridgeSettings);
        })
        .catch(console.log);

  };
    useEffect(() => {
        Aos.init({  offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 120,});
        fetchSiteSettings();
    }, []);
    useEffect(() => {
             var referrer = document.referrer;
             console.log("referrer url", referrer);
            //  if (
            //    !firstTime &&
            //    (referrer == "http://localhost:3000/" ||
            //      referrer == "https://lagoon-alpha.vercel.app/")
            //  ) 
            // {
               handleShow();
              //  setFirstTime(true);
            //  }
    }, [firstTime]);
  return (
    <Section>
      <BackgroundCover>
        <img
          src={
            settings?.splash_screen_image
              ? `${process.env.REACT_APP_SERVER_URL}/images/${settings?.splash_screen_image}`
              : Background
          }
          alt=""
        />
        {/* <video src={Video} autoPlay loop muted /> */}
      </BackgroundCover>
      <BackgroundContent>
        <div className="ContentCover">
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            className="Info"
          >
            <label htmlFor="/">The {settings?.display_name}</label>
            <div className="comment">
              A SCHOOL WHERE <br /> <mark>ALL - ROUND </mark> <br />
              FORMATION IS <br /> PROVIDED{" "}
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className="play"
          >
            <div className="cover">
              <Link to="/about/virtual-tour">
                <Button>
                  <div className="mask"></div>
                  <div className="video-play">
                    <span className="icon"></span>
                  </div>
                </Button>
              </Link>
              <label htmlFor="/about/virtual-tour">
                WATCH VIDEO <br /> TOUR
              </label>
            </div>
          </div>
        </div>
      </BackgroundContent>
      {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>WELCOME TO LAGOON SCHOOL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalImg>
            <img
              src={
                settings?.welcome_pic
                  ? `${process.env.REACT_APP_SERVER_URL}/images/${settings?.welcome_pic}`
                  : Background
              }
              alt=""
            />
            {/* <video src={Video} autoPlay loop muted /> */}
          </ModalImg>
        </Modal.Body>
        <Modal.Footer>
          <Btn variant="danger" onClick={handleClose}>
            Close
          </Btn>
        </Modal.Footer>
      </Modal>
    </Section>
  );
}


const Section = styled.section`
position:relative ;
`
const ModalImg = styled.section`
  width: 100%;
  background-color: rgba(227, 64, 43,1);

  img{
    width: 100%;
    position:relative
  }
`;
const BackgroundCover = styled.div`
    height: 90vh;
    z-index:1;

    img{
        width: 100%;
        filter: brightness(60%);
        height: 100%;
        object-fit: cover;
    }

    video{
        width: 100%;
        filter: brightness(60%);
        height: 100vh;
        object-fit: cover;
    }

`

const BackgroundContent = styled.div`
        display: flex;
        flex-direction: column;
        text-align:center ;
        justify-content:center ;
        position:absolute ;
        top:0 ;
        height:100% ;
        width:100% ;
        align-items:center ;
        z-index: 0;
       .ContentCover{
           text-align:center ;
           display:grid ;
           grid-template-columns:  1fr 40%;
           width:90% ;
           margin: 0 auto ;
           justify-content:space-between ;

           .Info{
               display:flex;
               flex-direction:column;
               text-align:left ;
               gap:1rem;
               label{
                   font-size:clamp(2rem, 8vw, 2rem);
                   color:#fff;
                   text-transform:uppercase;
                   font-family:monseratSemi;

               }

               .comment{
                font-size:clamp(3rem, 10vw, 4rem);
                   color:#fff; 
                   font-weight:900px;
                   font-family:monseratSemi;
                   flex-wrap:wrap;
                   mark{
                       margin:0 ;
                       padding:0 ;
                       width: 0;
                       color:#e21020 ;
                       background-color:transparent ;
                   }
               }
           }
       } 

       .play{
           display:flex ;
           flex-direction:column ;
           text-align:center ;
           justify-content:center ;

           .cover{
            display: flex;
            text-align: center;
            justify-content: center;
            gap: 2rem;
            align-items: center;

            label{
                color:#fff ;
                font-size:clamp(2rem, 8vw, 2rem);
                text-align:left ;

            }
           }
       }
       @media screen and (min-width: 280px) and (max-width: 1080px) {
        .ContentCover{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 88%;
            align-items: baseline;
            gap: 6rem;}

           .play{
           display:flex ;
           flex-direction:column ;
           text-align:left ;
           justify-content:left ;

           .cover{
            display: flex;
            flex-direction:column ;
            text-align: left;
            justify-content: left;
            gap: 2rem;
            align-items: left !important;

            label{
                color:#fff ;
                font-size:clamp(2rem, 8vw, 2rem);
                text-align:left ;

            }
           }
       }
       }

       
`

const Button = styled.button`

       height:78px ;
       width: 78px;
       background-color:transparent ;
       transition: all .25s cubic-bezier(.645,.045,.355,1);
       position:relative ;
       border:none;
       cursor: pointer;
       .mask{
            position: absolute;
            width: 200px;
            height: 200px;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: #ccc;

            &::before{
                opacity: 0;
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                border: 3px solid currentColor;
                width: 100%;
                height: 100%;
                animation: zoomBig 1.5s linear infinite;
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                animation-delay: .5s;

            }

            &::after{
                animation-delay: 1.55s;
                opacity: 0;
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                border: 3px solid currentColor;
                width: 100%;
                height: 100%;
                -webkit-animation: zoomBig 1.5s linear infinite;
                animation: zoomBig 1.5s linear infinite;
                -webkit-transform-origin: center;
                -ms-transform-origin: center;
                transform-origin: center;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
            }

            @keyframes zoomBig{
                0%{transform:scale(.3);transform:scale(.3);opacity:.8;border-width:4px}
                25%{border-width:3px}
                50%{border-width:2px}
                to{transform:scale(1.2);transform:scale(1.2);opacity:0;border-width:1px}}
       }

       .video-play{
        width: 78px;
        height: 78px;
        font-size: 78px;
        background: #FFFFFF;
        border-color: #FFFFFF;
        position: relative;
        border-radius: 50%;
        z-index: 1;

        .icon{
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            line-height: 1;
            margin-left: 2px;
            z-index: 2;

            &::before{
                content: "";
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-left: 14px solid #111;
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);

            }
        }
       }

       /* svg{
           height:5rem ;
           color:#fff ;
           cursor: pointer;
       } */

`
