import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import ExploreOne from '../Assets/ExploreOne.png'
import ExploreTwo from '../Assets/ExplaoreTwo.png'
import Roll from 'react-reveal/Roll';
import { Link } from "react-router-dom";

import {
    // Rotate,Zoom,
    Bounce } from 'react-reveal';
import {api} from "../misc/api";
import Aos from "aos";

export default function Welcome() {

    const [pageData, setData] = useState('');
    const fetchData = () => {
        api.get('landing-page')
            .then(res => {
                const abridgeData = res.data;
                setData(abridgeData);
            })
            .catch(console.log);

    };
    useEffect(() => {
        fetchData();
    }, []);
    const mission = pageData?.mission;
    const explore = pageData?.explore;
    console.log(pageData)
    const Message = [
        {
            Heading : pageData?.messages?.Heading??'Welcome to the Lagoon School',
            Paragraph1:pageData?.messages?.Paragraph1??"The Lagoon School aims at investing in the Nigerian girl child for the good of the society. We have both  primary and secondary sections. Our school has a reputation of high moral and academic standards. We have  been able to achieve these through our mission : ‘ partnership with the parents to give an all-round education to the students, based on the dignity of the human person, integrity, leadership qualities and academic excellence ’ and our vision : ‘ Christian I dentity ’ ",
            Button:pageData?.messages?.Button??"READ MORE FROM MISS DOREEN ONYEKWELU | THE SCHOOL HEAD",
            link:pageData?.messages?.link??'/about'
        }
    ];

    const Mission2 = [];

    const Mission = [
        {
            Heading :'Mission',
            Paragraph1:"Partnership with parents to give an  all-round education to each   student, based on Christian  principles, with emphasis on the  dignity of the human person, integrity, leadership qualities and  academic excellence.",
            
        },
        {
            Heading :'Vision',
            Paragraph1:"To see every Lagoon student equipped with an integral education which enables her to play her unique role in the home,  work place and the larger society ",
        },
        {
            Heading :'Core values',
            Paragraph1:"<ol> <li>Freedom and responsibility </li> <li>Dignity of work   </li><li>Responsible use of resources</li><li>Spirit of service   </li><li>Parents involvement as  primary educators</li></ol> ",
        }

    ];
    mission?.forEach((data) => {
        Mission2.push({
          Heading: data.title,
          Paragraph1: data.description,
        });
    })

    const Explore2 = [];
    explore?.forEach((data) => {
        Explore2.push(
            {
                Image: `${process.env.REACT_APP_SERVER_URL}/images/${data?.image}`,
                Section: data.section,
                Reciept: data.receipt,
                link: data.link,
            }
        )
    })


    const Explore = [
      {
        Image: ExploreOne,
        Section: "Primary Section",
        Reciept: "Reception to Year 6",
        link: "/academics/primary-school",
      },

      {
        Image: ExploreTwo,
        Section: "Secondary Section  ",
        Reciept: "JS1 - SS3",
        link: "/academics/secondary-school",
      },
    ];




  return (
    <Section>
        {Message.map((msg,index) =>{
            return(
                <div data-aos="zoom-in-down" data-aos-easing="ease-in-sine" className="school" key={index}>
                    <Bounce bottom cascade>
                        <div className="intro">
                            <h4>{msg.Heading}</h4>
                            <p dangerouslySetInnerHTML={{__html:msg.Paragraph1}}></p>
                            <div data-aos="fade-up"    data-aos-duration="3000">
                                <a href={msg.link} >{msg.Button}</a>
                            </div>
                            
                        </div>
                    </Bounce>
                </div>
            )
        })

        }
        
        <Vision>
        <Roll left cascade>
            <div className='box-container' data-aos="flip-up" data-aos-easing="ease-in-sine" >
                {Mission2.map((mission, index) =>{
                    return(
                           <div data-aos="fade-up" data-aos-easing="ease-in-sine"  className='box'  key={index}>
                                <h4>{mission.Heading}</h4>
                                <p dangerouslySetInnerHTML={{__html: mission.Paragraph1}}></p>
                            </div>
                    )
                } )}    
            </div>
        </Roll>
        </Vision>
        
        <ExploreCov>
                <Bounce  bottom cascade>
                    <div className='heading' data-aos="zoom-in-left">
                        <h4>Explore more</h4>
                    </div>
                </Bounce>
            <Bounce  bottom cascade>
                <div className='expcov' data-aos="zoom-in-right">
                    {Explore2.map((exp, index)=>{
                        return (
                          <Link to={exp.link}>
                            <div key={index}>
                              <img src={exp.Image} alt="" />
                              <div>
                                <h6>{exp.Section}</h6>
                                <p>{exp.Reciept}</p>
                              </div>
                            </div>
                          </Link>
                        );
                    })
                        
                    }
                </div>
            </Bounce>

        </ExploreCov>
    </Section>
  )
}


