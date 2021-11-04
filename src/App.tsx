import { Alignment, Navbar } from "@blueprintjs/core";
import CodeGenerator from "./components/CodeGenerator";
import Counter from "./components/Counter";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & .left-pan,.right-pan{
    width: 50%;
  }

  & .left-pan{
    height: 100vh;
  }

  & .right-pan pre{
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
          <label htmlFor="">Text Field</label>
          <Counter />
        </div>
        <div className="right-pan">
          <CodeGenerator />
        </div>
      </Container>
    </div>
  );
};

export default App;
