import { Button, Spinner } from '@blueprintjs/core';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <Button title="Hold on" text="Hold On"/>
      <Button icon="refresh" />
      <Counter />
    </div>
  );
}

export default App;
