import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import Holder from '../../../../Assets/ExplaoreTwo.png'

import { subRoute } from "./Acaitems";
import Accordion from "../About/Accordion";
import "./fullCalendar.css";
import { api } from "../../../../misc/api";

export default function Club() {
  const [accordionDt, setAccordionData] = useState({});
  const [primaries, setPrimaries] = useState({});
  const [secondaries, setSecondaries] = useState({});
  const [noteData, setNoteData] = useState({});
  const [accordionData, setaccordionData] = useState([]);
  const fetchAccordionData = () => {
    api
      .get("clubs-index")
      .then((res) => {
        const abridgeAccordionData = res.data;
        setAccordionData(abridgeAccordionData);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchAccordionData();
  }, []);
  function callListPrimary(content) {
    var arr = { title: "Primary School", content:content };
    setPrimaries(arr);
  }
  function callListSecondary(content) {
    var arr = { title: "Secondary School", content:content };
    setSecondaries(arr);
  }
  useEffect(() => {
    console.log(accordionDt);
    callListPrimary(accordionDt?.primary);
    callListSecondary(accordionDt?.secondary);
    setNoteData(accordionDt?.notes);
  }, [accordionDt]);

  useEffect(() => {
    console.log("notes", noteData);
    // console.log("secondaries", secondaries);
    let accd=[]
    accd.push(primaries)
    accd.push(secondaries)
    setaccordionData(accd)

  }, [primaries]);
  //   const currentPath = window.location.pathname;

  const openPortal = () => {
    console.log("Clicked");
    window.open(noteData.other_contents_2);
  };
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
                    //   style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}
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
            <h2>Clubs and Activities</h2>
          </span>
          <div>
            <h4>{noteData?.other_contents_1}</h4>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          {/* <div className=""> */}
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} lst={true} />
          ))}
          {/* </div> */}
        </div>
      </div>

      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 box2">
            <img
              style={{ maxWidth: "100%" }}
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${noteData?.other_images_1}` ??
                Holder
              }
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 box2">
            <img
              style={{ maxWidth: "100%" }}
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${noteData?.other_images_2}` ??
                Holder
              }
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 box2">
            <img
              style={{ maxWidth: "100%" }}
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${noteData?.other_images_3}` ??
                Holder
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-4 ">
          <div className="col-md-11 "></div>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 box2">
            <img
              style={{ maxWidth: "100%" }}
              src={
                `${process.env.REACT_APP_SERVER_URL}/images/${noteData?.other_images_4}` ??
                Holder
              }
              alt=""
            />
          </div>
          <button onClick={openPortal} className="reg col-md-12">
            REGISTER FOR A CLUB
          </button>
        </div>
        <div className="col-md-4 ">
          <div className="col-md-11 ">&nbsp;</div>
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
          margin: 5rem 0;

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
        line-height: 35px;
        letter-spacing: 1px;
        font-weight: 500;
      }

      .lists {
        table {
          width: 100%;
          border-collapse: collapse;
          tbody {
            tr {
              text-align: left;
              vertical-align: center;
              align-items: center;

              \ &:first-child {
                background: #d9d9d9;
              }
              &:last-child {
                height: 10rem;
              }

              td {
                border: 2px solid #000 !important;
                padding-left: 5rem;
                label {
                  p {
                    padding: 0;
                    margin: 10px 0;
                    font-style: italic;
                    font-size: 18px;
                    align-items: center;
                  }
                }
                select {
                  height: 30px;
                  width: 15%;
                  position: relative;
                  &::after {
                    content: "hiuwejijw>";
                    position: absolute;
                    right: 0;
                  }

                  &::placeholder {
                    color: #000;
                    font-size: 18px;
                    text-transform: uppercase;
                    vertical-align: center;
                    align-self: center;
                    padding-left: 10px;
                  }

                  option {
                    &:disabled {
                      color: #000;
                      font-size: 18px;
                      text-transform: uppercase;
                      vertical-align: center;
                      align-self: center;
                      padding-left: 10px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
