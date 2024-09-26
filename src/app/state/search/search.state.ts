import { MediaList } from "../../models";

export interface SearchState {
  medias: MediaList;
  loading: boolean;
  error: string | null;
}

export const initialState: SearchState = {
  medias: [],
  loading: false,
  error: null,
};
