import './media.scss';
import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
const Media = ({ trigger, triggerNextStep, srcs, type }) => {
  useEffect(() => {
    triggerNextStep({ value: undefined, trigger });
  }, []);
  return (
    <Carousel className="Media" indicators={false} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./media/img2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100"
          src="./media/video1.mp4"
          alt="First slide"
        /> */}
        <video
          poster="./media/img1.jpg"
          className="media-video"
          width="320"
          height="240"
          controls
        >
          <source src="./media/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./media/img3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Media;
