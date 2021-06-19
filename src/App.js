import logo from './logo.svg';
import './App.css';
import HelloWorld from "./1. Operations/1 hello-world";
import ReactProps from "./1. Operations/2 react-props";
import ReactPropChildren from "./1. Operations/3 react-prop-children";
import ReactEvents from "./1. Operations/5 react-events";
import ReactPropsAdv from "./1. Operations/4 react-props-adv";
import {testData} from "./general/constants";
import UseStateBasic from "./2. Use State Hook/1 use-state-basic";
import UseStateAdv from "./2. Use State Hook/2.0 use-state-adv";
import UseStateAdvSprade from "./2. Use State Hook/2.1 use-state-adv";
import UseStateAdvSpradeWithKey from "./2. Use State Hook/2.2 use-state-adv";
import UseStateAdvPrevState from "./2. Use State Hook/2.3 use-state-adv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*  React Basics Start */}
        {/*    <HelloWorld />*/}
            {/*  <ReactProps*/}
            {/*      data='This is prop data'*/}
            {/*      // name='name'*/}
            {/*  />*/}
            {/*  <ReactPropChildren data="This is children prop exmpl">*/}
            {/*      <p>*/}
            {/*          This is a child paragraph*/}
            {/*      </p>*/}
            {/*  </ReactPropChildren>*/}
            {/*  <ReactEvents />*/}
            {/*  <ReactPropsAdv { ...testData } />*/}
        {/*    React Basics End */}

      {/*    React Hooks Start */}
          {/*  React useState Hook */}
            {/*  <UseStateBasic />*/}
            {/*<UseStateAdv />*/}
            {/*<UseStateAdvSprade />*/}
            {/*<UseStateAdvSpradeWithKey />*/}
            {/*<UseStateAdvPrevState />*/}

          {/*  React useEffect Hook */}
      {/*    React Hooks End */}
      </header>
    </div>
  );
}

export default App;
