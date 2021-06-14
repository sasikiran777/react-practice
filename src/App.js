import logo from './logo.svg';
import './App.css';
import HelloWorld from "./Components/hello-world";
import ReactProps from "./Components/react-props";
import ReactPropChildren from "./Components/react-prop-children";
import ReactEvents from "./Components/react-events";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
          <ReactProps
              data='This is prop data'
              // name='name'
          />
          <ReactPropChildren data="This is children prop exmpl">
              <p>
                  This is a child paragraph
              </p>
          </ReactPropChildren>
          <ReactEvents />
      </header>
    </div>
  );
}

export default App;
