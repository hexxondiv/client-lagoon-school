import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
// import { Link } from 'react-router-dom';
import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/Image2.png";
import Image3 from "../Assets/Image3.png";
import Image4 from "../Assets/Image4.png";
import Image5 from "../Assets/Image5.png";
import Image6 from "../Assets/Image6.png";
import ExploreTwo from "../Assets/ExplaoreTwo.png";
import { api } from "../misc/api";
import Aos from "aos";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import reactImageSize from "react-image-size";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Images() {
  const [splash, setSplash] = useState([]);
  // const [photoIndex, setCurrentImage] = useState(0);
  // const [IsOpen, setViewerIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photosAll, setPhotosAll] = useState([]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const fetchSplashImages = () => {
    api
      .get("splash-photo")
      .then((res) => {
        const abridgeSplash = res.data;
        setSplash(abridgeSplash);
      })
      .catch(console.log);
  };

  useEffect(() => {
    setPhotos([]);
    fetchSplashImages();
  }, []);

  useEffect(() => {
    setPhotos([]);
    if (splash.length > 0) {  
      splash.map((spl, index) => {
        reactImageSize(
          `${process.env.REACT_APP_SERVER_URL}/images/${spl?.image_path}`
        )
          .then(({ width, height }) => {
            const ratio = height / width;
            const newWidth = parseInt((width / width) * 2);
            const newHeight = parseInt((height / width) * 2);
            console.log("ratio", newWidth, newHeight);
            const pht = {
              src: `${process.env.REACT_APP_SERVER_URL}/images/${spl?.image_path}`,
              width: newWidth,
              height: newHeight,
              title: spl?.title,
              index:spl?.id,
            };
            // images.push(pht.src);
            //   if (photos.length < 7) photos.push(pht);
            // setPhotos([...photos,pht]);
            setPhotos(photos => [...photos, pht]);
          })
          .catch((errorMessage) => {
            let pt={
              src: `${process.env.REACT_APP_SERVER_URL}/images/${spl?.image_path}`,
              width: 1,
              height: 1,
              title: spl?.title,
              index:spl?.id,
            }
            // setPhotos([...photos,pt]);
            setPhotos(photos => [...photos, pt]);
          });
      });
    }
  }, [splash]);

  return (
    <>
      <Header>
        <div className="heading">
          <h4>Photo Splash</h4>
        </div>
      </Header>
      <div className="row col-md-12">
        {/* {splash.map((spl, index) => {
          let num2text = "";
          console.log(spl);
          if (spl.position === 1) {
            num2text = "one";
          } else if (spl.position === 2) {
            num2text = "two";
          } else if (spl.position === 3) {
            num2text = "three";
          } else if (spl.position === 4) {
            num2text = "four";
          } else if (spl.position === 5) {
            num2text = "five";
          } else if (spl.position === 6) {
            num2text = "six";
          } else if (spl.position === 7) {
            num2text = "seven";
          }
          return (
            <ImageCont className={`col-md-12`}>
              <img
                src={`${process.env.REACT_APP_SERVER_URL}/images/${spl?.image_path}`}
                alt="gallery"
              />
              <div className="overlay">
                <div>
                  <i class="fas fa-caret-left"></i>
                  <i class="fa fa-search-plus" aria-hidden="true"></i>
                  <i class="fas fa-caret-right"></i>
                </div>
              </div>
            </ImageCont>
          );
        })} */}
        <Gallery photos={photos} onClick={openLightbox}></Gallery>
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </div>
    </>
  );
}

const Header = styled.div`
  width: 80%;
  margin: 100px auto;
  text-align: center;
  .heading {
    h4 {
      font-size: clamp(2rem, 10vw, 2.5rem);
      color: #f63a32;
      margin: 10px auto;
      width: 80%;
      border-top: 2px solid #f63a32;
      padding-top: 1rem;
      border-bottom: 2px solid #f63a32;
      padding-bottom: 1rem;
      margin-top: 250px;
      font-weight: 1000;
      font-style: italic;
    }
  }
`;

const ImageSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, minmax(150px, auto));
  transition: all 5s linear;

  .one {
    grid-column: 1/3;
  }

  .two {
    grid-column: 3/5;
  }

  .three {
    grid-column: 5/9;
  }

  .four {
    grid-column: 1/3;
  }

  .five {
    grid-column: 3/5;
  }

  .six {
    grid-column: 5/7;
  }

  .react-photo-gallery--gallery img:hover {
    opacity: 0.5;
  }

  .seven {
    grid-column: 7/9;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, minmax(150px, auto));
    .one {
      grid-column: 1/5;
    }

    .two {
      grid-column: 5/9;
    }

    .three {
      grid-column: 1/9;
    }
    .four {
      grid-column: 1/4;
    }

    .five {
      grid-column: 4/9;
    }

    .six {
      grid-column: 1/5;
    }
    .seven {
      grid-column: 5/9;
    }
  }
`;

const ImageCont = styled.div`
  min-width: 350px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    div {
      display: flex;
      gap: 1rem;
      color: #fff;
    }
  }

  &:hover .overlay {
    display: flex;
  }
`;
