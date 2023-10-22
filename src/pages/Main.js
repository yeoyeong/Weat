import React, { useEffect, useState } from "react";
import { ReactPortal } from "..";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../css/Style";

import MainModal from "../components/main/MainModal";
import UserInfo from "../components/main/UserInfo";
import PostList from "../components/main/PostList";
import ModalBtn from "../components/main/ModalBtn";
import MainDefault from "../components/main/MainDefault";
import styled from "styled-components";
import Convenience from "../components/main/Convenience";
import { useNavigate } from "react-router-dom";
import BottomNavi from "../components/BottomNavi";
import Header from "../components/Header";
import { itemAnimation } from "../redux/modules/postSlice";

const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _rooms = useSelector((state) => state.post._rooms);
  const rooms = useSelector((state) => state.post.rooms);
  const [room, setRoom] = useState(rooms);

  const [eventBn, setEventBn] = useState(
    window.sessionStorage.getItem("eventBn")
  );

  //   const snsUserCheck = () => {
  //     if (user.userInfo.provider && !user.userInfo.faceColor) {
  //       return navigate("/signup/faceCustom");
  //     } else if (user.userInfo.provider && user.userInfo.faceColor) {
  //       return navigate("/");
  //     }
  //   };
  //   useEffect(() => {
  //     snsUserCheck();
  //   }, [user]);

  //   useEffect(() => {
  //     setRoom(rooms);
  //   }, [_rooms, socket]);

  //   const bnClose = () => {
  //     setEventBn(window.sessionStorage.removeItem('eventBn'))
  // }
  const user = useSelector((state) => state.loggedIn);

  return (
    <>
      <Header />
      <NewContainer>
        <UserInfo user={user.userInfo ?? ""} />
        <Convenience roomsLength={rooms.length} />
        <ReactPortal>{rooms.length === 0 ? <MainModal /> : null}</ReactPortal>
        {room.length === 0 ? (
          <>
            <MainDefault setRoom={setRoom} />
          </>
        ) : (
          <PostList
            roomList={room}
            onClose={async () => {
              dispatch(itemAnimation(false));
            }}
          />
        )}
        <ModalBtn />
        <BottomNavi />
      </NewContainer>
    </>
  );
};

export default Main;

const NewContainer = styled(Container)`
  overflow: hidden;
  padding-top: 10px;
`;
