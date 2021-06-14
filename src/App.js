import logo from './logo.svg';
import './App.css';
import HelloWorld from "./1. Operations/hello-world";
import ReactProps from "./1. Operations/react-props";
import ReactPropChildren from "./1. Operations/react-prop-children";
import ReactEvents from "./1. Operations/react-events";
import ReactPropsAdv from "./1. Operations/react-props-adv";

function App() {
    const testData = {
        'name': 'Test spread operator',
        'data': 'This is spread operator text',
        'date': Date.now(),
    }
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
          <ReactPropsAdv { ...testData } />
      </header>
    </div>
  );
}

export default App;
