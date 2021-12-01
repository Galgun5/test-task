import React, {useContext, useEffect, useRef} from 'react'
import classes from './ContainerForTickers.module.sass'
import BoxTicker from "./BoxTicker/BoxTicker"
import {TickersContext} from "../../context/Tickers/TickersContext";
import Loader from "../UI/Loader/Loader";


const ContainerForTickers = () => {

    const {state, getTickersData, deleteTicker} = useContext(TickersContext)

    useEffect(() => {
        let cleanupFunction = false;
        getTickersData(cleanupFunction)
        return () => cleanupFunction = true;
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const tickers = state.tickers
    const prevState = usePrevious(tickers)


    return (

        <div className={classes.ContainerForTickers}>
            {state.loading
                ? <ul> {tickers.map((ticker, index) => {
                    return (
                        <li key={ticker + '_' + index}>
                            <BoxTicker State={ticker}
                                       deleteTicker={deleteTicker}
                                       Previous={prevState ? prevState[index] : undefined}/>
                        </li>
                    )
                })}
                </ul>
                : <Loader/>
            }
        </div>
    )
}

export default ContainerForTickers
