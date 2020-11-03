import React from "react";
import { Component } from "react";
import s from "./slider.module.css";
import { connect } from "react-redux";
import arrow from "./../../assets/img/down-arrow.svg";
import img1 from "./../../assets/slider/1.jpg";
import img2 from "./../../assets/slider/2.jpg";
import img3 from "./../../assets/slider/3.jpg";
import img4 from "./../../assets/slider/4.jpg";
import img5 from "./../../assets/slider/5.jpg";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      // images: [
      //   "https://img3.akspic.ru/image/104645-pagoda-vesna-dostoprimechatelnost-tsvetok-otdyx-1920x1080.jpg",
      //   "http://il-viaggio.mamatours.it/FOTO/ELEMENTI/Viaggi-di-Lusso-Asia_03.jpg",
      //   "https://www.pixel-creation.com/wp-content/uploads/cherry-blossoms-japan-e29da4-4k-hd-desktop-wallpaper-for-4k-ultra-hd-tv-5.jpg",
      //   "https://img3.goodfon.ru/original/1920x1080/e/91/daygo-kioto-yaponiya.jpg",
      //   "https://ifly-selections-axaxzmkc.netdna-ssl.com/10301486-klm-selections/content/image/_f_hd/Japan-Osaka_Header_first-frame-1522228470.jpg",
      // ],
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
      ],
      currentImage: 0,
      isCucle: false,
      pass: "",
      incorr: "",
    };
    this.PassInput = React.createRef();
    this.Img_inn = React.createRef();
    this.nextBtn = React.createRef();
    this.prevBtn = React.createRef();
  }
  disabled(ref) {
    this.Img_inn.current.classList.add("animSlider");
    ref.current.disabled = true;
    setTimeout(() => {
      ref.current.disabled = false;
    }, 1050);
  }
  prevStep() {
    if (this.state.currentImage === 0) {
      this.setState({
        currentImage: (this.state.currentImage = this.state.images.length),
      });
    }
    this.setState({ currentImage: this.state.currentImage + -1 });
    this.disabled(this.prevBtn);
  }
  nextStep() {
    if (this.state.currentImage === this.state.images.length - 1) {
      this.setState({ currentImage: (this.state.currentImage = -1) });
    }
    this.setState({ currentImage: this.state.currentImage + 1 });
    this.disabled(this.nextBtn);
  }
  password(e) {
    if (this.PassInput.current.value === "leve") {
      this.setState({ pass: this.PassInput.current.value });
      this.setState({ incorr: "yes" });
    } else {
      this.setState({ incorr: "no" });
    }
  }
  animation(e) {}

  render() {
    if (!(this.state.pass === "leve")) {
      return (
        <div className={s.input__inner}>
          <h1 className={s.title}>Write password</h1>
          {this.state.incorr === "no" ? (
            <h6 className={s.warn}>Incorrect password</h6>
          ) : (
            ""
          )}

          <input ref={this.PassInput} className={s.input} type="password" />
          <button className={s.btnn} onClick={this.password.bind(this)}>
            submit
          </button>
        </div>
      );
    } else {
      return (
        <div className={s.slider}>
          <div className={s.btn__inner}>
            <button
              className={s.btn + " " + s.btn_left}
              data-direction="prev"
              onClick={this.prevStep.bind(this)}
              ref={this.prevBtn}
              style={{
                backgroundImage: `url(${arrow || "https://www.flaticon.com/svg/static/icons/svg/814/814031.svg"})`,
              }}
            >
              {" "}
            </button>
          </div>
          <div
            ref={this.Img_inn}
            className={s.images}
            style={{
              backgroundImage: `url(${
                this.state.images[this.state.currentImage]
              })`,
            }}
          ></div>
          <div className={s.btn__inner}>
            <button
              className={s.btn + " " + s.btn_right}
              data-direction="next"
              onClick={this.nextStep.bind(this)}
              ref={this.nextBtn}
              style={{
                backgroundImage: `url(${arrow || "https://www.flaticon.com/svg/static/icons/svg/814/814031.svg"})`,
              }}
            >
              {" "}
            </button>
          </div>
        </div>
      );
    }
  }
}
const mapSateToProps = (state) => {
  return {
    imagesMy: state.photosPage.pixels,
  };
};
export default connect(mapSateToProps, {})(Slider);
