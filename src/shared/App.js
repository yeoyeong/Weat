import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//component
import AppLayout from "../components/AppLayout";
import "../css/fonts/fontFace.css";
import Splash from "../components/Splash";

//슬라이스
import { loadRoomDB } from "../redux/modules/postSlice";
import userSlice, { loggedInDB } from "../redux/modules/userSlice";

//Sub
import Singup from "../pages/Singup";
import FindUser from "../pages/FindUser";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Main from "../pages/Main";
import ListPage from "../pages/ListPage";
import Detail from "../pages/Detail";
import MakeRoom from "../pages/MakeRoom";
import FaceCustom from "../components/signup/FaceCustom";
import Agreement from "../components/signup/Agreement";
import Essential from "../components/signup/Essential";
import BasicInfo from "../components/signup/BasicInfo";
import Completion from "../components/signup/Completion";
import EditListPage from "../pages/EditListPage";
import Edit from "../pages/Edit";
import MapPage from "../pages/MapPage";
import GlobalStyles from "../css/GlobalStyles";
import Header from "../components/Header";
import FindPwDescription from "../components/findUser/FindPwDescription";
import FindIdDescription from "../components/findUser/FindIdDescription";
import RoomShare from "../pages/RoomShare";
import CodeSearch from "../components/roomShare/CodeSearch";
import NoEntry from "../components/roomShare/NoEntry";
import Mypage from "../pages/Mypage";
import MypageEdit from "../pages/MypageEdit";
import CharacterEdit from "../components/mypageEdit/CharacterEdit";
import ChangePassword from "../components/mypageEdit/ChangePassword";
import EditPersonalInformation from "../components/mypageEdit/EditPersonalInformation";
import Myreview from "../components/mypageEdit/Myreview";
import { loadStoreRoomDB } from "../redux/modules/mapSlice";
import StorePost from "../pages/StorePost";
import RestaurantRegistration from "../components/map_page/post/RestaurantRegistration";
import RoomRegistration from "../components/map_page/post/RoomRegistration";
import PostReview from "../components/map_page/post/PostReview";
import PostReviewPhoto from "../components/map_page/post/PostReviewPhoto";
import ReviewPage from "../pages/ReviewPage";
import PostSuccess from "../components/map_page/post/PostSuccess";
import None from "../components/None";
import BackgroundLogo from "../img/logo_type_background.svg";
import BackgroundImage from "../img/backgroundImg.svg";
import Record from "../pages/Record";

import { io } from "socket.io-client";
import { addNotiList } from "../redux/modules/socketSlice";
import styled from "styled-components";
import { device } from "../css/GlobalStyles";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLogin, userInfo } = useSelector((state) => state.loggedIn);
  const { detail, users } = useSelector((state) => state.post.detail);
  const _rooms = useSelector((state) => state.post?._rooms);
  const isloaded = useSelector((state) => state.post.isloaded);
  const [isLoading, setIsLoading] = useState(false);

  //소셜 로그인
  const userToken = window.location.href.split("=")[1];
  const snsUserTokenSave = async () => {
    await localStorage.setItem("token", userToken);
    await dispatch(loggedInDB({ navigate, dispatch }));
    await dispatch(loadRoomDB(0));
  };
  useEffect(() => {
    if (userToken) {
      snsUserTokenSave();
    }
  }, [userToken]);

  //일반로그인
  const generalLogin = async () => {
    if (!userToken) {
      if (window.localStorage.getItem("token")) {
        await dispatch(loggedInDB({ navigate, dispatch }));
        await dispatch(loadRoomDB(0));
      }
      if (
        !window.localStorage.getItem("token") &&
        !location.pathname.includes("signup") &&
        !location.pathname.includes("roomshare")
      ) {
        navigate("/login");
      }
    }
  };
  //데이터 불러오기
  useEffect(() => {
    // window.sessionStorage.setItem("eventBn", true);
    // const load = async () => {
    // await;
    setIsLoading(true);
    // await generalLogin();
    // await dispatch(loadStoreRoomDB(0));
    // await setIsLoading(false);
    // };
    // load();
  }, []);

  return (
    <>
      <BodyContainer
        BackgroundImage={BackgroundImage}
        BackgroundLogo={BackgroundLogo}
      />
      <AppContainer>
        <AppLayout>
          {/* {isLoading ? <Splash /> : ""} */}
          <Routes>
            <Route path="/detail" element={<Detail />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/detail/:id/:code" element={<Detail />} />
            <Route path="/listpage" element={<ListPage />} />
            <Route path="/listpage/:id" element={<ListPage />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/editlistpage" element={<EditListPage />} />
            <Route path="/editlistpage/:id" element={<EditListPage />} />

            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/" element={isloaded && <Main socket={socket} />} /> */}
            <Route path="/" element={isloaded && <Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Singup />}>
              <Route path="agreement" element={<Agreement />} />
              <Route path="essential" element={<Essential />} />
              <Route path="basicInfo" element={<BasicInfo />} />
              <Route path="faceCustom" element={<FaceCustom />} />
              <Route path="completion" element={<Completion />} />
            </Route>
            <Route path="/finduser" element={<FindUser />} />
            <Route
              path="/finduser/findpwdescription"
              element={<FindPwDescription />}
            />
            <Route
              path="/finduser/findiddescription"
              element={<FindIdDescription />}
            />
            <Route path="/makeroom" element={<MakeRoom />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="review" element={<ReviewPage />} />
            <Route path="review/:id" element={<ReviewPage />} />
            <Route path="/storepost" element={<StorePost />}>
              <Route
                path="restaurantregistration"
                element={<RestaurantRegistration />}
              />
              <Route path="roomregistration" element={<RoomRegistration />} />
              <Route
                path="roomregistration/:id"
                element={<RoomRegistration />}
              />
              <Route path="postReview" element={<PostReview />} />
              <Route path="postReview/:id" element={<PostReview />} />
              <Route path="postReviewPhoto" element={<PostReviewPhoto />} />
              <Route path="postReviewPhoto/:id" element={<PostReviewPhoto />} />
              <Route path="success" element={<PostSuccess />} />
              <Route path="success/:id" element={<PostSuccess />} />
            </Route>
            <Route path="/roomshare" element={<RoomShare />}>
              <Route path="codesearch" element={<CodeSearch />} />
              <Route path="codesearch/:code" element={<CodeSearch />} />
              <Route path="noentry" element={<NoEntry />} />
            </Route>
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypage_edit" element={<MypageEdit />}>
              <Route path="character_edit" element={<CharacterEdit />} />
              <Route path="change_password" element={<ChangePassword />} />
              <Route
                path="change_personalinformation"
                element={<EditPersonalInformation />}
              />
              <Route path="myreview" element={<Myreview />} />
            </Route>
            <Route path="/record" element={<Record />} />
            <Route path="/none" element={<None />} />
          </Routes>
        </AppLayout>
      </AppContainer>
      {/* </ BodyContainer> */}
    </>
  );
}

const AppContainer = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 2;
  height: 100%;
  min-height: 100vh;
  @media ${device.pc} {
    width: 480px;
    margin: auto;
    min-height: 100vh;
    height: 100%;
    box-shadow: var(--SHADOW2);
  }
`;
const BodyContainer = styled.div`
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.BackgroundImage});
  background-size: cover;
  ::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: 344px;
    right: 330px;
    width: 300px;
    height: 114px;
    background-size: cover;
    background-image: url(${(props) => props.BackgroundLogo});
  }
`;

export default App;
