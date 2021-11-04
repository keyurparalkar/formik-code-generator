import { Button } from "@blueprintjs/core";
import React from "react";
import styled from "styled-components";

interface ICounter {
  counterLabel: string;
  onIncrement:
    | (((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) &
        React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
  onDecrement:
    | (((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) &
        React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
  counterValue: number;
}

const CounterDisplay = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
`;

const CounterLabel = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  display: block;
  padding-bottom: 0.2rem;
`;

const Counter = ({
  counterLabel,
  onIncrement,
  onDecrement,
  counterValue,
}: ICounter) => {
  return (
    <div>
      <CounterLabel>{counterLabel}</CounterLabel>
      <Button onClick={onDecrement} icon="minus" />
      <CounterDisplay>{counterValue}</CounterDisplay>
      <Button onClick={onIncrement} icon="plus" />
    </div>
  );
};

export default Counter;
