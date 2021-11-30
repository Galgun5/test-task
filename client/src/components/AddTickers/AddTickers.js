import React, {useContext, useState} from 'react';
import classes from './AddTickers.module.sass'
import {TickersContext} from "../../context/Tickers/TickersContext";

const AddTickers = () => {

    const {state, addTicker} = useContext(TickersContext)
    const [openTickers, setOpenTickers] = useState(false)

    const addTickerHandler = nameTicker => {
        addTicker(nameTicker)
        setOpenTickers(false)
    }

    return (
        <div className={classes.AddTickers}>
            <strong>Add tickers:</strong>
            <div>
                 <span
                     onMouseEnter={() => setOpenTickers(true)}
                     onMouseLeave={() => setOpenTickers(false)}
                 >choose tickers&#9662;</span>
                {
                    openTickers
                        ? <ul
                            onMouseEnter={() => setOpenTickers(true)}
                            onMouseLeave={() => setOpenTickers(false)}
                        >
                            {state.tickersDeleted.map((ticker, index) => {
                                return (
                                    <li
                                        className=''
                                        key={index + '_' + ticker.ticker }
                                        onClick={e => addTickerHandler(e.target.innerHTML)}
                                    >
                                        {ticker}
                                    </li>
                                )
                            })}
                        </ul>
                        : null
                }


            </div>
        </div>
    )
}
export default AddTickers