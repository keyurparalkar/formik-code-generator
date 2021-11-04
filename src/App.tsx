import { Alignment, Navbar } from "@blueprintjs/core";
import styled from "styled-components";
import CodeGenerator from "./components/CodeGenerator";
import WidgetSelector from "./components/WidgetSelector";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & .left-pan,
  .right-pan {
    width: 50%;
  }

  & .left-pan {
    height: 100vh;
  }

  & .right-pan pre {
    overflow-y: visible;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <div className="formik-code-generator">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Formik-Code-Generator</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
      </Navbar>
      <Container>
        <div className="left-pan">
          <WidgetSelector />
        </div>
        <div className="right-pan">
          <CodeGenerator />
        </div>
      </Container>
    </div>
  );
};

export default App;
