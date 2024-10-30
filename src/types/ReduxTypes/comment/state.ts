import { IComment } from './action';

export interface ICommentState {
  comments: IComment[] | null;
  commentsLoading: boolean;
}
