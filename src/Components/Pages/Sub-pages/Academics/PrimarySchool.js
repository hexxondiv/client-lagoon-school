import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './Acaitems';
import Holder from '../../../../Assets/ExplaoreTwo.png'
import "./fullCalendar.css";

export default function PrimarySchool() {
  const currentPath = window.location.pathname;

  return (
    <Container>
      <div className="placeholder2">
        <img src={Backdrop} alt="placeholder" />
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
      <div className="tent">
        <div className="first">
          <span>
            <h2>Primary Section</h2>
          </span>

          <h4>
            <mark>
              Laying the Groundwork. Strengthening the Foundation. Building the
              Bridge.
            </mark>
            In the primary school, girls develop curiosity, tenacity and
            intellectual carefulness. They research problems, brainstorm
            solutions, create prototypes, test and revise.
          </h4>
        </div>
      </div>
      <div className="con col-md-12 flexy">
        <div classname="col-md-4">
          <div className="col-md-9">
            <img src={Holder} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            <img src={Holder} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            <img src={Holder} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>

        <div className="fll col-md-10">
            <img src={Holder} alt="" className=" col-md-12"/>
            <p>
              Small classes averaging 15 encourage a high level of rapport
              between students and teachers. Our middle school faculty know how
              to tap and channel the intellectual energy and passion of middle
              school girls.
            </p>
            <p>
              During the primary school years, students gradually take ownership
              of their learning. They grow in self-knowledge, build and value
              friendships, and come to understand their responsibility to each
              other as well as to the wider community.
            </p>
            <p>
              Our primary school curriculum sets girls up for success in our
              rigorous upper school college preparatory, honors lists, while a
              wide variety of{" "}
              <a href="/academics/club_&_activities">curricular activities</a>{" "}
              allows them to explore and develop interests.
            </p>
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
        width:100% !important;

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
    width:90% ;
    margin:5rem auto 0 auto ;
    display:flex ;
    flex-direction:column ;

   .first{
        span{

            h2{
              position:relative ;
              font-size:1.6rem ;

              
              &::before{
                content: '';
                border-bottom: 5px solid red;
                width: 5rem;
                position: absolute;
                bottom: 0;
                top: 30px;
              }
            }
            }
            h4{
                font-size:1.4rem ;
                line-height:30px ;
                letter-spacing:1px ;
                font-weight:500 ;

                mark{
                  font-weight:900 ;
                  background-color:#fff;
                }
              }
            button{
              width:100% ;
              /* height:4rem ; */
              font-size:1.2rem;
              padding:10px ;
              background-color:white;
              border:2px solid red ;
              color:red ;
            }
   }

  .conimages{
    display:grid ;
    grid-template-columns:repeat(3,20rem) ;
    /* gap:5rem; */
    justify-content: space-around;

    div{

      div{
         
        p{
          font-weight:900 ;
          font-size:20px ;
          margin-top:3rem ;
        }
      }
    }

    .fll{
      grid-column:1/4;
      margin-top:5rem ;
      img{
        width:100% ;
      height:467px ;
      object-fit:cover ;
      }

      p{
        font-size:20px;
        font-weight:900;
      }
    }

    img{
      width:100% ;
      height:100% ;
      object-fit:cover ;
    }
  }

   
   
  }


 

`