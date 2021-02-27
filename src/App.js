import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])

  //array
  // const nayoks = ['Raj Rajjak', 'Joshim', 'Alomgir', 'Eleyas Kanchon', 'Salman Shah', 'Bappa Raj']
  // const nayoksAge = [61, 62, 63, 60]
  //object
  // const nayoksObj = [{name:'Jashim', age: 56}, {name:'Alomgir', age: 65}, {name:'Salman Shah', age: 36}, {name:'Bappa Raz', age: 50}]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} email={nk.email}></Nayok> )
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(5);
  // console.log(count, setCount);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <button onClick={decreaseCount} >remove Movie</button>
      <button onClick={increaseCount} >Add Movie</button>
      <h3>Number of Movies: {count}</h3>
    </div>
  )
}

function Nayok(props) {
  const nayokStyle = {
    color: 'white',
    backgroundColor: 'dimgray',
    margin: '10px',
    border: '2px solid salmon',
    borderRadius: '20px',
  }
  return (
    <div style={nayokStyle}>
      <h1>Nayok-{props.name} </h1>
      <p>My email: {props.email} </p>
    </div>
  )
}

export default App;
