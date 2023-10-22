import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Characterface } from "../../img/characterface.svg";
import { eyeList } from "../../components/signup/FaceResource";
// import Type6 from "../../img/eyes/type6.svg";
import Type0 from "../../img/eyes/type0.svg";
const UserInfo = ({ user }) => {
  // List = [
  //     Type0,
  //     Type2,
  //     Type3,
  //     Type4,
  //     Type5,
  //     Type6,
  //     Type7,
  //     Type8,
  //     Type9,
  //     Type10,
  //     Type11,
  //   ];
  const userEye = (eye) => {
    return eyeList.filter((row) => row[eye])[0][eye];
  };
  return (
    <article>
      <Container>
        <li>
          <p>아침식사 하셨나요?</p>
          <strong>{user.nickname}</strong>
          <span>님</span>
        </li>
        <CharacterWrap eye={userEye(user.eyes)}>
          <NewCharacterface fill={user.faceColor} />
        </CharacterWrap>
      </Container>
    </article>
  );
};

export default UserInfo;

// 유저정보
const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 328px;
  margin: 0 auto 29px auto;
  li {
    text-align: left;
  }
  li > p {
    font-family: "AppleSDGothicNeoL";
    font-size: 14px;
    line-height: 22px;
    font-weight: 200;
    text-align: left;
    margin-bottom: 8px;
  }
  li > strong {
    font-family: "AppleSDGothicNeoM";
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.02em;
  }
  li > span {
    font-family: "AppleSDGothicNeoL";
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -0.02em;
  }
`;

const NewCharacterface = styled(Characterface)`
  width: 100px;
  height: 100px;
  margin-left: 67px;
`;
const CharacterWrap = styled.li`
  position: relative;
  &:after {
    content: "";
    width: 100px;
    height: 100px;
    display: block;
    background-image: url(${({ eye }) => eye});
    background-size: contain;
    position: absolute;
    top: 0;
    left: 67px;
  }
`;
