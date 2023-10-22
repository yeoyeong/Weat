import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainDefault = ({ setRoom }) => {
  const dispatch = useDispatch();
  const roomMaker = () => {
    // dispatch(())
    setRoom((prev) => [
      ...prev,
      {
        status: "private",
        roomId: 0,
        roomName: "서울맛집",
        emoji: "🥹",
        momberNum: 3,
      },
      {
        status: "private",
        roomId: 1,
        roomName: "서울맛집",
        emoji: "🤍",
        momberNum: 3,
      },
      {
        status: "publicOwner",
        roomId: 2,
        roomName: "서울맛집",
        emoji: "🤍",
        momberNum: 3,
      },
      {
        status: "publicGuest",
        roomId: 3,
        roomName: "서울맛집",
        emoji: "🤍",
        momberNum: 3,
      },
    ]);
  };

  return (
    <Grid>
      <PostLinkWrap>
        <PostLink to="/makeroom">
          새로운 맛방을
          <br />
          만들어보세요
        </PostLink>
      </PostLinkWrap>
      <PostLinkWrap>
        <PostButton onClick={roomMaker}>임시로 만들기</PostButton>
        {/* <PostLink to="/makeroom">임시 만들기 버튼</PostLink> */}
      </PostLinkWrap>
    </Grid>
  );
};

export default MainDefault;

// 글쓰기 페이지

const Grid = styled.div`
  display: grid;
  width: 328px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 19px auto 0 auto;
  /* grid-auto-rows: minmax(312px, auto); */
`;
const PostLinkWrap = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 160px;
  height: 180px;
  background-color: var(--WHITE);
  border-radius: 20px;
  box-shadow: 0px 2px 2px rgba(153, 153, 153, 0.2),
    0px 3px 1px rgba(153, 153, 153, 0.2), 0px -2px 5px rgba(153, 153, 153, 0.2);
`;
const PostLink = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  color: #7f5fff;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  width: 152px;
  height: 172px;
  border: dashed 2px #7f5fff;
  border-radius: 20px;
`;

const PostButton = styled.button`
  display: flex;
  text-decoration: none;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  color: #fff;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: -0.02em;
  width: 152px;
  height: 172px;
  border: dashed 2px #fff;
  border-radius: 20px;
  background-color: #7f5fff;
`;
