import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
import { subRoute } from './AboutItems';
import Holder from '../../../../Assets/ExplaoreTwo.png'
import {api} from "../../../../misc/api";

export default function Message() {
  const currentPath = window.location.pathname;
    const [pageData, setPageData] = useState('');

    const fetchPageData = () => {
        api.get('about/meet-the-head')
            .then(res => {
                const abridgePageData = res.data;
                setPageData(abridgePageData);
            })
            .catch(console.log);

    };

    useEffect(() => {
        fetchPageData();
        console.log(pageData);
    },[]);

  return (
    <Container>
      <div className="placeholder2">
        <img
          src={
            `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.banner}` ??
            Backdrop
          }
          alt="placeholder"
        />
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
        {/* <header>Welcome to The Lagoon School</header> */}
        <div className="first">
          <span>
            <h2>{pageData?.other_titles_1}</h2>
          </span>
          <div className="col-md-12 flexy">
            <div className="col-md-8 flexy">
              <div className="col-md-4">
                <img
                  src={
                    `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_1}` ??
                    Holder
                  }
                  alt="placeHolder"
                />
              </div>
              <div className="col-md-8">
                <p dangerouslySetInnerHTML={{ __html: pageData?.content }}></p>
              </div>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="img-hold">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_2}` ??
                Holder
              }
              alt="placeHolder"
            />
          </div>
          <div className="img-hold">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_3}` ??
                Holder
              }
              alt="placeHolder"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}




const Container = styled.section`
  .placeholder2 {
    position: relative;
    @media screen and (max-width: 620px) {
      height: 17rem;
    }

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
        align-items: baseline;
        position: absolute;
        bottom: 30%;

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
            font-weight:900;
            @media screen and (max-width: 620px) {
              font-size: 10px;
            }
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }

  .content {
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);
    // width: 90%;
    margin: 5rem auto 0 auto;

    .first {
      span {
        h2 {
          position: relative;

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
        img {
          float: left;
          width: 250px;
          height: 300px;
          object-fit: cover;
          padding: 0 20px;
        }
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

    .second {
      .img-hold {
        display: flex;
        justify-content: flex-end;
        /* margin-top: 7rem; */
        /* flex-direction:column ; */
        img {
          height: 400px;
          width: 500px;
        }
      }

      .cont-hold {
        span {
          h2 {
            position: relative;

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

        p {
          text-align: right;
          font-size: 1.1rem;
        }
      }
    }

    h4 {
      font-size: 1.1rem;
      line-height: 25px;
      letter-spacing: 1px;
      font-weight: 500;
    }
    ul {
      font-size: 1.1rem;
      line-height: 25px;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }

  header {
    grid-column: 1/3;
    text-align: center;
    color: red;
    font-size: 2rem;
    margin-top: 30px;
  }
`;
