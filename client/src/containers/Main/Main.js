import React from 'react';
import ContainerForTickers from "../../components/ContainerForTickers/ContainerForTickers";
import IntervalTime from "../../components/IntervalTime/IntervalTime";
import AddTickers from "../../components/AddTickers/AddTickers";

const Main = () => {
    return (
        <div>
            <AddTickers/>
            <ContainerForTickers/>
            <IntervalTime/>
        </div>
    )
}

export default Main