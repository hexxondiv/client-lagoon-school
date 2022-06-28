import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from "./LifeItems";
import Holder from '../../../../Assets/ExplaoreTwo.png'
import { Link } from "react-router-dom";

export default function Traditions() {
  const currentPath = window.location.pathname;

  return (
    <Container>
      <div className="placeholder2">
        <img src={Backdrop} alt="placeholder" />
        <div className="overlay">
          <ul>
                {subRoute?.map((sub, idx)=>{
                  return(
                      <li key={idx}>
                          <a className={sub.cName} href={sub.path}  
                          style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}>
                            {sub.title}
                          </a>
                      </li>
                  )
                  
                })
                }
              </ul>
        </div>
      </div>
      <div className="content">
        <div className="first">
          <span>
            <h2>Lagoon Traditions</h2>
          </span>

          <h4>
            Discover what it’s like to be an Lagoon Girl— a young woman who
            strives to develop her character, intellect, and faith on her way to
            becoming a leader. Life at Lagoon is full of fun traditions that
            create a vibrant community life and strengthen our students’
            friendship and school pride. Over 20 years since the school’s
            founding, these traditions continue to shape Lagoon's distinctive
            identity.
          </h4>
        </div>{" "}
      </div>
      <div className="trads col-md-12 flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-7 ">
          <div className="col-md-12 big">
            <h2>
              <span>ALL-S</span>CHOOL SERVICE DAY
            </h2>

            <div className="col-md-10 pic">
              {" "}
              <div className="col-md-12 pic"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="trads col-md-12 flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-7 ">
          <div className="col-md-12 big">
            <h2>
              <span>ALL-S</span>CHOOL SERVICE DAY
            </h2>

            <div className="col-md-10 pic">
              {" "}
              <div className="col-md-12 pic"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="trads col-md-12 flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-7 ">
          <div className="col-md-12 big">
            <h2>
              <span>ALL-S</span>CHOOL SERVICE DAY
            </h2>

            <div className="col-md-10 pic">
              {" "}
              <div className="col-md-12 pic"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="trads col-md-12 flexy">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-7 ">
          <div className="col-md-12 big">
            <h2>
              <span>ALL-S</span>CHOOL SERVICE DAY
            </h2>

            <div className="col-md-10 pic">
              {" "}
              <div className="col-md-12 pic"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ali">
        <Link to="Video.mp3">
          <button className="meet">Meet an Alumni</button>
        </Link>
      </div>
    </Container>
  );
}


const Trad =[
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  },
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  },
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  },
  {
    head:'ALL-SCHOOL SERVICEDAY',
    placeHolder: Holder,
  }
]



const Container = styled.section`
  .placeholder2 {
    height: 37rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        /* height:100% ; */
        align-items: center;
        position: absolute;
        bottom: 30%;
        width: 100% !important;
        li {
          display: flex;
          flex-direction: column;
          /* height:70% ; */
          align-items: baseline;
          justify-content: flex-end;

          a {
            text-decoration: none;
            font-size: 1.5rem;
            color: #fff;

            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
  span {
    border-bottom: solid 7px red;
  }
  .big {
    height: 900px;
    border-radius: 20px;
    border: solid 1px black;
    padding: 10px 80px 80px 120px;
    margin-top: 70px;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .big {
      padding:20px;
      text-align:center;
        }
      }













  .meet{
    background-color:red;
    color:white;
    padding:15px;
    // margin-left:50px;
    font-weight:bold;font-size:30px;
    margin-top:70px;
  }

  h2 {
    margin-bottom: 50px;
    font-weight: 400;
  }
  .ali{
    text-align:center;
  }
  .pic {
    height: 700px;
    background-color: rgb(217, 217, 217);
    border-radius: 10px;
    margin-left: 35px;
  }
  .content {
    width: 90%;
    margin: 5rem auto 0 auto;
    display: flex;
    flex-direction: column;

    .first {
      span {
        h2 {
          position: relative;
          font-size: 1.6rem;

          &::before {
            content: "";
            border-bottom: 5px solid red;
            width: 5rem;
            position: absolute;
            bottom: 0;
            top: 30px;
          }
        }
      }
      h4 {
        font-size: 1.4rem;
        line-height: 25px;
        letter-spacing: 1px;
        font-weight: 500;
      }
      button {
        width: 100%;
        /* height:4rem ; */
        font-size: 1.2rem;
        padding: 10px;
        background-color: white;
        border: 2px solid red;
        color: red;
      }
    }

    .alumni {
      justify-content: center;
      display: flex;}

      button {
        color: #fff;
        background-color: red;
        border: 2px solid red;
        padding: 15px;
        font-size: 1.4rem;
        transition: all 0.5s linear;
        cursor: pointer;
        &:hover {
          color: red;
          background-color: #fff;
          border: 2px solid red;
        }
   
    .conimages {
      display: grid;
      grid-template-columns: repeat(1 1fr);
      gap: 5rem;
      justify-content: center;

      .service {
        border: 2px solid black;
        padding: 10px;
        border-radius: 20px;

        &:nth-child(n + 2) {
          margin-top: 20px;
        }
        span {
          h2 {
            font-weight: 500;
            position: relative;
            font-size: 1.6rem;

            &::before {
              content: "";
              border-bottom: 5px solid red;
              width: 5rem;
              position: absolute;
              bottom: 0;
              top: 30px;
            }
          }
        }

        .holinds {
          width: 80%;
          margin: 0 auto;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;