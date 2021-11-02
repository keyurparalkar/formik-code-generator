import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        addWidgets: ["HOLA"],
        validationVariablesObj: []
    },
    reducers: {
        addWidget: (state: any) => {
            state.addWidgets.push({
                name: "widgetName"
            })
        },
        addVariableToValObj: (state:any) => {
            state.validationVariablesObj.push("label: Yup.string().required('Label is required')")
        }
    }
});

export const { addWidget, addVariableToValObj } = mainSlice.actions;

export default mainSlice.reducer;