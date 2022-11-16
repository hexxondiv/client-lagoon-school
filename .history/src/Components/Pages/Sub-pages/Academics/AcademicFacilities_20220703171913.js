import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./Acaitems";
import Holder from "../../../../Assets/ExplaoreTwo.png";
import "./fullCalendar.css";
import { api } from "../../../../misc/api";

export default function AcademicFacilities() {
  const currentPath = window.location.pathname;
  const [pageData, setPageData] = useState("");
  const [imgList, setImgList] = useState([]);
  const [noteData, setNoteData] = useState({});

  const fetchPageData = () => {
    api
      .get("facility-index")
      .then((res) => {
        const abridgePageData = res.data;
        console.log(abridgePageData);
        setPageData(abridgePageData);
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (pageData !== "") {
      setImgList(pageData.images);
      setNoteData(pageData.note);
    }
  }, [pageData]);

  return (
    <Container>
      <div className="placeholder2">
        <img
          src={
            `${process.env.REACT_APP_SERVER_URL}/images/${noteData.banner}` ??
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
        <div className="first">
          <span>
            <h2>Academic Facility</h2>
          </span>

          <h4>
            <span
              dangerouslySetInnerHTML={{ __html: noteData?.content }}
            ></span>
          </h4>
        </div>
        <div className="conimages">
          {imgList.map(({ id, title, image_path }) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_SERVER_URL}/images/${image_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h4>{title}</h4>
              </div>
            );
          })}
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
        font-weight: 900;
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
