type TNewWidget = {
  name: string | null;
  validationEntry: string | null;
  initialValue: string | null;
  domAttributes: string | null;
};

interface ICodeString {
  allWidgets: TNewWidget[];
}

const CodeString = ({ allWidgets }: ICodeString) => {
  let yupValues: {} = {};
  let initValues: {} = {};

  if (allWidgets) {
    for (let i of allWidgets) {
      //@ts-ignore
      yupValues[i.name] = i.validationEntry;
      //@ts-ignore
      initValues[i.name] = "";
    }
  }



  const boilerPlateCode = `
    import * as Yup from "yup";
    import { Formik } from "formik";

    const App = () => {
        const formikValidationObj = Yup.object(${JSON.stringify(yupValues)});

        return (
            <Formik
            initialValues={${JSON.stringify(initValues)}}
            validationSchema={formikValidationObj}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={() => {}}
            >
            {({ handleSubmit, handleChange, errors, resetForm, values }) => (
                <form onSubmit={() => handleSubmit()}>
                <label for="textField1">textField1: </label>
                <input
                    type="text"
                    id="textField1"
                    name="textField1"
                    onChange={handleChange("textField1")}
                />
                {errors?.textField1 && (
                    <span style={{ display: "block", marginLeft: "8px", color: "red" }}>
                    {errors?.textField1}
                    </span>
                )}

                <label for="textField1">textField1: </label>
                <input
                    type="text"
                    id="textField1"
                    name="textField1"
                    onChange={handleChange("textField1")}
                />
                {errors?.textField1 && (
                    <span style={{ display: "block", marginLeft: "8px", color: "red" }}>
                    {errors?.textField1}
                    </span>
                )}

                <button onClick={handleSubmit}>Submit</button>
                </form>
            )}
            </Formik>
        );
    };


export default App;
    `;

  return boilerPlateCode;
};

export default CodeString;
