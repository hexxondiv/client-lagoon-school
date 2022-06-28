import React from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from "./LifeItems";
import Holder from '../../../../Assets/ExplaoreTwo.png'

export default function Mentor() {
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
        <div className="first">
          <span>
            <h2>Mentoring</h2>
          </span>

          <h4>
            The cornerstone of a Lagoon education is our mentoring program.
            Mentors meet regularly one-on-one with students, and girls can seek
            them out for encouragement in academics, friendships, and service to
            others. Acting in partnership with the parents, the mentor guides
            each student as she works on her own personal growth. At Lagoon,
            students develop the lifelong habit of seeking good advice from the
            wisdom of others and working on personal goals for growth.
          </h4>
        </div>
        <div className="images">
          <div className="individual">
            <span>
              <h2>INDIVIDUALIZED MENTORING</h2>
            </span>
            <ul>
              <li>Goes far beyond traditional academic advising</li>
              <li>Provides every student with a mentor and a coach</li>
              <li>
                A mentor serves as captain of each girl's success management
                team
              </li>
              <li>Formal meetings occur 6-8 times a semester</li>
              <li>Informal meetings are frequent</li>
              <li>Mentors meet with parents at least twice a year</li>
            </ul>
          </div>
          <div className="quotes">
            <hr />
            <h4>
              “ My Montrose advisors challenged me to grow in confidence by
              encouraging me to push myself, which prompted me to take the
              chance to apply for the White House internship. Lagoon encourages
              students not only to think but also reflect, a skill that is
              absolutely necessary in college. This type of preparation at the
              high school level is rare. “
            </h4>
            <h4>- Nweze Isabella</h4>
          </div>
          <img src={Holder} alt="" />
          <img src={Holder} alt="" />
        </div>
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">
            {" "}
            <img src={Holder} alt="" />
          </div>
        </div>
      </div>

      
    </Container>
  );
}




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
  .flexy {
    display: flex;
    img {
      width: 100%;
      margin-top: 60px;
      margin-left: 20px;
    }
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

    .images {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 5rem;
      justify-content: center;

      .individual {
        background-color: #ababab96;
        width: 70%;
        height: fit-content;
        border-radius: 20px;
        padding: 50px;
        margin-top: 30px;
        @media screen and (min-width: 280px) and (max-width: 1080px) {
         
            padding: 10px;
            height: fit-content;
            width: 100%;
        
        }
        span {
          h2 {
            position: relative;
            font-size: 1.6rem;
            margin-left: 20px;

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

        ul {
          margin-top: 20px;

          li {
            font-size: 1.4rem;
          }
        }
      }

      .quotes {
        width: 80%;
        margin: 0 auto;

        hr {
          border-top: 4px solid red;
          width: 7rem;
        }

        h4 {
          font-size: 1.6rem;
          text-align: center;
        }
      }

      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
      }
    }
  }
`;