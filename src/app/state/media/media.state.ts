import {MediaList} from "../../models";

export interface MediaState {
  medias: MediaList;
  loading: boolean;
  error: any;
}

export const initialState: MediaState = {
  medias: [],
  loading: false,
  error: null,
};
