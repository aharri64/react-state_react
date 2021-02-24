
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import MoodTracker from './MoodTracker'

function App() {
  const obj = { name: 'Jimmy'};
  return (
   <div>
      <MoodTracker />
      <Person />
   </div>
  );
}

export default App;
