// import logo from './logo.svg';
import './App.css';

function App() {
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

          <div className='center'> </div>
        </form>
      </div>




    </div>
  );
}

export default App;
