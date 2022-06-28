import React from 'react';
import styled from 'styled-components';
import CounterImg from '../Assets/Counter.png'
import Confrence from '../Assets/Confrence.png'
import Faith from '../Assets/Faith.png'
import Inter from '../Assets/Interhouse.png'
import Feather from '../Assets/people_24px.svg'
import Feather1 from '../Assets/school_24px.svg'
import Feather2 from '../Assets/Vector.svg'
import Roll from 'react-reveal/Roll';


export default function Counter() {

    const Ratio =[
        {   icon: Feather,
            numbers:'300',
            label:'GRADUATES'
        },
        {   icon: Feather1,
            numbers:'1 : 1',
            label:'STUDENT MENTOR RATIO'
        },
        {   icon: Feather2,
            numbers:'800',
            label:'ENROLLMENT'
        },
        {   icon: Feather,
            numbers:'35',
            label:'AVERAGE CLASS SIZE'
        }

    ]

    const Believe =[
        {place:Confrence, sub:'ACADEMIC EXCELLENCE', writeUp:'an person, integrity, leadership qualities and academic excellence ’ and our vision : ‘ Christian I dentity ’'},
        {place:Faith, sub:'FAITH', writeUp:'an person, integrity, leadership qualities and academic excellence ’ and our vision : ‘ Christian I dentity ’'},
        {place:Inter, sub:'PARENT PARTNERSHIP', writeUp:'an person, integrity, leadership qualities and academic excellence ’ and our vision : ‘ Christian I dentity ’'},
    ]

  return (
    <CounterCov>
        <div className='numbers'>
            <img src={CounterImg} alt="" />
            <div className='bg'>
                <div className='overlayimg'>
                    {Ratio.map((rte, index)=>{
                        return(
                            // <div className='cont' key={index}>
                            //         <div>
                            //             <img src={rte.icon} alt="" /> 
                            //         </div>
                            //          <div>
                            //             <p>{rte.numbers}</p>
                            //          </div>
                            //         <div>
                            //             <label htmlFor="">{rte.label}</label>
                            //         </div>
                            // </div>
                            <table key={index}>
                                 <Roll left cascade>

                                    <tbody data-aos="fade-up">
                                        
                                        <tr> 
                                            <td>   <img src= {rte.icon}alt="" />   </td>
                                        </tr>
                                        <tr> 
                                            <td> <p>{rte.numbers}</p> </td>
                                        </tr>
                                        <tr> 
                                            <td> <label htmlFor="">{rte.label} </label> </td>
                                        </tr>
                                    </tbody>
                                    </Roll>
                            </table>
                        )
                    })

                    }
                </div>
            </div>
            
        </div>
        <div className='photos'>
            <Roll left cascade>
                <div className='check'data-aos="fade-up">
                        {Believe.map((bil,index) =>{
                        return(
                            <div className='evenst' key={index}>
                                <img src={bil.place} alt="" /> 
                                    <div className='cover'>
                                        <p>{bil.sub}</p> 
                                        <h6>{bil.writeUp}</h6>
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </Roll>
     
            
        </div>
    </CounterCov>
  )
}


const CounterCov = styled.section`
  position: relative;
  height: 55rem;

  .numbers {
    position: relative;
    height: 45rem;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    .bg {
      background-color: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      .overlayimg {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: space-between;
        width: 80%;
        margin: 0 auto;
        align-items: center;

        table {
          margin-top: 3rem;

          tr {
            td {
              color: #fff;
              text-align: center;
              vertical-align: text-top;
              height: 100px;
              font-weight: 1000;

              img {
                height: 150px;
                width: 150px;
              }
              p {
                font-size: 3rem;
                font-weight: 1000;
              }
              label {
                font-size: 2rem;
                font-weight: 1000;
              }
            }
          }
        }
      }
    }
  }

  .photos {
    display: flex;
    justify-content: center;
    position: relative;
    right: 0;
    left: 0;
    bottom: 200px;
    transition: all 2.55s linear;

    .check {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10rem;

      .evenst {
        width: 420px;
        height: 470px;
        position: relative;
        border: 2px solid #fff;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .cover {
          background-color: rgba(0, 0, 0, 0.3);
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          vertical-align: center;

          p {
            position: absolute;
            bottom: 0;
            left: 20px;
            color: #fff;
            font-size: 20px;
            animation-delay: 0.5s;
            font-weight: 1000;
          }

          h6 {
            display: none;
            height: 100%;
            width: auto;
            padding: 0 20px;
            position: relative;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            color: #fff;
            font-weight: 1000;
          }
        }

        &:hover {
          cursor: pointer;

          .cover {
            background-color: #83830b73;

            p {
              top: 10px;
            }

            h6 {
              display: flex;
              font-weight: 1000;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: none;
  }
`;