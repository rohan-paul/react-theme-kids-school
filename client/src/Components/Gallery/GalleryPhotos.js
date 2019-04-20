import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import img1 from "./Images/kids-1.jpg";
import img2 from "./Images/kids-2.jpg";
import img3 from "./Images/kids-3.jpg";
import img4 from "./Images/kids-4.jpg";
import img5 from "./Images/kids-5.jpg";
import img6 from "./Images/kids-6.jpg";
import img7 from "./Images/kids-7.jpg";
import img8 from "./Images/kids-8.jpg";
import img9 from "./Images/kids-9.jpg";
import img10 from "./Images/kids-10.jpg";
import img11 from "./Images/kids-11.jpg";

const photos = [
  {
    src: img1,
    width: 4,
    height: 3
  },
  {
    src: img2,
    width: 1,
    height: 1
  },
  {
    src: img3,
    width: 3,
    height: 4
  },
  {
    src: img4,
    width: 3,
    height: 4
  },
  {
    src: img5,
    width: 3,
    height: 4
  },
  {
    src: img6,
    width: 4,
    height: 3
  },
  {
    src: img7,
    width: 3,
    height: 4
  },
  {
    src: img8,
    width: 4,
    height: 3
  },
  {
    src: img9,
    width: 4,
    height: 3
  },
  {
    src: img10,
    width: 4,
    height: 3
  },
  {
    src: img11,
    width: 4,
    height: 3
  }
];

export class GalleryPhotos extends Component {
  state = {
    currentImage: 0,
    lightboxIsOpen: false
  };

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render() {
    return (
      <section
        id="gallery"
        style={{
          boxSizing: "border-box",
          paddingTop: "0px",
          paddingBottom: "0px"
        }}
      >
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </section>
    );
  }
}

export default GalleryPhotos;
