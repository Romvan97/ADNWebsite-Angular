import { createAction, createReducer, on, props } from "@ngrx/store";
import { RowToggler } from "primeng/table";
import { RoleEnum } from "../enums/role.enum";
import { TokenModel } from "../models/token.model";

export interface SessionState {
    id?: string;
    connectedUserName?: string;
    token?: string;
    isLogged: boolean;
    role?: RoleEnum;
}

export const sessionStart = createAction('[session] start', props<TokenModel>());
export const sessionStop = createAction('[session] stop');

const initialState = <SessionState>{ isLogged: false }

export const SessionReducer = createReducer(
    initialState,
    on(sessionStart, ({}, {id, username, token, role}) => ({ 
        id,
        username, 
        token,
        role,
        isLogged: true 
    })),
    on(sessionStop, () => initialState)
);