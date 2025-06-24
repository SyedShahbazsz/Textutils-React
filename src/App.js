// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');   //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [themeColor, setThemeColor] = useState('#ffffff'); // default white for light themes

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
     if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0c3177';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
     } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
     }
  }


// ----------------------------------------------------------------------------------------------
  const handleThemeChange = (e) => {
    const selectedColor = e.target.value;
    setThemeColor(selectedColor);
      document.body.style.backgroundColor = selectedColor; 
  };
// ----------------------------------------------------------------------------------------------
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} themeColor={themeColor}
        onThemeChange={handleThemeChange}/>
    <Alert alert={alert} />
    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils"/> */}
    <div className='container my-3'>
       {/* <Routes>   */}
{/*-----------------------------------------------------------------------
   Example : /user      --> Component 1
             /user/home ---> Component 2 (1. We have to use "exact" If we are using <Switch> Ex:<Route exact path="/"> instead of <Routes>
                                        2. We have to use "element" If we are using <Routes> Ex:<Route path="/about" element={<About />}/> instead of <Switch>)
*/}
    <TextForm showAlert={showAlert} heading="Enter the text to analyzae below" mode={mode} themeColor={themeColor}/>
    {/* <About /> */}
        {/* <Route path="/about" element={<About />} />
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyzae below" mode={mode} themeColor={themeColor}/>} />
      </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
