import { createAction, props } from '@ngrx/store';
import {MediaList} from "../../models";

export const search = createAction('[Search] Search', props<{ query: string }>());
export const searchSuccess = createAction('[Search] Search Success', props<{ medias: MediaList }>());
export const searchFailure = createAction('[Search] Search Failure', props<{ error: string }>());
