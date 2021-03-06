import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import service_img from "../assets/service.png";

const E = styled.div`
  background-image: url(${service_img});
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

const ContentBox = styled.div`
  position: absolute;
  top: 27.9%;
  left: 13.2%;
`;
export interface ServiceProps {
  close();
}

class Service extends React.Component<ServiceProps, any> {
  public render() {
    return (
      <Wrapper>
        <OutsideClickHandler onOutsideClick={this.props.close}>
          <E>
            <ContentBox>
              <div>윙가르디움 레비오~우사</div>
            </ContentBox>
          </E>
        </OutsideClickHandler>
      </Wrapper>
    );
  }
}

export default Service;
