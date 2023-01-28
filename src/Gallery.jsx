import { useState } from "react";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsXSquareFill } from "react-icons/bs";
import "./Gallery.css";

//Pass in your gallery images in a variable
const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Open Modal function
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal Function
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image Function
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image Function
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap">
          <BsXSquareFill className="btnClose" onClick={handleCloseModal} />
          <BsFillArrowLeftSquareFill className="btnPrev" onClick={prevSlide} />
          <BsFillArrowRightSquareFill className="btnNext" onClick={nextSlide} />
          <p className="caption">{galleryImages[slideNumber].caption}</p>
          <div className="fullScreenImage">
            <img src={galleryImages[slideNumber].img} alt="" />
          </div>
        </div>
      )}
      {/* Map out your images here  */}
      <div className="galleryWrap">
        {galleryImages.map((slide, index) => {
          return (
            <div
              className="single"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={slide.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
