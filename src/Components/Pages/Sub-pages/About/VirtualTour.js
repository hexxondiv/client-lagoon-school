import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Backdrop from '../../../../Assets/Backdrop.png'
// import {Link} from 'react-router-dom';
// import { navMenus } from '../../../MenuItems';

import { subRoute } from './AboutItems';
import {api} from "../../../../misc/api";



export default function VirtualTour(props) {
  const currentPath = window.location.pathname;
    const [settings, setSettings] = useState('');
    const [pageData, setPageData] = useState('');

    const fetchSiteSettings = () => {
        api.get('site-settings')
            .then(res => {
                const abridgeSettings = res.data;
                setSettings(abridgeSettings);
            })
            .catch(console.log);

    };

    const fetchPageData = () => {
        api.get('about/virtual-tour')
            .then(res => {
                const abridgePageData = res.data;
                setPageData(abridgePageData);
            })
            .catch(console.log);

    };

    useEffect(() => {
        fetchSiteSettings();
        fetchPageData();
    },[]);

  // const {menuArray} = props;
    console.log()

  return (
    <Container>
      {/* <div className='placeholder2'>
          <img src={ `${process.env.REACT_APP_SERVER_URL}/images/${pageData?.banner}`??Backdrop} alt="placeholder" />
        <div className='overlay'>
          <ul>
            {subRoute?.map((sub, idx)=>{
              return(
                  <li key={idx}>
                      <a className={sub.cName} href={sub.path}
                                              style={{color:sub.path.toString() === currentPath.toString()?'red':'',backgroundColor:sub.path.toString() === currentPath.toString()?'#fff':'',padding:sub.path.toString() === currentPath.toString()?'20px':'',border:sub.path.toString() === currentPath.toString()?'2px solid red':'',borderRadius:sub.path.toString() === currentPath.toString()?'20px':''}}

                      >
                        {sub.title}
                      </a>
                  </li>
              )
              
            })
            }
          </ul>
        </div>
      </div> */}
      <div className="row col-md-12">
        <iframe
          width="100%"
          height={720}
          marginWidth={500}
          marginHeight={560}
          src={
            settings?.virtual_tour +
            (settings.autoplay == 1 ? `?autoplay=1` : ``)
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full-screen"
          allowFullScreen={true}
          autoplay={true}
        ></iframe>
      </div>

      <div className="content">
        <header>Virtual Tour</header>

        <span dangerouslySetInnerHTML={{ __html: pageData?.content }}></span>
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
  }

  header {
    grid-column: 1/3;
    text-align: center;
    color: red;
    font-size: 2rem;
    margin-top: 30px;
  }
`;
