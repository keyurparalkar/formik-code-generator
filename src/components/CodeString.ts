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
  let formElements: [] = [];

  if (allWidgets) {
    for (let i of allWidgets) {
      //@ts-ignore
      yupValues[i.name] = i.validationEntry;
      //@ts-ignore
      initValues[i.name] = "";
      //@ts-ignore
      formElements.push(i.formElements);
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
                ${formElements.map((item :any) => item).join("\n")}
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
