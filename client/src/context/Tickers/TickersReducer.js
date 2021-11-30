import {CHANGE_TIME, GET_Tickers, GET_Tickers_Deleted, SET_LOADING} from "../types";

const handlers = {
    [GET_Tickers]: (state, {payload} ) => ({...state, tickers: payload}),
    [GET_Tickers_Deleted]: (state, {payload} ) => ({...state, tickersDeleted: payload}),
    [CHANGE_TIME]: (state, {payload}) => ({...state, time: payload}),
    [SET_LOADING]: (state) => ({...state, loading: true}),
    DEFAULT: state => state
}

export const TickersReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}
