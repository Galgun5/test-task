import {fireEvent, render, screen} from '@testing-library/react'
import React from "react";
import ContainerForTickers from './ContainerForTickers'
import {TickersContext} from "../../context/Tickers/TickersContext";


describe('ContainerForTickers component', () => {

    test("Renders without data (show loader)", () => {
        const testState = {
            tickers: [],
            tickersDeleted: [],
            time: 1000,
            loading: false
        }
        const getTickersData = jest.fn()
        const deleteTicker = jest.fn()

        render(<TickersContext.Provider value={{
            state: testState, getTickersData, deleteTicker
        }}>
            <ContainerForTickers/>
        </TickersContext.Provider>);
        expect(screen.getByText(/Loading/i)).toBeInTheDocument()
    });

    test("Renders with data", () => {
        const testState = {
            tickers: ['Apple', 'Google', 'Fb', 'Microsoft'],
            tickersDeleted: [],
            time: 1000,
            loading: true
        }
        const getTickersData = jest.fn()
        const deleteTicker = jest.fn()

        render(<TickersContext.Provider value={{
            state: testState, getTickersData, deleteTicker
        }}>
                <ContainerForTickers/>
            </TickersContext.Provider>);

        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(document.querySelectorAll("li").length).toEqual(4)

        fireEvent.mouseEnter(document.querySelector(".BoxTicker"))
        expect(screen.getByText(/delete/)).toBeInTheDocument()
    });

})






















