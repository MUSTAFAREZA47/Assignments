import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';
import Person from './components/Person';

function App() {
  return (
    <div className='App'>
      <Header title="Welcome to my website!" />
      <Person name="Ahmed" age="24" />
      <List items={['apple', 'banana', 'orange']} />
      <Button text="Click me!" onClick={() => alert("Button clicked")} />
    </div>
  );
}

export default App;
