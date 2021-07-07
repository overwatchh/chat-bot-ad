import "./media.scss";
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";

import ProductImg1 from "./assets/img1.jpg";
import ProductImg2 from "./assets/img2.jpg";
import ProductImg3 from "./assets/img3.jpg";
import ProductVideo from "./assets/video1.mp4";

const Media = ({ trigger, triggerNextStep, srcs, type }) => {
  useEffect(() => {
    triggerNextStep({ value: undefined, trigger });
  }, []);
  return (
    <Carousel className="Media" indicators={false} interval={null}>
      <Carousel.Item>
        <img className="d-block w-100" src={ProductImg2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="./media/video1.mp4"
          alt="First slide"
        /> */}
        <video
          poster={ProductImg1}
          className="media-video"
          width="320"
          height="240"
          controls
        >
          <source src={ProductVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={ProductImg3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Media;
