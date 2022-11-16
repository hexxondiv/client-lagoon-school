import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { subRoute } from "./Acaitems";

import Backdrop from "../../../../Assets/Backdrop.png";
import Calendar1 from "../../../../Assets/calendarimg.png";

import Calendar2 from "../../../../Assets/calendarimg2.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

import { Modal, Button as Btn } from "react-bootstrap";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./fullCalendar.css";
import Pdf from "../../../../Assets/bigCalendar.pdf";
// import "react-accessible-accordion/dist/fancy-example.css";
import { api } from "../../../../misc/api";

export default function FullCalendr() {
  const currentPath = window.location.pathname;
  const [noteData, setNoteData] = useState({});
  // function handleChange(e) {
  //   let link = e.target.value;
  //   console.log(link);
  //   window.location = link;
  // }
  const [data, setData] = useState([]);

  const fetchData = () => {
    api
      .get("full-calendar")
      .then((res) => {
        // const abridgeData = res.data;
        console.log("Fetched", res.data.data);
        setData(res.data.data);
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (data != [] && data.notes) {
      setNoteData(data.notes);
      console.log(noteData);
    }
  }, [data]);
  const EventDates2 = [];
  if (data != [] && data?.events) {
    // console.log(data?.events);
    const eventsList = data?.events;
    if (eventsList) {
      data?.events.forEach((data) => {
        EventDates2.push({
          date: data?.date,
          title: data?.ceremony,
        });
      });
    }
  }

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

      <div className="col-md-12 flexy calendar">
        <div className="col-md-4">
          {" "}
          <h1>Calendar</h1>
          <Accordion className="accord">
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordbutton">
                  <h5>Academic Calendars</h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="Bton" href="#">
                  Select All
                </div>
                <br />

                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <h6>
                      {" "}
                      <input type="checkbox" />
                      LS Calendar
                    </h6>
                  </li>
                  <li>
                    {" "}
                    <h6>
                      {" "}
                      <input type="checkbox" />
                      MS/HS Calendar
                    </h6>
                  </li>
                  <li>
                    {" "}
                    <h6>
                      {" "}
                      <input type="checkbox" />
                      Non-School Days
                    </h6>
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className="accordbutton">
                  <h5>Atheletic Activities</h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="Bton" href="#">
                  Deselect All
                </div>
                <br />

                <ul className="list-unstyled">
                  <li>
                    {" "}
                    <h6>
                      {" "}
                      <input type="checkbox" />
                      Atheletic Activities
                    </h6>
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="Bton2" href="#">
            Update Calendar
          </div>
        </div>

        <div className="col-md-4 cal">
          <h4>Academic Activities Key Dates</h4>

          <a
            href={
              `${process.env.REACT_APP_SERVER_URL}/images/${noteData.other_images_1}` ??
              Pdf
            }
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Calendar1} alt="calendar" />
          </a>
        </div>
        <div className="col-md-4 cal">
          <h4>Atheletic Activities Key Dates</h4>
          <a
            href={
              `${process.env.REACT_APP_SERVER_URL}/images/${noteData.other_images_2}` ??
              Pdf
            }
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={Calendar2} alt="calendar" />
          </a>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          {/* <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Reunion", date: "2022-06-10" },
              { title: "Graduation", date: "2022-06-11" },
              { title: "Inter-house Sports", date: "2022-06-21" },
              { title: "Open day", date: "2022-06-19" },
              { title: "Social day", date: "2022-06-11" },
            ]}
          />  */}
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={EventDates2}
          />
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
    width: 90%;
    margin: 5rem auto 0 auto;
    display: flex;
    flex-direction: column;

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
