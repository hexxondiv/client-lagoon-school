import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./AboutItems";
import Holder from "../../../../Assets/image.CT8WM1.png";
import Dei from "../../../../Assets/image.JQQTM1.png";
import { api } from "../../../../misc/api";

export default function OpusDei() {
  const currentPath = window.location.pathname;

  const [pageData, setPageData] = useState("");

  const fetchPageData = () => {
    api
      .get("about/faith")
      .then((res) => {
        const abridgePageData = res.data;
        setPageData(abridgePageData);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchPageData();
  }, []);
  console.log(pageData);

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
        <div className="writings">
          <span dangerouslySetInnerHTML={{ __html: pageData?.content }}></span>

          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_1}` ??
              Dei
            }
            alt=""
          />
        </div>
        <div className="hold">
          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_2}` ??
              Holder
            }
            alt=""
          />
          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_3}` ??
              Holder
            }
            alt=""
          />
          <div>
            <h2>
              <span
                dangerouslySetInnerHTML={{ __html: pageData?.other_titles_1 }}
              ></span>
            </h2>
          </div>
          <div>
            <h4>
              <span
                dangerouslySetInnerHTML={{ __html: pageData?.other_contents_1 }}
              ></span>
            </h4>
          </div>
          <div>
            <h4>
              <span
                dangerouslySetInnerHTML={{ __html: pageData?.other_contents_2 }}
              ></span>
            </h4>
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
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    margin: 0 auto;

    .writings {
      h4 {
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;
        &:nth-child(n + 2) {
          margin-top: 1rem;
        }
      }
      img {
        height: 30rem;
        width: 30rem;
        margin: 0 auto;
        object-fit: cover;
        border-right: 20px;
      }
    }
    .writings {
      h4 {
        padding-top: 80px;
      }
    }
    .hold {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      text-align: left;
      align-items: center;

      img {
        height: 30rem;
        width: 30rem;
        margin: 0 auto;
        object-fit: cover;
        border-right: 50px;
        &:nth-child(n + 2) {
          margin-top: 5rem;
        }
      }

      span {
        text-align: center;
        h2 {
          padding: 0;
          margin: 0;
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
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;
        &:nth-child(n + 2) {
          margin-top: 1rem;
        }
      }
    }
  }
`;
