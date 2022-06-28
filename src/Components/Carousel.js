import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import Confrence from '../Assets/Confrence.png'
import ExploreOne from '../Assets/ExploreOne.png'
import ExploreTwo from '../Assets/ExplaoreTwo.png'

function Carousel() {
    
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        arrows:true,
        speed: 1000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        };

        const Slideing = [
          {
            label: "ONLY AT LAGOON SCHOOL",
            image: Confrence,

            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minimx veniam, quis nostrud e ercitation  x ea ullamco laboris nisi ut aliquip ecommodo consequat.",
            commentor: "Isabella Nweze",
          },
          {
            label: "ONLY AT LAGOON SCHOOL",
            image: ExploreOne,

            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minimx veniam, quis nostrud e ercitation  x ea ullamco laboris nisi ut aliquip ecommodo consequat.",
            commentor: "Amanda Eze",
          },
          {
            label: "ONLY AT LAGOON SCHOOL",
            image: ExploreTwo,

            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minimx veniam, quis nostrud e ercitation  x ea ullamco laboris nisi ut aliquip ecommodo consequat.",
            commentor: "Bella Ugwu",
          },
        ];

  return (
    <Container>
        <Slider {...settings}>

          {Slideing.map((slide, index) =>{
              return (
                <SlickContent key={index}>
                  <div className="cont">
                    <div className="imagen">
                      <img src={slide.image} alt="" />
                      <h4>{slide.commentor}</h4>
                    </div>
                    <div className="stories">
                      <label>{slide.label}</label>
                      <p>{slide.paragraph} </p>
                    </div>
                  </div>
                </SlickContent>
              );

          })

          }
        </Slider>

    </Container>
  )
}

export default Carousel


const Container = styled.section`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    overflow-x: hidden;

`



const SlickContent = styled.div`
  height: 40rem;
  display: flex !important ;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .cont {
    display: grid;
    grid-template-columns: 1fr 800px;
    width: 90%;
    margin: 0 auto;

    .stories {
      label {
        color: red;
        font-weight:1000;
        font-size:28px;
        // font-size: clamp(1.3rem, 6vw, 1.5rem);
        position: relative;
        &::before {
          content: "";
          border-bottom: 5px solid red;
          width: 9rem;
          position: absolute;
          bottom: 0;
          top: 30px;
          
        }
      }

      p {
        font-size: clamp(2.2rem, 6vw, 1.7rem);
        font-weight: 300;
      }
    }
  }
  .imagen {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    img {
      position: relative;
      object-fit: cover;
      width: 400px !important;
      height: 300px !important;
      border-radius: 30px;
    }

    h4 {
      font-size: clamp(1.3rem, 6vw, 1.7rem);
      font-weight:light;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 60rem;
    align-items: center;
    .cont {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 5rem;
      width: 100%;
      margin: 0 auto;

      .stories {
        label {
          color: red;
          font-size: clamp(1.3rem, 6vw, 1.5rem);
          position: relative;
          &::before {
            content: "";
            border-bottom: 5px solid red;
            width: 9rem;
            position: absolute;
            bottom: 0;
            top: 30px;
          }
        }

        p {
          font-size: clamp(1.3rem, 6vw, 1.7rem);
      }
    }
    .imagen {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;

      img {
        position: relative;
        object-fit: cover;
        width: 500px !important;
        height: 300px !important;
        border-radius: 20px;
      }

      h4 {
        font-size: clamp(1.3rem, 6vw, 1.7rem);
        
      }
    }
  }
`;
