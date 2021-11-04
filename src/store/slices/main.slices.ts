import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    textFieldCounter: 0,
    allWidgets: [],
    newWidget: {
      name: null,
      validationEntry: null,
      initialValue: null,
      domAttributes: null,
    },
    validationVariablesObj: [],
  },
  reducers: {
    addWidget: (state: any) => {
      //increase the textField Counter:
      state.textFieldCounter += 1;

      //Create new widget:
      const tempWidget = {
        name: `textField${state.textFieldCounter}`,
        validationEntry: `Yup.string().required('textField${state.textFieldCounter} is required')`,
        initialValue: "",
        domAttributes: `
            {errors?.textField${state.textFieldCounter} && (
              <span style={{ display: "block", marginLeft: "8px", color: "red" }}>
                {errors?.textField${state.textFieldCounter}}
              </span>
            )}`,
      };

      state.newWdiget = tempWidget;
      state.allWidgets.push(tempWidget);
    },
    removeLastWidget: (state: any) => {
        if(state.textFieldCounter > 0){
            state.textFieldCounter -= 1;
            state.allWidgets.pop();
        }
    },
    addVariableToValObj: (state: any) => {
      state.validationVariablesObj.push(
        "label: Yup.string().required('Label is required')"
      );
    },
  },
});

export const { addWidget, addVariableToValObj, removeLastWidget } = mainSlice.actions;

export default mainSlice.reducer;
