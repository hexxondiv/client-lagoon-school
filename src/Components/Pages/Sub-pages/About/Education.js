import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png';
import Badge from '../../../../Assets/Badge.png'
import { Link } from "react-router-dom";

import { subRoute } from './AboutItems';
import {api} from "../../../../misc/api";

export default function Education() {
  const currentPath = window.location.pathname;

  const [pageData, setPageData] = useState('');

  const fetchPageData = () => {
    api.get('about/educational-philosophy')
        .then(res => {
          const abridgePageData = res.data;
          setPageData(abridgePageData);
        })
        .catch(console.log);

  };

  useEffect(() => {
    fetchPageData();
  },[]);
  console.log(pageData);

  return (
    <Container>
      <div className="placeholder2">
        <img
          src={
            `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.banner}` ??
            Backdrop
          }
          alt="placeholder"
        />
        <div className="overlay">
          <ul>
            {subRoute?.map((sub, idx) => {
              return (
                <li key={idx}>
                  <a
                    className={sub.cName}
                    href={sub.path}
                    style={{
                      color:
                        sub.path.toString() === currentPath.toString()
                          ? "red"
                          : "",
                      backgroundColor:
                        sub.path.toString() === currentPath.toString()
                          ? "#fff"
                          : "",
                      padding:
                        sub.path.toString() === currentPath.toString()
                          ? "20px"
                          : "",
                      border:
                        sub.path.toString() === currentPath.toString()
                          ? "2px solid red"
                          : "",
                      borderRadius:
                        sub.path.toString() === currentPath.toString()
                          ? "20px"
                          : "",
                    }}
                  >
                    {sub.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="content">
        <div>
          <div className="patch">
            <h2>FOSTER VIRTUES OF MIND, HEART AND CHARACTER</h2>
            <p>
              <span
                dangerouslySetInnerHTML={{ __html: pageData?.content2 }}
              ></span>
            </p>
          </div>
          <div className="patch">
            <h2>DISCOVER GREATNESS IN ORDINARY LIFE</h2>
            <p>
              <span
                dangerouslySetInnerHTML={{ __html: pageData?.content }}
              ></span>
            </p>
          </div>
        </div>

        <div className="badge">
          <div className="cor">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_1}` ??
                Badge
              }
              alt=""
            />

            <Link to="Video.mp4">
              <button>Meet an alumni</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}




const Container = styled.section`

  .placeholder2{
    height:37rem ;
    position:relative ;

    img{
      width:100% ;
      height:100% ;
      object-fit:cover ;
    }

    .overlay{
      position:absolute ;
      top:0 ;
      background-color:rgba(0,0,0,0.5) ;
      width:100% ;
      height:100% ;

      ul{
        padding:0 ;
        list-style:none ;
        display:flex ;
        justify-content:center ;
        flex-wrap:wrap ;
        gap:2rem;
        /* height:100% ; */
        align-items:baseline ;
        position: absolute;
        bottom: 30%;

        li{
          display:flex ;
          flex-direction:column ;
          /* height:70% ; */
          align-items:baseline ;
          justify-content:flex-end ;

          a{
            text-decoration:none ;
            font-size:1.5rem;
            color:#fff ;

            &:hover{
              color: red;
            }
          }
        }
      }
    }
  }

  .content{
    display:grid ;
    grid-template-columns:1fr 35%;
    width:90% ;
    margin:0 auto ;
    margin-top:7rem ;

    .patch{
        padding:20px;
        background-color:#d9d9d9;
        border-radius:20px;

        &:nth-child(n+2){
          margin-top: 3rem;
        }
        &:last-child{
          margin-bottom:3rem;
        }

        h2{
              position:relative ;
              
              &::before{
                content: '';
                border-bottom: 5px solid red;
                width: 5rem;
                position: absolute;
                bottom: 0;
                top: 30px;
              }
            }

            h1{
              font-weight:900 ;
              font-size:20px ;
            }

            p{
              width:70% ;
              font-size:1.3rem ;
            }

            ul{
              font-size:1.2rem ;

            }
    }


    .badge{
      justify-content:center ;
      display:flex ;

      .cor{
        display:flex ;
        flex-direction:column;
          img{
            width:20rem ;
            }

            button{
              font-size:1.3rem;
              background:#fff;
              padding:10px ;
              border:2px solid red ;
              color:red ;
              font-weight:900;
              margin-top: 4rem;
            }

      }

     
    }
  }


 

`
