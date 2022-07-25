import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./LifeItems";
import Holder from "../../../../Assets/ExplaoreTwo.png";
import { Link } from "react-router-dom";
import { api } from "../../../../misc/api";
export default function StuLife() {
  const currentPath = window.location.pathname;
  const [pageData, setPageData] = useState("");
  const fetchPageData = () => {
    api
      .get("studentLife/life-in-lagoon")
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
      <div className="row">
        <div className="col-md-12">
          <div className="content">
            <div className="first">
              <span>
                <h2>Life at Lagoon</h2>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-12 row">
          <div
            className="col-md-4 "
            style={{ marginRight: "8%", marginLeft: "4%" }}
          >
            <div classame="images">
              <img
                style={{ maxWidth: "100%" }}
                src={
                  `${process.env.REACT_APP_SERVER_URL}/images/${pageData.other_images_1}` ??
                  Holder
                }
                alt=""
              />
            </div>
            <h4 className="col-md-12">{pageData.other_titles_1}</h4>
          </div>
          <div
            className="col-md-6"
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: pageData.other_contents_1 }}
          ></div>
        </div>
        <div className="col-md-12 text-center mt-5">
          <div className="col-md-6 offset-md-3">
            <Link to="/academics/secondary-school">
              <button
                style={{
                  width: "100%",
                  fontSize: "1.2rem",
                  padding: "10px",
                  backgroundColor: "white",
                  border: "2px solid red",
                  color: "red",
                }}
              >
                MEET A LAGOON STUDENT
              </button>
            </Link>
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
  .images {
    margin-top: 80px;
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

    .conimages {
      display: grid;
      grid-template-columns: repeat(3, 20rem);
      gap: 5rem;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
