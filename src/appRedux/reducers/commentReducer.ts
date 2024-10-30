import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComment } from 'types/ReduxTypes/addOn';
import { ICommentState } from 'types/ReduxTypes/comment';

const initialState: ICommentState = {
  comments: null,
  commentsLoading: true
};

const UserSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {
    getCommentsSuccess: (state, { payload }: PayloadAction<ICommentState['comments']>) => {
      state.comments = payload;
      state.commentsLoading = false;
    },
    createCommentSucces: (state, { payload }: PayloadAction<IComment>) => {
      state.comments = state.comments ? [...state.comments, payload] : [payload];
    },

    getCommentsFailure: (state) => {
      state.commentsLoading = false;
    }
  }
});

export const { getCommentsFailure, getCommentsSuccess, createCommentSucces } = UserSlice.actions;

export default UserSlice.reducer;

/**
 * Exported selector for usage in components
 *
 * @param {Object<ICommentState>} state - The state of Users
 * @param {ICommentState} state.user - The state of User state
 * @returns {ICommentState} returns User state object
 */
export const CommentSelector = (state: { comment: ICommentState }): ICommentState => {
  return state.comment;
};
