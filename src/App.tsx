import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Counter from './components/Counter';


function App() {
  const addWidgets = useSelector((state: any) => state.main.addWidgets);
  const validationVariablesObj = useSelector((state: any) => state.main.validationVariablesObj);

  const codeStirng = `
    const formikValidationObject = Yup.object.shape({
      ${JSON.stringify(validationVariablesObj)}
    })
  `;

  return (
    <div className="App">
      <Counter />
      <SyntaxHighlighter language="javascript" style={dark}>
            {codeStirng}
        </SyntaxHighlighter>
    </div>
  );
}

export default App;
