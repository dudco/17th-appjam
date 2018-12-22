import * as React from "react";
import styled, { keyframes } from "styled-components";

import title from "./assets/appjam.png";
import bg from "./assets/bg.png";
import snich from "./assets/gong.png";
import snichHover from "./assets/gong_ho.png";
import glasses from "./assets/harry.png";
import glassesHover from "./assets/harry_ho.png";
import hat from "./assets/hat.png";
import hatHover from "./assets/hat_ho.png";
import letter from "./assets/paper.png";
import letterHover from "./assets/paper_ho.png";
import platform from "./assets/train.png";
import platformHover from "./assets/train_ho.png";

import Clock from "./components/Clock";
import Event from "./components/Event";
import FaceBook from "./components/Facebook";
import Final from "./components/Final";
import Service from "./components/Service";
import Subject from "./components/Subject";
// import FitText from "@kennethormandy/react-fittext";

// const pulseAnimate = keyframes`
//   from {
//     transform: scale3d(1, 1, 1);
//   }

//   50% {
//     transform: scale3d(1.02, 1.02, 1.02);
//   }

//   to {
//     transform: scale3d(1, 1, 1);
//   }
// `;

const hoverTransitionTime = 0.5;

const movingAnimationTop = keyframes`
  25% {
    transform: translate(0, 5px);
  }

  75% {
    transform: translate(0, -5px);
  }
`;

const movingAnimationBottom = keyframes`
  25% {
    transform: translate(0, -5px);
  }

  75% {
    transform: translate(0, 5px);
  }
`;

const AppRoot = styled.div`
  background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

const Hat = styled.img`
  position: absolute;
  top: 0.6%;
  right: 39.3%;

  width: 20.8%;
  height: 37%;
  animation: ${movingAnimationTop} 4s linear infinite;
  cursor: pointer;

  opacity: ${(props: { isHover?: boolean }) => (props.isHover ? 0 : 1)};
  transition: opacity ${hoverTransitionTime}s ease-in-out;

  &:hover {
    transition: opacity ${hoverTransitionTime}s ease-in-out;
    opacity: 1;
  }
`;

const Letter = styled.img`
  position: absolute;
  top: 40.2%;
  right: 8.5%;

  width: 15.6%;
  height: 24.4%;
  animation: ${movingAnimationBottom} 4s linear infinite;
  cursor: pointer;

  opacity: ${(props: { isHover?: boolean }) => (props.isHover ? 0 : 1)};
  transition: opacity ${hoverTransitionTime}s ease-in-out;

  &:hover {
    transition: opacity ${hoverTransitionTime}s ease-in-out;
    opacity: 1;
  }
`;

const Glasses = styled.img`
  position: absolute;
  top: 39.3%;
  right: 74.5%;

  width: 15.6%;
  height: 26.1%;
  animation: ${movingAnimationBottom} 4s linear infinite;
  cursor: pointer;

  opacity: ${(props: { isHover?: boolean }) => (props.isHover ? 0 : 1)};
  transition: opacity ${hoverTransitionTime}s ease-in-out;

  &:hover {
    transition: opacity ${hoverTransitionTime}s ease-in-out;
    opacity: 1;
  }
`;

const Snitch = styled.img`
  position: absolute;
  top: 75%;
  right: 54.1%;

  width: 15.6%;
  height: 18.5%;
  animation: ${movingAnimationTop} 4s linear infinite;
  cursor: pointer;

  opacity: ${(props: { isHover?: boolean }) => (props.isHover ? 0 : 1)};
  transition: opacity ${hoverTransitionTime}s ease-in-out;

  &:hover {
    transition: opacity ${hoverTransitionTime}s ease-in-out;
    opacity: 1;
  }
`;

const Platform = styled.img`
  position: absolute;
  top: 72.2%;
  right: 25.1%;

  width: 15.6%;
  height: 27.8%;
  animation: ${movingAnimationBottom} 4s linear infinite;
  cursor: pointer;

  opacity: ${(props: { isHover?: boolean }) => (props.isHover ? 0 : 1)};
  transition: opacity ${hoverTransitionTime}s ease-in-out;

  &:hover {
    transition: opacity ${hoverTransitionTime}s ease-in-out;
    opacity: 1;
  }
`;

const Title = styled.img`
  position: absolute;
  top: 41.6%;
  right: 42.2%;
  bottom: 53%;
  left: 42.1%;
  width: 15.7%;
  height: 5.5%;
`;
interface AppState {
  over: string;
  hat: boolean;
  letter: boolean;
  glasses: boolean;
  snitch: boolean;
  platform: boolean;
  time: number;
}

const dDay = new Date("2018-12-23 08:30");

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      over: "",
      hat: false,
      letter: false,
      glasses: false,
      snitch: false,
      platform: false,
      time: dDay.getTime() - new Date().getTime()
    };
  }

  public onMouseOver = e => {
    this.setState({ over: e.target.name });
  };

  public hatClick = e => {
    this.setState({ hat: true });
  };

  public letterClick = e => {
    this.setState({ letter: true });
  };

  public glassesClick = e => {
    this.setState({ glasses: true });
  };

  public snitchClick = e => {
    this.setState({ snitch: true });
  };

  public platformClick = e => {
    this.setState({ platform: true });
  };

  public closePop = () => {
    this.setState({
      hat: false,
      letter: false,
      glasses: false,
      snitch: false,
      platform: false
    });
  };

  public render() {
    return (
      <AppRoot className="App">
        <Title src={title} />
        <Hat src={hat} />
        <Hat src={hatHover} isHover={true} onClick={this.hatClick} />
        {this.state.hat && <Event close={this.closePop} />}

        <Letter src={letter} />
        <Letter src={letterHover} isHover={true} onClick={this.letterClick} />
        {this.state.letter && <FaceBook close={this.closePop} />}

        <Glasses src={glasses} />
        <Glasses
          src={glassesHover}
          isHover={true}
          onClick={this.glassesClick}
        />
        {this.state.glasses && <Final close={this.closePop} />}

        <Snitch src={snich} />
        <Snitch src={snichHover} isHover={true} onClick={this.snitchClick} />
        {this.state.snitch && <Service close={this.closePop} />}

        <Platform src={platform} />
        <Platform
          src={platformHover}
          isHover={true}
          onClick={this.platformClick}
        />
        {this.state.platform && <Subject close={this.closePop} />}

        <Clock time={this.state.time} />
      </AppRoot>
    );
  }
}

export default App;
