import {Action, createReducer, on} from '@ngrx/store';
import {search, searchSuccess, searchFailure} from "./search.actions";
import {initialState, SearchState} from "./search.state";

const searchReducer = createReducer(
  initialState,
  on(search, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(searchSuccess, (state, { medias }) => ({
    ...state,
    medias: [...medias],
    loading: false,
    error: null,
  })),

  on(searchFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
)


export function reducer(state: SearchState | undefined, action: Action){
  return searchReducer(state, action);
}
