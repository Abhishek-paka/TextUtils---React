import { useState } from 'react';
import './App.css';
import Navbar from'./Components/Navbar'
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (color) => {
    setMode(color);
    if (color === 'dark') {
      document.body.style.backgroundColor = '#293241';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';

    } else if (color === 'purple') {
      document.body.style.backgroundColor = '#7b2cbf'; // Example purple color
      document.body.style.color = 'white';
      document.title = 'TextUtils - Purple Mode';

    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.title = 'TextUtils - White Mode';

    }
  }

  return (  
    <>
    <Router>
        <Navbar title="TextUtils" aboutText="About" homeText="Home" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        <Alert alert ={alert}/>
        <div className='container'>
        <Routes>
          <Route exact path='/TextUtils' element= {<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}></Route>
            <Route exact path='/home' element= {<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}></Route>
            <Route exact path='/about' element={<About mode={mode}/>} />
            <Route exact path='/' element= {<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>} />
        </Routes>
        </div>
      </Router>
    </>    
  );
}

export default App;












// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Abhi
//         </a>
//       </header>
//     </div>

 // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 1500);

      // setInterval(() => {
      //   document.title = 'TextUtils - Home';
      // }, 3000);