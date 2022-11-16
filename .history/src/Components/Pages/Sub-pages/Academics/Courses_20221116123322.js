import React, { useEffect, useState } from "react";
import { api } from "../../../../misc/api";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./Acaitems";
// import Holder from '../../../../Assets/ExplaoreTwo.png'
// import { useLocation } from 'react-router-dom';
// import { useRoute } from '@react-navigation/native';
export default function Courses() {
  const currentPath = window.location.pathname;
  const [sublink, setSublink] = useState(undefined);
  const [subpage, setSubpage] = useState(undefined);
  const [paragraphy, setParagraphy] = useState(undefined);
  function handleChange(e) {
    let link = e.target.value;
    console.log(link);
    if (link === "primary" || link === "secondary") {
      setSublink(link);
    } else {
      setSublink(undefined);
    }
  }

  function handleChangePage(e) {
    let pg = e.target.value;
    console.log(pg);
    if (
      pg === "junior-primary-course" ||
      pg === "senior-primary-course" ||
      pg === "junior-secondary-course" ||
      pg === "senior-secondary-course"
    ) {
      setSubpage(pg);
    } else {
      setSubpage(undefined);
    }

    switch (pg) {
      case "junior-primary-course":
        setParagraphy(noteData.other_contents_1);
        break;
      case "senior-primary-course":
        setParagraphy(noteData.other_contents_2);
        break;
      case "junior-secondary-course":
        setParagraphy(noteData.other_contents_3);
        break;
      case "senior-secondary-course":
        setParagraphy(noteData.other_contents_4);
        break;
      default:
        setParagraphy(undefined);
        break;
    }
    console.log(paragraphy, "in courses");
  }
  const [pageData, setPageData] = useState("");
  const [noteData, setNoteData] = useState({});
  const [testimonialList, setTestimonialList] = useState([]);

  const fetchPageData = () => {
    api
      .get("courses-index")
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
      setNoteData(pageData.note);
      setTestimonialList(pageData.testimonials);
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
      <div className="content col-md-12">
        <div className="first">
          <span>
            <h2>Courses</h2>
          </span>
          <div className="lists col-md-12">
            <table>
              <tbody>
                <tr>
                  <td>
                    <h2>SELECT A SCHOOL LEVEL</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <p>SCHOOL LEVEL</p>
                      {/* <input list="classes" placeholder='choose' />   */}
                    </label>
                    
                    <select id="lang" onChange={handleChange} className="col-md-12 col-12">
                      <option disabled selected>
                        Select School Level
                      </option>
                      <option value="primary">Primary</option>
                      <option value="secondary">Secondary</option>
                    </select>

                    {sublink === "primary" ? (
                      <select id="lang" onChange={handleChangePage}>
                        <option value="" disabled selected>
                          Select School Level
                        </option>
                        <option value="junior-primary-course">
                          Junior Primary
                        </option>
                        <option value="senior-primary-course">
                          Senior Primary
                        </option>
                      </select>
                    ) : (
                      ""
                    )}
                    {sublink === "secondary" ? (
                      <select id="lang" onChange={handleChangePage}>
                        <option value="" disabled selected>
                          Select School Level
                        </option>
                        <option value="junior-secondary-course">
                          Junior Secondary
                        </option>
                        <option value="senior-secondary-course">
                          Senior Secondary
                        </option>
                      </select>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br /> <br />
          {subpage == undefined ? (
            testimonialList.map(({ id, commentor, paragraph }) => {
              return (
                <>
                  <div className="redb"></div>
                  <div>
                    <h1 className="col-md-12">
                      “{" "}
                      <span
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></span>{" "}
                      “
                    </h1>
                    <br />
                    <span>
                      <p>- {commentor}</p>
                    </span>
                  </div>
                  <br /> <br />
                </>
              );
            })
          ) : (
            <div className="row col-md-12">
              {paragraphy !== undefined
                ? 
                  <div dangerouslySetInnerHTML={{ __html: paragraphy }}></div>
                : ""}
            </div>
          )}
         
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
  span {
    text-align: center;
    font-weight: 1000;
    font-size: 30px;
  }

  .redb {
    border-top: solid 7px red;
    width: 220px;
    margin-left: 570px;
    margin-bottom: -80px;
  }

  .redbo {
    border-top: solid 7px red;
    width: 220px;
    margin-left: 570px;
    margin-top: 60px;
  }

  .second {
    margin-top: 150px;
    line-height: 45px;
    text-align: center;
  }
  h1 {
    line-height: 55px;
    font-weight: 400;
  }
  .content {
    // width: 90%;
padding:20px;
    // margin: 5rem auto 0 auto;
    // display: flex;
    // flex-direction: column;

    .first {
      span {
        h2 {
          position: relative;
          font-size: 1.6rem;
          text-align: left;
          margin-bottom: 30px;
          &::before {
            content: "";
            border-bottom: 5px solid red;
            width: 4rem;
            position: absolute;
            bottom: 30;
            top: 30px;
          }
        }
      }
      h4 {
        font-size: 2rem;
        line-height: 35px;
        // letter-spacing: 4px;
        font-weight: 400;
        text-align: center;
        margin-top: 40px;
        padding-left: 150px;
      }

      @media screen and (min-width: 280px) and (max-width: 1080px) {
        h4 {
          padding-left: 0px;
        }
      }

      @media screen and (min-width: 280px) {
        .redb {
          display: none;
        }
        .redbo {
          display: none;
        }
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
