import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import subject_img from "../assets/subject.png";

const E = styled.div`
  background-image: url(${subject_img});
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

export interface SubjectProps {
  close();
}

class Subject extends React.Component<SubjectProps, any> {
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

export default Subject;
