import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cover from "../Assets/Cover.png";
import Inter from "../Assets/Interhouse.png";
import Roll from "react-reveal/Roll";
import { Link } from "react-router-dom";
import { api } from "../misc/api";
// import fullCalendar  from "fullCalendar";

export default function Calendar() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    api
      .get("news-events")
      .then((res) => {
        const abridgeData = res.data;
        console.log("Fetched", res.data);
        setData(res.data);
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const EventDates = [
    {
      date: "27 April",
      ceremony: "World Book Day",
    },
    {
      date: "05 May",
      ceremony: "Art Day",
    },
    {
      date: "27 May",
      ceremony: "Children’s Day",
    },
  ];

  const EventContent = [
    {
      holder: Inter,
      header: "Primary section Interhouse Sports",
      date: "3/10/2022",
      ceremony:
        "lore dolore magna aliqua. Ut enim ad minim consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, veniam,",
    },
    {
      holder: Cover,
      header: "Primary section Interhouse Sports",
      date: "3/10/2022",
      ceremony:
        "lore dolore magna aliqua. Ut enim ad minim consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, veniam,",
    },
  ];
  // console.log(data);
  const EventContent2 = [];
  if (data != [] && data?.news) {
    console.log(data?.news);
    const newsList = data?.news;
    if (newsList) {
      newsList.forEach((dat) => {
        EventContent2.push({
          holder: `${process.env.REACT_APP_SERVER_URL}/images/${dat?.holder}`,
          header: dat?.header,
          date: dat?.date,
          ceremony: dat?.ceremony,
        });
      });

      // EventContent = EventContent2;
    }
  }

  const EventDates2 = [];
  if (data != [] && data?.events) {
    console.log(data?.events);
    const eventsList = data?.events;
    if (eventsList) {
      data?.events.forEach((data) => {
        EventDates2.push({
          date: data?.date,
          ceremony: data?.ceremony,
        });
      });
    }
  }

  // console.log(EventDates2)

  return (
    <CalendarSection>
      <Events>
        <Roll left cascade>
          <>
            <div className="upcoming" data-aos="zoom-in-right">
              <h4>Recent Posts</h4>
            </div>
            {EventContent2.map((ent, index) => {
              return (
                <div className="content" key={index} data-aos="zoom-in-left">
                  <div className="holder-img">
                    <img src={ent.holder} alt="holder" />
                  </div>
                  <div className="pesp">
                    <h4>{ent.header}</h4>
                    <label>{ent.date}</label>
                    <p>{ent.ceremony}</p>
                  </div>
                </div>
              );
            })}
          </>
        </Roll>
      </Events>
      <Dates>
        <Roll right cascade>
          <>
            <div className="upcoming">
              <h4>UPCOMING EVENTS</h4>
            </div>
            {EventDates2.map((duty, index) => {
              return (
                <div className="arrange" key={index}>
                  <div className="date">{duty.date}</div>
                  <div className="comment">{duty.ceremony}</div>
                </div>
              );
            })}
            <Link to="/academics/full_calendar">
              <button>View Calendar</button>
            </Link>
          </>
        </Roll>
      </Dates>
    </CalendarSection>
  );
}

const CalendarSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 500px;
  width: 85%;
  margin: 7rem auto;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Events = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .upcoming {
    h4 {
      color: #ff000070;
      font-size: clamp(1.3rem, 6vw, 1.5rem);
      position: relative;

      &::before {
        content: "";
        border-bottom: 5px solid red;
        width: 9rem;
        position: absolute;
        bottom: 0;
        top: 30px;
      }
    }
  }
  .content {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-gap: 2rem;
    border-top: solid 1px grey;
    padding-top: 50px;

    .holder-img {
      height: 300px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }

    .pesp {
      h4 {
        color: red;
        font-size: 1.3vw;
        margin: 0 0 10px 0;
      }

      label {
        color: rgba(0, 0, 0, 0.5);
      }

      p {
        font-size: clamp(1.3rem, 6vw, 1.3rem);
        font-weight: 1000;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2rem;

      .holder-img {
        height: 300px;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }

      .pesp {
        h4 {
          color: red;
          font-size: 4.5vw;
          margin: 0 0 10px 0;
        }

        label {
          color: rgba(0, 0, 0, 0.5);
          font-weight: 1000;
        }

        p {
          font-size: clamp(1.3rem, 6vw, 1.3rem);
        }
      }
    }
  }
`;

const Dates = styled.div`
  padding-left: 20%;
  position: relative;
  .upcoming {
    h4 {
      color: #ff000070;
      font-size: clamp(1.3rem, 6vw, 1.5rem);
      position: relative;

      &::before {
        content: "";
        border-bottom: 5px solid red;
        width: 9rem;
        position: absolute;
        bottom: 0;
        top: 30px;
      }
    }
  }

  .arrange {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-gap: 40px;
    margin-top: 40px;
    padding-left: 30px;
    z-index: 10;
    &::before {
      content: "";
      height: 27%;
      border-left: 2px solid #000;
      position: absolute;
      margin-top: -31px;
      left: 11rem;
      z-index: -10;
    }

    .date {
      height: 100px;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 3px solid #000;
      font-size: 23px;
      text-align: center;
      background-color: #fff;
      font-weight: 1000;
    }

    .comment {
      height: 100px;
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: clamp(1.3rem, 6vw, 1.5rem);
      font-weight: 1000;
    }
  }

  button {
    width: 10rem;
    font-size: 20px;
    height: 40px;
    background-color: red;
    border: none;
    font-weight: 1000;
    padding: 10px;
    color: #fff;
    margin-top: 5rem;

    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding-left: 2%;
    .arrange {
      display: grid;
      grid-template-columns: 80px 1fr;
      grid-gap: 40px;
      margin-top: 40px;
      padding-left: 30px;
      z-index: 10;
      &::before {
        content: "";
        height: 27%;
        border-left: 2px solid #000;
        position: absolute;
        margin-top: -31px;
        left: 22%;
        z-index: -10;
      }
    }
  }
`;
