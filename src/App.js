import './App.css';

function App() {
  const myButtons = [1,2,3,'X',4,5,6,'-',7,8,9,'/','+','0','.','=','Clear']
  return (
    <div className="App">
      <div className="display">
        <input type="text" disabled className="input" value="0"></input>
      </div>
      <div className= "cal_body">
          {myButtons.map((key) => (
            <div className="number"><button>{key}</button></div>
          ))}
      </div>
    </div>
  );
}

export default App;
