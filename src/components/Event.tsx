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
const ContentBoxLeft = styled.div`
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

export interface EventProps {
  close();
}

class Event extends React.Component<EventProps, any> {
  public render() {
    return (
      <Wrapper>
        <OutsideClickHandler onOutsideClick={this.props.close}>
          <E>
            <ContentBoxLeft>
              <a
                href="https://goo.gl/okXk8h"
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "15px"
                }}
              >
                링크
              </a>
            </ContentBoxLeft>
            <ContentBoxRight>
              <div>
                이번엔 챌린잼이라는 여러 개의 미션이 준비되어있습니다! <br />
                시간이 지날 수록 몇 가지의 미션이 공개가 되고, 해당 미션을
                클리어하시면 소정의 상품을 드려요. <br />
                만약 공개가 되지 않은 미션을 클리어하셨을 경우에도, 상품이
                지급됩니다! <br />
                미션들은 O.T가 끝나는 직후 시작되니 다들 재미있는 미션
                클리어하시면서 즐거운 앱잼 보내세요!
              </div>
            </ContentBoxRight>
          </E>
        </OutsideClickHandler>
      </Wrapper>
    );
  }
}

export default Event;