const Section = styled.section`
  .school {
    margin-top: 5rem;

    .intro {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      width: 80%;
      margin: 0 auto;

      h4 {
        font-size: clamp(2rem, 10vw, 2.5rem);
        color: #f63a32;
        margin: 10px auto;
        width: 80%;
        border-top: 2px solid #f63a32;
        padding-top: 1rem;
        border-bottom: 2px solid #f63a32;
        padding-bottom: 1rem;
        /* &::before{
                    content: '';
                    border-top: 3px solid #f63a32;
                    width: 60rem;
                    height: 2px;
                    margin-left: -8%;
                    position: absolute;
                    margin-top:-20px;
                }
                &::after{
                    content: '';
                    border-bottom: 3px solid #f63a32;
                    width: 52%;
                    height: 2px;
                    margin-left: -43%;
                    position: absolute;
                    margin-top: 63px;
                } */
      }

      p {
        font-size: clamp(1.3rem, 6vw, 1.5rem);
        line-height: 32px;
        font-weight: 1000;
        font-size: 24px;
        margin-bottom: 50px;
      }

      a {
        padding: 20px;
        width: 70%;
        // margin: 0 auto;
        font-size: clamp(1.3rem, 6vw, 1.5rem);
        border: 0;
        background-color: #f63a32;
        box-shadow: 0px 3px 3px 3px #d3d3d3;
        color: #fff;
        font-family: monseratSemi;
        transition: all 1.5s ease linear;
        text-decoration: none;

        &:hover {
          background-color: #f63a327d;

          cursor: pointer;
        }
        @media screen and (min-width: 280px) and (max-width: 1080px) {
          width: 100%;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .school {
      margin-top: 5rem;

      .intro {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        width: 90%;
        margin: 0 auto;

        h4 {
          font-size: 7vw;
          color: #f63a32;
          margin: 10px auto;
          width: 80%;
          border-top: 3px solid #f63a32;
          padding-top: 1rem;
          border-bottom: 3px solid #f63a32;
          padding-bottom: 1rem;
        }

        p {
          font-size: 5vw;
          line-height: 40px;
          text-align: left;
          padding-left: 10px;
        }

        button {
          padding: 20px;
          width: 100%;
          margin: 0 auto;
          font-size: clamp(1.5rem, 6vw, 1.7rem);
          border: 0;
          background-color: #f63a32;

          color: #fff;
          font-family: monseratSemi;
          transition: all 1.5s ease linear;
          &:hover {
            background-color: #f63a327d;

            cursor: pointer;
          }
        }
      }
    }
  }
`;

const Vision = styled.div`
  .box-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 8rem auto;
    .box {
      border: 2px solid rgb(244, 185, 190);
      box-shadow: 1px 1px 1px 1px #D3D3D3;
      border-radius: 5px;
      width: 30%;
      max-width: 400px;
      text-align: center;
      padding: 10px;
      h4 {
        font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
      }

      p {
        text-align: center;
        font-size: clamp(1.2rem, -0.875rem + 8.333vw, 1.5rem);
font-weight:1000;

        ol {
          text-align: left;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .box-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      gap: 1rem;
      width: 80%;
      margin: 8rem auto;
      .box {
        border: 2px solid #f63a32;
        border-radius: 5px;
        width: 100%;
        max-width: 700px;
        min-height: 350px;
        text-align: center;
        padding: 10px;
        h4 {
          font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
        }

        p {
          text-align: center;
          font-size: clamp(1.2rem, -0.875rem + 8.333vw, 1.5rem);

          ol {
            text-align: left;
          }
        }
      }
    }
  }
`;

const ExploreCov = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  .heading {
    h4 {
      font-size: clamp(2rem, 10vw, 2.5rem);
      color: #f63a32;
      margin: 10px auto;
      width: 80%;
      border-top: 1px solid #f63a32;
      padding-top: 1.5rem;
      border-bottom: 1px solid #f63a32;
      padding-bottom: 1.5rem;
      font-weight: 1000;
    }
  }

  .expcov {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;

    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      img {
        width: 100%;
        height: auto;
        max-height: 500px;
      }
      div {
        margin-top: 30px;

        h6 {
          margin: 0;
          font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
          color: red;
          font-size: 24px;
        }
        p {
          font-size: clamp(0.9rem, -0.875rem + 8.333vw, 1.9rem);
          margin: 10px 0 0 0;
          font-weight: 1000;
          color: black;
        }

       
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .heading {
      h4 {
        font-size: clamp(2rem, 10vw, 2.5rem);
        color: #f63a32;
        margin: 10px auto;
        width: 100%;
        border-top: 3px solid #f63a32;
        padding-top: 1rem;
        border-bottom: 3px solid #f63a32;
        padding-bottom: 1rem;
      }
    }
  }
`;
