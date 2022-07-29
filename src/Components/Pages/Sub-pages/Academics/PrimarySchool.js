import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./Acaitems";
import Holder from "../../../../Assets/ExplaoreTwo.png";
import "./fullCalendar.css";
import { api } from "../../../../misc/api";

export default function PrimarySchool() {
  const currentPath = window.location.pathname;
  const [pageData, setPageData] = useState("");
  const [imgList, setImgList] = useState([]);
  const [noteData, setNoteData] = useState({});
  const fetchPageData = () => {
    api
      .get("primary-index")
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
      <div className="tent">
        <div className="first">
          <span>
            <h2>{noteData?.other_titles_1}</h2>
          </span>

          <h4>
            {/* <mark>
              Laying the Groundwork. Strengthening the Foundation. Building the
              Bridge.
            </mark> */}
            {/* In the primary school, girls develop curiosity, tenacity and
            intellectual carefulness. They research problems, brainstorm
            solutions, create prototypes, test and revise. */}
            <span
              dangerouslySetInnerHTML={{ __html: noteData?.content }}
            ></span>
          </h4>
        </div>
      </div>
      <div className="con col-md-12 flexy">
        {imgList.map(({ id, title, image_path }) => {
          return (
            <div classname="col-md-4">
              <div className="col-md-9">
                <img
                  src={
                    `${process.env.REACT_APP_SERVER_URL}/images/${image_path}` ??
                    Holder
                  }
                  alt=""
                />
                <p>{title}</p>
              </div>
            </div>
          );
        })}

        {/* <div className="col-md-4">
          <div className="col-md-9">
            <img src={Holder} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-md-9">
            <img src={Holder} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>*/}
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>

        <div className="fll col-md-10">
          {/* <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${noteData.other_images_1}` ??
              Holder
            }
            alt=""
            className=" col-md-12"
          /> */}
          <iframe
            className=" col-md-12"
            height="315"
            src={`${noteData.content2}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>
          <span
              dangerouslySetInnerHTML={{ __html: noteData?.other_contents_2 }}
            ></span>
          </p>
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
        line-height: 30px;
        letter-spacing: 1px;
        font-weight: 500;

        mark {
          font-weight: 900;
          background-color: #fff;
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

    .conimages {
      display: grid;
      grid-template-columns: repeat(3, 20rem);
      /* gap:5rem; */
      justify-content: space-around;

      div {
        div {
          p {
            font-weight: 900;
            font-size: 20px;
            margin-top: 3rem;
          }
        }
      }

      .fll {
        grid-column: 1/4;
        margin-top: 5rem;
        img {
          width: 100%;
          height: 467px;
          object-fit: cover;
        }

        p {
          font-size: 20px;
          font-weight: 900;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
