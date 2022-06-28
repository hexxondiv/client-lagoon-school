import React, { useEffect } from "react";
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


export default function fullCalendar() {
  const currentPath = window.location.pathname;



  // function handleChange(e) {
  //   let link = e.target.value;
  //   console.log(link);
  //   window.location = link;
  // }


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
          <h4>2021-22 T.L.S. Key Dates</h4>

          <a href={Pdf} without rel="noopener noreferrer" target="_blank">
            <img src={Calendar1} alt="calendar" />
          </a>
        </div>
        <div className="col-md-4 cal">
          <h4>2021-22 T.L.S. Key Dates</h4>
          <a href={Pdf} without rel="noopener noreferrer" target="_blank">
            <img src={Calendar2} alt="calendar" />
          </a>
        </div>
      </div>
      <div className="col-md-12 flexy">
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-10">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Reunion", date: "2022-06-10" },
              { title: "Graduation", date: "2022-06-11" },
              { title: "Inter-house Sports", date: "2022-06-21" },
              { title: "Open day", date: "2022-06-19" },
              { title: "Social day", date: "2022-06-11" },
            ]}
          />
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
              margin-left:160px;

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
  }

  header {
    grid-column: 1/3;
    text-align: center;
    color: red;
    font-size: 2rem;
    margin-top: 30px;
  }
`;