
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeGenerator = () => {
  const validationVariablesObj = useSelector((state: any) => state.main.validationVariablesObj);
  const allWidgets = useSelector((state: any) => state.main.allWidgets);


  //Create a file with template literal function in it which will take these values.
  const codeStirng = `
  const formikValidationObject = Yup.object.shape({
    ${JSON.stringify(validationVariablesObj)}
  })
`;

  console.log("ALL WIDGETS = ", allWidgets);

    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {codeStirng}
        </SyntaxHighlighter>
    );
}

export default CodeGenerator;