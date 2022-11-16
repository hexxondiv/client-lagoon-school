import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png';
import Holdr from '../../../../Assets/Image2.png'
import { accordionData } from './Accordion';
import { subRoute } from './AboutItems';
import Accordion from './Accordion';
import {api} from "../../../../misc/api";



export default function Parents() {
  const currentPath = window.location.pathname;

  const [pageData, setPageData] = useState("");
  const [accordionDt, setAccordionData] = useState("");
  const fetchAccordionData = () => {
    api
      .get("parent-accordion")
      .then((res) => {
        const abridgeAccordionData = res.data;
        setAccordionData(abridgeAccordionData);
      })
      .catch(console.log);
  };
  const fetchPageData = () => {
    api
      .get("about/partnership")
      .then((res) => {
        const abridgePageData = res.data;
        setPageData(abridgePageData);
      })
      .catch(console.log);
  };

  useEffect(() => {
    fetchPageData();
    fetchAccordionData();
  }, []);
  let accordionDD = accordionData;
  if (accordionDt !== "") {
    accordionDD = [];
    accordionDt.forEach((dat) => {
      accordionDD.push({
        idx: dat?.id,
        title: dat?.title,
        content: dat?.content,
      });
    });
    console.log(accordionDD);
  }

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
        <div className="redup">
          <h4>
            <span
              dangerouslySetInnerHTML={{ __html: pageData?.other_contents_1 }}
            ></span>
          </h4>
        </div>
        <div className="primary">
          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_1}` ??
              Holdr
            }
            alt=""
          />
          <div className="table table-hover">
            <div className="accordion">
              {accordionDD.map(({ title, content }) => (
                <Accordion title={title} content={content} />
              ))}
            </div>
          </div>
          <div className="principle">
            <header>Seven principles of Catholic Social Teaching:</header>
            <ul>
              <li>Life and Dignity of the Human Person</li>
              <li>Call to Family, Community, and Participation</li>
              <li>Rights and Responsibilities</li>
              <li>Option for the Poor and Vulnerable</li>
              <li>The Dignity of Work and the Rights of Workers</li>
              <li>Solidarity</li>
              <li>Care for God's Creation</li>
            </ul>
          </div>
        </div>
        <div className="stacks">
          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_2}` ??
              Holdr
            }
            alt=""
          />
          <img
            src={
              `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_3}` ??
              Holdr
            }
            alt=""
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
      text-align: center;
      padding: 50px;
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
    width: 90%;
    margin: 0 auto;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 30%;
    .redup {
      background-color: #f85f58;
      padding: 20px;
      text-align: center;
      grid-column: 1/3;
      border-radius: 10px;
      h4 {
        color: #fff;
        font-size: 1.5rem;
        letter-spacing: 2px;
        line-height: 30px;
      }
    }
    .primary {
      width: 80%;
      margin-top: 8rem;
      img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
      }
      .table {
        ul {
          list-style: none;
          padding: 0;
          margin-top: 10rem;
          li {
            font-size: 20px;
            font-weight: 900;
            padding: 15px;
            border: 2px solid #000;
            position: relative;
            &::after {
              content: "+";
              position: absolute;
              right: 20px;
            }
          }
        }
      }
      .principle {
        margin-top: 10rem;
        header {
          color: red;
          margin: 0;
          padding: 0;
          font-size: 20px;
          font-weight: 900;
        }
        ul {
          li {
            font-size: 20px;
            font-weight: 900;
          }
        }
      }
    }
    .stacks {
      margin-top: 8rem;
      img {
        width: 100%;
        height: 20rem;
        object-fit: cover;
        &:nth-child(n + 2) {
          margin-top: 3rem;
        }
      }
    }
  }
`;