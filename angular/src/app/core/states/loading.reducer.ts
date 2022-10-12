import { createAction, createReducer, on } from "@ngrx/store";

export const loadingStart = createAction('[loading] start');
export const loadingStop = createAction('[loading] stop');

export const LoadingReducer = createReducer(
    false,
    on(loadingStart, () => true),
    on(loadingStop, () => false)
);