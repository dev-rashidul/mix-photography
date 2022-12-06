import React from "react";
import { Image } from "react-bootstrap";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Portfolio = ({ portfolio }) => {
  return (
    <div>
      <PhotoProvider>
        <PhotoView src={portfolio.img}>
          <Image className="img-fluid" style={{cursor:"pointer"}} src={portfolio.img}></Image>
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default Portfolio;
