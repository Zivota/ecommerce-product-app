import React, { Fragment, useState } from "react";
import Button from "../../../UI/Button";
import Backdrop from "../../../UI/Backdrop";
import classes from "./GalleryDesktop.module.css";
import firstPic from "../../../assets/image-product-1.jpg";
import secondPic from "../../../assets/image-product-2.jpg";
import thirdPic from "../../../assets/image-product-3.jpg";
import fourthPic from "../../../assets/image-product-4.jpg";
import firstPicTn from "../../../assets/image-product-1-thumbnail.jpg";
import secondPicTn from "../../../assets/image-product-2-thumbnail.jpg";
import thirdPicTn from "../../../assets/image-product-3-thumbnail.jpg";
import fourthPicTn from "../../../assets/image-product-4-thumbnail.jpg";
import previousBtn from "../../../assets/icon-previous.svg";
import nextBtn from "../../../assets/icon-next.svg";
import closeIcon from "../../../assets/icon-close.svg";

const GalleryDesktop = () => {
  const [getPic, setGetPic] = useState(0);
  const [openPopupGallery, setOpenPopupGallery] = useState(false);

  const pics = [firstPic, secondPic, thirdPic, fourthPic];
  const thumbnailPictures = [
    { src: firstPicTn, alt: "firstPic" },
    { src: secondPicTn, alt: "secondPic" },
    { src: thirdPicTn, alt: "thirdPic" },
    { src: fourthPicTn, alt: "fourthPic" },
  ];

  const nextImg = () => {
    if (getPic < 3) {
      setGetPic((prevState) => {
        return prevState + 1;
      });
    } else {
      setGetPic(0);
    }
  };

  const previousImg = () => {
    if (getPic > 0) {
      setGetPic((prevState) => {
        return prevState - 1;
      });
    } else {
      setGetPic(3);
    }
  };

  const setPic = (e) => {
    if (e.target.alt === "firstPic") {
      setGetPic(0);
    } else if (e.target.alt === "secondPic") {
      setGetPic(1);
    } else if (e.target.alt === "thirdPic") {
      setGetPic(2);
    } else {
      setGetPic(3);
    }
  };

  const openPopupGalleryHandler = () => {
    if (!openPopupGallery) {
      setOpenPopupGallery(true);
    }
  };

  const closePopupGalleryHandler = () => {
    setOpenPopupGallery(false);
  };

  const thumbPic = thumbnailPictures.map((item) => (
    <img src={item.src} alt={item.alt} onClick={setPic} key={item.alt} />
  ));

  const popUpGallery = (
    <div className={classes.popUpGallery}>
      <Backdrop onClick={closePopupGalleryHandler} />
      <div className={classes.popUpGallery_holder}>
        <div className={classes.popUpGallery_gallery}>
          <img src={pics[getPic]} alt="product" />
          <div className={classes.popUpGallery_buttons}>
            <Button className={classes.galleryBtn} onClick={previousImg}>
              <img src={previousBtn} alt="previousBtn" />
            </Button>
            <Button className={classes.galleryBtn} onClick={nextImg}>
              <img src={nextBtn} alt="nextBtn" />
            </Button>
          </div>
          <Button
            className={classes.closeBtn}
            onClick={closePopupGalleryHandler}
          >
            <img src={closeIcon} alt="close icon" />
          </Button>
        </div>
        <div className={classes.thumbnail}>{thumbPic}</div>
      </div>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.galleryDesktop}>
        <div className={classes.cover}>
          <img
            src={pics[getPic]}
            alt="product"
            onClick={openPopupGalleryHandler}
          />
        </div>
        <div className={classes.thumbnail}>{thumbPic}</div>
      </div>

      {openPopupGallery && popUpGallery}
    </Fragment>
  );
};

export default GalleryDesktop;
