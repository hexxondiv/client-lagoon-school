import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./LifeItems";
import Holder from "../../../../Assets/ExplaoreTwo.png";
import { api } from "../../../../misc/api";

export default function Service() {
  const currentPath = window.location.pathname;
  const [pageData, setPageData] = useState("");
  const fetchPageData = () => {
    api
      .get("studentLife/service")
      .then((res) => {
        const abridgePageData = res.data;
        // console.log(abridgePageData);
        setPageData(abridgePageData);
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <div className="placeholder2">
        <img
          src={
            `${process.env.REACT_APP_SERVER_URL}/images/${pageData.banner}` ??
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
      <div className="content col-md-12">
        <div className="first">
          <span>
            <h2>Service</h2>
          </span>

          <h4>{pageData.other_contents_1}</h4>
        </div>
        
        <div className="col-md-12 flexy">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData.other_images_1}` ??
                Holder
              }
              alt=""
              width="100%"
            />
          </div>
          <div className="col-md-2">&nbsp;</div>
        </div>
        <div className="conimages2 col-md-12 flexy">
          <div className="col-md-3">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData.other_images_2}` ??
                Holder
              }
              alt=""
            />
          </div>
          <div className="col-md-3">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData.other_images_3}` ??
                Holder
              }
              alt=""
            />
          </div>
          <div className="col-md-3">
            <img
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${pageData.other_images_4}` ??
                Holder
              }
              alt=""
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
padding:20px;    
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

    .conimages {
      gap: 3rem;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        &:first-child {
          grid-column: 1/4;
        }
      }
    }
  }
`;
