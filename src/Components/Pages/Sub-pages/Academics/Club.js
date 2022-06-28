import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './Acaitems';
import Accordion,{accordionData2} from '../About/Accordion';
import "./fullCalendar.css";

export default function Club() {

//   const currentPath = window.location.pathname;


 

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
                    //   style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}
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
        <div className="first">
          <span>
            <h2>Clubs and Activies</h2>
          </span>
          <div>
            <h4>
              We encourage students to participate in extracurricular events,
              pursue their personal interests, and create new clubs each school
              year. Lagoon is currently home to many Primary and Secondary
              School clubs, many of them initiated by students. These clubs and
              activities encourage students to take initiative and
              responsibility in leading activities that allow them to explore
              their talents and passions outside the classroom.
            </h4>
          </div>
          <div className="accordion">
            {accordionData2.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 box"></div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 box"></div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 box"></div>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 ">&nbsp;</div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 box"></div>
          <button className="reg col-md-12">REGISTER FOR A CLUB</button>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">&nbsp;</div>
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
              margin: 5rem 0 ;
              
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
                line-height:35px ;
                letter-spacing:1px ;
                font-weight:500 ;
              }

              .lists{

                table{
                    width:100% ;
                    border-collapse:collapse;
                    tbody{

                      tr{
                        text-align:left ;
                        vertical-align:center ;
                        align-items:center ;
                        
\                        &:first-child{
                          background:#d9d9d9;
                        }
                        &:last-child{
                          height:10rem ;
                        }
                        
                        td{
                          border:2px solid #000 !important;
                          padding-left: 5rem;
                          label{


                            p{
                              padding:0 ;
                              margin: 10px 0 ;
                              font-style:italic;
                              font-size:18px ;
                              align-items:center ;
                            }
                          }
                          select{
                              height: 30px;
                              width: 15%;
                              position:relative ;
                              &::after{
                                content:'hiuwejijw>' ;
                                position:absolute ;
                                right:0 ;
                              }

                              &::placeholder{
                                color:#000 ;
                                font-size:18px ;
                                text-transform:uppercase ;
                                vertical-align:center ;
                                align-self:center ;
                                padding-left:10px;
                              }

                             option{

                              &:disabled{
                                color:#000 ;
                                font-size:18px ;
                                text-transform:uppercase ;
                                vertical-align:center ;
                                align-self:center ;
                                padding-left:10px;
                              }
                             }
                            }
                        }
                      }
                    }
                }
              }
           
   }



   
   
  }


 

`