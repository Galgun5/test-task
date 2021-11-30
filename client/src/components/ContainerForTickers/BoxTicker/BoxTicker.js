import React, {useState} from 'react';
import classes from './BoxTicker.module.sass'

const BoxTicker = ({State, Previous = State, deleteTicker}) => {
    const {ticker, price, change, change_percent} = State
    const [mouseOnTicker, setMouseHoverTicker] = useState(false)

    let cls = [classes.changePrice]
    let sign = ''

    if (price > Previous.price) {
        cls.push(classes.green)
        sign = '+'
    } else {
        cls.push(classes.red)
        sign = '-'
    }

    const leaveMouse = () => {
        if (mouseOnTicker) {
            setMouseHoverTicker(false)
        }
    }

    return (
        <React.Fragment>
            <div
                className={classes.BoxTicker}
                onMouseEnter={() => setMouseHoverTicker(true)}
                onMouseLeave={leaveMouse}
            >
                <div>
                    <span><strong>{ticker}</strong></span>
                    <span className={classes.price}>{price}$</span>
                </div>
                <div>
                    <span className={cls.join(' ')}> {Math.round(change_percent * 100)}%</span>
                    <span className={cls.join(' ')}>{sign}{change}</span>
                </div>
                {mouseOnTicker
                    ? <span
                        id={ticker}
                        className={classes.HoverDiv}
                        onMouseLeave={leaveMouse}
                        onClick={(e) => deleteTicker(e.target.id)}
                    >delete</span>
                    : null}
            </div>

        </React.Fragment>
    )
}
export default BoxTicker
