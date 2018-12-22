import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import event_img from "../assets/event.png";

const E = styled.div`
  background-image: url(${event_img});
  width: 53.2%;
  height: 77%;
  z-index: 9000;
  position: absolute;
  left: 50%;
  top: 50%;
  background-size: 100% 100%;

  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  background-color: #000a;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export interface EventProps {
  close();
}

class Event extends React.Component<EventProps, any> {
  public render() {
    return (
      <Wrapper>
        <OutsideClickHandler onOutsideClick={this.props.close}>
          <E>hello world</E>
        </OutsideClickHandler>
      </Wrapper>
    );
  }
}

export default Event;
