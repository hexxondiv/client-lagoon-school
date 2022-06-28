import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './AboutItems';
import Holder from '../../../../Assets/ExplaoreTwo.png'

export default function Message() {
  const currentPath = window.location.pathname;

  return (
    <Container>
      <div className='placeholder2'>
          <img src={Backdrop} alt="placeholder" />
        <div className='overlay'>
            <ul>
                {subRoute?.map((sub, idx)=>{
                  return(
                      <li key={idx}>
                          <a className={sub.cName} href={sub.path} 
                          style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}
                          >
                            {sub.title}
                          </a>
                      </li>
                  )
                  
                })
                }
              </ul>
        </div>
      </div>
      <div className='content'>
        {/* <header>Welcome to The Lagoon School</header> */}
          <div className='first'>
              <span>
                  <h2>WELCOME FROM THE HEAD OF SCHOOL</h2>
              </span>
              <h4>
                    <img src={Holder} alt="placeHolder" />
                    The Lagoon School aims at
                    investing in the Nigerian girl
                    child for the good of the society.
                    We have both primary and
                    secondary sections. Our school
                    has a reputation of high moral
                    and academic standards. We
                    have been able to achieve these
                    through our mission:
              </h4>
              <h4>
                  ‘partnership with the parents to give an all-round education
                  to the students, based on the dignity of the human person,
                  integrity, leadership qualities and academic excellence’ and
                  our vision: ‘Christian Identity’.
              </h4>
              <h4>
                    I welcome you- parents, teachers, students, prospective
                    parents and guests- to explore our website.
              </h4>
              <h4>
                  To our parents: You can keep up to date with your daughter’s
                  progress in the school, be it academic or extra-curricular. You
                  also have access to schedules of interesting activities
                  specially organised for you and your children.
              </h4>
              <h4>
                  To our teachers: This is another great avenue for getting
                  across to parents and students and communicating with one
                  another.
              </h4>
              <h4>
                    To the students: I encourage you to visit the website as often
                    as possible to get the latest updates on your assignments
                    and projects.
              </h4>
              <h4>
                To prospective parents and guests: we hope that the
                information on our website will be of interest to you and will
                excite you into joining this great family of The Lagoon
                School.
              </h4>
              <h4>
                    We would be grateful to receive suggestions and feedback.
                    For more information, do not hesitate to contact us.
              </h4>

              <h4>Doreen Onyekwelu (Principal)</h4>

          </div>
          <div className='second'>
              <div className='img-hold'>
                  <img src={Holder} alt="placeHolder" />
              </div>
              <div className='img-hold'>
                  <img src={Holder} alt="placeHolder" />
              </div>
              

          </div>
      </div>
    </Container>
  )
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
    grid-template-columns:repeat(2,1fr);
    width:90% ;
    margin:5rem auto 0 auto ;


   .first{
        span{

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
            }
        h4{
          img{
            float:left ;
            width:250px ;
            height:300px ;
            object-fit:cover ;
            padding:0 20px ;
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

   .second{


      .img-hold{
        display:flex ;
        justify-content:flex-end ;
        /* margin-top: 7rem; */
        /* flex-direction:column ; */
        img{
          height:400px ;
          width: 500px;
        }

        

   }
  
  .cont-hold{
    span{

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
        }

        p{
          text-align: right;
          font-size: 1.1rem;
        }
  }
  
  }

    h4{
      font-size:1.1rem ;
      line-height:25px ;
      letter-spacing:1px ;
      font-weight:500 ;
    }
    ul{
      font-size:1.1rem ;
      line-height:25px ;
      letter-spacing:1px ;
      font-weight:500 ;
    }
  }


  header{
    grid-column:1/3 ;
    text-align:center;
    color:red ;
    font-size:2rem;
    margin-top:30px;

  }

`