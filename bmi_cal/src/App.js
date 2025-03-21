// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');




  return (
    <div className="App">
      <div className = "conntainer">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (ibs)</label>
            <input type="text"  placeholder="Enter your weight" value={weight}/>
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text" placeholder="Enter your weight" value={height}/>
          </div>
          <div>
            <button className= 'btn' type='submit'>Submit</button>
            <button className= 'btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'> 
            <h3>  Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>




    </div>
  );
}

export default App;


// We have small way to go