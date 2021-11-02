import { Button } from '@blueprintjs/core';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Counter from './components/Counter';


function App() {
  const codeStirng = 'num => num + 1;'

  return (
    <div className="App">
      <Button title="Hold on" text="Hold On"/>
      <Button icon="refresh" />
      <Counter />
      <SyntaxHighlighter language="javascript" style={dark}>
            {codeStirng}
        </SyntaxHighlighter>
    </div>
  );
}

export default App;
