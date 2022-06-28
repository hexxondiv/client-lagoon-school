import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png';
import Badge from '../../../../Assets/Badge.png'
import { Link } from "react-router-dom";

import { subRoute } from './AboutItems';

export default function Education() {
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
      <div className="content">
        <div>
          <div className="patch">
            <h2>PURSUE THE TRUTH</h2>
            <h1>Our mission:</h1>
            <p>
              Partnership with parents to give an all-round education to each
              student, based on Christian principles, with emphasis on the
              dignity of the human person, integrity, leadership qualities and
              academic excellence.
            </p>
          </div>
          <div className="patch">
            <h2>FOSTER VIRTUES OF MIND, HEART AND CHARACTER</h2>
            <p>
              At The Lagoon School special care is taken to foster the virtues
              of personal integrity, self-discipline, order, honesty,
              industriousness, modesty and sense of responsibility. The School
              is committed to raising useful upright citizens. Moral education
              at the school is based on Christian principles. Activities for
              spiritual and human development are entrusted to the Opus Dei
              Prelature.
            </p>
          </div>
          <div className="patch">
            <h2>DISCOVER GREATNESS IN ORDINARY LIFE</h2>
            <p>
              What are some of the practical ways we integrate faith and work at
              Lagoon?
            </p>
            <ul>
              <li>
                Engage the world, every academic discipline, and professional
                field with ambition
              </li>
              <li>
                Work with excellence and purpose to bring joy and peace to those
                around us
              </li>
              <li>
                Respect freedom, freedom of conscience, and individuals of all
                faith traditions
              </li>
              <li>
                Pray before each class to set an intention and offer work to God
              </li>
              <li>
                Practice solidarity with those in need--locally and
                globally--through prayer and service
              </li>
              <li>
                Know that we are children of God--unique, unrepeatable and
                called to greatness
              </li>
              <li>
                To discover God's presence in our daily lives--to give our
                personal best and make our work a gift--is at the heart of
                Montrose School’s Christian identity
              </li>
            </ul>
          </div>
        </div>

        <div className="badge">
          <div className="cor">
            <img src={Badge} alt="" />

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