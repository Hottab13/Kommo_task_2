import styled from "styled-components";

import purpleBall from "../assets/purpleBall.svg";
import redBall from "../assets/redBall.svg";

export const PurpleLight = styled.div`
  position: absolute;
  width: 259px;
  height: 259px;
  top: -154px;
  left: 40%;
  background: #833ab4;
  opacity: 0.5;
  filter: blur(96px);
  z-index: 0;
  @media (max-width: 320px) {
    margin-top: 20px;
    left: 258px;
    top: 107px;
  }
`;
export const PurpleBall = styled.img.attrs({
  src: purpleBall,
  alt: "purpleBall",
})`
  position: absolute;
  z-index: 0;
  width: 90px;
  height: 90px;
  left: 57%;
  top: -2px;
  @media (max-width: 320px) {
    width: 90px;
    height: 90px;
    left: 75%;
    top: 50%;
  }
`;
export const RedBall = styled.img.attrs({
  src: redBall,
  alt: "redBall",
})`
  position: absolute;
  z-index: 0;
  top: 2%;
  width: 153px;
  height: 153px;
  left: 35%;
  @media (max-width: 320px) {
    width: 63px;
    height: 63px;
    left: 29px;
    top: 85%;
    filter: blur(5px);
  }
`;

export const DesctopRedBall = styled.img.attrs({
  src: redBall,
  alt: "redBall",
})`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 57%;
  top: 45%;
  @media (max-width: 320px) {
    display: none;
  }
`;
export const RedLight = styled.div`
  position: absolute;
  background: #961a1a;
  opacity: 0.5;
  filter: blur(196px);
  left: 5%;
  width: 311px;
  top: 107px;
  height: 45%;
  @media (max-width: 320px) {
    width: 211px;
    height: 210px;
    left: -55px;
    top: 50%;
  }
`;

