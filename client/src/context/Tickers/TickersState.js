import React, {useReducer} from 'react';
import {TickersContext} from "./TickersContext";
import {TickersReducer} from "./TickersReducer";
import {GET_Tickers, CHANGE_TIME, SET_LOADING, GET_Tickers_Deleted} from "../types";

const {io} = require("socket.io-client");
const socket = io.connect('http://localhost:4000');


export const TickersState = ({children}) => {
    const initialState = {
        tickers: [],
        tickersDeleted: [],
        time: 1000,
        loading: false
    }
    const [state, dispatch] = useReducer(TickersReducer, initialState)

    const getTickersData = async (cleanupFunction) => {
        try {
            socket.emit('start');
            await socket.on("ticker", response => {
                const res = Array.isArray(response) ? response : [response];
                setLoading()
                if(!cleanupFunction) {
                    dispatch({
                        type: GET_Tickers,
                        payload: res,
                    })
                }
            });
            getTickersDeleted(cleanupFunction)
        } catch (e) {
            console.error(e.message)
        }
    }

    const getTickersDeleted = async (cleanupFunction) => {
        try {
            await socket.on("tickersDeleted", response => {
                const res = Array.isArray(response) ? response : [response];
                if(!cleanupFunction) {
                    dispatch({
                        type: GET_Tickers_Deleted,
                        payload: res,
                    })
                }
            });
        } catch (e) {
            console.error(e.message)
        }
    }

    const setLoading = () => dispatch({type: SET_LOADING})

    const changeTime = (t) => {
        dispatch({
            type: CHANGE_TIME,
            payload: t
        })
        socket.emit('changeInterval', t)
    }

    const deleteTicker = (name) => {
        socket.emit('deleteTicker', name)
        dispatch({
            type: GET_Tickers,
            payload: state.tickers
        })
    }

    const addTicker = (name) => {
        socket.emit('addTicker', name)
        dispatch({
            type: GET_Tickers,
            payload: state.tickers
        })
    }

    return (
        <TickersContext.Provider value={{
            state, getTickersData, changeTime, deleteTicker, getTickersDeleted, addTicker
        }}>
            {children}
        </TickersContext.Provider>
    )
}
