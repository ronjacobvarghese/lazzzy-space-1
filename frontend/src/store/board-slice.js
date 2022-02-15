import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: {
    _id: "",
    title: "",
    isFavorite: false,
    members: [],
    groups: [],
  },
  reducers: {
    replaceBoard(state, action) {
      console.log("replace board here", action);
      state._id = action.payload._id;
      state.title = action.payload.title;
      state.isFavorite = action.payload.isFavorite;
      state.members = action.payload.members;
    },
    replaceGroupsData(state, action) {
      state.groups = action.payload;
    },
    addGroupToBoard(state, action) {
      const group = action.payload;
      state.groups.push(group);
    },
    removeGroupFromBoard(state, action) {
      const id = action.payload;
      state.groups = state.groups.filter((item) => item._id !== id);
    },
    addCardToGroup(state, action) {
      const newCard = action.payload.item;
      const changedGroup = state.groups.find(
        (item) => item._id === action.payload.groupId
      ).cardList;
      changedGroup.push(newCard);
    },
    removeCardFromGroup(state, action) {
      const groupId = action.payload.groupId;
      const cardId = action.payload.cardId;
      const changedGroup = state.groups.find(
        (item) => item._id === groupId
      ).cardList;
      state.groups.find((item) => item._id === groupId).cardList =
        changedGroup.filter((item) => item._id !== cardId);
    },
    dragEnterGroup(state, action) {
      const dragItem = action.payload.dragItem;
      const targetItem = action.payload.targetItem;
      state.groups[targetItem.groupIndex].cardList.splice(
        targetItem.cardIndex,
        0,
        state.groups[dragItem.groupIndex].cardList.splice(
          dragItem.cardIndex,
          1
        )[0]
      );
    },
    toggleFavorites(state) {
      state.isFavorite = !state.isFavorite;
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
