// import FitText from "@kennethormandy/react-fittext";
import * as React from "react";
import styled from "styled-components";

const Root = styled.div`
  font-family: "Times";
  color: #fff87e;

  position: absolute;
  top: 52%;
  right: 38%;
  bottom: 1.6%;
  left: 38.2%;

  display: flex;
  justify-content: space-around;

  font-size: 70px;

  width: 23.8%;
  height: 6.4%;
`;

interface ClockProps {
  time: number;
}

interface ClockState {
  time: number;
}

const dDay = new Date("2018-12-22 08:30:00");
class Clock extends React.Component<ClockProps, ClockState> {
  private counter: NodeJS.Timer;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      time: dDay.getTime() - new Date().getTime()
    };
  }

  public componentDidMount() {
    this.counter = setInterval(this.update, 1000);
  }

  public shouldComponentUpdate() {
    return true;
  }

  public componentWillUnmount() {
    clearInterval(this.counter);
  }

  public render() {
    return (
      <Root>
        {this.state.time < 0 ? (
          <span style={{ fontSize: "37px" }}>수고하셨습니다~~!!!</span>
        ) : (
          <>
            <span>{Math.floor(this.state.time / (1000 * 60 * 60))}</span>
            <span>:</span>
            <span>{Math.floor((this.state.time / (1000 * 60)) % 60)}</span>
            <span>:</span>
            <span>{Math.floor((this.state.time / 1000) % 60)}</span>
          </>
        )}
      </Root>
    );
  }

  private update = () => {
    this.setState(() => {
      return { time: dDay.getTime() - new Date().getTime() };
    });
  };
}

export default Clock;
