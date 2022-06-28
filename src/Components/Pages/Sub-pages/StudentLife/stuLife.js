import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './LifeItems';
import Holder from '../../../../Assets/ExplaoreTwo.png'

export default function stuLife() {
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
      <div className='content'>
          <div className='first'>
              <span>
                  <h2>Life In Lagoon</h2>
              </span>
             
                <h4>
                      Service is an integral part of the Lagoon culture. At the heart of Christian leadership is service. Our service
                      program helps girls recognize the beauty of self-gift and the many ways they can step up to be servant-
                      leaders. Each service component at Laggon encourages our girls to serve in ways that are best suited to
                      their gifts and personal circumstance
                </h4>
          </div>
          <div className='images'>
                <div>
                    <span>
                        <h2>ALL-SCHOOL SERVICEDAY</h2>
                    </span>
                    <div classame="col-md-12">
                        <img src={Holder} alt="" />
                    </div>
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
        align-items:center ;
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
.images {
  
    margin-top:80px;

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
                line-height:25px ;
                letter-spacing:1px ;
                font-weight:500 ;
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
    gap:5rem;
    justify-content: center;

    img{
      width:100% ;
      height:100% ;
      object-fit:cover ;
    }
  }

   
   
  }


 

`