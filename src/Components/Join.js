import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Backdrop from '../Assets/Backdrop.png'

export default function Join() {

    const Apply = [
      {
        Join: "Inquire",
        link: "/about",
      },
      {
        Join: "Apply",
        link: "https://lagoonweb.eschoolng.net/primary/application/start_application.php",
        target: "_blank",
      },
      {
        Join: "Visit us",
        link: "/contact",
      },
    ];

  return (
    <JoinCov>
        <Bacdrop>
            <div className='drop'>
                <img src={Backdrop} alt="" />
            </div>
            <div className='keep'>
                <div className='join-us'>
                    <h4>Join Us</h4>
                </div>
                    <ul className=' apply-list'>
                        {Apply.map((app, index) =>{
                            return(
                                <li key={index}>
                                    <a href={app.link} target={app.target?app.target:"_parent"}>
                                        {app.Join}
                                    </a>
                                </li>
                            )
                        })

                        }

                        
                    </ul>

            </div>
            
        </Bacdrop>
    </JoinCov>
  )
}




const Bacdrop = styled.div`
    position:relative ;
    width:100% ;
    height:100% ;
    display:flex ;
    flex-direction:column ;
    align-items: center;
    gap: 10rem;
    /* background-image: url(${Backdrop});
    background-repeat:no-repeat ;
    background-size:cover ;
    background-attachment: fixed;
    background-color:rgba(0,0,0,0.7) ; */
    /* filter: brightness(60%); */
    /* -webkit-filter: brightness(70%); */
    .drop{
        position:relative ;
        height:100% ;
        width:100% ;

        img{
            width:100% ;
            height:100% ;
            object-fit:cover ;
        }
    }

    .keep{
        position:absolute ;
        background-color:rgba(0,0,0,0.7) ;
        width:100% ;
        height:100% ;
        justify-content:center ;
        left:0 ;
        right:0 ;
        display:flex ;
        flex-direction:column ;
        justify-content:space-around ;
    }
    .join-us{
        width: 60% ;
        margin: 0 auto ;
        z-index:10 ;
        text-align:center ;
        h4{
            color:#fff ;
            padding:20px 0 ;
            font-size:clamp(1.7rem, 6vw, 1.9rem);
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
        }
    }

    .apply-list{
        list-style:none ;
        padding: 0;
        display: grid;
        grid-template-columns: 300px 300px 300px;
        grid-gap: 10px 100px;
        transition: all 7s  linear ;
        justify-content:center ;

        li{
            border:4px solid #fff;
            padding:20px ;
            text-align:center ;

            a{
                color:#fff ;
                text-decoration:none ;
                font-size:clamp(2.2rem, 6vw, 1.5rem) ;
                font-weight:1000
            };
            &:hover{
                transform:scale(1.2)
            }
        }

    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        gap: 15rem;


        .apply-list{
        list-style:none ;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(1, 300px);
        grid-gap: 10px 100px;
        transition: all 7s  linear ;
        gap: 7rem;

        li{
            border:2px solid #fff;
            padding:20px ;
            text-align:center ;

            a{
                color:#fff ;
                text-decoration:none ;
                font-size:clamp(1.3rem, 6vw, 1.5rem) ;
            };
            &:hover{
                transform:scale(1.2)
            }
        }

    }

    }


`

const JoinCov = styled.section`
        height:40rem;
        position:relative;

        @media screen and (min-width: 280px) and (max-width: 1080px) {
            height:60rem;


        }
`