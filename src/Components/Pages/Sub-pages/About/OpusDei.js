import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './AboutItems';
import Holder from '../../../../Assets/image.CT8WM1.png'
import Dei from '../../../../Assets/image.JQQTM1.png'



export default function OpusDei() {
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
                        <a className={sub.cName} href={sub.path}   style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}     >
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
        <div className='writings'>
            <h4>
              Christ is at the heart of everything we do. Our education,
              guided by the teachings of the Catholic Church and the
              spirituality of <a href={"https://www.opusdei.ng/"} target="_blank" rel='noopener noreferrer'>Opus Dei</a>, immerses students in a life of
              Christian virtue and helps them discover the joy of
              friendship with God. Whether it’s through Enrichment—
              when the school day pauses for daily Mass—monthly
              Adoration, or frequent opportunities for the Sacrament of
              Reconciliation, Lagoon provides an environment rooted in
              God’s love. Our students know that faith is a gift as well as
              a responsibility that calls for a life of integrity and
              compassion. Lagoon students learn to be open to a healthy
              pluralism of opinions. From its founding, the school has
              welcomed students of all faiths or of no particular faith, and
              has respected the religious freedom of all.
            </h4>
            <h4>
                The spiritual guidance and doctrinal instruction offered at
                Lagoon is entrusted to Opus Dei, a personal prelature of
                the Catholic Church. At the core of Opus Dei’s mission is
                the teaching that all men and women are called to holiness,
                which can be pursued through our everyday lives and work.
                The spirit of Opus Dei inspires freedom, responsibility,
                initiative, and an environment of trust. Lagoon students are
                encouraged to take ownership of their faith and their
                decisions so they live them to the fullest in college and
                beyond.
            </h4>
            <h4>
                Daily Mass is offered at Lagoon every morning, and many
                students and faculty choose to attend. 
            </h4>
            <h4>
                Our chaplain, who is a priest of Opus Dei, is available every
                day for students and faculty who would like to receive
                spiritual direction or the Sacrament of Penance. Our
                chaplain periodically offers reflections for Dovtrine classes
                and leads class spiritual retreats throughout the year.
            </h4>
            <h4>
                Situated in the heart of the campus, the chapel is available
                throughout the school day for quiet prayer.
            </h4>

            <img src={Dei} alt="" />

        </div>
        <div className='hold'>
              <img src={Holder} alt="" />
              <img src={Holder} alt="" />
              <div>
                  <span>
                        <h2>Opus Dei</h2>
                    </span>
                  <h4>
                      Opus Dei is a personal prelature of the Catholic
                      Church founded in 1928 by St. Josemaría Escrivá.
                      At the core of Opus Dei’s mission is the teaching
                      that all men and women are called to holiness,
                      which can be pursued through our everyday lives
                      and work.
                  </h4>
                  <h4>
                    Our chaplains, priests of the Prelature, celebrate
                    Mass in our chapel daily, and our school community
                    approaches all work in a manner reflective of the
                    spirit of Opus Dei—with dedication and
                    cheerfulness, especially in the face of challenges.
                  </h4>
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
              color:red ;
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
    margin:0 auto ;

    .writings{
       

        h4{
          font-size:20px;
          font-weight:500;
          line-height:40px ;
          &:nth-child(n+2){
            margin-top: 1rem;
          }
        }
        img{
        height:30rem ;
        width:30rem ;
        margin:0 auto ;
        object-fit:cover ;
        border-right:20px;
        
      }
    }
.writings{
  h4{
   padding-top:80px;
  }
}
    .hold{
      justify-content:center ;
      display:grid ;
      grid-template-columns:repeat(1,1fr);
      text-align:left;
      align-items:center;

      img{
        height:30rem ;
        width:30rem ;
        margin:0 auto ;
        object-fit:cover ;
        border-right:50px;
        &:nth-child(n+2){
            margin-top: 5rem;
          }
      }

      span {
        text-align:center ;
        h2{
          padding:0 ;
          margin:0 ;
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
          font-size:20px;
          font-weight:500;
          line-height:40px ;
          &:nth-child(n+2){
            margin-top: 1rem;
          }
        }
    }
  }



`