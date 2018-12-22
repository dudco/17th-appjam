import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import facebook_img from "../assets/facebook.png";

const E = styled.div`
  background-image: url(${facebook_img});
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
export interface FaceBookProps {
  close();
}

class FaceBook extends React.Component<FaceBookProps, any> {
  public render() {
    return (
      <Wrapper>
        <OutsideClickHandler onOutsideClick={this.props.close}>
          <E>
            <ContentBox>
              <a
                href="https://www.facebook.com/smarteenappclub/"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "15px"
                }}
              >
                Facebook
              </a>
            </ContentBox>
          </E>
        </OutsideClickHandler>
      </Wrapper>
    );
  }
}

export default FaceBook;
