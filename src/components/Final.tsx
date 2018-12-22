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

const ContentBoxRight = styled.div`
  position: absolute;
  top: 27.9%;
  right: 13.2%;
  width: 30%;
`;

const ColorSpan = styled.span`
  color: #d49447;
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
            <ContentBoxRight>
              <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
                제출 방법
              </div>
              <div style={{ marginBottom: "10px" }}>
                해당하는 분야의 이메일로 <br /> <ColorSpan>PPT</ColorSpan>,{" "}
                <ColorSpan>영상</ColorSpan>, <ColorSpan>코드 등</ColorSpan>을
                제출 한 후 <br /> 오른쪽 최종제출 문서를 작성해주세요!
              </div>
              <div style={{ marginBottom: "5px" }}>
                생활 : wisemuji@gmail.com{" "}
              </div>
              <div style={{ marginBottom: "5px" }}>
                게임 : minsung71900@naver.com
              </div>
              <div style={{ marginBottom: "5px" }}>
                미래산업 : dudco1129@naver.com
              </div>
            </ContentBoxRight>
          </E>
        </OutsideClickHandler>
      </Wrapper>
    );
  }
}

export default Final;
