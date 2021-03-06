import { Button } from "@blueprintjs/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addVariableToValObj, addWidget } from "../store/slices/main.slices";

const CounterDisplay = styled.span`
    display: inline-block;
    padding: 0.5rem 1rem;
`;


const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const dispatch = useDispatch();

    const decrement = () => setCounter((pre: number) => pre - 1);
    const increment = () => {
        dispatch(addWidget());
        dispatch(addVariableToValObj());
    };

    return (
        <div>
        <Button onClick={decrement} icon="minus"/>
        <CounterDisplay>{counter}</CounterDisplay>
        <Button onClick={increment} icon="plus"/>
        </div>
    );
}

export default Counter;