import * as React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import final_img from "../assets/final.png";

const E = styled.div`
  background-image: url(${final_img});
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
export interface FinalProps {
  close();
}

class Final extends React.Component<FinalProps, any> {
  public render() {
    return (
      <Wrapper>
        <OutsideClickHandler onOutsideClick={this.props.close}>
          <E>
            <ContentBox>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  href="https://goo.gl/forms/LbBHFJKYx9BPGzZk2"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "15px"
                  }}
                >
                  팀빌딩 제출
                </a>
                <a
                  href="https://goo.gl/forms/XCqSo35f6ZUMOI0w2"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "15px"
                  }}
                >
                  중간 제출
                </a>
                <a
                  href="https://goo.gl/forms/Tl7WKuQBkJfdC6oT2"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "15px"
                  }}
                >
                  최종 제출
                </a>
              </div>
            </ContentBox>
          </E>
        </OutsideClickHandler>
      </Wrapper>
    );
  }
}

export default Final;
