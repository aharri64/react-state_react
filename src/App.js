import logo from './logo.svg';
import './App.css';
import Person from './Person'

function App() {
  const obj = {name: 'Jimmy'};
  return (
    <div className="App">
      <Person data={obj} />
    </div>
  );
}

export default App;
