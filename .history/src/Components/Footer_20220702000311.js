import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import SchLogo from "../Assets/Logo.png";
import Icofont from "react-icofont";
import "./Footer.css";
import {api} from "../misc/api";



// export default function Footer() {
//     const Adress =[ {
//         Logo:Logo,
//         ParagraphOne:'Ladipo Omotesho Cole Street, Off Adewunmi Adebimpe Drive,Lekki Phase 1, Lekki - Epe Expressway Lagos P.O Box 71166 Victoria Island   Nigeria',
//         FirstContact:'Primary Section (+234) 01 3426109',
//         SecondContact:'Secondary Section (+234) 704 442 7923',
//     }];

//     const UseFul =[ 
//         {title:'NAWA', link:'/' },
//         {title:'Elara Study centre', link:'/' },
//         {title:'Opus dei', link:'/' },
//         {title:'wavecrest study centre', link:'/' },
//         {title:'roseville school ', link:'/' },
//         {title:'whitesands  school ', link:'/' },
//      ];

//      const Follow =[ 
//         {Img:Facebook, link:'/' },
//         {Img:Insta, link:'/' },
//         {Img:Twitter, link:'/' },
        
       
//      ];
//   return (
//     <FooterSection>
//       <div className='col-1'>
//           {Adress.map((add, index)=>{
//               return(
//                   <div key={index}>
//                         <img src={add.Logo} alt="" />
//                         <p>{add.ParagraphOne}</p>
//                         <div>
//                             <p>{add.FirstContact}</p>
//                             <p> {add.SecondContact}</p>
//                         </div>
//                   </div>
//               )
//           })}
//       </div>
//       <div className='col-2'>
//             <Header>Useful Links</Header>

//               {UseFul.map((use, index)=>{
//                   return(
//                       <FooterLinks to={use.link}  key={index}>
//                           {use.title}
//                       </FooterLinks>
//                   )
//               })

//               }
//       </div>
//       <div className='col-3'>
//             <Header>Follow us</Header>
//             <div className='social'>
//                 {Follow.map((follow, index)=>{
//                     return(
//                         <FollowLinks to={follow.link}  key={index}>
//                             <img src={follow.Img} alt="social links" /> 
//                         </FollowLinks>
//                     )
//                 })

//                 }

//             </div>

              

//       </div>
//     </FooterSection>
//   )
// }


// const FooterSection = styled.section`
//     display:grid;
//     grid-template-columns: 1fr  1fr  1fr;
//     gap:4rem;
//     background:#0a545f;
//     padding:40px 80px;
//     overflow-x:hidden ;
//     .col-1{


//         p{
//             font-size:clamp(.6rem, -0.875rem + 8.333vw, 1.2rem);
//             color:#fff ;
//         }
//     }

//     .col-2{
//         display: flex;
//         flex-wrap: wrap;

//         a{
//             width:50% ;
//             color:#fff ;
//             text-decoration:none ;
//             font-size:clamp(1rem, -0.875rem + 8.333vw, 1.2rem);
//             font-weight:400;
//         }
//     }

//     .col-3{
//             display: flex;
//             flex-direction:column ;
//             position:relative ;

//             .social{
//             width:100% ;
//             position:relative ;
//             display:flex ;
//             gap:2rem;
            
//         }
//     }
//     @media screen and (min-width: 280px) and (max-width: 1080px) {
//         display:grid;
//         grid-template-columns:repeat(1, 1fr);
//         gap:4rem; 
//         padding:20px 10px;

//         .col-1{
//             img{
//                 width:80%;
//             }
//         }
//     }
// `

// const Header = styled.header`
//     position:relative ;
//     display:flex ;
//     width:100% ;
//     color:#fff ;
//     font-size: clamp(1rem, -0.875rem + 8.333vw, 1.7rem);
//     font-weight:900 ;
// `;

// const FooterLinks = styled(Link)`
//         display:grid;
//         grid-template-columns: 1fr  1fr  ;

        
// `;

// const FollowLinks = styled(Link)`
  
//   img{
//       height:50px ;
//       width:50px;
//       object-fit:contain ;
//   }

// `;






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
