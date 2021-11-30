import {fireEvent, render, screen} from '@testing-library/react'
import BoxTicker from './BoxTicker'


let testState = {
    ticker: 'APPLE',
    exchange: 26,
    price: 156,
    change: 21,
    change_percent: 0.5,
    dividend: 12,
    last_trade_time: '1995-12-17T03:24:00'
}
const PreTestState = {
    ticker: 'APPLE',
    exchange: 45,
    price: 205,
    change: 26,
    change_percent: 0.8,
    dividend: 35,
    last_trade_time: '1995-12-17T03:24:00'
}

describe('BoxTicker component', () => {
    beforeEach(() => {
        render(<BoxTicker State={testState} Previous={PreTestState}/>);
    })
    test('BoxTicker renders', () => {

        const div = document.querySelector('.BoxTicker')
        expect(div).toBeInTheDocument()
        expect(screen.getByText(/Apple/i)).toBeInTheDocument()
        expect(screen.getByText(/156/)).toBeInTheDocument()
        expect(screen.getByText(/21/)).toBeInTheDocument()
    })


    test('Dynamic styles works', () => {
        expect(screen.getByText(/-21/)).toHaveClass('changePrice');
        expect(screen.getByText(/21/)).toHaveClass('red');
    })

    test('Show and hidden button delete', () => {
        const div = document.querySelector('.BoxTicker')

        expect(screen.queryByText(/delete/)).toBeNull()  // span is hidden
        fireEvent.mouseEnter(div)
        expect(screen.getByText(/delete/)).toBeInTheDocument() // span is showed
        fireEvent.mouseLeave(div)
        expect(screen.queryByText(/delete/)).toBeNull() // span is hidden
    })

})










