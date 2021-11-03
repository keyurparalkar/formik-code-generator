import CodeGenerator from './components/CodeGenerator';
import Counter from './components/Counter';



const App = () => {
  return (
    <div className="formik-code-generator">
      <div>
        <label htmlFor="">Text Field</label>
        <Counter />
      </div>
      <CodeGenerator />
    </div>
  );
}

export default App;
