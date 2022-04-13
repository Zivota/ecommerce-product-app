import React, { Fragment } from "react";
import GalleryMobile from "./GalleryMobile";
import GalleryDesktop from "./GalleryDesktop";

const Gallery = (props) => {
  return (
    <Fragment>
      {props.scWidth.width < 1024 ? <GalleryMobile /> : <GalleryDesktop />}
    </Fragment>
  );
};

export default Gallery;
