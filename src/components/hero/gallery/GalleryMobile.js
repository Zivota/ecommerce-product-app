import React, { useState } from "react";
import Button from "../../../UI/Button";
import classes from "./GalleryMobile.module.css";
import previousBtn from "../../../assets/icon-previous.svg";
import nextBtn from "../../../assets/icon-next.svg";
import firstPic from "../../../assets/image-product-1.jpg";
import secondPic from "../../../assets/image-product-2.jpg";
import thirdPic from "../../../assets/image-product-3.jpg";
import fourthPic from "../../../assets/image-product-4.jpg";

const GalleryMobile = () => {
  const [picId, setPicId] = useState(0);

  const pics = [firstPic, secondPic, thirdPic, fourthPic];

  const onClickNext = () => {
    if (picId < 3) {
      setPicId((prevPicId) => prevPicId + 1);
    } else {
      setPicId(0);
    }
  };

  const onClickPrevious = () => {
    if (picId > 0) {
      setPicId((prevPicId) => prevPicId - 1);
    } else {
      setPicId(3);
    }
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.imgHolder}>
        <img src={pics[picId]} alt="shoes" />
        <div className={classes.btnHolder}>
          <Button onClick={onClickPrevious} className={classes.btn}>
            <img src={previousBtn} alt="prevBtn" />
          </Button>
          <Button onClick={onClickNext} className={classes.btn}>
            <img src={nextBtn} alt="nextBtn" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryMobile;
