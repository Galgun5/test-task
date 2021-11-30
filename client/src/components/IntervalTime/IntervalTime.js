import React, {useContext, useState} from 'react';
import {TickersContext} from "../../context/Tickers/TickersContext";
import Button from "../UI/Button/Button";
import classes from './IntervalTime.module.sass'


const IntervalTime = () => {
    const {changeTime} = useContext(TickersContext)
    const [intervalTime, setIntervalTime] = useState()

    const submitHandler = event => {
        event.preventDefault();
    }
    const changeIntervalTime = () => {
        const idTime = document.getElementById('num').value
        if (intervalTime !== idTime) {
            setIntervalTime(idTime)
            changeTime(idTime * 1000)
        }
    }

    return (
        <div className={classes.IntervalTime}>
            <form onSubmit={submitHandler}>
                <label htmlFor="num">Set interval, s: </label>
                <input id='num' type='number' min="1"
                />
                <Button onClick={changeIntervalTime}>Button</Button>
            </form>
        </div>
    )
}
export default IntervalTime