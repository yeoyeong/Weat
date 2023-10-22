import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance, getAuthorizationHeader } from "../../shared/axios";

const initialState = {
  tasteRoom: {
    roomName: "",
    emoji: "",
    invitedFriends: [],
  },
  emojiKey: false,
  searchResults: null,
  searchDefaultValue: [
    {
      userId: "yeoyeong",
      customerId: "yeoyeong",
      name: "김영호",
      birthDay: "0225",
      email: "test@test.com",
      nickname: "김영호",
      faceColor: "red",
      eyes: "type0",
    },
    {
      userId: "yeoyeong1",
      customerId: "yeoyeong21",
      name: "김영호1",
      birthDay: "02251",
      email: "test@test.com1",
      nickname: "김영호1",
      faceColor: "blue",
      eyes: "type2",
    },
    {
      userId: "yeoyeong2",
      customerId: "yeoyeong2",
      name: "김영호2",
      birthDay: "02252",
      email: "test@test.com2",
      nickname: "김영호2",
      faceColor: "skyblue",
      eyes: "type3",
    },
  ],
};

export const friendDB = createAsyncThunk(
  "users/searchUser",
  async (searchInput) => {
    return instance
      .post(
        "/api/rooms/findUser",
        { value: searchInput },
        { headers: { Authorization: getAuthorizationHeader() } }
      )
      .then((res) => {
        return res.data.result;
      })
      .catch((error) => console.log(error));
  }
);

const roomMakingSlice = createSlice({
  name: "tasteRoom",
  initialState,
  reducers: {
    addName(state, action) {
      state.tasteRoom.roomName = action.payload;
    },
    addEmoji(state, action) {
      state.tasteRoom.emoji = action.payload;
    },
    addFriends(state, action) {
      console.log(action.payload);
      state.tasteRoom.invitedFriends = action.payload;
    },
    emojiKeyboardActivation(state, action) {
      state.emojiKey = action.payload;
    },
    searchUser(state, action) {
      if (!action.payload) state.searchResults = state.searchDefaultValue;
      state.searchResults = state.searchDefaultValue.filter(
        (user) => user.nickname.indexOf(action.payload) >= 0 ?? user
      );
    },
    searchResultReset(state, action) {
      state.searchResults = null;
    },
  },
  extraReducers: {
    [friendDB.pending]: (state, action) => {
      console.log("방 정보 대기 중");
    },
    [friendDB.fulfilled]: (state, action) => {
      // console.log(action.payload);
      state.searchResults = action.payload;
    },
    [friendDB.rejected]: (state, action) => {
      console.log("방 정보 불러오기 실패");
    },
  },
});

export const {
  addName,
  addEmoji,
  addFriends,
  searchUser,
  searchResultReset,
  emojiKeyboardActivation,
} = roomMakingSlice.actions;
export default roomMakingSlice.reducer;
