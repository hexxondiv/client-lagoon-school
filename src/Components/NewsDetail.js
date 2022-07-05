import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../Assets/Backdrop.png";
import { subRoute } from "../Components/Pages/Sub-pages/About/AboutItems";
import Holder from "../Assets/ExplaoreTwo.png";
import { api } from "../misc/api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
export default function NewsDetails() {
  const currentPath = window.location.pathname;
  const [pageData, setPageData] = useState("");
  const [otherNews, setOtherNewsData] = useState("");
  let { id } = useParams();
  // console.log(id);
  const fetchPageData = () => {
    api
      .get(`news/${id}`)
      .then((res) => {
        const abridgePageData = res.data.data;
        setPageData(abridgePageData);
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err.response.data);
        setPageData({});
      });
  };
  // console.log(id);
  const fetchMoreNewsData = () => {
    api
      .get(`related-news/${id}`)
      .then((res) => {
        const abridgePageData = res.data.data;
        setOtherNewsData(abridgePageData);
        // console.log(res.status);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    if (id) fetchPageData();
    console.log(pageData);
  }, []);

  useEffect(() => {
    if (id) fetchMoreNewsData();
    console.log(pageData);
  }, [pageData]);

  return (
    <Container>
      <div className="container">
        <div className="col-md-12 mt-4" style={{ display: "flex" }}>
          <div className="card col-md-9" style={{ marginRight: "9px" }}>
            <div style={{ maxHeight: "600px", overflow: "hidden" }}>
              <img
                className="card-img-top"
                src={
                  `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.holder}` ??
                  Holder
                }
                alt={pageData?.header}
              />
            </div>

            <div className="card-body">
              <h3 className="card-title">{pageData?.header}</h3>
              <h5 className="card-title">{pageData?.ceremony}</h5>
              <hr />
              <p className="card-text">
                <span
                  dangerouslySetInnerHTML={{ __html: pageData?.paragraph }}
                ></span>
              </p>
              <a href="#" className="btn btn-info">
                Back to Top
              </a>
              <a href="/" className="btn btn-primary">
                Home
              </a>
            </div>
          </div>
          <div className="col-md-3 card">
            <h3>More News/Events</h3>
            {Object.values(otherNews).map(
              ({ id, slug, holder, ceremony, header }) => {
                return (
                  <div className="card">
                    <div style={{ maxHeight: "150px", overflow: "hidden" }}>
                      <img
                        className="card-img-top"
                        src={
                          `${process.env.REACT_APP_SERVER_URL}/images/${holder}` ??
                          Holder
                        }
                        alt={header}
                      />
                    </div>
                    <div className="card-body">
                      <a href={`/blog/${slug}`} className="card-title">
                        {header}
                      </a>
                      <hr />
                    </div>
                  </div>
                );
              }
            )}
          </div>{" "}
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
