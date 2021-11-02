import { Button } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";

const CounterDisplay = styled.span`
    display: inline-block;
    padding: 0.5rem 1rem;
`;


const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const decrement = () => setCounter((pre: number) => pre - 1);
    const increment = () => setCounter((pre: number) => pre + 1);

    return (
        <div>
        <Button onClick={decrement} icon="minus"/>
        <CounterDisplay>{counter}</CounterDisplay>
        <Button onClick={increment} icon="plus"/>
        </div>
    );
}

export default Counter;