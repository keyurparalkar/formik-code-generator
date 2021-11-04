import { useDispatch, useSelector } from "react-redux";
import { addVariableToValObj, addWidget, removeLastWidget } from "../store/slices/main.slices";
import Counter from "./Counter";

const WidgetSelector = () => {
  const dispatch = useDispatch();
  const textFieldCounter = useSelector(
    (state: any) => state.main.textFieldCounter
  );

  const addTextField = () => {
    dispatch(addWidget());
    dispatch(addVariableToValObj());
  };

  const removeTextField = () => {
      dispatch(removeLastWidget());
  }
  return (
    <>
      <Counter
        counterValue={textFieldCounter}
        onIncrement={addTextField}
        onDecrement={removeTextField}
        counterLabel="Text Field"
      />
    </>
  );
};

export default WidgetSelector;
