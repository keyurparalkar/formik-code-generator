
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeString from "./CodeString";

const CodeGenerator = () => {
  const allWidgets = useSelector((state: any) => state.main.allWidgets);

    return (
        <SyntaxHighlighter language="jsx" wrapLongLines={true} style={atomDark}>
            {CodeString({allWidgets})}
        </SyntaxHighlighter>
    );
}

export default CodeGenerator;